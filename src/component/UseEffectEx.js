// Mount 화면에 첫 렌더링
// Update 다시 렌더링
// Unmount 화면에서 사라질때
// useEffect()
// 1. useEffect(() => {})   //렌더링 될때마다 실행
// 2. useEffect(() => {//작업...}, [value]);    //화면에 첫 렌더링될때, value값이 바뀔때 실행

import React, { useEffect, useState } from "react";

export default function UseEffectEx() {
    // variable
    const [count, setCount] = useState(1);
    const [name, setName] = useState("");

    // function
    const handleCountUpdate = () => {
        setCount(count + 1);
    };
    const handeInputChange = e => {
        setName(e.target.value);
    };

    // // 마운팅 될때만 실행.
    // useEffect(() => {
    //     console.log("test");
    // }, []);

    // // 렌더링 될때마다 매번 실행됨.
    // useEffect(() => {
    //     console.log("test");
    // });

    // count가 변경될때만 실행 실행됨.
    useEffect(() => {
        console.log("test");
    }, [count]);

    return (
        <div>
            <button onClick={handleCountUpdate}>Update</button>
            <span>count: {count}</span>
            <input type="text" value={name} onChange={handeInputChange} />
            <span>name:{name}</span>
        </div>
    );
}
