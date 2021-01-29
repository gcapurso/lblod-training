import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ApplicationRoute extends Route {
    @tracked isAdmin = true

    @action
    blurBackground(blur) {
        this.controllerFor('application').set('blur', blur);
    }
}