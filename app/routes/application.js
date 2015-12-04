import Ember from 'ember';

export default Ember.Route.extend({
    actions:{
        routeTodo(){
            this.transitionTo('index');
        }
    }
});
