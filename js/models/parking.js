Parko.Parking = DS.Model.extend({
    title: DS.attr("string"),
    long: DS.attr("string"),
    lat: DS.attr("string"),
    isAvailable: DS.attr("boolean"),
    availableSpots: DS.attr("int"),
    isSelected: DS.attr('boolean', { default: false })
});

Parko.Parking.FIXTURES = [
    {
        id:1,
        title: "P Broeltorens",
        long:"3.268091527309480",
        lat:"50.8312216768968",
        isAvailable:true,
        availableSpots:122
    },
    {
        id:2,
        title: "P Schouwburg",
        long:"3.26671018966681",
        lat:"50.82612384626342",
        isAvailable:true,
        availableSpots:22
    },
    {
        id:3,
        title: "P Veemarkt",
        long:"3.275379089202943",
        lat:"50.826577912917884",
        isAvailable:false,
        availableSpots:0
    },
    {
        id:4,
        title: "P Appel",
        long:"3.256311265316072",
        lat:"50.824864974199286",
        isAvailable:true,
        availableSpots:40
    },
    {
        id:5,
        title: "P Station-Tack",
        long:"3.261152652587953",
        lat:"50.82365689950371",
        isAvailable:false,
        availableSpots:0
    },
    {
        id:6,
        title: "P Expo",
        long:"3.276924041595521",
        lat:"50.80537438943953",
        isAvailable:true,
        availableSpots:110
    },
    {
        id:7,
        title: "P Veemarkt 2",
        long:"3.275379089202933",
        lat:"50.826577912917895",
        isAvailable:false,
        availableSpots:0
    },
    {
        id:8,
        title: "P Appel 2",
        long:"3.256311265316079",
        lat:"50.824864974199295",
        isAvailable:true,
        availableSpots:40
    },
    {
        id:9,
        title: "P Station-Tack 2",
        long:"3.261152652587948",
        lat:"50.82365689950363",
        isAvailable:false,
        availableSpots:0
    },
    {
        id:10,
        title: "P Expo",
        long:"3.276924041595528",
        lat:"50.80537438943959",
        isAvailable:true,
        availableSpots:110
    }
];