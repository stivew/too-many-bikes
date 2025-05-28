import Component from '@glimmer/component';

export default class ResourceTableDetails extends Component {
  get itemToDisplay() {
    return this.args.currentRouteName === 'parts'
      ? this.args.item?.details
      : this.args.item?.components;
  }
}
