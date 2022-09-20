import { useDispatch, useSelector } from 'react-redux';
import { addComputer, selectComputers } from './computerStore';
import { Button } from 'antd';
import { faker } from '@faker-js/faker';

export default function Computer(props: any): JSX.Element {
  const computers = useSelector(selectComputers);
  const computerIds = computers ? Object.keys(computers) : [];
  const dispatch = useDispatch();
  // const computers = useSelector(selectComputers);
  // const computerIds = computers ? Object.keys(computers) : [];
  // console.log(`computers:`, computerIds);


  const onAddComputer = () => {
    dispatch(addComputer(faker.datatype.uuid()));
  };

  // console.log(`computer basic render:`,);
  // const computerBasicItems = () => {
  //   return computerIds.map(id => computers[id]).map(cfg => (
  //     <div key={cfg.id} className={styles['basic-item']}>
  //       <p>ID:{cfg.id}</p>
  //       {/* <p>标题:{cfg.title}</p> */}
  //     </div>
  //   ))
  // };

  return (
    <div className='computer'>
      {/* <div className={styles['header']}>
        <span>电脑基础信息</span>
        <Button type="primary" onClick={onAddComputer}>添加电脑</Button>
      </div>
      <div className={styles['content']}>
        {computerBasicItems()}
      </div> */}
    </div>
  );
}