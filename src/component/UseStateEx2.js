import React, { useRef, useState } from "react";

const heavyWork = () => {
    console.log("엄청 무거운 작업!!");
    return ["홍길동", "김민수"];
};

export default function UseStateEx2() {
    const [names, setNames] = useState(() => {
        return heavyWork();
    });
    const [input, setInput] = useState("");

    const handleInputChanage = e => {
        setInput(e.target.value);
        console.log(input);
    };

    const handleUpload = () => {
        setNames(prevState => {
            return [input, ...prevState];
        });
        console.log(names);
    };

    return (
        <div>
            <p>
                <input type="text" onChange={handleInputChanage} />
            </p>
            <button onClick={handleUpload}>UpLoad</button>
            {names.map((name, idx) => (
                <p key={idx}>{name}</p>
            ))}
        </div>
    );
}
