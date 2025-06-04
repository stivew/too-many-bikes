import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class BikeModel extends Model {
  @attr('string') year;
  @attr('string') make;
  @attr('string') model;
  @belongsTo('chain', { async: false, inverse: 'bike' }) chain;
  @hasMany('crank-arm', { async: false, inverse: 'bike' }) crankArm;
  @belongsTo('derailleur', { async: false, inverse: 'bike' }) derailleur;
  @belongsTo('fork', { async: false, inverse: 'bike' }) fork;
  @belongsTo('front-gear', { async: false, inverse: 'bike' }) frontGear;
  @hasMany('grip', { async: false, inverse: 'bike' }) grip;
  @belongsTo('handlebar', { async: false, inverse: 'bike' }) handlebar;
  @hasMany('pedal', { async: false, inverse: 'bike' }) pedal;
  @belongsTo('rear-gear', { async: false, inverse: 'bike' }) rearGear;
  @belongsTo('saddle', { async: false, inverse: 'bike' }) saddle;
  @belongsTo('seatpost', { async: false, inverse: 'bike' }) seatpost;
  @belongsTo('stem', { async: false, inverse: 'bike' }) stem;
  @hasMany('wheel', { async: false, inverse: 'bike' }) wheel;
}
