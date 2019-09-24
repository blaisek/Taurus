import { Injectable } from '@angular/core';
import {Idata} from '../interface/idata';



@Injectable({
  providedIn: 'root'
})
export class LocalService {

  private liste = [];
  private localStorageItems: {};

  constructor() {
  }

  public getData() {

      const parsedJSON = JSON.parse(localStorage.getItem('data'));

      if (parsedJSON != null) {
        this.localStorageItems = parsedJSON;
      }

      return this.localStorageItems;

  }

  public postData(data: Idata): void {

    this.liste.push(data);

    if (localStorage.getItem('data') !== null) {

      const parsedJSON = JSON.parse(localStorage.getItem('data'));
      const newList = parsedJSON.concat(this.liste);

      localStorage.setItem('data', JSON.stringify(newList));

    } else {
      localStorage.setItem('data', JSON.stringify(this.liste));
    }

    this.liste = [];

  }

}
