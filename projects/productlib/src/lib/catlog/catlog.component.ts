import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'lib-catlog',
  templateUrl: './catlog.component.html',
  styleUrls: ['./catlog.component.css']
})
export class CatlogComponent implements OnInit {

  productList: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.http.get('assets/data/product.json').subscribe((res: any) => {
      this.productList = res.response;
    });
  }

}
