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

          const get = localService.getData();

          if ( get != null) {

            const keys = Object.keys(get);
            const values = Object.values(get);
            for (const i of keys) {
              this.iterable[i] = values[i];
            }

          }

        }

      clearLocalStorage() {
        localStorage.clear();
        location.reload();
      }

}


