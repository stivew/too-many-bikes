import { attr, belongsTo } from '@ember-data/model';
import PartModel from './part';

export default class GripModel extends PartModel {
    @attr('string') color;
    @belongsTo('bike', { async: false, inverse: 'grip' }) bike;
}