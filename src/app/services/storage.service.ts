import { Injectable } from "@angular/core";
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';

@Injectable({
    providedIn: "root"
})
export class StorageService {
    private _storage: SQLiteObject | null = null;

    constructor(private sqlite: SQLite) { }

    async init(): Promise<void> {
        const storage = await this.sqlite.create({
            name: 'testowa.db',
            location: 'default'
          });
        this._storage = storage;

        await this._storage.executeSql(`create table if not exists test (id text primary key, body text)`,[]);
    }

    async get<T>(key: string): Promise<T> {
        const sqlResult = await this._storage.executeSql(`select body from test where id = '${key}'`, []);
        const result = sqlResult.rows.item(0);

        if (!result) return null;

        return JSON.parse(result.body);
    }

    async set<T>(key: string, value: T): Promise<void> {
        await this._storage.executeSql(`insert or replace into test (id, body) values ('${key}', '${JSON.stringify(value)}')`, []);
    }
}

// @Injectable({
//     providedIn: "root"
// })
// export class StorageService {
//     private _storage: Storage | null = null;

//     constructor(private storage: Storage) { }

//     async init(): Promise<void> {
//         const storage = await this.storage.create();
//         this._storage = storage;
//     }

//     async get<T>(key: string): Promise<T> {
//         return await this._storage.get(key);
//     }

//     async set<T>(key: string, value: T): Promise<void> {
//         await this._storage.set(key, value);
//     }
// }