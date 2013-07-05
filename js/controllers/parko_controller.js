Parko.ParkoController = Ember.ArrayController.extend({

    openOnly: false,

    getSetOpenOnly: function(key,value) {
        if(value === undefined) {
            return this.get('openOnly');
        } else {
            this.set('openOnly', value);
            this.navigate();
            return value;
        }
    }.property('openOnly'),

    navigate:function() {
        this.deselectAll();
        if(this.get("openOnly") === true){
            this.transitionToRoute('parko.open');
        }else{
            this.transitionToRoute('parko.index');
        }
    },

    selectedItem: function () {
        var model = this.filterProperty('isSelected', true);
        return model[0];
    }.property("@each.isSelected"),

    deselectAll: function() {
        this.setEach('isSelected', false);
        this.get('store').save();
    }
})
;