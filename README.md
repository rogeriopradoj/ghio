ghio
====

[![Build Status](https://travis-ci.org/rogeriopradoj/ghio.svg?branch=master)](https://travis-ci.org/rogeriopradoj/ghio)

Convert urls of github.io pages into urls of repositories and vice versa

Usage
-----

```html
    <!-- include script in your html -->
    <script src="ghio.js"></script>
    <!-- maybe use this tag for testing: <script src="https://raw.github.com/rogeriopradoj/ghio.js/master/ghio.js"></script> -->

    <script>
        // main github.io to repo
        var io            = 'http://adobe.github.io/';
        var repo          = Ghio.convert(io);
        console.log("Io: %s, Repo: %s", io, repo); // should print Io: http://adobe.github.io/, Repo: https://github.com/adobe/adobe.github.io in your browser log

    </script>
```

Package Managers
----------------

* [Composer](http://packagist.org/packages/rogeriopradoj/ghio.js): `rogeriopradoj/ghio.js`
* [Bower](http://bower.io/search/?q=ghio): `ghio`

Testing
-------

It's using [QUnit](https://qunitjs.com/) for testing.

Just open `test.html` in your browser to see the magic taking place.

Changelog
---------

### 0.1.0 - 2014-03-26

* First public version


License
-------
MIT
