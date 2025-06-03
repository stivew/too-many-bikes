import partTypes from 'too-many-bikes/constants/part-types';
import ChainComponent from 'too-many-bikes/components/part-specific-display/chain';
import CrankArmComponent from 'too-many-bikes/components/part-specific-display/crank-arm';
import DerailleurComponent from 'too-many-bikes/components/part-specific-display/derailleur';
import ForkComponent from 'too-many-bikes/components/part-specific-display/fork';
import FrameComponent from 'too-many-bikes/components/part-specific-display/frame';
import FrontGearComponent from 'too-many-bikes/components/part-specific-display/front-gear';
import GripComponent from 'too-many-bikes/components/part-specific-display/grip';
import HandlebarComponent from 'too-many-bikes/components/part-specific-display/handlebar';
import HubComponent from 'too-many-bikes/components/part-specific-display/hub';
import PedalComponent from 'too-many-bikes/components/part-specific-display/pedal';
import RearGearComponent from 'too-many-bikes/components/part-specific-display/rear-gear';
import RimComponent from 'too-many-bikes/components/part-specific-display/rim';
import SaddleComponent from 'too-many-bikes/components/part-specific-display/saddle';
import SeatpostComponent from 'too-many-bikes/components/part-specific-display/seatpost';
import StemComponent from 'too-many-bikes/components/part-specific-display/stem';
import TireComponent from 'too-many-bikes/components/part-specific-display/tire';

export default function (modelType) {
    switch (modelType) {
        case partTypes.chain:
            return ChainComponent;

        case partTypes.crankArm:
            return CrankArmComponent;

        case partTypes.derailleur:
            return DerailleurComponent;

        case partTypes.fork:
            return ForkComponent;

        case partTypes.frame:
            return FrameComponent;

        case partTypes.frontGear:
            return FrontGearComponent;

        case partTypes.grip:
            return GripComponent;

        case partTypes.handlebar:
            return HandlebarComponent;

        case partTypes.hub:
            return HubComponent;

        case partTypes.pedal:
            return PedalComponent;

        case partTypes.rearGear:
            return RearGearComponent;

        case partTypes.rim:
            return RimComponent;

        case partTypes.saddle:
            return SaddleComponent;

        case partTypes.seatpost:
            return SeatpostComponent;

        case partTypes.stem:
            return StemComponent;
     
        case partTypes.tire:
            return TireComponent;
    }
}