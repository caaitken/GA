function createMap(){

	var officeLocation = new google.maps.LatLng(51.522534, -0.109436);
	 
	var homeLocation = new google.maps.LatLng(51.532534, -0.109536);

	var mapOptions ={
		zoom: 12,
		center: officeLocation
	};

	var map=new google.maps.Map(document.getElementById('map-canvas'),
		mapOptions);

	var office = new google.maps.Marker({
		position: officeLocation,
		map: map 
	});

	var home = new google.maps.Marker({
		position: homeLocation,
		map: map 
	});

	var infowindow = new google.maps.Infowindow();

	google.maps.event.addListener(office, 'click', function(){
		infowindow.setContent("Office!");
		infowindow.open(map, office);
		map.setCenter(officeLocation);
	});

	google.maps.event.addListener(office, 'click', function(){
		infowindow.setContent("Home!");
		infowindow.open(map, home);
		map.setCenter(homeLocation);
	})

}

google.maps.event.addDomListener(window, 'load', createMap);