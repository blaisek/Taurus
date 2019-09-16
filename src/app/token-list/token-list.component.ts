import { Component} from '@angular/core';
import { LocalService } from '../storage/local.service';

@Component({
  selector: 'app-token-list',
  templateUrl: './token-list.component.html',
  styleUrls: ['./token-list.component.css']
})

export class TokenListComponent  {

        public iterable = [];

        constructor(localService: LocalService) {


            this.iterable = [{...localService.getData()}];

            console.log('iterable', this.iterable);

        }
      clearLocalStorage() {
        localStorage.clear();
        location.reload();
      }

}


