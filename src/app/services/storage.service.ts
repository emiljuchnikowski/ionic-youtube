import { Injectable } from "@angular/core";
import { Storage } from '@ionic/storage-angular';

@Injectable({
    providedIn: "root"
})
export class StorageService {
    private _storage: Storage | null = null;

    constructor(private storage: Storage) { }

    async init(): Promise<void> {
        const storage = await this.storage.create();
        this._storage = storage;
    }

    async get<T>(key: string): Promise<T> {
        return await this._storage.get(key);
    }

    async set<T>(key: string, value: T): Promise<void> {
        await this._storage.set(key, value);
    }
}