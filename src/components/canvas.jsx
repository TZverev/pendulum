import React, { useRef, useEffect } from 'react'
import Simulator from '@/functions/canvas.js';

const Canvas = ({ length, gravity, height }) => {
    const canvas = useRef(null);
    const simulator = useRef(null);

    useEffect(() => {
        if (simulator.current) {
            simulator.current.setParams(length, gravity, height)
        }
    }, [length, gravity, height])

    useEffect(() => {
        simulator.current = new Simulator(canvas, length, gravity, height);
        simulator.current.start();
    }, [])

    return (
        <canvas className='canvas'
            ref={canvas}
            width='1000'
            height='1000' />
    )
}

export default Canvas;