import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from './../models/products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  @Input() singleProduct!: IProduct;

  constructor() { }

  ngOnInit(): void {
  }

}
