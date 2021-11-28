import { Component, OnInit } from '@angular/core';
import { Gifservice } from '../../../services/gifs.service';
import { Gif, SearchGIFResponse } from '../interfaces/gif.interfaces';


@Component({
  selector: 'app-gifspage',
  templateUrl: './gifspage.component.html',
  styleUrls: ['./gifspage.component.css']
})
export class GifspageComponent  implements OnInit {

  constructor(private Gifservice : Gifservice) { }

   stickers:Gif[]=this.Gifservice.datastickers;



  ngOnInit(): void {

    this.Gifservice.getstickersApi("random").subscribe(({data})=>{


      data.map((sticker:any)=>{

        this.Gifservice.datastickers.unshift(sticker)

       })


    })




  }





  }









