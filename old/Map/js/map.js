var map;

require([
    "esri/map",
    "esri/geometry/Point",
    "esri/symbols/SimpleMarkerSymbol",
    "esri/graphic",
 "esri/layers/GraphicsLayer",
 "esri/SpatialReference",
 "esri/Color", "esri/InfoTemplate",
    "dojo/dom", "dojo/on", "dojo/domReady!"
], function (
    Map,
    Point,
    SimpleMarkerSymbol,
    Graphic,
    GraphicsLayer,
    SpatialReference,
    Color,
    InfoTemplate,
    dom,
    on
) {
    map = new Map("mapDiv", {
        basemap: "streets",
        center: [-25.312, 34.307],
        zoom: 3
    });


    // markerSymbol is used for point and multipoint, see http://raphaeljs.com/icons/#talkq for more examples
    var markerSymbol = new SimpleMarkerSymbol(),
        gl = new GraphicsLayer({
            id: "circles"
        });
    markerSymbol.setPath("M16,4.938c-7.732,0-14,4.701-14,10.5c0,1.981,0.741,3.833,2.016,5.414L2,25.272l5.613-1.44c2.339,1.316,5.237,2.106,8.387,2.106c7.732,0,14-4.701,14-10.5S23.732,4.938,16,4.938zM16.868,21.375h-1.969v-1.889h1.969V21.375zM16.772,18.094h-1.777l-0.176-8.083h2.113L16.772,18.094z");
    markerSymbol.setColor(new Color("#00FFFF"));


    var sms = new SimpleMarkerSymbol().setStyle(
        SimpleMarkerSymbol.STYLE_SQUARE).setColor(
        new Color([255, 0, 0, 0.5]));

    map.addLayer(gl);
    var symbol = markerSymbol,
        i;
    for (i = 0; i < Stations.length; i += 1) {
        var point = new Point(Stations[i].lon, Stations[i].lat, new SpatialReference({
            wkid: 4326
        })); //, graphic1 = new Graphic(point, symbol);

        var attr = {
            "stationId": Stations[i].stationId,
            "lat": Stations[i].lat,
            "lon": Stations[i].lon,
            "yyyy": Stations[i].yyyy,
            "mm": Stations[i].mm,
            "dd": Stations[i].dd,
            "hh": Stations[i].hh,
            "min": Stations[i].min,
            "WDIR": Stations[i].WDIR,
            "WSPD": Stations[i].WSPD,
            "GST": Stations[i].GST,
            "WVHT": Stations[i].WVHT,
            "DPD": Stations[i].DPD,
            "APD": Stations[i].APD,
            "MWD": Stations[i].MWD,
            "PRES": Stations[i].PRES,
            "PTDY": Stations[i].PTDY,
            "ATMP": Stations[i].ATMP,
            "WTMP": Stations[i].WTMP,
            "DEWP": Stations[i].DEWP,
            "VIS": Stations[i].VIS,
            "TIDE": Stations[i].TIDE,
        };
        //var attr = {"Station Id":"hello","Ycoord":"world","Plant":"Mesa Mint"};

        var infoTemplate = new InfoTemplate(
            "NDBC",
            "stationId: ${stationId} <br/> lat:${lat} <br/> lon:${lon} <br/> yyyy:${yyyy} <br/> mm:${mm} <br/> dd:${dd} <br/> hh:${hh} <br/>       min:${min} <br/> WDIR:${WDIR} <br/> WSPD:${WSPD} <br/> GST:${GST} <br/> WVHT:${WVHT} <br/> DPD:${DPD} <br/> APD:${APD} <br/> MWD:${MWD} <br/>			PRES:${PRES} <br/>  PTDY:${PTDY} <br/> ATMP:${ATMP} <br/> WTMP:${WTMP} <br/> DEWP:${DEWP} <br/> VIS:${VIS} <br/> TIDE:${TIDE}"

        );

        var graphic = new Graphic(point, symbol, attr, infoTemplate);

        gl.add(graphic);
    }
});
