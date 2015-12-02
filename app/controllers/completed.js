import Ember from 'ember';

export default Ember.Controller.extend({
    newTodo: '',
    isValid: Ember.computed.gte('newTodo.length', 1),
    actions: {
        submitNewTodo: function() {
            var item = this.get('newTodo');

            if (this.get('newTodo').length) {
                var newTodo = this.store.createRecord('items', {
                    item: item,
                    list: 'todo'
                });
                newTodo.save();
            }
        },
        deleteItem: function(item) {
            console.log('test');
            item.destroyRecord();
        },
        changeItem: function(item){
            console.log(item);
            item.list = 'todo';
            item.save();
        }
    }
});
