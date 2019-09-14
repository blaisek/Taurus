import { Injectable } from '@angular/core';
import {Idata} from '../interface/idata';



@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() {
  }

  public getData(): Idata {

    const localStorageItems = JSON.parse(localStorage.getItem('data'));

    return localStorageItems == null ? [{TokenName: 'TTISM' , TokenTicker: 'TTT',
    TotalSupply: 10000, CreationDate: '17 mai 2019', IssuerName: 'Taurus group', Template: 'ERC20', Country: 'Switzerland'}]
     : localStorageItems.data ;

  }

  public postData(data: Idata): void {
    localStorage.setItem('data', JSON.stringify({data}));
    }

}
