import Model, { attr } from '@ember-data/model';

export default class PartModel extends Model {
  @attr make;
  @attr model;
  @attr year;
  @attr imagePath;
}
