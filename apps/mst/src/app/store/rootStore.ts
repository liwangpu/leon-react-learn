import { types, getSnapshot } from "mobx-state-tree";

const User = types.model({
  name: types.optional(types.string, "")
})

const RootStore = types.model({
  users: types.map(User),
})

const store = RootStore.create({
  users: {}
});

