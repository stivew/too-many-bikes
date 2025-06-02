import { attr, belongsTo } from '@ember-data/model';
import PartModel from './part';

export default class RearGear extends PartModel {
    @attr('number') speeds;
    @belongsTo('bike', { async: false, inverse: 'rear-gear' }) bike;
}