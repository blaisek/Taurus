import { Injectable } from '@angular/core';
import {Idata} from '../interface/idata';



@Injectable({
  providedIn: 'root'
})
export class LocalService {

  liste = [];
  localStorageItems;
  constructor() {
  }

  public getData() {

      const parsedJSON = JSON.parse(localStorage.getItem('data'));

      if (parsedJSON != null) {
          // tslint:disable-next-line: prefer-for-of
          for (let i = 0; i < parsedJSON.length; i++) {
            this.localStorageItems = parsedJSON[i];
        }
      }

      return this.localStorageItems == null ? {TokenName: 'TTISM' , TokenTicker: 'TTT',
      TotalSupply: 100000, CreationDate: '17 mai 2019', IssuerName: 'Taurus group', Template: 'ERC20', Country: 'Switzerland'}
      : this.localStorageItems ;
  }

  public postData(data: Idata): void {

    this.liste.push(data);
    let local = [];
    let datas = [];
    datas = [{...this.getData()}];
    local = datas.concat(this.liste);
    localStorage.setItem('data', JSON.stringify(local));

    // console.log('service:', local);

  }

}
