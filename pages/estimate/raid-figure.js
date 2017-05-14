const util = require("./util");
const classes = ["核心","爆发","辅助","控制","打野","耐久","逃生","推进","先手"];

function calcAngle(i, n){
	let angle = (360 / n) * (i) * Math.PI / 180;
	return  angle - Math.PI/2;
}

module.exports = class raid{
	constructor(option){
		this.ctx = wx.createCanvasContext(option.el);
		this.center = option.center;
		this.data = option.data;
		this.n = 9;
		this.r = 50;
	}

	draw(){
		const ctx = this.ctx;
		ctx.setStrokeStyle("white");
		ctx.setFillStyle("white");
		ctx.setFontSize(8);
		this.drawPolygon(this.r/2);
		this.drawPolygon(this.r, true);
		this.drawData();
		ctx.draw();

	}

	drawData(){
		const ctx = this.ctx;
		const center = this.center;
		const n = this.n;
		const r = this.r;
		const data = this.data;
		let angle, actangle, x, y, z;
		let end = [];
		for(let i=0;i<n;i++){
			actangle = calcAngle(i, n);
			z = data[i]/5*r;
			x = Math.cos(actangle) * z;
			y = Math.sin(actangle) * z;
			end.push({x: x, y: y, z: z});
		}

		let timeall = 600;
		let startTime = Date.now();
		let last_now = startTime;
		let targetTime = last_now + timeall;
		let easeOut = util.easeOutQuart;
		console.log(end)
		function drawPolygon(t){

			let s = easeOut(t);
			let pt = end[n-1];
			ctx.beginPath();
			ctx.moveTo(center.x + pt.x*s, center.y + pt.y*s);
			for(let i=0;i<n;i++){
				pt = end[i];
				ctx.lineTo(center.x + pt.x*s, center.y + pt.y*s);
			}
			ctx.closePath();
			ctx.stroke();
		}

		function animatePolygon(){
			if(last_now > targetTime) {
				
				return
			}
			setTimeout(()=>{
				let now = Date.now();
				let t = (now - startTime) / timeall;
				drawPolygon(t);

				that.setData({
					runningScore: s.toFixed(2)
				});
				last_now = now;
				changeScore();
			});
		}

		drawPolygon(1);
	}

	drawPolygon(r, withEdge){
		const ctx = this.ctx;
		const center = this.center;
		const n = this.n;
		ctx.beginPath();
		
		let angle, actangle, x, y; 

		
		actangle = calcAngle(n-1, n);
		x = Math.cos(actangle) * r;
		y = Math.sin(actangle) * r;
		ctx.moveTo(center.x + x, center.y + y);

		for(let i=0;i<n;i++){
			
			actangle = calcAngle(i, n);
			x = Math.cos(actangle) * r;
			y = Math.sin(actangle) * r;

			ctx.lineTo(center.x + x, center.y + y);
			if(withEdge){
				ctx.fillText(classes[i], 
					center.x + Math.cos(actangle) * (r+12)-8, 
					center.y + Math.sin(actangle) * (r+12)+4)
				ctx.lineTo(center.x, center.y);
				ctx.moveTo(center.x + x, center.y + y);
			}
		}
		ctx.closePath();
		ctx.stroke();
	}
}