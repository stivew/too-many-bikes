import { attr, belongsTo } from '@ember-data/model';
import PartModel from './part';

export default class SeatpostModel extends PartModel {
    @attr('string') diameter; 
    @belongsTo('bike', { async: false, inverse: 'seatpost' }) bike;
}