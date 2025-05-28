import RESTAdapter from '@ember-data/adapter/rest';
import pluralize from 'too-many-bikes/utils/pluralize';

export default class ApplicationAdapter extends RESTAdapter {
    namespace = 'api';

    pathForType(modelName) {
        return `${pluralize(modelName)}.json`;
    }
}
