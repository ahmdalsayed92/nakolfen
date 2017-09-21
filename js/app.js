/*=================================APPLICATION CONTROLLER=====================================*/

var app = angular.module('nakolEh', []);
app.controller('nakolEhCtrl', function ($scope) {

    // All map scripts
    // initialize google map API

    $scope.map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 30.0444, lng: 31.2357 }, // cairo location (in case of the user Geolocation doesn't work)
        zoom: 17
    });

    //  get user location by built in HTML 5 Geolocation method.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            $scope.userPos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            // change the map center to the user current location
            $scope.map.setCenter($scope.userPos);
            //add a marker on the current user location
            $scope.marker = new google.maps.Marker({ position: $scope.userPos, icon: '../images/user-location.png' });
            $scope.marker.setMap($scope.map);
            $scope.userLocation = new google.maps.LatLng($scope.userPos.lat, $scope.userPos.lng);
            $scope.request = {
                location: $scope.userLocation,
                radius: '500',
                type: ['restaurant']
            };
            $scope.service = new google.maps.places.PlacesService($scope.map);
            $scope.service.nearbySearch($scope.request, $scope.callback);
        });
    } else {
        // if the browser doesn't support Geolocation
        alert("error");
    }
    $scope.callback = function (results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {

            for (var i = 0; i < results.length; i++) {
                $scope.place = results[i];
                $scope.marker = new google.maps.Marker({
                    map: $scope.map,
                    position: $scope.place.geometry.location,
                    title: $scope.place.name,
                });
            }

        }
    }


    $scope.resturants = [
        {
            id: 0,
            name: "KFC",
            logo: "../images/kfc.jpg",
            category: "Sandwiches, FastFood",
            info: "Tincidunt integer eu augue augue nunc elit dolor, luctus placerat scelerisque euismod, iaculis eu lacus nunc mi elit, vehicula ut laoreet ac, aliquam sit amet justo nunc tempor, metus vel.",
            rating: 4,
            numRate: 895,
            price: "mid",
            time: "60min",
            numb: "19019"

        },
        {
            id: 1,
            name: "hardees",
            logo: "../images/hardees.jpg",
            category: "Sandwiches, FastFood",
            info: "Tincidunt integer eu augue augue nunc elit dolor, luctus placerat scelerisque euismod, iaculis eu lacus nunc mi elit, vehicula ut laoreet ac, aliquam sit amet justo nunc tempor, metus vel.",
            rating: 4,
            numRate: 709,
            price: "mid",
            time: "60min",
            numb: "19469"

        },
        {
            id: 2,
            name: "testy pesty",
            logo: "../images/testy.jpg",
            category: "pizza, FastFood",
            info: "Tincidunt integer eu augue augue nunc elit dolor, luctus placerat scelerisque euismod, iaculis eu lacus nunc mi elit, vehicula ut laoreet ac, aliquam sit amet justo nunc tempor, metus vel.",
            rating: 3.5,
            numRate: 458,
            price: "mid",
            time: "60min",
            numb: "19916"

        },
        {
            id: 3,
            name: "Pastaweesy",
            logo: "../images/pasta.jpg",
            category: "Pasta, FastFood",
            info: "Tincidunt integer eu augue augue nunc elit dolor, luctus placerat scelerisque euismod, iaculis eu lacus nunc mi elit, vehicula ut laoreet ac, aliquam sit amet justo nunc tempor, metus vel.",
            rating: 4,
            numRate: 1202,
            price: "mid",
            time: "60min",
            numb: "19020"

        },
        {
            id: 4,
            name: "AL Dahan",
            logo: "../images/dahan.jpg",
            category: "orintal, grills",
            info: "Tincidunt integer eu augue augue nunc elit dolor, luctus placerat scelerisque euismod, iaculis eu lacus nunc mi elit, vehicula ut laoreet ac, aliquam sit amet justo nunc tempor, metus vel.",
            rating: 4,
            numRate: 395,
            price: "high",
            time: "70min",
            numb: "19147"

        },
        {
            id: 5,
            name: "spectra",
            logo: "../images/spectra.jpg",
            category: "pasta, FastFood",
            info: "Tincidunt integer eu augue augue nunc elit dolor, luctus placerat scelerisque euismod, iaculis eu lacus nunc mi elit, vehicula ut laoreet ac, aliquam sit amet justo nunc tempor, metus vel.",
            rating: 2.5,
            numRate: 992,
            price: "mid",
            time: "60min",
            numb: "19972"

        },
        {
            id: 6,
            name: "papa jhon's pizza",
            logo: "../images/papa.jpg",
            category: "pizza",
            info: "Tincidunt integer eu augue augue nunc elit dolor, luctus placerat scelerisque euismod, iaculis eu lacus nunc mi elit, vehicula ut laoreet ac, aliquam sit amet justo nunc tempor, metus vel.",
            rating: 3.5,
            numRate: 1365,
            price: "mid",
            time: "60min",
            numb: "19658"

        },
        {
            id: 7,
            name: "McDonald’s",
            logo: "../images/mac.png",
            category: "Sandwiches, FastFood",
            info: "Tincidunt integer eu augue augue nunc elit dolor, luctus placerat scelerisque euismod, iaculis eu lacus nunc mi elit, vehicula ut laoreet ac, aliquam sit amet justo nunc tempor, metus vel.",
            rating: 4,
            numRate: 1798,
            price: "mid",
            time: "60min",
            numb: "19991"

        },
        {
            id: 8,
            name: "nubia",
            logo: "../images/nobia.gif",
            category: "pasta, pies",
            info: "Tincidunt integer eu augue augue nunc elit dolor, luctus placerat scelerisque euismod, iaculis eu lacus nunc mi elit, vehicula ut laoreet ac, aliquam sit amet justo nunc tempor, metus vel.",
            rating: 3,
            numRate: 965,
            price: "mid",
            time: "60min",
            numb: "19159"

        },
        {
            id: 9,
            name: "zack's",
            logo: "../images/zack.jpg",
            category: "burger, FastFood",
            info: "Tincidunt integer eu augue augue nunc elit dolor, luctus placerat scelerisque euismod, iaculis eu lacus nunc mi elit, vehicula ut laoreet ac, aliquam sit amet justo nunc tempor, metus vel.",
            rating: 3,
            numRate: 659,
            price: "mid",
            time: "60min",
            numb: "19369"

        }
    ]

});


/*=================================MAP API=====================================*/




