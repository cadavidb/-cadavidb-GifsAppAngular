import {  HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { SearchGIFResponse ,Gif} from '../app/gifs/interfaces/gif.interfaces';


@Injectable({providedIn: 'root'})

export class Gifservice {

  private _apikey:string="pLhxK60397KNn44B8M0SQSqRMPZ27zEM";
  private _route:string ="https://api.giphy.com/v1/gifs";

  history_local=JSON.parse(localStorage.getItem("historial")!)

  constructor(private http:HttpClient) {

    if (this.history_local) {
      this.history_local.map((data:any)=>{
        console.log(data);
        this._history.push(data)

      })

    }














  }


  private _history:string[]=[]

  datastickers:Gif[]=[];



   getstickers(){

    return this.datastickers

  }





  get history(){

    return [...this._history]

  }




  getstickersApi(query:string):Observable<any>{

    const params= new HttpParams()
    .set('api_key',this._apikey)
    .set('limit','20')
    .set('q',query)




    return this.http.get<SearchGIFResponse>(`${this._route}/search`,{params})

  }

  addHistory(query:string=" "){

    if (!this._history.includes(query) && query.trim().length>=2) {
     this._history.splice(2,3,query)
      localStorage.setItem("historial",JSON.stringify(this._history))

    }else{
      console.log("ya existe ese valor");

    }




  }



}
