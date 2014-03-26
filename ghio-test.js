test('Ghio.convert()', function() {
    deepEqual(Ghio.convert('http://adobe.github.io/'), 'https://github.com/adobe/adobe.github.io', 'io -> repo.io');
    deepEqual(Ghio.convert('https://github.com/adobe/adobe.github.io'), 'http://adobe.github.io/', 'repo.io -> io');
    deepEqual(Ghio.convert('https://github.com/saiadecasa/saiadecasa.github.io'), 'http://saiadecasa.github.io/', 'repo.io -> io');
    deepEqual(Ghio.convert('https://github.com/PHPSP/phpsp.github.com'), 'http://phpsp.github.io/', 'repo.com -> io');
    deepEqual(Ghio.convert('https://github.com/harvesthq/chosen'), 'http://harvesthq.github.io/chosen/', 'sub repo -> io/sub');
    deepEqual(Ghio.convert('http://saiadecasa.github.io/'), 'https://github.com/saiadecasa/saiadecasa.github.io', 'io -> repo.io');
    deepEqual(Ghio.convert('http://harvesthq.github.io/chosen'), 'https://github.com/harvesthq/chosen', 'io/sub -> sub repo');
    //deepEqual(Ghio.convert('http://phpsp.github.io/'), 'https://github.com/PHPSP/phpsp.github.com', 'io -> repo.com');
});
