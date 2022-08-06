import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
	providers: [HttpClient]
})
export class AppComponent {
  title = 'books';
  books: Book[];

  constructor(private http: HttpClient) {
    http.get('http://localhost:3000/books.json')
      .subscribe(res: Book[] => this.books = res);
  }
}
