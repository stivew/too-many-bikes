import Component from '@glimmer/component';
import { service } from '@ember/service';
import format from 'too-many-bikes/helpers/format';

export default class ResourceTable extends Component {
  @service router;

  get defaultImagePath() {
    return this.router.currentRouteName === 'parts'
      ? '/assets/images/puzzle-line.svg'
      : '/assets/images/bike-line.svg';
  }

  createDisplayName(item) {
    return `${item.year ?? ''} ${item?.make ?? ''} ${item.model ?? format(item.constructor.modelName)}`;
  }
}
