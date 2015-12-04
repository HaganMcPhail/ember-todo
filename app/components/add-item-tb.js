import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        submitNewTodo(newItemText){
            if (newItemText) {
                this.sendAction('action', newItemText);
            }
            this.set('newTodo', '');
        }
    }
});
