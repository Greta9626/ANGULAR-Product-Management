import { IProduct } from './../models/products';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {

  @Input() singleProduct!: IProduct;
  @Output() showDetails = new EventEmitter<IProduct>()

  constructor() { }

  ngOnInit(): void {
  }

}
