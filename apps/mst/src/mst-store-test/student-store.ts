import { Instance, types } from 'mobx-state-tree';

const StudentModel = types.model({
  id: types.string,
  name: types.string
});

export const StudentStore = types.model({
  student: types.map(StudentModel)
});