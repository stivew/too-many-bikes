import Route from '@ember/routing/route';
import partTypes from '../constants/part-types';
import partMaterials from '../constants/part-materials';

export default class PartsRoute extends Route {
  model() {
    return [
      {
        type: partTypes.handlebars,
        imagePath: '/assets/images/favicon.ico',
        assignedTo: 'GT Karakoram',
        details: {
          make: 'Renthal',
          material: partMaterials.alloy,
          barWidth: '700mm',
          clampDiameter: '31.8mm',
        },
      },
      {
        type: partTypes.frame,
        imagePath: undefined,
        assignedTo: undefined,
        details: {
          year: '~2008',
          make: 'Specialized',
          model: 'Rockhopper',
          material: partMaterials.alloy,
          color: 'white',
          headTube: {
            diameter: '1 1/8',
            threaded: false,
          },
        },
      },
    ];
  }
}
