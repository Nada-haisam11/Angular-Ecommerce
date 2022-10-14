import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  uid:any;
  order: any;
 
  constructor() { }

  ngOnInit(): void {

    this.order=JSON.parse(localStorage.getItem("item")||"");
    console.log(this.order)
  }

}
