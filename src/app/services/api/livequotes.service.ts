import {HttpClient } from '@angular/common/http';
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {LiveQuotes} from "../../model/model.livequotes";
import {AppConfig} from "../../app-config";

@Injectable()
export class LiveQuotesService {

  array :LiveQuotes[];

  public pathToSources:string=this.appConfig.baseApiPath+'request/lq';

  constructor (protected httpClient: HttpClient, private appConfig:AppConfig) { }

  getLiveQuotes(): Observable<LiveQuotes[]>{
    return this.httpClient.get(this.pathToSources).map(response => {
        let quoteList = response["successful"];
        return quoteList.map(function(livequote:any){
          return {name: livequote.currency, price: livequote.price }
        });
      })
  }
}
