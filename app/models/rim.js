import { attr, belongsTo } from '@ember-data/model';
import PartModel from './part';

export default class RimModel extends PartModel {
    @attr('string') diameter;
    @attr('boolean', { defaultValue: false }) isBrakingSurface;
    @attr('boolean', { defaultValue: true }) isDoubleWalled;
    @attr('boolean', { defaultValue: false }) isTubelessCompatible;
    @belongsTo('wheel', { async: false, inverse: 'rim' }) wheel;
}