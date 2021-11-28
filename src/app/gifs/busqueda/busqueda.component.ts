import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Gifservice } from '../../../services/gifs.service';
import { NbSidebarService } from '@nebular/theme';
import { Gif } from '../interfaces/gif.interfaces';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit{

  @ViewChild('inputsearch') inputsearch!:ElementRef<HTMLInputElement>;



  constructor(private Gifservice:Gifservice,private sidebarService: NbSidebarService) { }
  ngOnInit(): void { }

  get history(){
    return this.Gifservice.history
  }

  badge(query:string){
    this.Gifservice.getstickersApi(query)
    .subscribe(({data})=>{

      data.map((sticker:any)=>{

        this.Gifservice.datastickers.unshift(sticker)

       })


    })

  }

  toggle() {
    this.sidebarService.toggle();
  }

  search(){
    this.Gifservice.addHistory(this.inputsearch.nativeElement.value)
    this.Gifservice.getstickersApi(this.inputsearch.nativeElement.value)
    .subscribe(({data})=>{
      data.map((sticker:any)=>{
        console.log(sticker);

        this.Gifservice.datastickers.unshift(sticker)
       })
    })

    this.inputsearch.nativeElement.value='';

  }


}
