// Characters
/*
mrGreen
first_name:   Jacob
last_name:    Green
color:        green
description:  He has a lot of connections
age:          45
image:        https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg
occupation:   Entrepreneur

drOrchid
first_name:   Doctor
last_name:    Orchid
color:        white
description:  PhD in plant toxicology. Adopted daughter of Mr. Boddy
age:          26
image:        http://www.radiotimes.com/uploads/images/Original/111967.jpg
ocupation:   Scientist

profPlum
first_name:   Victor
last_name:    Plum
color:        purple
description:  Billionare video game designer
age:          22
image:        https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg
occupation:   Designer

missScarlet
first_name:   Kasandra
last_name:    Scarlet
color:        red
description:  She is an A-list movie star with a dark past
age:          31
image:        https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg
occupation:   Actor

mrsPeacock
first_name:   Eleanor
last_name:    Peacock
color:        blue
description:  She is from a wealthy family and uses her status and money to earn popularity
age:          36
image:        https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg
occupation:   Socialité

mrMustard
first_name:   Jack
last_name:    Mustard
color:        yellow
description:  He is a former football player who tries to get by on his former glory
age:          62
image:        https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg
occupation:   Retired Football player

// Weapons

name: rope        ---   weight: 10
name: knife       ---   weight: 8
name: candlestick ---   weight: 2
name: dumbbell    ---   weight: 30
name: poison      ---   weight: 2
name: axe         ---   weight: 15
name: bat         ---   weight: 13
name: trophy      ---   weight: 25
name: pistol      ---   weight: 20

// Rooms
name: Dinning Room
name: Conservatory
name: Kitchen
name: Study
name: Library
name: Billiard Room
name: Lounge
name: Ballroom
name: Hall
name: Spa
name: Living Room
name: Observatory
name: Theater
name: Guest House
name: Patio
*/


var mrGreen = {
    first_name:   "Jacob",
    last_name:    "Green",
    color:        "green",
    description:  "He has a lot of connections",
    age:          45,
    image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation:   "Entrepreneur"
}


var drOrchid = {
    first_name:   "Doctor",
    last_name:    "Orchid",
    color:        "white",
    description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age:          26,
    image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    ocupation:    "Scientist"
}


var profPlum = {

    first_name:   "Victor",
    last_name:    "Plum",
    color:        "purple",
    description:  "Billionare video game designer",
    age:          22,
    image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation:   "Designer"

}


var missScarlet = {

    first_name:   "Kasandra",
    last_name:    "Scarlet",
    color:        "red",
    description:  "She is an A-list movie star with a dark past",
    age:          31,
    image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation:   "Actor"
}


var mrsPeacock = {

    first_name:   "Eleanor",
    last_name:    "Peacock",
    color:        "blue",
    description:  "She is from a wealthy family and uses her status and money to earn popularity",
    age:          36,
    image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation:   "Socialité"

}


var mrMustard = {

    first_name:   "Jack",
    last_name:    "Mustard",
    color:        "yellow",
    description:  "He is a former football player who tries to get by on his former glory",
    age:          62,
    image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation:   "Retired Football player"

}

var weapon1  = {
        name:   "rope",
        weight: 10
    }  
    
var weapon2 = {
    name:   "knife",
    weight: 8
    }   
    
var weapon3 = {  
    name: "candlestick",
    weight: 2
    }

var weapon4 = {
    name: "dumbbell",
    weight: 30
}

var weapon5 = {
    name: "poison", 
    weight: 2
}

var weapon6 = {
    name: "axe",
    weight: 15
}

var weapon7 = {
    name: "bat",
    weight: 13
}

var weapon8 = {
    name: "trophy",
    weight: 25
}

var weapon9 = {
    name: "pistol",
    weight: 20
}


var room1 = {
 name: "Dinning Room"
}
var room2 = {
    name: "Conservatory"
}
var room3 = {
    name: "Kitchen"
}
var room4 = {
    name: "Study"
}
var room5 = {
    name: "Library"
}
var room6 = {
    name: "Billiard Room"
}
var room7 = {
    name: "Lounge"
}
var room8 = {
    name: "Ballroom"
}
var room9 = {
    name: "Hall"
}
var room10 = {
    name: "Spa"
}
var room11 = {
    name: "Living Room"
}
var room12 = {
    name: "Observatory"
}
var room13 = {
    name: "Theater"
}
var room14 = {
    name: "Guest House"
}
var room15 = {
    name: "Patio"
}









// Characters Collection
var charactersArray = [];
charactersArray.push(mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard);



// Rooms' Collection
var roomsArray = [];
roomsArray.push(room1, room2, room3, room4, room5, room6, room7, room8, room9, room10, room11, room12, room13, room14, room15);

// Weapons Collection
var weaponsArray = [];
weaponsArray.push(weapon1, weapon2, weapon3, weapon4, weapon5, weapon6, weapon7, weapon8, weapon9);

var randElement = "";

function randomSelector(stack) {
    randElement = stack[Math.floor(Math.random()*stack.length)];
    return randElement
}

randomSelector(charactersArray);
console.log(randElement);
randomSelector(weaponsArray);
console.log(randElement);
randomSelector(roomsArray);
console.log(randElement);



function pickMistery(){
    misteryEnvelope = [];
    misteryEnvelope.push(randomSelector (charactersArray));
    misteryEnvelope.push(randomSelector (weaponsArray));
    misteryEnvelope.push(randomSelector (roomsArray));

    console.log(misteryEnvelope)

    return misteryEnvelope;

}



function revealMistery(envelope){
        var mistery = "";
        mistery = envelope[0].first_name+" "+envelope[0].last_name+" killed Mr.Boddy using the "+envelope[1].name+" in the "+envelope[2].name+"!!!!";
        return mistery;
}





