import { autorun, reaction } from 'mobx';
import { Instance, types } from 'mobx-state-tree';

interface IStudent {
  id: string;
  name: string;
  age: number;
}

const Student = types.custom<IStudent, IStudent>({
  name: 'Student',
  fromSnapshot(value: IStudent) {
    return value;
  },
  toSnapshot(value: IStudent) {
    return value;
  },
  isTargetType(value: IStudent): boolean {
    return true;
  },
  getValidationMessage(value: IStudent): string {
    return null;
  }
});

const Student1 = types.model({
  id: types.string,
  name: types.string,
  age: types.number
});

export const StudentStore = types.model({
  students: types.map(Student1),
  // ComponentConfigurationValidateErrors: types.map(ComponentConfigurationValidateErrors),
})
  .views(self => ({
    getStudent: (id: string) => {
      return self.students.get(id);
    }
  }))
  .actions(self => ({
    // setComponentConfigurationValidates: (results: [string, IComponentConfigurationValidatedError[]][]) => {
    //   self.ComponentConfigurationValidateErrors.clear();
    //   results.forEach(([id, errors]) => {
    //     self.ComponentConfigurationValidateErrors.set(id, errors);
    //   });
    // }
    setName: (id: string, name: string) => {
      let student =self.students.get(id);
      student.name = name;

      // let student = { ...self.students.get(id) };
      // student.name = name;
      // self.students.set(id, student);
    },
  }));


const studentStore = StudentStore.create({
  students: {
    'a1': {
      id: 'a1',
      name: 'bob',
      age: 18
    }
  }
});



reaction(() => {
  const studentA1 = studentStore.getStudent('a1');
  // console.log(`student:`, studentA1.age);
  return { ...studentA1 };
}, data => {
  console.log(`student:`, data);
});

// studentStore.getStudent();

setTimeout(() => {
  studentStore.setName('a1', 'bob1');
  console.log(`setting finish 1`,);
}, 1000);


setTimeout(() => {
  studentStore.setName('a1', 'bob1');
  console.log(`setting finish 2`,);
}, 2000);
