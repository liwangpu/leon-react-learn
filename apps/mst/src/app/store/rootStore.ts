import { types, getSnapshot } from "mobx-state-tree";
import { connectReduxDevtools } from 'mst-middlewares';

const AppInfo = types.model({
  id: types.identifier,
  version: types.optional(types.string, "")
});

export const RootStore = types.model({
  appInfo: types.optional(AppInfo, { id: 'a', version: 'xxx' }),
});


export const rootStore = RootStore.create();

connectReduxDevtools(require("remotedev"), rootStore);
