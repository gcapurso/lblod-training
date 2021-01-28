import Model, {attr, belongsTo} from '@ember-data/model';

export default class BookModel extends Model {
  @attr('string') title;
  @attr('string') isbn;
  @attr('string') price;
  @belongsTo('author', { inverse: 'books'}) author;
}
