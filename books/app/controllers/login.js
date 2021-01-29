import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class LoginController extends Controller {
    @service router

    @action
    navigateToAdmin(){
        this.router.transitionTo('books', { queryParams: { isAdmin: true }});
    } 

    @action
    navigateToGuest(){
        this.router.transitionTo('books', { queryParams: { isAdmin: null }});
    }
}
