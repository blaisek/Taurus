import { Component, OnInit, ViewChild } from '@angular/core';
import { Idata } from '../interface/idata';
import { LocalService } from '../storage/local.service';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-issue-token',
  templateUrl: './issue-token.component.html',
  styleUrls: ['./issue-token.component.css']
})
export class IssueTokenComponent implements OnInit {
  @ViewChild('f', { static: false }) Form: NgForm;

  data: Idata = {
    TokenName: '',
    TokenTicker: '',
    TotalSupply: 3,
    CreationDate: '',
    IssuerName: '',
    Template: '',
    Country: ''
  };
  submitted = false;

  ApiCountry = [];

  constructor(private http: HttpClient , private localService: LocalService) { }

  ngOnInit() {
    this.fetchCountries();
  }

  onSubmit() {
    this.submitted = true;

    this.data.TokenName = this.Form.value.Data.TokenName;
    this.data.TokenTicker = this.Form.value.Data.Tokenticker;
    this.data.TotalSupply = this.Form.value.Data.TotalSupply;
    this.data.CreationDate = this.Form.value.Data.CreationDate;
    this.data.IssuerName = this.Form.value.Data.IssuerName;
    this.data.Template = this.Form.value.Data.Template;
    this.data.Country = this.Form.value.Data.Country;
    this.Form.reset();
    this.sendTolocalStorage();
  }

  fetchCountries() {

    this.http.get('https://restcountries.eu/rest/v2/all')
    .pipe(map(responseData => {
      const countriesArray = [];
      for (const key in responseData) {
        if(responseData.hasOwnProperty(key)){
          countriesArray.push({...responseData[key]});
        }

      }
      return countriesArray;
    }))
    .subscribe(countriesArray => {

       const name = [...countriesArray];
       this.ApiCountry = name.map(countries => countries.name);

    });
  }

  sendTolocalStorage() {

    this.localService.postData(this.data);
  }

}
