import { attr, belongsTo } from '@ember-data/model';
import PartModel from './part';

export default class ForkModel extends PartModel {
    @attr('string') travel;
    @attr('string') hubCompatibility;
    @attr('string') stanchionDiameter;
    @attr('string') suspensionType;
    @belongsTo('bike', { async: false, inverse: 'fork' }) bike;
}