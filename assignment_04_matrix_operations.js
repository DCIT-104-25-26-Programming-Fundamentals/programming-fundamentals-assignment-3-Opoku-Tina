// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');

function readMatrix(name, rows, cols) {
    console.log(`\nEnter ${name} matrix (${rows} x ${cols}):`);
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        const rowInput = readlineSync.question(`Enter row ${i + 1}: `);
        const row = rowInput.split(' ').map(Number);
        
        if (row.length !== cols) {
            console.log(`Error: Row must have exactly ${cols} numbers. Please re-enter this row.`);
            i--; 
            continue;
        }
        matrix.push(row);
    }
    return matrix;
}


function displayMatrix(matrix, title) {
    console.log(`\n${title}:`);
    for (let i = 0; i < matrix.length; i++) {
        let rowStr = '';
        for (let j = 0; j < matrix[i].length; j++) {
            rowStr += matrix[i][j].toString().padStart(6) + ' ';
        }
        console.log(rowStr);
    }
}


function transposeMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    

    const transposed = [];
    for (let i = 0; i < cols; i++) {
        transposed[i] = [];
        for (let j = 0; j < rows; j++) {
            transposed[i][j] = matrix[j][i];
        }
    }
    return transposed;
}


function partA_transpose() {
    console.log('\n=== PART A: TRANSPOSE MATRIX ===');
    
    const rows = readlineSync.questionInt('Enter number of rows: ');
    const cols = readlineSync.questionInt('Enter number of columns: ');
    
    const matrix = readMatrix('original', rows, cols);
    displayMatrix(matrix, 'Original Matrix');
    
    const transposed = transposeMatrix(matrix);
    displayMatrix(transposed, 'Transposed Matrix');
}


function addMatrices(matrixA, matrixB) {
    const rows = matrixA.length;
    const cols = matrixA[0].length;
    
    const result = [];
    for (let i = 0; i < rows; i++) {
        result[i] = [];
        for (let j = 0; j < cols; j++) {
            result[i][j] = matrixA[i][j] + matrixB[i][j];
        }
    }
    return result;
}


function partB_addition() {
    console.log('\n=== PART B: ADD TWO MATRICES ===');
    
    const rows = readlineSync.questionInt('Enter number of rows: ');
    const cols = readlineSync.questionInt('Enter number of columns: ');
    
    const matrixA = readMatrix('first', rows, cols);
    const matrixB = readMatrix('second', rows, cols);
    
    displayMatrix(matrixA, 'Matrix A');
    displayMatrix(matrixB, 'Matrix B');
    
    const sum = addMatrices(matrixA, matrixB);
    displayMatrix(sum, 'A + B');
}


function multiplyMatrices(matrixA, matrixB) {
    const rowsA = matrixA.length;
    const colsA = matrixA[0].length;
    const rowsB = matrixB.length;
    const colsB = matrixB[0].length;
    
    const result = [];
    for (let i = 0; i < rowsA; i++) {
        result[i] = [];
        for (let j = 0; j < colsB; j++) {
            let sum = 0;
            
            for (let k = 0; k < colsA; k++) {
                sum += matrixA[i][k] * matrixB[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}

function partC_multiplication() {
    console.log('\n=== PART C: MULTIPLY TWO MATRICES ===');
    
    const rowsA = readlineSync.questionInt('Enter rows for matrix A: ');
    const colsA = readlineSync.questionInt('Enter columns for matrix A (and rows for B): ');
    const colsB = readlineSync.questionInt('Enter columns for matrix B: ');
    
    const matrixA = readMatrix('A', rowsA, colsA);
    const matrixB = readMatrix('B', colsA, colsB);
    
    displayMatrix(matrixA, 'Matrix A');
    displayMatrix(matrixB, 'Matrix B');
    
    const product = multiplyMatrices(matrixA, matrixB);
    displayMatrix(product, 'A × B');
}

function main() {
    console.log('MATRIX OPERATIONS CALCULATOR');
    console.log('=============================');
    
    partA_transpose();
    partB_addition();
    partC_multiplication();
    
    console.log('\n=== All operations completed! ===');
}

main();