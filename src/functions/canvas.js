
function Simulator(canv, length, gravity, startAngle) {
    this.canvas = canv.current;
    this.ctx = this.canvas.getContext('2d');
    this.prevTimestamp = 0;
    this.deltaT = 16
    const setParams = (length, gravity, startAngle) => {
        this.length = length;
        this.gravity = gravity;
        this.startAngle = startAngle;
        this.speed = 0;
        this.angle = startAngle;
        this.k = - gravity / length;
    }

    const start = () => {
        this.interval = setInterval(draw, this.deltaT);
    };

    const destroy = () => {
        if (this.interval) {
            clearInterval(this.interval);
        };
    };

    const draw = () => {
        let acceleration = this.k * Math.sin(this.angle);
        let deltaTsec = this.deltaT / 1000;
        this.speed += acceleration * deltaTsec;
        this.angle += this.speed * deltaTsec;
        build(this.angle);
    };

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
        setParams,
        destroy
    };
};


export default Simulator;