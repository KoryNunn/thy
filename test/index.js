var test = require('tape'),
    createThy = require('../');

test('get and set', function(t){

    t.plan(1);

    var thy = createThy(),
        instance = {};

    thy(instance).foo = 'bar';

    t.equal(thy(instance).foo, 'bar');
});

test('data is not shared', function(t){

    t.plan(3);

    var thy1 = createThy(),
        thy2 = createThy(),
        instance = {};

    thy1(instance).foo = 'bar';

    t.equal(thy1(instance).foo, 'bar');
    t.notOk('foo' in thy2(instance));
    t.equal(thy2(instance).foo, undefined);
});

test('non-object thows', function(t){

    t.plan(1);

    var thy = createThy();

    t.throws(function(){
        thy('fail');
    });
});

test('custom data', function(t){

    t.plan(1);

    var thy = createThy(),
        instance = {};

    thy(instance, []);

    thy(instance).push('bar');

    t.equal(thy(instance)[0], 'bar');

});

test('reset data', function(t){

    t.plan(2);

    var thy = createThy(),
        instance = {};

    thy(instance).foo = 'bar';

    t.equal(thy(instance).foo, 'bar');

    thy(instance, {});

    t.equal(thy(instance).foo, undefined);

});