import { attr, belongsTo } from '@ember-data/model';
import PartModel from './part';

export default class StemModel extends PartModel {
    @attr('string') clampDiameter;
    @belongsTo('bike', { async: false, inverse: 'stem' }) bike;
}