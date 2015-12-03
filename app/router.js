import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('completed');
  this.route('edit', { path: '/:item_id/edit' });
});

export default Router;
