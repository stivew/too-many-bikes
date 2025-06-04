import { attr, belongsTo } from '@ember-data/model';
import PartModel from './part';

export default class HubModel extends PartModel {
    @attr('boolean') isDiscCompatible;
    @attr('string') bearingType;
    @belongsTo('wheel', { async: false, inverse: 'hub' }) wheel;
}