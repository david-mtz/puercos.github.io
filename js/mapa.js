var mymap = L.map('mapa').setView([26.890,-105.423], 5);

var greenIcon = L.icon({
    iconUrl: 'https://cdn2.iconfinder.com/data/icons/places-4/100/heart_place_marker_location_love-512.png',
    shadowUrl: 'https://cdn2.iconfinder.com/data/icons/places-4/100/heart_place_marker_location_love-512.png',
    iconSize: [35, 35], // size of the icon
    shadowSize:   [20, 20], // size of the shadow
    iconAnchor:   [20, 20], // point of the icon which will correspond to marker's location
    shadowAnchor: [20, 20],  // the same for the shadow
    popupAnchor:  [-3, -20] // point from which the popup should open relative to the iconAnchor
});

var datos_crit = [
	{
		"crit": "CRIT Estado de México",
		"recursos_necesarios": "81307742.310745",
		"ingresos_comprometidos": "71032193.818896",
		"esperado_cumplimiento": "0.98",
		"ingresos_esperados": "69611549.942518",
		"recursos_evento": "11696192.368227",
		"capacidad_ninos": "2289",
		"costo_anual_x_paciente": "35521.075714611",
		"ninos_x_cubrir": "329.27472304606",
                                    "lat": 19.5697051,"long": -99.20479
	},
	{
		"crit": "CRIT Oaxaca",
		"recursos_necesarios": "37779435.921344",
		"ingresos_comprometidos": "32000000",
		"esperado_cumplimiento": "0.8",
		"ingresos_esperados": "25600000",
		"recursos_evento": "12179435.921344",
		"capacidad_ninos": "981",
		"costo_anual_x_paciente": "38511.147728179",
		"ninos_x_cubrir": "316.25741219943",
                                    "lat": 16.9960836,"long": -96.757668
	},
	{
		"crit": "CRIT Chihuahua",
		"recursos_necesarios": "39654017.2132",
		"ingresos_comprometidos": "36994960",
		"esperado_cumplimiento": "0.8",
		"ingresos_esperados": "29595968",
		"recursos_evento": "10058049.2132",
		"capacidad_ninos": "981",
		"costo_anual_x_paciente": "40422.035895209",
		"ninos_x_cubrir": "248.82589385836",
                                    "lat": 28.625256,"long": -106.0286477
	},
	{
		"crit": "CRIT Michoacán",
		"recursos_necesarios": "37110265.01",
		"ingresos_comprometidos": "42900000",
		"esperado_cumplimiento": "0.25",
		"ingresos_esperados": "10725000",
		"recursos_evento": "26385265.01",
		"capacidad_ninos": "997.35",
		"costo_anual_x_paciente": "37208.868511556",
		"ninos_x_cubrir": "709.11226450774",
                                    "lat": 19.726026,"long": -101.1846305
	},
];



L.tileLayer('https://{s}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey=91afc0119020434983f563caa213ed2f', {
	attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	apikey: '91afc0119020434983f563caa213ed2f',
	maxZoom: 22
}).addTo(mymap);

var ubicacion_crit = [{"nombre": "CRIT Estado de México", "lat": 19.5697051,"long": -99.20479},
{"nombre": "CRIT Oaxaca", "lat": 16.9960836,"long": -96.757668},
{"nombre": "CRIT Chihuahua", "lat": 28.625256,"long": -106.0286477},
{"nombre": "CRIT Michoacán", "lat": 19.726026,"long": -101.1846305},
];



for(i=0; i<ubicacion_crit.length; i++) {
    L.marker([ubicacion_crit[i].lat, ubicacion_crit[i].long], {icon: greenIcon}).addTo(mymap).bindPopup(ubicacion_crit[i].nombre).on('click', onClickMap);
}

function onClickMap(e) {
    var punto = e;
    $.each(datos_crit, function(k, dato){
        if( punto.latlng.lat ==  dato.lat ) {
            var modal_body = $("#modal-informacion").find('.modal-body');
            var informacion = '<h3>' + dato.crit +'</h3>';
            informacion += '<b>Recursos necesarios</b>: $' + parseFloat(dato.recursos_necesarios).toLocaleString('en') +'</br>';
            informacion += '<b>Ingresos comprometidos</b>: $' + parseFloat(dato.ingresos_comprometidos).toLocaleString('en') +'</br>';
            informacion += '<b>Ingresos esperados</b>: $' + parseFloat(dato.ingresos_esperados).toLocaleString('en') +'</br>';
            informacion += '<b>Recursos necesarios en evento</b>: $' + parseFloat(dato.recursos_evento).toLocaleString('en') +'</br>';
            informacion += '<b>Capacidad de niños</b>: $' + parseFloat(dato.capacidad_ninos).toLocaleString('en') +'</br>';
            informacion += '<b>Costo anual por paciente</b>: $' + parseFloat(dato.costo_anual_x_paciente).toLocaleString('en') +'</br>';
            informacion += '<b>Niños por cubrir</b>: $' + parseFloat(dato.ninos_x_cubrir).toLocaleString('en') +'</br>';
            modal_body.html(informacion);
            $("#modal-informacion").modal();
            
            return;
        }
    });
}
