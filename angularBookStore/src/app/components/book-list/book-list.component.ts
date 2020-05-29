import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/common/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];

  constructor(private _bookService: BookService) { }

  //ngOnInit() is a lifecycle method, it will call as soon as bookListComponent is created
  ngOnInit(): void {
    this.listBook();
  }

  //Create a method listBooks() to call service method
  listBook(){
    this._bookService.getBooks().subscribe(
      //Assing the data to array of books
      data => this.books = data
    )
  }
}
