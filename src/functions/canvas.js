const drow = (canv, int, length, gravity, angle0, step) => {
    const canvas = canv.current;
    const ctx = canvas.getContext('2d');
    let prev = 0;

    const start = (length, gravity, angle0, step, callback) => {
        let speed = 0;
        let angle = angle0;
        let k = - gravity / length;
        let sec = step / 1000;
        return setInterval(() => {
            let acceleration = k * Math.sin(angle);
            speed += acceleration * sec;
            angle += speed * sec;
            callback(angle);
        }, step);
    }

    const build = (angle) => {
        let size = Math.min(canvas.width, canvas.height);
        let line = size * (length / 2);
        let ball = size * 0.024;
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "black";
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate(angle);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, line);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(0, line, ball, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.restore();
        prev = angle;
    }

    int.current = start(length, gravity, angle0, step, build)

}


export default drow;