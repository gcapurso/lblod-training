import EmberRouter from '@ember/routing/router';
import config from 'books/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('books', { path: '/books' });
  this.route('authors', { path: '/authors' });
});