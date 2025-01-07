// Immediately Invoked Function Expression (IIFE)

// IIFE => is a function which is immedialety invoked after its declaration

// Syntax is to write function within () followed by ()     eg. ()();

(function greet(){
    // Named IIFE
    console.log("Hello, Welcome here.....");
})();
// ; is must otherwise will not know to terminate this function and next function will not work

// Why we use IIFE function => to about pollution cause due to global scope variable

// can use on arrow functions as well
( () => {
    console.log(`Database Connected...`);
} )();


( (name) => {
    console.log(`${name}, welcome !!! `);
} )("Om");
// we can give arguments also 