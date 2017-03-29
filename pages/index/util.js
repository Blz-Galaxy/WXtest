module.exports = {
	realLength: function(){
		let l = 0;
		this.forEach(function(elem){
			if(elem) l++;
		});
		return l;
	}

}