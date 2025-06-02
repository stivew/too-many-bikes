import { attr, belongsTo } from '@ember-data/model';
import PartModel from './part';

export default class FrontGearModel extends PartModel {
    @attr('number') speeds;
    @belongsTo('bike', { async: false, inverse: 'front-gear' }) bike;
}