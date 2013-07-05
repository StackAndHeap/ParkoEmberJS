Parko.ItemController = Ember.ObjectController.extend({
    parko: null,
    needs: "parko",
    parkoBinding: "controllers.parko",

    inflection: function() {
        var model = this.get('model');
        if(model.get("availableSpots") === 1) {
            return "spot";
        } else {
            return "spots";
        }
    }.property("model.availableSpots"),

    selectParking: function() {
        var all = this.parko.get('model');
        all.setEach("isSelected",false);
        all.get("store").save();

        var model = this.get("model");
        model.set("isSelected", true);
        model.save();
    }
});