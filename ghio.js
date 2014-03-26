var Ghio = Ghio || {};
Ghio = function () {
    'use strict';
    function convert(url) {
        if (false === _validUrl(url)) {
            throw 'invalid url: ' + url;
        }
        var urlParsed = _urlParser(url);
        if (urlParsed.hostname === 'github.com') {
            return repoToIo(urlParsed);
        }
        return _ioToRepo(urlParsed);
    }
    function repoToIo(urlParsed) {
        var urlSegments = urlParsed.pathname.split('/');
        if (_endsWith('.github.io', urlParsed.pathname) || _endsWith('.github.com', urlParsed.pathname)) {
            return _ensureTrailingSlash(_repoToIoMain(urlSegments));
        }
        return _ensureTrailingSlash(_repoToIoSub(urlSegments));
    }
    function _repoToIoMain(urlSegments) {
        var io = '';
        io = 'http://' + io + urlSegments.pop();
        if (_endsWith('.com', io) ) {
            io = _replaceLastMatch('.com', '.io', io);
        }
        return io;
    }
    function _repoToIoSub(urlSegments) {
        var io = '';
        io = 'http://' + io + urlSegments[1] + '.github.io/' + urlSegments[2] + '/';
        return io;
    }
    function _ioToRepo(urlParsed) {
        if (urlParsed.pathname === '' || urlParsed.pathname === '/') {
            return _ioMainToRepo(urlParsed);
        }
        return _ioSubToRepo(urlParsed);
    }
    function _ioMainToRepo(urlParsed) {
        var repo = '';
        var paths = urlParsed.hostname.split('.');
        repo = 'https://github.com/' + paths[0] + '/' + urlParsed.hostname;
        return repo;
    }
    function _ioSubToRepo(urlParsed) {
        var repo = '';
        repo = 'https://github.com/' + urlParsed.hostname.split('.')[0] + '/' + urlParsed.pathname.split('/')[1];
        return repo;
    }
    function _validUrl(str) {
        var pattern = new RegExp('^(https?:\\/\\/)?' + '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + '((\\d{1,3}\\.){3}\\d{1,3}))' + '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + '(\\?[;&a-z\\d%_.~+=-]*)?' + '(\\#[-a-z\\d_]*)?$', 'i');
        if (!pattern.test(str)) {
            return false;
        }
        return true;
    }
    function _urlParser(url) {
        var urlParseRegex = /^(((([^:\/#\?]+:)?(?:(\/\/)((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/;
        var matches = urlParseRegex.exec(url);
        var urlParsed = {
                'protocol': matches[4],
                'hostname': matches[11],
                'port': matches[12],
                'pathname': matches[13],
                'search': matches[16],
                'hash': matches[17],
                'host': matches[10],
                'url': matches[0]
            };
        return urlParsed;
    }
    function _endsWith(suffix, str) {
        var lastIndex = str.lastIndexOf(suffix);
        return lastIndex !== -1 && lastIndex + suffix.length === str.length;
    }
    function _ensureTrailingSlash(str) {
        if (_endsWith('/', str)) {
            return str;
        }
        return str + '/';
    }
    function _replaceLastMatch(search, replace, str) {
        str = str.replace(new RegExp(search + '$'), replace);
        return str;
    }
    return { convert: convert };
}();