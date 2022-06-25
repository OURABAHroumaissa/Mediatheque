import { Component, Input, OnInit } from '@angular/core';
import { Album } from 'src/app/models/Album.model';
import { Film } from 'src/app/models/Film.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input()
  produit: any;
  @Input()
  typeProduct: string="";
  
  constructor() { }

  ngOnInit(): void {
  }


}
