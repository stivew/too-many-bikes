import { belongsTo } from '@ember-data/model';
import PartModel from './part';

export default class WheelModel extends PartModel {
    @belongsTo('rim', { async: false, inverse: 'wheel' }) rim; 
    @belongsTo('hub', { async: false, inverse: 'wheel' }) hub; 
    @belongsTo('tire', { async: false, inverse: 'wheel' }) tire; 
}