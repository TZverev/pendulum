import React, { useRef, useEffect } from 'react'
import drow from '@/functions/canvas.js';

const Canvas = ({ length, gravity, height }) => {
    const canvas = useRef(null);
    const int = useRef(null);
    useEffect(() => {
        clearInterval(int.current)
        drow(canvas, int, length, gravity, height, 10)
    }, [length, gravity, height])
    return (
        <canvas className='canvas'
            ref={canvas}
            width='1000'
            height='1000' />
    )
}

export default Canvas;