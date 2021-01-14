import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default class BooksRoute extends Route {
	model(){
		return RSVP.hash({
			books: this.store.findAll('book'),
			authors: this.store.findAll('author')
		})
	}
}
