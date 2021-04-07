var global = Function('return this')();

global.exampleObj = {
    name: 'Joker',
    setName: function (params) {
        global.exampleObj.name = 'Modified';
    },
};

module.exports = global.exampleObj;