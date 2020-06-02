import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/common/book';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-list',
  //templateUrl: './book-list.component.html',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];
  currentCategoryId: number;
  searchMode: boolean;
  pageOfItems: Array<Book>;
  pageSize: number = 6;

  constructor(private _bookService: BookService,
              private _activedRoute: ActivatedRoute) { }

  //ngOnInit() is a lifecycle method, it will call as soon as bookListComponent is created
  ngOnInit() {
    this._activedRoute.paramMap.subscribe(
      _data =>{
        this.listBooks();
      });
  }

  pageClick(pageOfItems: Array<Book>){
    //Update the current page of items
    this.pageOfItems = pageOfItems;
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

    this._bookService.getBooks(this.currentCategoryId).subscribe(
      //Assing the data to array of books
      data => this.books = data
    )
  }

  handleSearchBooks(){
    const keyword: string = this._activedRoute.snapshot.paramMap.get('keyword');   
    this._bookService.searchBooks(keyword).subscribe(
      data => {
        //console.log(data);
        this.books = data;
      }
    );
  }

  updatePageSize(pageSize: number){
    this.pageSize = pageSize;
    this.listBooks();
  }
}