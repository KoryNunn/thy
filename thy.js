var WeakMap = require('es6-weak-map');

module.exports = function createThy(){

    var thyStuff = new WeakMap();

    function thy(thyObject, data){
        if(data){
            thyStuff.set(thyObject, data);
        }

        if(thyStuff.has(thyObject)){
            return thyStuff.get(thyObject);
        }

        var thyThings = {};
        thyStuff.set(thyObject, thyThings);

        return thyThings;
    };

    return thy;
};