import Dexie from 'dexie';

export interface Page {
  id?: string;
  title?: string;
  [key: string]: any;
}


export class PageStore {

  private static instance: PageStore;
  private readonly db: Dexie;
  private constructor() {
    this.db = new Dexie("PageStore");
    this.db.version(1).stores({
      pages: '++id,title,type',
    });
  }

  static getInstance(): PageStore {
    if (!this.instance) {
      this.instance = new PageStore();
    }
    return this.instance;
  }

  async query(): Promise<Page[]> {
    let metadatas = await this.db.table('pages').toArray();
    metadatas = metadatas || [];
    return metadatas.map(m => ({ ...m, id: m.id.toString() }))
  }

  async get(id: string): Promise<Page> {
    const metadata = await this.db.table('pages').get(Number.parseInt(id as any));
    if (!metadata) { return null; }
    return { ...metadata, id: metadata.id.toString() }
  }

  async create(definition: Page): Promise<string> {
    const id = await this.db.table('pages').add(definition);
    return id.toString();
  }

  async update(id: string, definition: Page): Promise<void> {
    const nid = Number.parseInt(id as any);
    await this.db.table('pages').update(nid, { ...definition, id: nid });
  }

  async delete(id: string): Promise<void> {
    await this.db.table('pages').delete(Number.parseInt(id));
  }
}

