import { attr, belongsTo } from '@ember-data/model';
import PartModel from './part';

export default class PedalModel extends PartModel {
    @attr('string') color;
    @attr('string') material;
    @attr('boolean') isClipless;
    @belongsTo('bike', { async: false, inverse: 'pedal' }) bike;
}