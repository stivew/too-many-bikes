import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class PartsRoute extends Route {
    @service store;

   async model() {
        const result = await Promise.all([
            this.store.findAll('chain'),
            this.store.findAll('crank-arm'),
            this.store.findAll('derailleur'),
            this.store.findAll('fork'),
            this.store.findAll('frame'),
            this.store.findAll('front-gear'),
            this.store.findAll('grip'),
            this.store.findAll('handlebar'),
            this.store.findAll('hub'),
            this.store.findAll('pedal'),
            this.store.findAll('rear-gear'),
            this.store.findAll('rim'),
            this.store.findAll('saddle'),
            this.store.findAll('seatpost'),
            this.store.findAll('stem'),
            this.store.findAll('tire'),
            this.store.findAll('wheel'),
        ]);

        return result.flat();
    }
}
