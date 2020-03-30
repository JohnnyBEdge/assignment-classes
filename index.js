'use strict';

// Create an “Animal” class with a speak method that console logs the sound property 
// and a sayName method that console logs the name property.
class Animal {
    constructor(sound, name){
        this._sound = sound;
        this._name = name;
    }
    speak(){
        console.log(`${this.name} says ${this.sound}`)
    }
    sayName(){
        console.log(`This is ${this.name}`)
    }

    get name(){
        return this._name;
    }
    set name(newName){
        this._name = newName;
    }

    get sound(){
        return this._sound;
    }
}


// Create a “Dog” class that extends the animal class and has a sound property and a
//  name property and takes both name and sound as parameters to its constructor.


class Dog extends Animal{
    constructor(sound, name){
        super(sound);
        super(name);
    }
};

// Create a new object using the Dog class with a name and voice.
let dog = new Animal('bark', 'Kobi')

// Log the new dog object to the console.
console.log(dog);

// Call the speak method on the dog object.
dog.speak();
dog.sayName();

// Add a getter and a setter for the name property.
// See above Animal class

// Call set the name property to a new value.
dog.name = "jazz"


// Log to the console the name property
console.log(dog.name);
dog.sayName();
