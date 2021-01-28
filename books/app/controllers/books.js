import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class BooksController extends Controller {
  @tracked newTitle = '';
  @tracked newIsbn = '';
  @tracked newAuthor = '';
  @tracked newPrice = '';

  @service store;

  @action
  async createBook(event) {
    event.preventDefault();
    // create the new book
    const book = this.store.createRecord('book', {
      title: this.newTitle,
      isbn: this.newIsbn,
      price: this.newPrice,
      author: await this.store.findRecord('author', this.newAuthor)
    });

    book.save();

    // clear the input field
    this.newTitle = '';
    this.newIsbn = '';
    this.newPrice = '';
  }

  @action
  selectOption(event) {
    event.preventDefault();

    this.set('newAuthor', event.target.value);
    console.log(this.newAuthor);
  }

  @action
  removeBook(book, event) {
    event.preventDefault();
    book.destroyRecord();
  }
}

