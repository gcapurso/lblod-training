import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class AuthorsController extends Controller {
  @tracked newFirstName = '';
  @tracked newSecondName = '';

  @service store;

  @action
  createAuthor(event) {
    event.preventDefault();
    // create the new author
    const author = this.store.createRecord('author', {
      firstName: this.newFirstName,
      secondName: this.newSecondName
    });
    author.save()
    // clear the input fields
    this.newFirstName = '';
    this.newSecondName = '';
  }

  @action
	removeAuthor( author, event ) {
		event.preventDefault();
		author.destroyRecord();
	}
}
