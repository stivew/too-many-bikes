import { attr, belongsTo } from '@ember-data/model';
import PartModel from './part';

export default class SeatpostModel extends PartModel {
    @attr('string') diameter;
    @attr('boolean') isDropper;
    @belongsTo('bike', { async: false, inverse: 'seatpost' }) bike;
}