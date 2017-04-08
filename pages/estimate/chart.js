

const chart = function(id, options){
	this.ctx = wx.createCanvasContext(id);
	this._init(options);
}

chart.prototype._init = function(options){
	const ct = this;
	ct._saveOptions(options);
	ct._drawBackground();
}
chart.prototype._saveOptions = function(options){
	this.width = options.width;
	this.height = options.height;
}

chart.prototype._drawBackground = function(){
	const ct = this;
	const ctx = ct.ctx;
	const grd = ctx.createLinearGradient(0, 0, ct.width, 0);
	grd.addColorStop(0, '#C02425');
	grd.addColorStop(0.4, '#F0CB35');
	grd.addColorStop(0.6, '#56ab2f');
	grd.addColorStop(1, '#a8e063');
	ctx.save();
	ctx.setFillStyle(grd);
	ctx.fillRect(0, 20, ct.width, 60);
	ctx.draw();
	ctx.restore();
}

module.exports = chart;