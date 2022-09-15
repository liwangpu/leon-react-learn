// import { Action, CombinedState, combineReducers, configureStore, ConfigureStoreOptions, createReducer, EnhancedStore, Reducer, ReducersMapObject, Slice } from '@reduxjs/toolkit';

// type PartialConfigureStoreOptions = { [P in keyof ConfigureStoreOptions]?: ConfigureStoreOptions[P] };

// export interface EnhancedStoreExtension extends EnhancedStore {
//   storeManager: StoreManager;
// };

// export class StoreManager {

//   protected static instance: StoreManager;
//   protected store: EnhancedStore;
//   protected reducers: { [key: string]: Reducer } = {};
//   protected combinedReducer: Reducer<CombinedState<any>>;
//   protected keysToRemove: string[] = [];
//   protected constructor() { }

//   static getInstance(): StoreManager {
//     if (!this.instance) {
//       this.instance = new StoreManager();
//     }
//     return this.instance;
//   }

//   createStore(options: PartialConfigureStoreOptions = {}): EnhancedStoreExtension {
//     if (!this.store) {
//       if (!options.reducer) {
//         this.reducers = {
//           root: (state: any, action: Action) => {
//             // console.log(`reduce:`, state, action);
//             return state || {};
//           }
//         };
//         this.generateCombineReducer();
//         options.reducer = this.reduce.bind(this);
//       }

//       this.store = configureStore(options as any);
//       this.store['storeManager'] = this;
//     }
//     return this.store as any;
//   }

//   getReducerMap(): ReducersMapObject {
//     return this.reducers;
//   }

//   reduce(state, action) {
//     // If any reducers have been removed, clean up their state first
//     console.log(`a:`, state, action,this.getReducerMap());
//     if (this.keysToRemove.length > 0) {
//       state = { ...state }
//       for (let key of this.keysToRemove) {
//         delete state[key];
//       }
//       this.keysToRemove = []
//     }

//     // Delegate to the combined reducer
//     return this.combinedReducer(state, action);
//   }

//   add(key: string, storeSlice: Slice): void {
//     if (!key || this.reducers[key]) {
//       return;
//     }
//     this.reducers[key] = storeSlice.reducer;
//     this.generateCombineReducer();
//     console.log(`getState:`,this.store.getState());
//   }

//   remove(key: string): void {
//     console.log(`remove:`,key);
//     if (!key || !this.reducers[key]) {
//       return;
//     }
//     delete this.reducers[key];
//     this.keysToRemove.push(key);
//     this.generateCombineReducer();
//   }

//   protected generateCombineReducer(): void {
//     this.combinedReducer = combineReducers(this.reducers)
//   }

// }
export const t1 = 1;