import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/common/book';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute } from '@angular/router';
import { NgbPaginationConfig } from "@ng-bootstrap/ng-bootstrap";
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/common/cart-item';

@Component({
  selector: 'app-book-list',
  //templateUrl: './book-list.component.html',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[] = [];
  currentCategoryId: number = 1;
  searchMode: boolean = false;
  previosCategory: number = 1;

  //new properties for server side paging
  currentPage: number = 1;
  pageSize: number = 5;
  totalRecords: number = 0;
 
  constructor(private _bookService: BookService,
              private _activedRoute: ActivatedRoute,
              private _cartService: CartService,
              _config: NgbPaginationConfig) { 
                _config.maxSize = 3;
                _config.boundaryLinks = true;
              }

  //ngOnInit() is a lifecycle method, it will call as soon as bookListComponent is created
  ngOnInit() {
    this._activedRoute.paramMap.subscribe(
      _data =>{
        this.listBooks();
      });
  }

   //Create a method listBooks() to call service method
  listBooks(){
    this.searchMode = this._activedRoute.snapshot.paramMap.has('keyword');

    if(this.searchMode){
      //do search work
      this.handleSearchBooks();
    } else {
      //display books based category
      this.handleListBooks();
    }
  }

  handleListBooks(){
    const hasCategoryId: boolean = this._activedRoute.snapshot.paramMap.has('id');

    if(hasCategoryId){
      this.currentCategoryId = +this._activedRoute.snapshot.paramMap.get('id');
    } else {
      this.currentCategoryId = 1;
    }

    //stting up the current page to 1
    //if user navegate to other category
    if(this.previosCategory != this.currentCategoryId){
      this.currentPage = 1;
    }

    this.previosCategory = this.currentCategoryId;

    this._bookService.getBooks(this.currentCategoryId,
                                this.currentPage - 1,
                                this.pageSize)
                                .subscribe(
                                  this.processPaginate());
  }

  handleSearchBooks(){
    const keyword: string = this._activedRoute.snapshot.paramMap.get('keyword');   
    this._bookService.searchBooks(keyword, 
                                  this.currentPage - 1,
                                  this.pageSize)
                                  .subscribe(this.processPaginate());
  }

  updatePageSize(pageSize: number){
    this.pageSize = pageSize;
    this.currentPage = 1;
    this.listBooks();
  }

  processPaginate(){
    return data => {
      this.books = data._embedded.books;
      //page number starts from 1 index 
      this.currentPage = data.page.number + 1;
      this.totalRecords = data.page.totalElements;
      this.pageSize = data.page.size;
    }
  }

  addToCart(book: Book){
    console.log(`book name: ${book.name}, and price: ${book.unitPrice}`);
    const cartItem = new CartItem(book);
    this._cartService.addToCart(cartItem);

  }
}