import { memo, useCallback, useMemo } from 'react';
import { Instance, types, flow } from "mobx-state-tree";
import { observer } from 'mobx-react-lite';
import { values } from 'mobx';
import styles from './index.module.less';
import { Button, Form, Input, Space, Table } from 'antd';
import { connectReduxDevtools } from 'mst-middlewares';
import { ColumnsType } from 'antd/lib/table';
import React from 'react';

let key = 1;
const randomKey = () => ++key;

const request = function (key: string) {
  return  new Promise(res => {
    setTimeout(() => {
      res('1');
    }, 3000);
  });
}

const User = types.model({
  key: types.identifierNumber,
  name: types.optional(types.string, "")
});

const UserStore = types.model({
  users: types.map(User),
}).actions(self => ({
  addUser(name: string) {
    const key = randomKey();
    self.users.set(key.toString(), { key, name })
  },
  deleteUser: flow(function* deleteUser(key: string) {
    // console.log(`start:`,);
    self.users.delete(key);
  }),
  fetchProjects: flow(function* (aaa: string) { // <- note the star, this a generator function!

  })
}))

const store = UserStore.create({
  users: {
    '1': {
      key,
      name: 'Leon'
    }
  }
})

// connectReduxDevtools(require("remotedev"), store);


function Users(props: any): JSX.Element {

  return (
    <div className={styles['users']}>
      <UserForm store={store} />
      <UserList store={store} />
    </div>
  );
}

export default memo(observer(Users));

const UserList = observer(({ store }: { store: Instance<typeof UserStore> }) => {
  console.log(`user list`);
  const columns: ColumnsType<any> = useMemo(() => ([
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '操作',
      key: 'action',
      render: (_, it) => (
        <Space size="middle">
          <a onClick={() => deleteUser(it.key)}>删除</a>
        </Space>
      ),
    },
  ]), []);

  const deleteUser = useCallback(key => {
    console.log(`key:`, key);
    store.deleteUser(key);
  }, []);

  const data = values(store.users);

  return (
    <div className={styles['list']}>
      <Table dataSource={data} columns={columns} pagination={false} />
    </div>
  );
});

const UserForm = observer(({ store }: { store: Instance<typeof UserStore> }) => {
  const [form] = Form.useForm();
  const save = (val: any) => {
    store.addUser(val.name);
    form.resetFields();
  };

  return (
    <div className={styles['form']}>
      <Form
        name="customized_form_controls"
        onFinish={save}
        layout="inline" form={form}>
        <Form.Item name="name" label="姓名" >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            添加
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
});