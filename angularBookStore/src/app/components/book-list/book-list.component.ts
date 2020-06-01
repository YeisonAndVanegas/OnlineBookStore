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

  constructor(private _bookService: BookService,
              private _activedRoute: ActivatedRoute) { }

  //ngOnInit() is a lifecycle method, it will call as soon as bookListComponent is created
  ngOnInit(): void {
    this._activedRoute.paramMap.subscribe(()=>{
        this.listBook();
      })
  }

  //Create a method listBooks() to call service method
  listBook(){

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
}
