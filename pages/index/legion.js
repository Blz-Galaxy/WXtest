
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
	/*	;*/
	function push(obj){
		let len = realLength.call(legion);
		if(typeof obj !== "string")
			throw new TypeExceiption('need string');
		if(len >= num) 
			throw new HeroLegionException('no more spaces');
		legion.push(obj);
		
		console.log(`add a hero ${obj}, now we have ${legion}`);
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

		legion.splice(index-1, 1);
		console.log(`remove a hero ${property}, now we have ${legion}`);
		return true;
	}

	let obj = Object.create(Array.prototype)
	Object.assign(obj, {
		length: realLength.call(legion),
		push: push,
		get: get,
		del: del,
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
	});

	return obj;
}

module.exports = Legion;

// test cases
let p = Legion(5);

console.log(p instanceof Array);
p.push('AXE');
p.push('VIPER');
p.push('CRYSTAL MAID');
p.push('SAND KING');
p.del('VIPER');
console.log(p.getLegion());
p.push('TIDE HUNTER');
console.log(p.get(0))

