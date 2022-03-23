import React, { useRef, useState } from "react";

export default function UseStateEx() {
    const [time, setTime] = useState(1);
    const [upload, setUplosd] = useState([]);

    const handleClick = () => {
        let newTime;
        if (time >= 12) {
            newTime = 1;
        } else {
            newTime = time + 1;
        }
        setTime(newTime);
    };

    const txtOnChanage = e => {
        console.log(e.target.value);
        here.current.value = e.target.value;
        // here = ref.current.value;
    };

    const here = useRef();

    // const ref = useRef(null);

    return (
        <div>
            <h1>UseEffectEx</h1>
            <span>현재 시각 : {time}시</span>
            <button onClick={handleClick}>Update</button>
            <p>
                <input type="text" onChange={txtOnChanage} />
            </p>
            <p>
                <input id="i" type="text" ref={here} />
            </p>
        </div>
    );
}
