"use strict"
const heroes = require("./heros_json.js");
const cloneObject = function(src) {
    var target = {};
    for (var entry in src) {
        if (src.hasOwnProperty(entry)) {
            target[entry] = src[entry];
        }
    }
    return target;
}
function Heros(){
	let All = cloneObject(heroes);
	function enroll(hero, legion){
		var model = cloneObject(All[hero]);
		model.legion = legion;
		All[hero] = model;
		return this;
	}
	function quit(hero){
		var model = cloneObject(All[hero]);
		model.legion = undefined;
		All[hero] = model;
		return this;
	}
	function extract(){
		return cloneObject(All);
	}

	return {
		enroll: enroll,
		quit: quit,
		extract: extract
	}
}

module.exports = Heros;