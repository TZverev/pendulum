
function Simulator(canv, length, gravity, startAngle) {
    this.canvas = canv.current;
    this.ctx = this.canvas.getContext('2d');
    this.prevTimestamp = 0
    const setParams = (length, gravity, startAngle) => {
        this.length = length;
        this.gravity = gravity;
        this.startAngle = startAngle;
        this.speed = 0;
        this.angle = startAngle;
        this.k = - gravity / length;
    }

    const start = () => {
        window.requestAnimationFrame(draw);
    }

    const draw = (timestamp) => {
        let acceleration = this.k * Math.sin(this.angle);
        let deltaT = (timestamp - this.prevTimestamp) / 1000;
        this.prevTimestamp = timestamp;
        this.speed += acceleration * deltaT;
        this.angle += this.speed * deltaT;
        console.log(timestamp)
        build(this.angle);
        window.requestAnimationFrame(draw);
    }

    const build = (angle) => {
        let size = Math.min(this.canvas.width, this.canvas.height);
        let line = size * (this.length / 2);
        let ball = size * 0.024;
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = "black";
        this.ctx.save();
        this.ctx.translate(this.canvas.width / 2, this.canvas.height / 2);
        this.ctx.rotate(angle);
        this.ctx.beginPath();
        this.ctx.moveTo(0, 0);
        this.ctx.lineTo(0, line);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.arc(0, line, ball, 0, Math.PI * 2, false);
        this.ctx.fill();
        this.ctx.restore();
    }
    setParams(length, gravity, startAngle);

    return {
        start,
        setParams
    }
}


export default Simulator;