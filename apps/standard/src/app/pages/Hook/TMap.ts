
import { isFunction } from 'lodash';
import { flow, makeAutoObservable, makeObservable } from "mobx"

export interface ITMapScriptDefinition {
  key?: string;
  src: string;
  onload?: (helper: TMapHelper) => void;
}


export class TMapHelper {

  TMap: any;
  qq: any;
  map: any;
  constructor(public props: {
    scripts?: ITMapScriptDefinition[],
  }) {
    makeObservable(this, {

    });
  }

  initialize = flow(function* (this: TMapHelper, props: { placeAt?: HTMLElement, option?: any }) {
    const { scripts } = this.props;
    // const { placeAt, option } = props;
    if (scripts?.length) {
      const loadScript = (script: ITMapScriptDefinition) => {
        return new Promise<any>((resolve, reject) => {
          const key = script.key || script.src;
          if (document.getElementById(key)) return;
          const s = document.createElement('script');
          s.type = 'text/javascript';
          s.src = script.src;
          s.id = key;
          if (isFunction(script.onload)) {
            s.onload = () => {
              script.onload(this);
              resolve(true);
            };
          }
          s.onerror = (err) => reject(err);
          document.head.appendChild(s);
        });
      };
      yield Promise.all(scripts.map(s => loadScript(s)));
    }
    // this.map = this.TMap.Map(placeAt, option);
    // console.log(`this.TMap:`, this.TMap);
  });

}