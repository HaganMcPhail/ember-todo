import Ember from 'ember';

export default Ember.Controller.extend({
    newTodo: '',
    isValid: Ember.computed.gte('newTodo.length', 1),
    actions: {
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
