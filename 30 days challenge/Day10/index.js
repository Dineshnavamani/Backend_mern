let level = [
    "Ordered",
    "Packed",
    "Shipped",
    "In Transit",
    "Out for Delivery",
    "Delivered"
];

for (let i = 0; i < level.length; i++) {

    console.log("Step " + (i + 1) + ": " + level[i]);

    if (level[i] === "Delivered") {
        console.log("Order Completed");
        break;
    }
}

// the condition is after getting the delivery it should give the 
// status order completed.
//In the level array i have stored the levels to complete.
// for loop runs from 0 to the length of the array to access the values inside it.
//after loop runs it gives the output of in which state it is.
// then the condition is to check all the level have reach .
// after reach the last condition the log prints the order completed.
// then it breaks the loop.