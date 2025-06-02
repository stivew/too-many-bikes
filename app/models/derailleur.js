import { attr, belongsTo } from '@ember-data/model';
import PartModel from './part';

export default class DerailleurModel extends PartModel {
    @attr('string') speedCompatibility;
    @attr('bool') hasClutch;
    @belongsTo('bike', { async: false, inverse: 'derailleur' }) bike;
}