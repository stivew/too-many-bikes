import Component from '@glimmer/component';
import { service } from '@ember/service';
import partTypes from '../constants/part-types';

export default class ResourceTable extends Component {
  @service router;

  capitalize = (string) => {
    const firstLetter = Array.from(string)[0];
    const stringRemainder = string.slice(1);

    return firstLetter.toUpperCase() + stringRemainder;
  };

  getDisplayName = (resource) => {
    switch (resource.type) {
      case partTypes.frame:
        return `${resource.details.year} ${resource.details.make} ${resource.details.model}`;
      case partTypes.handlebars:
        return `${resource.details.make} ${this.capitalize(resource.type)}`;
      default:
        return `${resource.components.frame.year} ${resource.components.frame.make} ${resource.components.frame.model}`;
    }
  };

  get defaultImagePath() {
    return this.router.currentRouteName === 'parts'
      ? '/assets/images/puzzle-line.svg'
      : '/assets/images/bike-line.svg';
  }
}
