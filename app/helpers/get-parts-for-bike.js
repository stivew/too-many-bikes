import partTypes from 'too-many-bikes/constants/part-types';

export default function getPartsForBike(bike) {
    const allParts = bike?.parts?.filter(part => part.type != partTypes.wheel);

    return allParts;
}