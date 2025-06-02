import { attr, belongsTo } from '@ember-data/model';
import PartModel from './part';

export default class ChainModel extends PartModel {
    @attr('string') speedCompatibility;
    @belongsTo('bike', { async: false, inverse: 'chain' }) bike;
}