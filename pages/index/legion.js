"use strict"
const util = require("./util");

const EXCEPTION = {
	HeroLegionException: 0,
	TypeExceiption: 1
}

function HeroLegionException(msg){
	this.message = msg;
	this.code = EXCEPTION.HeroLegionException;
}

function TypeExceiption(msg){
	this.message = msg;
	this.code = EXCEPTION.HeroLegionException;
}

function Legion(num){
	let legion = [];
	let realLength = util.realLength;
	function push(obj){
		let len = realLength.call(legion);
		if(typeof obj !== "string")
			throw new TypeExceiption('need string');
		if(len >= num) 
			throw new HeroLegionException('no more spaces');
		legion.push(obj);
		
		console.log(`add a hero ${obj}, now we have ${legion}`);
		return this;
	}
	function has(obj){
		return legion.some((elem) => elem === obj);
	}
	function get(idx){
		let len = realLength.call(legion);
		if(typeof idx !== "number")
			throw new TypeExceiption('need number');
		if(idx > len-1)
			throw new HeroLegionException('Index Out Of Bounds');

		return legion[idx];
	}

	function del(property){
		let index = legion.indexOf(property);
		if(index === -1)
			return false;

		legion.splice(index, 1);
		console.log(`remove a hero ${property}, now we have ${legion}`);
		return true;
	}

	function compareTo(legion_old){
		if(realLength.call(legion_old) !== legion.length) return true;
		return legion_old.some((elem) => !has(elem));
	}

	function clear(){
		legion = [];
		return this;
	}

	return  {
		length: function(){return legion.length},
		push: push,
		get: get,
		del: del,
		has: has,
		clear: clear,
		compareTo: compareTo,
		getLegionCloned: function(){
			return Array.prototype.slice.call(legion);
		},
		getLegion: function(){
			let a = Array.prototype.slice.call(legion);
			if(num>a.length){
	            let gap = num - a.length;
	            for(let i = 1; i<= gap; i++){
	                a.push(undefined);
	            }
	        }
	        return a;
		}
	}
}

module.exports = Legion;

// test cases
/*let p = Legion(5);

console.log(p instanceof Array);
p.push('AXE');
console.log(p.has('AXE'));
p.push('VIPER');
p.push('CRYSTAL MAID');
p.push('SAND KING');
p.del('VIPER');
console.log(p.getLegion());
p.push('TIDE HUNTER');
console.log(p.get(0));
*/

