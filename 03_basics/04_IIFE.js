

(function chai(){
    console.log(`YOYO1`);
})();

(
    (name)=>{
        console.log(`YOYO2 is ${name}`);
        
    }
)("LUCKY");

//  Why use IIFE?

// Used to:

// Avoid global variable pollution
// Create private scope
// Execute code immediately