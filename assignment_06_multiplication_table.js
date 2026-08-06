// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 6
// =============================================================================
//
// TASK: Multiplication Table Generator
//
// Write a JavaScript program that generates multiplication tables using loops
// and functions.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_06_multiplication_table.js
//
// -----------------------------------------------------------------------------
// PART A — Single Table
// -----------------------------------------------------------------------------
// - Ask the user to enter a number.
// - Print the multiplication table for that number from 1 to 12.
//
// Expected output (if user enters 5):
//
//   Multiplication Table for 5:
//   5  x  1  =  5
//   5  x  2  =  10
//   5  x  3  =  15
//   ...
//   5  x  12 =  60
//
// -----------------------------------------------------------------------------
// PART B — Bonus: Tables from 1 to N
// -----------------------------------------------------------------------------
// - Ask the user to enter a number N.
// - Print the full multiplication table for every number from 1 to N.
// - Add a separator line (e.g. "---") between each table.
//
// Expected output (if user enters 3):
//
//   Multiplication Table for 1:
//   1  x  1  =  1
//   ...
//   1  x  12 =  12
//   ---------------------------
//   Multiplication Table for 2:
//   2  x  1  =  2
//   ...
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - N must be a positive integer. If the user enters an invalid value,
//   print an error message and stop.
// - Each part must be in its own function (see scaffold below).
// - Complete Part A before attempting Part B.

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================


const readlineSync = require('readline-sync');

function printSingleTable(number) {
    console.log(`\nMultiplication Table for ${number}:`);
    
    for (let i = 1; i <= 12; i++) {
        const result = number * i;
        
        console.log(`${number}  x  ${i.toString().padStart(2)}  =  ${result.toString().padStart(3)}`);
    }
}


function printMultipleTables(n) {

    if (n <= 0) {
        console.log('Error: N must be a positive integer.');
        return;
    }
    
    for (let number = 1; number <= n; number++) {
        
        console.log(`\nMultiplication Table for ${number}:`);
        for (let i = 1; i <= 12; i++) {
            const result = number * i;
            console.log(`${number}  x  ${i.toString().padStart(2)}  =  ${result.toString().padStart(3)}`);
        }
        if (number < n) {
            console.log('---------------------------');
        }
    }
}


function printSingleTableFormatted(number) {
    console.log(`\n${'='.repeat(30)}`);
    console.log(`  Multiplication Table for ${number}`);
    console.log(`${'='.repeat(30)}`);
    
    for (let i = 1; i <= 12; i++) {
        const result = number * i;
    
        console.log(`  ${number}  ×  ${i.toString().padStart(2)}  =  ${result.toString().padStart(3)}`);
    }
    console.log(`${'='.repeat(30)}`);
}


function printMultipleTablesFormatted(n) {
    if (n <= 0) {
        console.log('Error: N must be a positive integer.');
        return;
    }
    
    for (let number = 1; number <= n; number++) {
        console.log(`\n${'='.repeat(30)}`);
        console.log(`  Multiplication Table for ${number}`);
        console.log(`${'='.repeat(30)}`);
        
        for (let i = 1; i <= 12; i++) {
            const result = number * i;
            console.log(`  ${number}  ×  ${i.toString().padStart(2)}  =  ${result.toString().padStart(3)}`);
        }
        
        if (number < n) {
            console.log(`${'-'.repeat(30)}`);
        }
    }
}


function main() {
    console.log('MULTIPLICATION TABLE GENERATOR');
    console.log('===============================\n');
    
    console.log('--- PART A: Single Table ---');
    const number = readlineSync.questionInt('Enter a number: ');
    printSingleTable(number);
    
    console.log('\n');  
    
    console.log('--- PART B: Multiple Tables ---');
    const n = readlineSync.questionInt('Enter N (positive integer): ');
    printMultipleTables(n);
    
    console.log('\n');  
    
    console.log('--- Bonus: Formatted Version ---');
    console.log('Generating tables for 3 with better formatting:');
    printMultipleTablesFormatted(3);
}

main();