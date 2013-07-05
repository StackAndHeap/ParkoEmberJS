Parko.Router.map(function () {
    this.resource('parko', { path: '/' }, function() {
        this.route('open');
    });
});

Parko.ParkoRoute = Ember.Route.extend({
    model: function () {
        return Parko.Parking.find();
    }
});

Parko.ParkoIndexRoute = Ember.Route.extend({
    model: function () {
        return Parko.Parking.find();
    }
});

Parko.ParkoOpenRoute = Ember.Route.extend({
    model: function () {
        return Parko.Parking.filter(function (parking) {
            return parking.get('isAvailable');
        });
    },
    setupController: function(controller, model) {
        this.controllerFor('parko').set('openOnly', true);
    },
    renderTemplate: function(controller) {
        this.render('parko/index', {controller:controller});
    }
});