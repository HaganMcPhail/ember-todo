import Ember from 'ember';

export default Ember.Controller.extend({
    newTodo: '',
    isValid: Ember.computed.gte('newTodo.length', 1),
    actions: {
        submitNewTodo(newTodoItem) {
            var _that = this;
            if (newTodoItem.length) {
                var newItem = this.store.createRecord('items', {
                    item: newTodoItem,
                    list: 'todo',
                    isEditing: false
                }).save().then(function(){
                    _that.send('routeTodo');
                });
            }
        }
    }
});
