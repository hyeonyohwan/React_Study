import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number); // useSelector는 상태를 조회한다.
  const dispatch = useDispatch(); // useDispatch는 액션을 생성한다.
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]); // dispatch - 액션을 발생시킨다.
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CounterContainer;
