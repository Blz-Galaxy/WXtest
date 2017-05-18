const util = require("./util");
const classes = ["核心","爆发","辅助","控制","打野","耐久","逃生","推进","先手"];
const heros_json = require("../index/heros_json")

function calcAngle(i, n){
	let angle = (360 / n) * (i) * Math.PI / 180;
	return  angle - Math.PI/2;
}
function initData(heros){
	console.log(heros)
	let data = [0,0,0,0,0,0,0,0,0];
	heros.forEach((hero)=>{
		let h = heros_json[hero]
		console.log(h);
		if(!h){
			return;
		}
		classes.forEach((pos, idx) => {
			if(h.position[pos]){
				let t = data[idx] + h.position[pos];
				data[idx] = t>5?5:t;
			}
		})
	});
	console.log(data);
	return data;
}

module.exports = class raid{
	constructor(option){
		this.el = option.el;
		this.ctx = wx.createCanvasContext(option.el);
		this.center = option.center;
		this.data = initData(option.data);
		this.color = option.color;
		this.n = 9;
		this.r = 50;
	}

	draw(){
		const ctx = this.ctx;
		this.drawPolygon(this.r/2);
		this.drawPolygon(this.r, true);
		ctx.draw();
	}

	drawData(){

		const ctx = this.ctx;
		const center = this.center;
		const n = this.n;
		const r = this.r;
		const data = this.data;
		const that = this;
		let angle, actangle, x, y, z;
		let end = [];
		for(let i=0;i<n;i++){
			actangle = calcAngle(i, n);
			z = data[i]/5*r;
			x = Math.cos(actangle) * z;
			y = Math.sin(actangle) * z;
			end.push({x: x, y: y, z: z});
		}


		wx.canvasToTempFilePath({
		  canvasId: that.el,
		  success: function(res) {
		    console.log(res.tempFilePath)
		    animatePolygon(res.tempFilePaths)
		   
		  } 
		})

		let timeall = 3000;
		let startTime = Date.now();
		let last_now = startTime;
		let targetTime = last_now + timeall;
		let easeOut = util.easeOutQuart;
		console.log(end)
		function drawPolygon(t, pic){
			ctx.setStrokeStyle("white");
			ctx.setFillStyle("white");
			ctx.setFontSize(8);
			ctx.setLineWidth(1);
			that.drawPolygon(that.r/2);
			that.drawPolygon(that.r, true);

			ctx.setStrokeStyle(that.color);
			ctx.setFillStyle(that.color);
			ctx.setLineWidth(2);
			ctx.setFontSize(8);
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
			ctx.draw()
		}

		function animatePolygon(pic){
			if(last_now > targetTime) {
				return
			}
			setTimeout(()=>{
				let now = Date.now();
				let t = (now - startTime) / timeall;
				t = t > 1? 1:t;
				drawPolygon(t, pic);
				last_now = now;
				animatePolygon(pic);
			},16);
		}
		//animatePolygon();
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