import React from 'react'
import { useEffect } from 'react';

const Timer = () => {
    useEffect(() => {
        const timer = setInterval(() => {
            console.log('타이머 돌아가는중...');
        }, 1000);
        return () => {  // unmount될때 실행됨.
            clearInterval(timer);
            console.log('타이머가 종료되었습니다.');
        }
    },[]);
    return (
        <div>
            타이머를 시작합니다. 콘솔을 보세요!
        </div>
    )
}

export default Timer;
