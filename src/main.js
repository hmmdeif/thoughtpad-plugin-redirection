var fs = require('thoughtpad-fileWriter');

var init = function (thoughtpad) {
    thoughtpad.subscribe("html-postcompile-all-request", createRedirections);
},

createRedirections = function *(obj) {
    var config = obj.thoughtpad.config,
        redirection;

    if (config.redirections) {
        for (redirection in config.redirections) {
            yield fs.writeFile(obj.thoughtpad.folders.preout + redirection + '/index.html', '<!DOCTYPE HTML><html><head><meta charset="UTF-8">' +
            '<meta http-equiv="refresh" content="1;url=' + config.redirections[redirection] + '">' +
            '<script type="text/javascript">window.location.href="' + config.redirections[redirection] + '"</script>' +
            '<title>Page Redirection</title></head><body>' +
            'If you are not redirected automatically, follow the <a href="' + config.redirections[redirection] + '">' + config.redirections[redirection] + '</a>' +
            '</body></html>', 'pre_out/');
        }
    }

};

module.exports = {
    init: init
};
