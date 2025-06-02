import { attr, belongsTo } from '@ember-data/model';
import PartModel from './part';

export default class CrankArmModel extends PartModel {
    @attr('string') length;
    @attr('boolean') isDriveSide;
    @belongsTo('bike', { async: false, inverse: 'crank-arm' }) bike;
}