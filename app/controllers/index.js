import Ember from 'ember';

export default Ember.Controller.extend({
    newTodo: '',
    isValid: Ember.computed.gte('newTodo.length', 1),
    actions: {
        submitNewTodo: function() {
            var _that = this;
            var newTodoItem = this.get('newTodo');

            if (newTodoItem.length) {
                var newItem = this.store.createRecord('items', {
                    item: newTodoItem,
                    list: 'todo',
                    isEditing: false
                });
                newItem.save().then(function(){
                    _that.set('newTodo', '');
                });
            }
        },
        deleteItem: function(item) {
            item.destroyRecord();
        },
        changeItem: function(item){
            console.log(item.list);
            item.list = 'completed';
            item.save();
        },
        editItem: function(theItem){
            theItem.set('isEditing', false);
            theItem.save();
        },
        toggleEdit: function(theItem){
            theItem.set('isEditing', true);
        }
    }
});
