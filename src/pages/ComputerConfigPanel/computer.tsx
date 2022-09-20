import { useDispatch, useSelector } from 'react-redux';
import { updateComputer, selectComputers } from './computerStore';
import { ChangeEvent, memo, useMemo, useState } from 'react';
import * as _ from 'lodash';



function Computer(props: { computer: { id: string; title: string } }): JSX.Element {

  const [title, setTitle] = useState(props.computer.title);
  const dispatch = useDispatch();

  const updateToRedux = useMemo(
    () => _.debounce((value) => {
      dispatch(updateComputer({ id: props.computer.id, title: value }));
    }, 1000),
    []
  );
  // const titleChange = _.debounce(val => {
  //   console.log(`search:`, val);
  // }, 1000);

  const onTitleChange = (e: ChangeEvent<any>) => {
    const value = e.target.value;
    setTitle(value);
    updateToRedux(value);
  };

  const onTitleChangeToRedux = (e: ChangeEvent<any>) => {
    const value = e.target.value;
    dispatch(updateComputer({ id: props.computer.id, title: value }));
  };

  console.log(`computer render:`, props.computer.id);
  return (
    <div className='computer'>
      <div className="form-item">
        <label>ID</label>
        <span>{props.computer.id}</span>
      </div>
      <div className="form-item">
        <label>标题</label>
        {/* <input type="text" value={title} onChange={onTitleChange} /> */}

        <input type="text" value={props.computer.title} onChange={onTitleChangeToRedux} />
      </div>
    </div>
  );
}

// export default Computer;
export default memo(Computer);