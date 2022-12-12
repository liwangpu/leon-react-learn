import { Instance, types, getParent, getRoot } from 'mobx-state-tree';

const AnimalModel = types.model({
  id: types.string,
  name: types.string
});

export const AnimalStore = types.model({
  animals: types.map(AnimalModel)
}).actions(self => ({

  doTask: () => {
    const pa = getRoot(self);
    // pa.studentStore
  }
}));