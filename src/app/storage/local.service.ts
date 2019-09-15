import { Injectable } from '@angular/core';
import {Idata} from '../interface/idata';



@Injectable({
  providedIn: 'root'
})
export class LocalService {

liste = [];

  constructor() {
  }

  public getData(): Idata {

    const localStorageItems = JSON.parse(localStorage.getItem('data'));

    return localStorageItems == null ? {TokenName: 'TTISM' , TokenTicker: 'TTT',
    TotalSupply: 100000, CreationDate: '17 mai 2019', IssuerName: 'Taurus group', Template: 'ERC20', Country: 'Switzerland'}
  : localStorageItems.data ;

  }

  public postData(data: Idata): void {

    this.liste.push(data);
    let local = [];
    let datas = [];
    datas = [{...this.getData()}];
    local = datas.concat(this.liste);
    localStorage.setItem('data', JSON.stringify(local));

    console.log('service:', local);

  }

}
