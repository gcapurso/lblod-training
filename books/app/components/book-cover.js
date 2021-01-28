import Component from '@ember/component';
import { action } from '@ember/object';

export default class BookCoverComponent extends Component {
    @action
    open() {
        this.get('book').reload().then(() => {
          this.set('isShowingModal', true);
          this.get('blurBackground')(true);
        });
    } 
    
    @action
    close() {
        this.set('isShowingModal', false);
        this.get('blurBackground')(false);
    }
}