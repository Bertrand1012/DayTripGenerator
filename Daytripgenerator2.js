"use strict";

function randomDestination()        { 
    let destinations =  ['Florida', 'Louisiana', 'Texas', 'Colorado', 'Arizona'];
    let destinationIndex = Math.floor(Math.random()*destinations.length);
    let destination = destinations[destinationIndex];
    return destination;
                                    }

function randomRestaurant()         {

let Restaurants =  ['Burger King', 'Red Lobster', 'Taco Bell', 'Outback', 'Saltgrass'];
let RestaurantIndex = Math.floor(Math.random()*Restaurants.length);
let Restaurant = Restaurants[RestaurantIndex];
return Restaurant;
                                    }

function randomTransportation()     {

let Transportations =  ['Airplane', 'Car', 'Train', 'Bus', 'Walk'];
let TransportationIndex = Math.floor(Math.random()*Transportations.length);
let Transportation = Transportations[TransportationIndex];
return Transportation;
                                    }

function randomEntertainment()      {

let Entertainments =  ['Movies', 'Baseball Game', 'Read a Book', 'Ride Motorcycle', 'Tours'];
let EntertainmentIndex = Math.floor(Math.random()*Entertainments.length);
let Entertainment = Entertainments[EntertainmentIndex];
return Entertainment;
                                    }

let chosenDestination = randomDestination();
let chosenRestaurant = randomRestaurant();
let chosenTransportation = randomTransportation();
let chosenEntertainment= randomEntertainment();

console.log('Destination is:' + chosenDestination);
console.log('Restaurant is:' + chosenRestaurant);
console.log('Transportation is:' + chosenTransportation);
console.log('Entertainment is:' + chosenEntertainment);

function like() {
    let askAgain = prompt(" Do you like this? yes or no");
    return askAgain;
                }

function tryAgainDestination() {
let reselect = prompt("Are you happy with the Destination? Enter yes or no get a new one.");
return reselect;
  }
function tryAgainRestaurant() {
let reselect2 = prompt("Are you happy with the Restaurant? Enter yes or no get a new one.");
return reselect2;
}
function tryAgainTransportation() {
let reselect3 = prompt("Are you happy with the Transportation? Enter yes or no get a new one.");
return reselect3;
}
function tryAgainEntertainment() {
let reselect4 = prompt("Are you happy with the Entertainment? Enter yes or no get a new one.");
return reselect4;
}
/*let Intinerary = "Your destination is "  + chosenDestination + " and you are dining at "
 + chosenRestaurant + ". The mode of transportation will be " + chosenTransportation +
  " and your entertainment is " + chosenEntertainment + "."; 

  alert (Intinerary);
  console.log (Intinerary)
*/
let destination = "Your destination is " + chosenDestination + ".";
alert (destination);
console.log(destination);

  let answer = "no";

while (answer !== "yes") {
    answer = like();
 
    if (answer === "yes") {
        alert("Great");
        
        console.log("Great")
        break;
    }
    else if (answer === "no"){

        let chosenDestination = randomDestination();


     

      let newDest = "Your new destination is:  " + chosenDestination +  ".";


   answer = alert(newDest);

    
  console.log (newDest)
    

   

}
}

let restaurant = "Your restaurant is " + chosenRestaurant + ".";
alert (restaurant);
console.log(restaurant);

  let answer2 = "no";

while (answer2 !== "yes") {
    answer2 = like();
 
    if (answer2 === "yes") {
        alert("Great, enjoy your meal");
        
        console.log("Great, enjoy your meal")
        break;
    }
    else if (answer2 === "no"){

        let chosenRestaurant = randomRestaurant();


     

      let newRest = "Your new restaurant is:  " + chosenRestaurant +  ".";


   answer2 = alert(newRest);

    
  console.log (newRest)
    

   

}
}

let transportation = "Your mode of transportation is " + chosenTransportation + ".";
alert (transportation);
console.log(transportation);

  let answer3 = "no";

while (answer3 !== "yes") {
    answer3 = like();
 
    if (answer3 === "yes") {
        alert("Great, enjoy the ride");
        
        console.log("Great, enjoy the ride")
        break;
    }
    else if (answer3 === "no"){

        let chosenTransportation = randomTransportation();


     

      let newTrans = "Your new transportation is:  " + chosenTransportation +  ".";


   answer3 = alert(newTrans);

    
  console.log (newTrans)
}
}

let entertainment = "Your entertainment for the night is " + chosenEntertainment + ".";
alert (entertainment);
console.log(entertainment);

  let answer4 = "no";

while (answer4 !== "yes") {
    answer4 = like();
 
    if (answer4 === "yes") {
        alert("Awesome");
        
        console.log("Awesome")
        break;
    }
    else if (answer4 === "no"){

        let chosenEntertainment = randomEntertainment();


     

      let newEnter = "Your new entertainment is:  " + chosenEntertainment +  ".";


   answer4 = alert(newEnter);

    
  console.log (newEnter)
}
}

let Intinerary = "Your destination is "  + chosenDestination + " and you are dining at "
 + chosenRestaurant + ". The mode of transportation will be " + chosenTransportation +
  " and your entertainment is " + chosenEntertainment + ". Confirm with yes or no"; 
alert (Intinerary);
console.log(Intinerary)

  let answer5 = "no";
  while (answer5 !== "yes") {
    answer5 = like();
 
    if (answer5 === "yes") {
        alert("Enjoy your Daytrip!");
        
        console.log("Enjoy your Daytrip!")
        break;
    }
    else if (answer5 === "no"){

        let chosenEntertainment = randomEntertainment();
        let chosenDestination = randomDestination();
        let chosenRestaurant = randomRestaurant();
        let chosenTransportation = randomTransportation();



     

      let newIntin = "Your new Itinerary is:  " + chosenDestination + " and you are dining at "
      + chosenRestaurant + ". The mode of transportation will be " + chosenTransportation +
       " and your entertainment is " + chosenEntertainment + ". Confirm with yes or no"; 


   answer5 = alert(newIntin);

    
  console.log (newIntin)
}
}

  //alert (Intinerary);
  //console.log (Intinerary)