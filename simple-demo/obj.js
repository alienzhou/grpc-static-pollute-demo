var global = Function('return this')();

global.exampleObj = {
    name: 'AlienZHOU',
    setName: function (params) {
        global.exampleObj.name = 'Modified';
    },
};

module.exports = global.exampleObj;