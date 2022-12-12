import { Instance, types } from 'mobx-state-tree';
import { AnimalStore } from './animal-store';
import { StudentStore } from './custom';

export const TotalStore = types.model({
  animalStore: AnimalStore,
  studentStore: StudentStore
});