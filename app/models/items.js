import DS from 'ember-data';

export default DS.Model.extend({
  item: DS.attr('string'),
  list: DS.attr('string'),
  isEditing: DS.attr('boolean')
});
