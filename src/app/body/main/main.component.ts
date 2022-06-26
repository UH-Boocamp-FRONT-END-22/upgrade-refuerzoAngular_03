import { Component } from '@angular/core';
import { IDbz } from '../interfaces/dbz';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent {

  public personajes: IDbz[] = [
    {
      foto: {
        src: "https://depor.com/resizer/pfVziOV4X8Vu9nwknDc-oNItlB8=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/6Y2EDIISGFGVFANEVDCR5LCG34.jpg",
        alt: "goku",
      },
      nombre: "Goku",
      poder: 15000
    },
    {
      foto: {
        src: "https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2022/05/Vivimos-enganados-Sabias-que-el-cabello-de-Vegeta-nunca-fue-negro-en-Dragon-Ball-Z.jpg?fit=1280%2C720&quality=80&ssl=1",
        alt: "vegeta",
      },
      nombre: "Vegeta",
      poder: 12000
    },
    {
      foto: {
        src: "https://alfabetajuega.com/hero/2021/01/trunks-abj.jpg?width=1200&aspect_ratio=1200:631",
        alt: "trunks",
      },
      nombre: "Trunks",
      poder: 13500
    },
    {
      foto: {
        src: "https://media.vandalsports.com/master/11-2020/20201110102444_1.jpg",
        alt: "freezer",
      },
      nombre: "Freezer",
      poder: 14500
    },

  ]

}
