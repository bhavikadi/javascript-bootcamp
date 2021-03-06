// # Pass by reference / pass by value 

// ## What's the difference? 

// Pass by reference is when a reference to an original object in memory is given to a function.

// Pass by value is when a value is passed to a function as a copy, not as a pointer to the original in memory value.

// ## Why this matters?

// It is really important to understand when something is created in memory, vs when we're acting on a reference.

// This is the foundation of understanding JavaScript, when we're operating on a new object, vs when we're mutating the existing one. 

// For instance, if we want to create a data store that is protected from the components that access it, we'll need to create new object references of our data store, rather than passing references to it directly. 

// **Note:** Immutability also applies within Promises (a value returned in a promise will be a reference, not a copy!)

// ## Mutating Example
const updateAge = (person) => {
    person.age = person.age + 1;
    return person;
};

// Let's create an object in memory.
const sandra = { name: 'sandra', age: 22 };

// And then let's pass the object to our update function.
updateAge(sandra);

// **Output:** ```{ name: 'sandra', age: 23 }```
console.log(sandra);

// As you can see, the original object itself was modified. 

// ## Ensuring immutability
const updateAgeImmutable = (person) => {
    const copy = { ...person };
    copy.age = copy.age + 1;
    return copy;
};

// Let's create an object in memory.
const dorianGray = { name: 'dorianGray', age: 50 };

// And then let's pass the object to our update function.
updateAgeImmutable(dorianGray);

// **Output:** ```{ name: 'dorianGray', age: 50 }```
console.log(dorianGray);

// Here, we can see the value of the object hasn't changed, that's because we've created a new reference in memory.

// Read through this —> https://doesitmutate.xyz/

// ## Shallow Copies vs Deep Copies

// In the above updateAgeImmutable function we use the spread operator to copy person
// But this has two problems:
// 1. Browser Compatibility - spread operator is part of ES6 JavaScript and not supported in IE or older versions of the other browsers
// 2. It only makes a shallow copy of an object, any nested objects or arrays are references themselves

// ** Deep Object with Nested Objects
const josh = {
    name: "josh",
    age: 30,
    occupation: {
        title: "Senior Analytics Implementation Consultant II",
        company: "Blast Analytics"
    }
}

// When we use the spread syntax, it makes a shallow copy
// name and occupation are still references
const shallowJosh = { ... josh };

// When we change a value in a nested object
shallowJosh.occupation.title = "Analytics Strategist";

// It is also changed in the original
console.log(josh)

console.log(shallowJosh)

// The easiest way to make a deep copy is to use JSON.parse(JSON.stringify()) syntax
// First this stringifies the object in full breaking all references
// Then it parses it back to JSON
const deepJosh = JSON.parse(JSON.stringify(josh));

// Change a property in a nested object
deepJosh.occupation.title = "Software Developer";

// And you can see it has only changes in the copy
console.log(josh);

console.log(deepJosh);

// Additional reading: https://www.freecodecamp.org/news/copying-stuff-in-javascript-how-to-differentiate-between-deep-and-shallow-copies-b6d8c1ef09cd/
