var wms_layers = [];

var format_LOT_0 = new ol.format.GeoJSON();
var features_LOT_0 = format_LOT_0.readFeatures(json_LOT_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOT_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOT_0.addFeatures(features_LOT_0);
var lyr_LOT_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOT_0, 
                style: style_LOT_0,
                popuplayertitle: 'LOT',
                interactive: false,
                title: '<img src="styles/legend/LOT_0.png" /> LOT'
            });
var format_TANDASEMPADAN_1 = new ol.format.GeoJSON();
var features_TANDASEMPADAN_1 = format_TANDASEMPADAN_1.readFeatures(json_TANDASEMPADAN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TANDASEMPADAN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TANDASEMPADAN_1.addFeatures(features_TANDASEMPADAN_1);
var lyr_TANDASEMPADAN_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TANDASEMPADAN_1, 
                style: style_TANDASEMPADAN_1,
                popuplayertitle: 'TANDA SEMPADAN',
                interactive: false,
                title: '<img src="styles/legend/TANDASEMPADAN_1.png" /> TANDA SEMPADAN'
            });

lyr_LOT_0.setVisible(true);lyr_TANDASEMPADAN_1.setVisible(true);
var layersList = [lyr_LOT_0,lyr_TANDASEMPADAN_1];
lyr_LOT_0.set('fieldAliases', {'AREA': 'AREA', 'layer': 'layer', 'lot_number': 'lot_number', 'NAMA': 'NAMA', 'NO_PA': 'NO_PA', 'mukim': 'mukim', 'X': 'X', 'Y': 'Y', 'geojson': 'geojson', });
lyr_TANDASEMPADAN_1.set('fieldAliases', {'AREA': 'AREA', 'layer': 'layer', 'lot_number': 'lot_number', 'NAMA': 'NAMA', 'NO_PA': 'NO_PA', 'mukim': 'mukim', 'X': 'X', 'Y': 'Y', 'geojson': 'geojson', 'vertex_ind': 'vertex_ind', 'vertex_par': 'vertex_par', 'vertex_p_1': 'vertex_p_1', 'vertex_p_2': 'vertex_p_2', 'distance': 'distance', 'angle': 'angle', });
lyr_LOT_0.set('fieldImages', {'AREA': '', 'layer': '', 'lot_number': '', 'NAMA': '', 'NO_PA': '', 'mukim': '', 'X': '', 'Y': '', 'geojson': '', });
lyr_TANDASEMPADAN_1.set('fieldImages', {'AREA': '', 'layer': '', 'lot_number': '', 'NAMA': '', 'NO_PA': '', 'mukim': '', 'X': '', 'Y': '', 'geojson': '', 'vertex_ind': '', 'vertex_par': '', 'vertex_p_1': '', 'vertex_p_2': '', 'distance': '', 'angle': '', });
lyr_LOT_0.set('fieldLabels', {'AREA': 'no label', 'layer': 'no label', 'lot_number': 'no label', 'NAMA': 'no label', 'NO_PA': 'no label', 'mukim': 'no label', 'X': 'no label', 'Y': 'no label', 'geojson': 'no label', });
lyr_TANDASEMPADAN_1.set('fieldLabels', {'AREA': 'no label', 'layer': 'no label', 'lot_number': 'no label', 'NAMA': 'no label', 'NO_PA': 'no label', 'mukim': 'no label', 'X': 'no label', 'Y': 'no label', 'geojson': 'no label', 'vertex_ind': 'no label', 'vertex_par': 'no label', 'vertex_p_1': 'no label', 'vertex_p_2': 'no label', 'distance': 'no label', 'angle': 'no label', });
lyr_TANDASEMPADAN_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});