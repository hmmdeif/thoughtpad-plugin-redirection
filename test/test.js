var should = require('should'),
    app = require('./../src/main'),
    co = require('co'),
    fs = require('co-fs'),
    man = require('thoughtpad-plugin-manager'),
    path = require('path'),
    config = require('./example-config'),
    fw = require('thoughtpad-fileWriter'),
    thoughtpad;

describe("redirection plugin", function () {
    it("should write files to directory to redirect", function (done) {
        var res = false;
        thoughtpad = man.registerPlugins([app]);
        thoughtpad.config = config;
        thoughtpad.folders = {
            preout: path.normalize(__dirname + "/pre_out")
        };

        co(function *() {
            yield thoughtpad.notify("html-postcompile-all-request");
            res = yield fs.exists(__dirname + '/pre_out/somepage/somewhere/index.html');      
            res.should.be.true;
            yield fw.remakeDirectory(__dirname + '/pre_out/');
            done();
        })();
    });

    it("should create files containing redirection links", function (done) {
        var res = false;
        thoughtpad = man.registerPlugins([app]);
        thoughtpad.config = config;
        thoughtpad.folders = {
            preout: path.normalize(__dirname + "/pre_out")
        };

        co(function *() {
            yield thoughtpad.notify("html-postcompile-all-request");

            res = yield fs.readFile(__dirname + '/pre_out/somepage/somewhere/index.html', 'utf8');
            res.indexOf('/anotherpage/somewhere/else/').should.not.eql(-1);
            res = yield fs.readFile(__dirname + '/pre_out/somepage/somewhere2/index.html', 'utf8');
            res.indexOf('/anotherpage/somewhere/else2/').should.not.eql(-1);

            yield fw.remakeDirectory(__dirname + '/pre_out/');
            done();
        })();
    });
});
