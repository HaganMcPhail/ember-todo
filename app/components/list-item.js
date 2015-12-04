import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        deleteItem: function(item) {
            item.destroyRecord();
        },
        changeItem: function(item){
            item.list = (item.list === 'todo') ? 'completed' : 'todo';
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
