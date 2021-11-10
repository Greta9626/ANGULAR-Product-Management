import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from './../models/products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  @Input() singleProduct!: IProduct;
  @Output() closeDetails = new EventEmitter<IProduct>()
  @Output() buyProduct = new EventEmitter<IProduct>()

  constructor() { }

  ngOnInit(): void {
  }

}
