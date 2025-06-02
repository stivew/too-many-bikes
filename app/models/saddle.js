import { attr, belongsTo } from '@ember-data/model';
import PartModel from './part';

export default class SaddleModel extends PartModel {
    @attr('string') color;
    @belongsTo('bike', { async: false, inverse: 'saddle' }) bike;
}