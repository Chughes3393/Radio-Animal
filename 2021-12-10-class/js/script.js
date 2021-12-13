let radio = {
    stations: [
        {
            name: 'wzbc',
            songs: [
                {
                    artist: 'Beyonce',
                    title: 'Ring On It'
                },
                {
                    artist: 'Shakira',
                    title: 'Hips no lie'
                }
            ]
        },
        {
            name: 'wfnx',
            songs: [
                {
                    artist: 'indieartist1',
                    title: 'yadda'
                },
                {
                    artist: 'deftones',
                    title: 'blah'
                }
            ]
        }],
        changeStation() {
            let numStations = radio.stations.length
            let i = randInt(Object.keys(radio).length);
            let numSongs = radio.stations[0].songs.length
            let j = randInt(3);
            let artist = this.stations[i].songs[j].artist;
            let songs = this.stations[i].songs.title;
            console.log(`Now Playing: "${songs}" by "${artist}`)

        }
    }
console.log(radio)

// Create a method on your radio object that changes the station randomly. 
// When the station is changed, pick a song from that station console.log("Now Playing:" + song,title + "by" + song.artist)
// super class = parent

class Animal {
            constructor(name, age, color, legs) {
                this.name = name;
                this.age = age;
                this.color = color;
                this.legs = legs;
            }
            genericSound() {
                console.log('This is a generic animal sound! Bahhhp')

            }
        }
const mammal = new Animal('Spot', '8', 'black', '4')
const cat = new Animal('Meow', 'blue', 2, 4)


class Dog extends Animal {
constructor(name, color, age, legs, owner){
super(name, color, age, legs)
this.owner = owner
}
playFetch() {
    console.log('Playing Fetch')
}
genericSound(){
    console.log('woof woof')
}
}
const Spot = new Dog('Spot', 'Purple', 99, 3, 'Liv')
// console.log(Spot)

Spot.genericSound()

// Animal Class Works

// console.log(mammal)
// mammal.genericSound()
// cat.genericSound()
// Create different methods for Animal class.

// INHERITANCE -- can keep passing down methods or properties using extends
// Inherit from parent == extending == use extends keyword 
// to inherit from our parent Class
// subclass = child 
// super refers to parent of child class
// in this example we are extending from Animal from Animal which makes
// Animal the parent
// extends and super work together 


// class Person {
//     constructor() {
//         this.fname = 'Orion'
//         this.lname = 'Sirus'
//     }
//     getFullName() {
//         console.log(`My name is ${this.fname} ${this.lname}`)
//     }
//     greet(otherPerson) {
//         console.log(`Hi ${otherPerson}`)
//     }
// walk() {
//     console.log('The Weather is nice.')
// }

// we are instantiating -- 
// creating a new person object writing out class Persons
// const chris = new Person()
// const revathy = new Person()
// console.log(revathy)
// console.log(chris)
// console.log(typeof chris)
// chris.greet('Pat')
// chris.walk()
// revathy.greet('Jelly')
// revathy.walk()
// chris.getFullName()

// let person = {
//     firstName: 'Polaris',
//     intro: function() {
//         console.log(`Hello, I'm ${this.firstName} ${this.age}`)
//     },
//     age: 99
// }
// person.intro()

// function Sprite(color, pos) {
//     this.color = color
//     this.pos = pos
//     console.log(this.color)
// }

// Sprite('red', 'top')

// Test: Can you create create multiple sprites using sprite function 
// without a variable? 


// syntactical sugar for classes in JS

// class Sprite {
//     constructor(color, pos) {
//         this.color = color
//         this.pos = pos
//     }
// }
// const omar = new Sprite('green', 'middle')
// console.log(omar)

// const vendingMachine = {
//     snacks: [
//         {
//             name: 'snickers',
//             price: 1
//         },
//         {
//             name: 'skittles',
//             price: 1.50
//         }
//     ],
//     vend(input) {
//         console.log('vending', vendingMachine.snacks[input])
//     }
// }

// vendingMachine.vend(1)

// =============== MAKE EACH INSTANTIATION CUSTOMIZABLE ===============
// 4 pillars crucial to understand OOP
// One is encapsulation -- putting everything inside where it belongs
// class Person {
//     constructor(fname, lname, country, city) {
//         this.fname = fname
//         this.lname = lname
//         this.country = country
//         this.city = city
//     }

//     greet(otherPerson) {
//         console.log(`Hi ${otherPerson}`)
//     }
//     walk() {
//         console.log('The Weather is nice.')
//     }
// }

// const brandon = new Person('Brandon', 'Maxwell', 'US', 'Dallas')
// const josh = new Person('Josh', 'Kelly', 'US', 'Jersey City')

// console.log(brandon)
// console.log(josh)

// class Person {
//     constructor (name, age, eyes, hair, lovesCats = true, lovesDogs) {
//         this.legs = 2;
//         this.arms = 2;
//         this.name = name;
//         this.age = age;
//         this.eyes = eyes;
//         this.hair = hair;
//         this.lovesCats = lovesCats
//         this.lovesDogs = lovesDogs || true;
//     }
//     greet(otherPerson) {
//         console.log('hi ' + otherPerson + '!');
//     }
//     setHair (hairColor) {
//         this.hair = hairColor;
//     }
//     walk () {
//         console.log('I hate when my segway is in the shop.');
//     }
// }
// const you = new Person('Matt', 36, 'blue', 'blonde');
// console.log(you);
// you.eyes = 'brown'
// console.log(you)
// you.setHair('red');
// console.log(you);