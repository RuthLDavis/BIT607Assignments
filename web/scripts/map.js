function initMap() 
{   // changed the address from the ficticious 1 Island Street, Kerikeri that was on the menu in appendix B as I wanted to be able to add co-ordinates to my Google map on the contacts page
    var op = {lat: -35.229446557132064, lng: 173.94719161177437}; //coordinates for 35 Kerikeri Rd, Kerikeri. 
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: op
    });

    var marker = new google.maps.Marker({
    position: op,
    map: map
    });

}