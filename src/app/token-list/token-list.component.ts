import { Component} from '@angular/core';
import { Idata } from '../interface/idata';
import { LocalService } from '../storage/local.service';

@Component({
  selector: 'app-token-list',
  templateUrl: './token-list.component.html',
  styleUrls: ['./token-list.component.css']
})
export class TokenListComponent  {

        public data: Idata;

        public iterable = [];
        newIterable = [];

        constructor(localService: LocalService) {
          this.data = localService.getData();

           this.iterable = [{...this.data}];
          // this.newIterable = this.iterable.map(el => el.data !== {} ? {...el}: 0 );

          console.log('iterable', this.iterable);

        }
      clearLocalStorage() {
        localStorage.clear();
        //location.reload();
      }

}


