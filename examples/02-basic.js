var testLayout = [
    {"x":0,"y":0,"w":2,"h":2,"i":"0"},
    {"x":2,"y":0,"w":2,"h":4,"i":"1"},
    {"x":4,"y":0,"w":2,"h":5,"i":"2"},
    {"x":6,"y":0,"w":2,"h":3,"i":"3"},
    {"x":8,"y":0,"w":2,"h":3,"i":"4"},
    {"x":10,"y":0,"w":2,"h":3,"i":"5"},
    {"x":0,"y":5,"w":2,"h":5,"i":"6"},
    {"x":2,"y":5,"w":2,"h":5,"i":"7"},
    {"x":4,"y":5,"w":2,"h":5,"i":"8"},
    {"x":6,"y":4,"w":2,"h":4,"i":"9"},
    {"x":8,"y":4,"w":2,"h":4,"i":"10"},
    {"x":10,"y":4,"w":2,"h":4,"i":"11"},
    {"x":0,"y":10,"w":2,"h":5,"i":"12"},
    {"x":2,"y":10,"w":2,"h":5,"i":"13"},
    {"x":4,"y":8,"w":2,"h":4,"i":"14"},
    {"x":6,"y":8,"w":2,"h":4,"i":"15"},
    {"x":8,"y":10,"w":2,"h":5,"i":"16"},
    {"x":10,"y":4,"w":2,"h":2,"i":"17"},
    {"x":0,"y":9,"w":2,"h":3,"i":"18"},
    {"x":2,"y":6,"w":2,"h":2,"i":"19"}
];

//var Vue = require('vue');

Vue.config.debug = true;
Vue.config.devtools = true;

var GridLayout = VueGridLayout.GridLayout;
var GridItem = VueGridLayout.GridItem;

new Vue({
    el: '#app',
    components: {
        GridLayout,
        GridItem,
    },
    data: {
        layout: testLayout,
        layouts: {lg: testLayout}
    },
});


function generateLayout() {
    return _.map(_.range(0, 25), function (item, i) {
        var y = Math.ceil(Math.random() * 4) + 1;
        return {
            x: _.random(0, 5) * 2 % 12,
            y: Math.floor(i / 6) * y,
            w: 2,
            h: y,
            i: i.toString(),
            static: Math.random() < 0.05
        };
    });
}


