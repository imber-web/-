import { useEffect, useRef } from 'react';

export function useInterval(callback: () => void, delay: number | null) {//自定义hooks
    const savedCallback = useRef<any>(null);

    useEffect(() => {
        savedCallback.current = callback;
    });//没有指定【】,所以每次更新都会执行

    useEffect(() => {
        const tick = () => {
            savedCallback.current();
        };
        if (delay !== null) {
            const id = setInterval(tick, delay || 0);
            return () => clearInterval(id);//卸载时触发
        }else{
            return
        }
    }, [delay]);//监听delay
}
