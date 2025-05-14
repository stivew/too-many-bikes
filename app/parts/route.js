import Route from '@ember/routing/route';
import bikePartTypes from '../constants/bike-part-types';
import partMaterials from '../constants/part-materials';

export default class PartsRoute extends Route {
    model() {
        return [
            { 
                partType: bikePartTypes.handlebars,
                make: "Renthal",
                material: partMaterials.alloy,
                // to use bike model
                assignedTo: "GT Karakoram",
                details: {
                    barWidth: "700mm",
                    compatibilities: {
                        clampDiameter: "31.8mm",
                    },
                }
            },
            { 
                partType: bikePartTypes.frame,
                make: "Specialized",
                model: "Rockhopper",
                year: "2008",
                material: partMaterials.alloy,
                details: {
                    paintColor: "white",
                    compatabilities: {
                        headTube: {
                            diameter: "1 1/8",
                            threaded: false,
                        }
                    },
                }
            }

        ]
    }
}
