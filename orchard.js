///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the last week at an apple orchard. 
    You will be using your coding skills to gain insights into its daily 
    operations.

    Below are three arrays each containing 7 numbers. You will use them and the 
    price variables to complete the problems in this file.

    The indexes of the arrays correspond with a day of the week.
    The first array is named fujiAcres. Notice that the first item in this array 
    is 2, meaning that 2 acres of Fuji apples were picked on Monday of this week.
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

// PROBLEM 1

/*
    Using a for loop, calculate the total number of acres picked for the entire 
    week.

    Save the number to a variable called `totalAcres`.
    Log `totalAcres` to the console.
*/

let totalAcres = 0;

for (let i = 0; i < fujiAcres.length; i++ ) { //this line initializes the condition of the for loop & as long as i is less than the length of the number of items in the variable fujiAcres, it will continue to run.
    totalAcres = totalAcres + fujiAcres[i]; // each time the loop is run, it will take the array number, store it in a new variable called totalAcres, and continue to add to is as it loops through.
    //console.log(totalAcres);
}
 
 for (let i = 0; i < galaAcres.length; i++ ) {
    totalAcres = totalAcres + galaAcres[i]; // the loop will continue adding the values of galaAcres into the same variable totalAcres
    //console.log(totalAcres);
}
 
 for (let i = 0; i < pinkAcres.length; i++ ) {
    totalAcres = totalAcres + pinkAcres[i];
    
}
console.log(totalAcres);


// PROBLEM 2

/*
    Using `totalAcres`, calculate the average number of acres picked per day. 

    (Remember that the average is the total divided by the number of days)

    Save the answer to a variable called 
    `averageDailyAcres`, and log `averageDailyAcres` to the console.
*/

let averageDailyAcres = totalAcres / 7; //this simply takes the value from totalAcres, divides it by 7, and stores it into a new variable averageDailyAcres.
console.log(averageDailyAcres);


// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number of acres that still have apples left. 
    
    The `days` variable represents how many more days of work are left. It's 
    initialized at 0 because we're going to be using it as a counter.
    
    Write a while loop that will continue to run while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to calculate this number. You might
    think about other ways you could do it more mathematically.
*/

let acresLeft = 174 
let days = 0

while (acresLeft > 0) { //set the loop to run while acresLeft is above 0
    acresLeft = acresLeft- averageDailyAcres; // each time the loop is ran, it will subtract the averageDailyAcres from the acresLeft and return the new value back to the beginning of the loop
    //days++;
    console.log(days++); //each time the loop runs, it will increment the number of days have gone and log it to the console.
}


// PROBLEM 4

/*
    Your next task is to create 3 arrays that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store your new arrays. Make sure that you
    don't modify the original arrays on lines 36 - 38.

    Log each of your arrays to the console.

    (Hint: loop over the original arrays, calculate the tons for that day, then
    add that number into the new list)
*/

let fujiTons = [];
let galaTons = [];
let pinkTons = [];

for (const ton of fujiAcres) { //this will loop through each item in the array at a time and store it in a new variable 'ton'
    fujiTons.push(ton * 6.6); //this takes each item, multiplies it by 6.6, then stores it in a new variable 'fujiTons'. the same is repeated for each apple type and stored separatly.
}
console.log(fujiTons);

for (const ton of galaAcres) {
    galaTons.push(ton * 6.6);
}
console.log(galaTons);

for (const ton of pinkAcres) {
    pinkTons.push(ton * 6.6);
}
console.log(pinkTons);

// PROBLEM 5

/*
    Next, calculate the TOTAL number of pounds picked per variety.

    You'll need to add up the tons per each variety and convert the number 
    into pounds -- store that number in the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

let fujiPounds = 0;

for (let i = 0; i < fujiTons.length; i++ ) { //initializes the loop to iterate through the fujiTons array one by one
    fujiPounds = fujiPounds + fujiTons[i]; //each time it loops, it will add each item together and store into a new variable fugiPounds
}
fujiPounds *= 2000; //lastly, it will take the total value of fujiPounds and convert it into pounds by multiplying it by 2000
console.log(fujiPounds);

let galaPounds = 0;

for (let i = 0; i < galaTons.length; i++ ) {
    galaPounds = galaPounds + galaTons[i];
}
galaPounds *= 2000;
console.log(galaPounds);

let pinkPounds = 0;

for (let i = 0; i < pinkTons.length; i++ ) {
    pinkPounds = pinkPounds + pinkTons[i];
}
pinkPounds *= 2000;
console.log(pinkPounds);


// PROBLEM 6

/*
    Now that you know the total pounds per variety, use the prices below to 
    figure out how much you'll make from selling each type of apple. 

    The prices are per pound and are written in cents. 

    Log each of the profits to the console. 
*/
const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55

let fujiProfit = fujiPounds * .89; //this takes the total of the pounds to get the profit made by multiplying it by its cost
let galaProfit = galaPounds * .64;
let pinkProfit = pinkPounds * .55;

console.log(fujiProfit);
console.log(galaProfit);
console.log(pinkProfit);


// PROBLEM 7

/*
    Add up all your profits and save  the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

let totalProfit = fujiProfit + galaProfit + pinkProfit; //Finally, profits from each type are added and stored into a new variable totalProfit
console.log(totalProfit);