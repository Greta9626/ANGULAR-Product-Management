import { IProduct } from './../models/products';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  

  singleProduct!: IProduct;


  viewDetails: boolean = false;
  viewWelcome: boolean = true;
  countCarrello: number = 0;


  onShowDetails(product: IProduct): void {
    this.viewDetails = true;
    this.singleProduct = product;
  
  }

  onCloseDetails(product: IProduct): void {
    this.viewDetails = false;
    this.singleProduct = product;
  }

  onBuyProduct(product: IProduct): void {
    this.countCarrello++;
    this.singleProduct = product;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
