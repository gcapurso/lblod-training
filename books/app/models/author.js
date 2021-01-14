import Model, {attr, hasMany} from '@ember-data/model';

export default class AuthorModel extends Model {
  @attr('string') firstName;
  @attr('string') secondName;
  @hasMany('book') books;
}
