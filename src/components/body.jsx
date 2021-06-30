import React, { useState } from 'react';
import Canvas from './canvas.jsx';
import Settings from './settings.jsx';


const Body = () => {
    const [length, setLength] = useState(0.5);
    const [gravity, setGravity] = useState(9.80665);
    const [height, setHeight] = useState(Math.PI * 0.5);
    return (
        <div className='body'>
            <Canvas
                length={length}
                gravity={gravity}
                height={height} />
            <Settings
                length={length}
                gravity={gravity}
                height={height}
                setLength={setLength}
                setGravity={setGravity}
                setHeight={setHeight} />
        </div>
    )
}

export default Body;