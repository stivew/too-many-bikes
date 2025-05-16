import Component from "@glimmer/component";

export default class ResourceTable extends Component {
    capitalize = (string) => { 
        const firstLetter = Array.from(string)[0];
        const stringRemainder = string.slice(1);
        
        return firstLetter.toUpperCase() + stringRemainder;
    }
}