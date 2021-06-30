import React from 'react';

const Settings = ({ length, gravity, height, setLength, setGravity, setHeight }) => {
    return (
        <div className='settings'>
            <label htmlFor='length'>
                Длина подвески:
            </label>
            <input
                step='any'
                min='0.1'
                max='1'
                id='length'
                type='range'
                value={length}
                onChange={(e) => { setLength(e.target.value) }} />
            <label htmlFor='gravity'>
                Сила притяжения:
            </label>
            <input
                step='any'
                min='0'
                max='20'
                id='gravity'
                type='range'
                value={gravity}
                onChange={(e) => { setGravity(e.target.value) }} />
            <label htmlFor='height'>
                Высота:
            </label>
            <input
                step='any'
                min='0'
                max='1'
                id='height'
                type='range'
                value={height / Math.PI}
                onChange={(e) => { setHeight(Math.PI * e.target.value) }} />
        </div>
    );
};

export default Settings;