const localmap = new ol.Map({
  layers: [
      new ol.layer.Tile({
          source: new ol.source.OSM()
      })
  ],
  source: vectorSource,
  target: 'map',
  view: new ol.View({
      center: [-658587.715260747, 7283495.399471995],
      zoom: 6
  })
});


var vectorSource = new ol.source.Vector({
});
var vectorLayer = new ol.layer.Vector({
source: vectorSource
});
localmap.addLayer(vectorLayer);

localmap.on('singleclick', function (evt) {
console.log(evt.coordinate);


console.log('longitude: ', longitude);
console.log('latitude: ', latitude);

 fetch('https://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid=55a5610b80120161a285928165c46c57&units=metric') 
  .then(function(response) {
    //  convert coordinate to EPSG-4326
    var coOrdinatesClicked = ol.proj.transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326')
    document.getElementById("longitude").value = coOrdinatesClicked[0]
    document.getElementById("latitude").value = coOrdinatesClicked[1]
    console.log(coOrdinatesClicked[0]);
    
     return response.json();
    
    
    
    
  })
  
  });




