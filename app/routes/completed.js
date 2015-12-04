import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        return this.store.query('items', { orderBy: 'list', equalTo: 'completed' });
    },
    actions: {
        submitNewTodo: function(itemText) {
            var newTodoItem = itemText;

            if (newTodoItem.length) {
                var newItem = this.store.createRecord('items', {
                    item: newTodoItem,
                    list: 'todo',
                    isEditing: false
                });
                this.set('newTodo','');
                newItem.save();
            }
            this.transitionTo('index');
        }
    }
});
