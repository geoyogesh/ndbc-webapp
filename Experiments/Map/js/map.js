var map;

require([
    "esri/map",
    "esri/geometry/Point",
    "esri/symbols/SimpleMarkerSymbol",
    "esri/graphic",
	"esri/layers/GraphicsLayer",
	"esri/SpatialReference",
    "esri/Color", "dojo/dom", "dojo/on", "dojo/domReady!"
], function (
    Map,
	Point,
    SimpleMarkerSymbol,
    Graphic,
	GraphicsLayer,
	SpatialReference,
    Color,
    dom,
    on
) {
    map = new Map("mapDiv", {
        basemap: "streets",
        center: [-25.312, 34.307],
        zoom: 3
    });


    // markerSymbol is used for point and multipoint, see http://raphaeljs.com/icons/#talkq for more examples
    var markerSymbol = new SimpleMarkerSymbol(), gl = new GraphicsLayer({ id: "circles" });
    markerSymbol.setPath("M16,4.938c-7.732,0-14,4.701-14,10.5c0,1.981,0.741,3.833,2.016,5.414L2,25.272l5.613-1.44c2.339,1.316,5.237,2.106,8.387,2.106c7.732,0,14-4.701,14-10.5S23.732,4.938,16,4.938zM16.868,21.375h-1.969v-1.889h1.969V21.375zM16.772,18.094h-1.777l-0.176-8.083h2.113L16.772,18.094z");
    markerSymbol.setColor(new Color("#00FFFF"));

    map.addLayer(gl);
    var symbol = markerSymbol, i;
    for (i = 0; i < Stations.length; i += 1) {
        var point = new Point(Stations[i].lon, Stations[i].lat, new SpatialReference({wkid: 4326})), graphic1 = new Graphic(point, symbol);

        gl.add(graphic1);
    }
});
