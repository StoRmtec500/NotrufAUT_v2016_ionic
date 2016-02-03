/**
 * Created by martin.kuenz on 03.02.2016.
 */


function hinweis() {
    navigator.notification.alert(
        'Ein Event wurde ausgelöst!',
        null,
        'Hinweis',
        'alles klar'
    );

    console.log("Hinweis wurde ausgeführt!");
}


function test() {
    navigator.geolocation.getCurrentPosition(positionsAusgabe);

    console.log("Hinweis wurde ausgeführt!");

}

var positionsAusgabe = function(position){
    longitude = position.coords.longitude;
   document.getElementById("latitude").innerHTML = "Test" + longitude;
};

