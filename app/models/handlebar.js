import { attr, belongsTo } from '@ember-data/model';
import PartModel from './part';

export default class HandlebarModel extends PartModel {
    @attr('string') width;
    @attr('string') clampDiameter;
    @attr('string') material;
    @belongsTo('bike', { async: false, inverse: 'handlebar' }) bike;
}