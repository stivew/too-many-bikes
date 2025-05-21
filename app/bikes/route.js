import Route from '@ember/routing/route';
import partMaterials from '../constants/part-materials';

export default class BikesRoute extends Route {
  model() {
    return [
      {
        imagePath: undefined,
        components: {
          frame: {
            year: '2013',
            make: 'GT',
            model: 'Karakoram 3.0',
            material: partMaterials.alloy,
          },
          stem: 'Flybikes',
          handlebars: 'Renthal',
        },
      },
      {
        imagePath: undefined,
        components: {
          frame: {
            year: '2019',
            make: 'Trek',
            model: 'Stache 5',
            material: partMaterials.alloy,
          },
          stem: 'Hussefelt White',
          handebars: 'Bontrager',
        },
      },
    ];
  }
}
