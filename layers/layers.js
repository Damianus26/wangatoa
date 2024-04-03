ol.proj.get("EPSG:32751").setExtent([546167.040722, 9074094.817873, 547563.368336, 9074730.164885]);
var wms_layers = [];

        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'GoogleSatellite_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>'})],
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });var format_SAMBUNGANRUMAHWANGATOA_1 = new ol.format.GeoJSON();
var features_SAMBUNGANRUMAHWANGATOA_1 = format_SAMBUNGANRUMAHWANGATOA_1.readFeatures(json_SAMBUNGANRUMAHWANGATOA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32751'});
var jsonSource_SAMBUNGANRUMAHWANGATOA_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SAMBUNGANRUMAHWANGATOA_1.addFeatures(features_SAMBUNGANRUMAHWANGATOA_1);var lyr_SAMBUNGANRUMAHWANGATOA_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SAMBUNGANRUMAHWANGATOA_1, 
                style: style_SAMBUNGANRUMAHWANGATOA_1,
                title: '<img src="styles/legend/SAMBUNGANRUMAHWANGATOA_1.png" /> SAMBUNGAN RUMAH WANGATOA'
            });var format_JARINGANPIPA_2 = new ol.format.GeoJSON();
var features_JARINGANPIPA_2 = format_JARINGANPIPA_2.readFeatures(json_JARINGANPIPA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32751'});
var jsonSource_JARINGANPIPA_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_JARINGANPIPA_2.addFeatures(features_JARINGANPIPA_2);var lyr_JARINGANPIPA_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JARINGANPIPA_2, 
                style: style_JARINGANPIPA_2,
    title: 'JARINGAN PIPA<br />\
    <img src="styles/legend/JARINGANPIPA_2_0.png" /> 1<br />\
    <img src="styles/legend/JARINGANPIPA_2_1.png" /> 2<br />\
    <img src="styles/legend/JARINGANPIPA_2_2.png" /> <br />'
        });var format_ZONAWANGATOA_3 = new ol.format.GeoJSON();
var features_ZONAWANGATOA_3 = format_ZONAWANGATOA_3.readFeatures(json_ZONAWANGATOA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32751'});
var jsonSource_ZONAWANGATOA_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ZONAWANGATOA_3.addFeatures(features_ZONAWANGATOA_3);var lyr_ZONAWANGATOA_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZONAWANGATOA_3, 
                style: style_ZONAWANGATOA_3,
    title: 'ZONA WANGATOA<br />\
    <img src="styles/legend/ZONAWANGATOA_3_0.png" /> 1<br />\
    <img src="styles/legend/ZONAWANGATOA_3_1.png" /> 2<br />\
    <img src="styles/legend/ZONAWANGATOA_3_2.png" /> <br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_SAMBUNGANRUMAHWANGATOA_1.setVisible(true);lyr_JARINGANPIPA_2.setVisible(true);lyr_ZONAWANGATOA_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_SAMBUNGANRUMAHWANGATOA_1,lyr_JARINGANPIPA_2,lyr_ZONAWANGATOA_3];
lyr_SAMBUNGANRUMAHWANGATOA_1.set('fieldAliases', {'id': 'id', 'NAMA': 'NAMA', });
lyr_JARINGANPIPA_2.set('fieldAliases', {'id': 'id', 'PANJANG': 'PANJANG', });
lyr_ZONAWANGATOA_3.set('fieldAliases', {'id': 'id', 'LUAS': 'LUAS', });
lyr_SAMBUNGANRUMAHWANGATOA_1.set('fieldImages', {'id': 'TextEdit', 'NAMA': 'TextEdit', });
lyr_JARINGANPIPA_2.set('fieldImages', {'id': 'TextEdit', 'PANJANG': 'TextEdit', });
lyr_ZONAWANGATOA_3.set('fieldImages', {'id': 'TextEdit', 'LUAS': 'TextEdit', });
lyr_SAMBUNGANRUMAHWANGATOA_1.set('fieldLabels', {'id': 'inline label', 'NAMA': 'inline label', });
lyr_JARINGANPIPA_2.set('fieldLabels', {'id': 'inline label', 'PANJANG': 'no label', });
lyr_ZONAWANGATOA_3.set('fieldLabels', {'id': 'inline label', 'LUAS': 'inline label', });
lyr_ZONAWANGATOA_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});