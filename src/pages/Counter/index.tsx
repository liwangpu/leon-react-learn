import { withReducer } from '../../reduxStore';
import { useSelector, useDispatch } from 'react-redux';
import store, { increment } from './counterStore';
import styles from './index.module.less';

function CounterByRedux() {
  const count = useSelector((state: any) => state.counter?.value);
  // const count=0;
  const dispatch = useDispatch();
  const onIncrement = () => {
    dispatch(increment() as any);
  };
  const test = () => {
    console.log(`title:`, store.getInitialState());
  };
  return (
    <div className={styles['counter']}>
      <div className={styles['header']}>
        <button onClick={onIncrement}>点击</button>
        {/* <button onClick={test}>测试</button> */}
      </div>
      <div className={styles['content']}>
        <p>当前点击了{count}次</p>
      </div>
    </div>
  );
}

export default withReducer(store.name, store)(CounterByRedux);
