import { Component, OnInit} from '@angular/core';
import { LocalService } from '../storage/local.service';

@Component({
  selector: 'app-token-list',
  templateUrl: './token-list.component.html',
  styleUrls: ['./token-list.component.css']
})

export class TokenListComponent implements OnInit {

        public iterable = [];
        private key = [];
        constructor(private localService: LocalService) {}

        ngOnInit() {

          const get = this.localService.getData();

          if ( get != null) {

            const keys = Object.keys(get);
            const values = Object.values(get);
            for (const i of keys) {
              this.iterable[i] = values[i];
              this.key  = keys;
            }
          } else {
            this.iterable = [{TokenName: 'TTISM' , TokenTicker: 'TTT',
            TotalSupply: 10000, CreationDate: '17 mai 2019', IssuerName: 'Taurus group', Template: 'ERC20', Country: 'Switzerland'}];
          }
        }

      clearLocalStorage() {
        // location.reload();
        // const get = this.localService.getData();

        // const keys = Object.keys(get);

        // const KeyName = localStorage.key(0);

        // console.log('keys', keys, 'keysName', KeyName);

      }

}


