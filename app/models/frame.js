import { attr, belongsTo } from '@ember-data/model';
import PartModel from './part';

export default class FrameModel extends PartModel {
    @attr('string') material;
    @attr('string') wheelSize;
    @attr('string') hubCompatibility;
    @attr('string') brakeMountType;
    @attr('string') headTubeType;
    @attr('string') headTubeDiameter;
    @attr('boolean') isHeadTubeTapered;
    @attr('string') markedSize;
    @attr('string') seatTubeDiameter;
    @attr('string') topTubeLength;
    @attr('string') seatTubeLength;
    @attr('string') seatStayLength;
    @attr('string') bottomBracketWidth;
    @belongsTo('bike', { async: false, inverse: 'frame' }) bike;
}