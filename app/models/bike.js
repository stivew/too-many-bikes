import Model, { attr } from '@ember-data/model';

export default class BikeModel extends Model {
  @attr imagePath;
  @attr components;
}
