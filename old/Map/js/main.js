var Stations;

function Station(x) {
    "use strict";

    var y = x.split(' '),
        inputarray = [];
    y.forEach(function (entry) {
        if (entry) {
            inputarray.push(entry);
        }
    });

    this.stationId = inputarray[0];
    this.lat = inputarray[1];
    this.lon = inputarray[2];
    this.yyyy = inputarray[3];
    this.mm = inputarray[4];
    this.dd = inputarray[5];
    this.hh = inputarray[6];
    this.min = inputarray[7];
    this.WDIR = inputarray[8];
    this.WSPD = inputarray[9];
    this.GST = inputarray[10];
    this.WVHT = inputarray[11];
    this.DPD = inputarray[12];
    this.APD = inputarray[13];
    this.MWD = inputarray[14];
    this.PRES = inputarray[15];
    this.PTDY = inputarray[16];
    this.ATMP = inputarray[17];
    this.WTMP = inputarray[18];
    this.DEWP = inputarray[19];
    this.VIS = inputarray[20];
    this.TIDE = inputarray[21];

}

function loadXMLDoc() {
    "use strict";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4) {

            if (xmlhttp.status === 200) {
                var station_array = [],
    x = xmlhttp.responseText.split('\n'),
    i;
for (i = 2; i < x.length; i = i + 1) {
    station_array.push(new Station(x[i]));
}
Stations = station_array;
            } else if (xmlhttp.status === 400) {
                window.alert('There was an error 400');
            } else {
                window.alert('something else other than 200 was returned');
            }
        }
    };
    //http://www.ndbc.noaa.gov/data/latest_obs/latest_obs.txt
    xmlhttp.open("GET", "data/latest_obs.txt", true);
    xmlhttp.send();
}
loadXMLDoc();
