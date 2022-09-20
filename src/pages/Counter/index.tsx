import { withReducer } from '../../reduxStore';
import { useSelector, useDispatch } from 'react-redux';
import store, { increment, selectCountValue, selectVender } from './counterStore';
import styles from './index.module.less';
import { useMemo } from 'react';

function CounterByRedux() {

  const count = useSelector(selectCountValue);
  const vender = useSelector(selectVender);
  const initialVender = useMemo(() => {
    console.log(`record:`, vender);
    return vender;
  }, []);
  const dispatch = useDispatch();
  const onIncrement = () => {
    dispatch(increment() as any);
  };
  const test = () => {
    // vender.phone = 'sdfdsdsf';
  };
  // console.log(`vender:`, initialVender, vender);
  // console.log(`eq:`, vender === initialVender);
  return (
    <div className={styles['counter']}>
      <div className={styles['header']}>
        <button onClick={onIncrement}>点击</button>
        <button onClick={test}>测试</button>
      </div>
      <div className={styles['content']}>
        <p>当前点击了{count}次</p>
      </div>
    </div>
  );
}

export default withReducer(store.name, store)(CounterByRedux);
