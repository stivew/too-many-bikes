import EmberRouter from '@ember/routing/router';
import config from 'too-many-bikes/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('guides');

  this.route('bikes');

  this.route('parts');

  this.route('workbench');

  this.route('bad-route', { path: '/*path'});
});
