"use strict";


//function generateRandomDestination (Florida, Louisiana, Texas, Colorado, Arizona)

 //   {   
    
   //         return Math.floor(Math.random() * (generateRandomDestination)+1);
//console.log("generateRandomDestination");
    //let generateRandomDestination = [];

    //let Florida = generateRandomDestination[0];
   // let Louisiana = generateRandomDestination[1];
   // let Texas = generateRandomDestination[2];
  //  let Colorado = generateRandomDestination[3];
  //  let Arizona = generateRandomDestination[4];
//generateRandomDestination = Math.floor(generateRandomDestination)+1;
//console.log(runProgram);


  //  }

   //////// let generateRandomDestination = ['Florida', 'Louisiana', 'Texas', 'Colorado', 'Arizona'];{

  /////  let Florida = generateRandomDestination[0];
  /////  let Louisiana = generateRandomDestination[1];
  ////  let Texas = generateRandomDestination[2];
 /////  let Colorado = generateRandomDestination[3];
  ///// let Arizona = generateRandomDestination[4];

  /////let Destination = ['generateRandomDestination'.charAt(Math.floor(Math.random()*5))];
//////console.log('Destination: ' + Destination);
  ////  }

  //  let generateRandomDestination = Math.random *4 (
  //  generateRandomDestination = Math.floor(generateRandomDestination) +1
  //  )

  //function generateRandomDestination(Florida, Louisiana, Texas, Colorado, Arizona) {
   // let result = '';
   //         for (var i = length; i > 0;--i) result += 

// }
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








//User prompts answer yes or no if no run fiunction again if yes complete


function like() {
    let askAgain = prompt(" Do you like this? yes or no");
    return askAgain;
                }

function tryAgain() {
let reselect = prompt("Are you happy with the Itinerary? Enter yes or no get a new one.");
return reselect;
                    }

let newItin = "Your new Itinerary is: traveling to " + chosenDestination + 
" and dining at " + chosenRestaurant + ". You will be arriving by " 
+ chosenTransportation + " and your enterainment is " + chosenEntertainment + ".";

let Intinerary = "Your destination is "  + chosenDestination + " and you are dining at "
 + chosenRestaurant + ". The mode of transportation will be " + chosenTransportation +
  " and your entertainment is " + chosenEntertainment + "."; 

  alert (Intinerary);
  console.log (Intinerary)

let answer = "no";

while (answer !== "yes") {
    answer = like();
 
    if (answer === "yes") {
        alert("Great, your trip details are complete");
        break;
        
    }
    else if (answer === "no"){
        //let chosenDestination = randomDestination();


   answer = alert(newItin);

    
  console.log (newItin)
    

   

}
}


