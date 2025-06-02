import Component from '@glimmer/component';
import { service } from '@ember/service';

export default class ResourceTable extends Component {
  @service router;

  get defaultImagePath() {
    return this.router.currentRouteName === 'parts'
      ? '/assets/images/puzzle-line.svg'
      : '/assets/images/bike-line.svg';
  }
}
