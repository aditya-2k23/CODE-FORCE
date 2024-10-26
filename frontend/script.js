function initMap() {
  var options = {
    zoom: 8,
    center: { lat: 31.2543171, lng: 75.795623 },
  };

  var map = new google.maps.Map(document.getElementById("map"), options);

  google.maps.event.addListener(map, "click", function (event) {
    addMarker({ coords: event.latLng });
  });

  // var marker = new google.maps.Marker({
  //   position: { lat: 42.4668, lng: -70.9495 },
  //   map: map,
  //   icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
  // });

  // var infoWindow = new google.maps.InfoWindow({
  //   content: "<h1>Hello</h1>",
  // });

  // marker.addEventListener("click", function () {
  //   infoWindow.open(map, marker);
  // });

  var markers = [
    {
      coords: { lat: 42.3601, lng: -71.0589 },
      iconImage:
        "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
      content: "<h1>Hello</h1>",
    },
    {
      coords: { lat: 42.8584, lng: -70.93 },
      content: "<h1>Ho HO ho</h1>",
    },
    {
      coords: { lat: 42.7762, lng: -71.0773 },
    },
  ];

  for (var i = 0; i < markers.length; i++) {
    addMarker(markers[i]);
  }

  function addMarker(props) {
    var marker = new google.maps.Marker({
      position: props.coords,
      map: map,
      icon: props.iconImage,
    });

    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }

    if (props.content) {
      var infoWindow = new google.maps.InfoWindow({
        content: props.content,
      });

      marker.addListener("click", function () {
        infoWindow.open(map, marker);
      });
    }
  }
}
