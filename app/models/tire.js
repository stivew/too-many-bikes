import { attr, belongsTo } from '@ember-data/model';
import PartModel from './part';

export default class TireModel extends PartModel {
    @attr('string') treadType;
    @attr('string') size;
    @attr('boolean') isTubelessCompatible;
    @belongsTo('wheel', { async: false, inverse: 'tire' }) wheel;
}