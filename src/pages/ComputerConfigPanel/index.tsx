import { faker } from '@faker-js/faker';
import { withReducer } from '../../reduxStore';
import { useSelector, useDispatch } from 'react-redux';
import styles from './index.module.less';
import { store, selectComputers, selectVersion, setVerion } from './computerStore';
import Computer from './computer';
import { memo } from 'react';

function ComputerConfigPanel(props: any): JSX.Element {

  const computers = useSelector(selectComputers);

  const computerItems = () => {
    return computers.map(c => (
      <Computer key={c.id} computer={c} />
    ))
  };

  return (
    <div className={styles['computer-config-panel']}>
      <Version />
      {computerItems()}
    </div>
  );
}

function Version(props: any) {
  const version = useSelector(selectVersion);
  const dispatch = useDispatch();
  const changeVersion = () => {
    dispatch(setVerion(faker.datatype.uuid()));
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {/* <p>版本:{version}</p>
      <Button type="primary" onClick={changeVersion}>修改版本</Button> */}
    </div>
  );
}

export default withReducer(store.name, store)(ComputerConfigPanel);