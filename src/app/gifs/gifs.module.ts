import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedaComponent } from './busqueda/busqueda.component';

import { GifspageComponent } from './gifspage/gifspage.component';
import {Gifservice} from '../../services/gifs.service';
import { NbButtonModule, NbCardModule, NbFormFieldModule, NbIconModule, NbInputModule, NbLayoutModule} from '@nebular/theme';


@NgModule({
  declarations: [
    BusquedaComponent,

    GifspageComponent
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbInputModule,
    NbFormFieldModule,
    NbIconModule,
    NbLayoutModule,

    NbButtonModule





  ],
  exports:[

    BusquedaComponent,
    GifspageComponent
  ],
  providers:[
    Gifservice,
    NbLayoutModule,
    NbIconModule
  ]

})
export class GifsModule { }
