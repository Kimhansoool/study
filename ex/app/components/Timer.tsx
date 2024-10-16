import { useState, useEffect } from 'react';

export default function Timer(props: React.ReactNode) {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('타이머 돌아가는 중...');
    }, 1000);

    return () => {
      clearInterval(timer); // 타이머 clean-up
    };
  }, []);

  return (
    <div>
      <span>타이머를 시작합니다. 콘솔을 보세요!</span>
    </div>
  );
}
