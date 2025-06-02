import Model, { attr, hasMany } from '@ember-data/model';

export default class BikeModel extends Model {
  @attr imagePath;
  @hasMany('part', { async: false, inverse: 'bike' }) parts;
}
