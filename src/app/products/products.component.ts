import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  arr:any[] = [
    {
      id:1 ,
      img:'assets/dress/071836258c222786dd1c1c849985fc39.jpg',
      text:'Some quick example text to build on the card title and make up the bulk of the card',
      title:'Card title',
      price:20
    }
    ,
    {
      id:2 ,
      img:'assets/dress/8757147c4afcf02c815ff4ceb7e45a92.jpg',
      text:'Some quick example text to build on the card title and make up the bulk of the card',
      title:'Card title',
      price:50
    }
    ,
    {
      id:3 ,
      img:'assets/dress/071836258c222786dd1c1c849985fc39.jpg',
      text:'Some quick example text to build on the card title and make up the bulk of the card',
      title:'Card title',
      price:28
    }
    ,
    {
      id:4 ,
      img:'assets/dress/071836258c222786dd1c1c849985fc39.jpg',
      text:'Some quick example text to build on the card title and make up the bulk of the card',
      title:'Card title',
      price:67
    }
    ,
    {
      id:5 ,
      img:'assets/t-shirt/1c91d9650cef69ff5b198f3087389713.jpg',
      text:'Some quick example text to build on the card title and make up the bulk of the card',
      title:'Card title',
      price:67
    }
    ,
    {
      id:6 ,
      img:'assets/t-shirt/a76dc56b4f8a260db20fcee9dffe729f.jpg',
      text:'Some quick example text to build on the card title and make up the bulk of the card',
      title:'Card title',
      price:67
    }
    ,
    {
      id:7 ,
      img:'assets/t-shirt/f511d40a550a322afd694a80260f9309.jpg',
      text:'Some quick example text to build on the card title and make up the bulk of the card',
      title:'Card title',
      price:67
    }
    ,
    {
      id:8 ,
      img:'assets/t-shirt/1c91d9650cef69ff5b198f3087389713.jpg',
      text:'Some quick example text to build on the card title and make up the bulk of the card',
      title:'Card title',
      price:67
    }
    ,
    {
      id:9 ,
      img:'assets/julary/8921f335acd7763f4da849dbfa8dabe2.jpg',
      text:'Some quick example text to build on the card title and make up the bulk of the card',
      title:'Card title',
      price:67
    }
    ,
    {
      id:10 ,
      img:'assets/julary/44508b1f0fd127f8474a9eb4114042cd.jpg',
      text:'Some quick example text to build on the card title and make up the bulk of the card',
      title:'Card title',
      price:67
    }
    ,
    {
      id:11 ,
      img:'assets/julary/9827e00c67a825895609fe2a521a04e3.jpg',
      text:'Some quick example text to build on the card title and make up the bulk of the card',
      title:'Card title',
      price:67
    }
    ,
    {
      id:12 ,
      img:'assets/julary/c23ea8c92c1a8d748b9c801b24cee35d.jpg',
      text:'Some quick example text to build on the card title and make up the bulk of the card',
      title:'Card title',
      price:67
    }
  ]

 
  constructor() { }

  ngOnInit(): void {
    localStorage.setItem("nada", JSON.stringify( this.arr))
  }

  cart(item:any){
    localStorage.setItem("item", JSON.stringify(item))
  }

}
