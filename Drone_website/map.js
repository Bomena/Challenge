let map;

require([
    "esri/map",
    "esri/dijit/LocateButton",
    "dojo/domReady!"
], function(
    Map, LocateButton
)  {

    map = new Map("map", {
        //center: [126.6555, 37.38520],
        center: [127.5268, 36.5811],
        zoom: 17,
        basemap: "streets-vector"
    });

    var geoLocate = new LocateButton({
        map: map

    }, "LocateButton");
    geoLocate.startup();

});


/*require([
    "esri/map",
    "esri/layers/OpenStreetMapLayer",
    "esri/dijit/LocateButton",
    "dojo/domReady!"
], function (Map, OpenStreetMapLayer, LocateButton){

    let openStreetMapLayer, LocateButton;

    map = new Map("esri-map-container", {
        //center: [127.5268, 36.5811],
        center: [126.6555, 37.38520],
        zoom: 18
        basemap: "streets-vector"
    });
    openStreetMapLayer = new OpenStreetMapLayer();
    geoLocate = new LocateButton({
        map: map
    }, "LocateButton");
    geoLocate.startup();
    map.addLayer(openStreetMapLayer);
});
*/