import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor() { }
}
