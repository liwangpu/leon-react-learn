import { withReducer } from '../../stores';
import { useSelector, useDispatch } from 'react-redux';
import reducer, { increment } from './counterStore';
import styles from './index.module.less';

function CounterByRedux() {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();
  const onIncrement = () => {
    dispatch(increment() as any);
  };
  return (
    <div className={styles['counter']}>
      <div className={styles['header']}>
        <button onClick={onIncrement}>点击</button>
      </div>
      <div className={styles['content']}>
        <p>当前点击了{count}次</p>
      </div>
    </div>
  );
}

export default withReducer("counter", reducer)(CounterByRedux);
