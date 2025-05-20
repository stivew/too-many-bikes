import Component from "@glimmer/component";
import { service } from "@ember/service";
import bikePartTypes from '../constants/bike-part-types';

export default class ResourceTable extends Component {
    @service router;

    capitalize = (string) => { 
        const firstLetter = Array.from(string)[0];
        const stringRemainder = string.slice(1);
        
        return firstLetter.toUpperCase() + stringRemainder;
    }

    getResourceDisplayName = (resource) => {
        switch (resource.type) {
            case bikePartTypes.frame:
                return `${resource.details.year} ${resource.details.make} ${resource.details.model}`;
            case bikePartTypes.handlebars:
                return `${resource.details.make} ${this.capitalize(resource.type)}`;
            default:
                return `${resource.components.frame.year} ${resource.components.frame.make} ${resource.components.frame.model}`;
        }
    }

    get defaultImagePath() {
        return this.tableType === "part" ? "/assets/images/favicon.ico" : "/assets/images/bike-line.svg";
    }
}