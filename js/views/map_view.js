Parko.MapView = Ember.View.extend({
    tagName: "div",
    classNames: ["mapContainer"],

    directionsDisplay: null,
    directionsService: new google.maps.DirectionsService(),

    parking: null,
    mapObject: null,
    currentPosition: null,

    didInsertElement: function () {
        this.getLocation();
    },

    renderMap: function () {
        if (this.mapObject == null) {
            this.createMap();
        }
        if (this.currentPosition !== null) {

            if (this.parking !== undefined) {
                var request = {
                    origin: new google.maps.LatLng(this.currentPosition.coords.latitude, this.currentPosition.coords.longitude),
                    destination: new google.maps.LatLng(this.parking.get("lat"), this.parking.get("long")),
                    travelMode: google.maps.DirectionsTravelMode.DRIVING
                };

                var self = this;
                this.directionsService.route(request, function (response, status) {
                    if (status == google.maps.DirectionsStatus.OK) {
                        self.directionsDisplay.setMap(self.mapObject);
                        self.directionsDisplay.setDirections(response);
                    }
                });
            } else {
                this.mapObject.setZoom(16);
                this.directionsDisplay.setMap(null);
                this.mapObject.setCenter(new google.maps.LatLng(this.currentPosition.coords.latitude, this.currentPosition.coords.longitude));
            }

        } else {
            if (this.parking !== undefined) {
                this.mapObject.setZoom(16);
                this.mapObject.setCenter(new google.maps.LatLng(this.parking.get("lat"), this.parking.get("long")));
            }
        }
    },

    createMap: function () {
        this.directionsDisplay = new google.maps.DirectionsRenderer();
        var mapOptions = {
            center: new google.maps.LatLng(40.714353, -74.005973),
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false
        };

        this.mapObject = new google.maps.Map(this.$().get(0), mapOptions);

        this.directionsDisplay.setMap(this.mapObject);
    },

    getLocation: function () {
        if (navigator.geolocation) {
            var self = this;
            navigator.geolocation.getCurrentPosition(function (position) {
                self.currentPosition = position;
                self.renderMap();
            });
        }
        else {
            currentPosition = null;
        }
    },

    changePosition: function () {
        this.renderMap();
    }.observes("parking")
});