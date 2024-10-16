import { useReducer } from 'react';

export default function Reducer() {
  const [number, dispatch] = useReducer(reducer, { count: 0 });

  function reducer(state, action) {
    switch (action.type) {
      // action의 type이 "decrement"일 때, 현재 state에서 1을 뺀 값을 반환함
      case 'decrement':
        return { count: state.count - 1 };
      // action의 type이 "increment"일 때, 현재 state에서 1을 더한 값을 반환함
      case 'increment':
        return { count: state.count + 1 };
      // 정의되지 않은 action type이 넘어왔을 때는 에러를 발생시킴
      default:
        throw new Error('Unsupported action type:', action.type);
    }
  }

  return (
    <>
      {/* 현재 카운트 값은 state인 number 객체의 count로부터 읽어옴 */}
      <h1>Count: {number.count}</h1>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
}
