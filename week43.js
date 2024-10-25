// Hello.
// This is a set of exercises.
// The idea is to practice a few things at a time.
// You do this by writing your answer after a task is given (see the example).
// Use the concepts from our sylabus. 

// DO NOT change the provided code unless the task specifically says to do so.

/* -----------------------------------------------------------------------------
    Task: Example
    Write code to print all the names in the list, one name per line
*/
console.log("Task: Example");
const people = ["Tony", "Christian", "Håkon"]

for (let index = 0; index < people.length; index++) {
    let person = people[index];
    console.log(person);
}

/* -----------------------------------------------------------------------------
    Task: A
    create a function that "draws" a tree of a given height.
    Example the following is a tree of height 5

           5        *
           4       ***
           3      *****
           2     *******
           1        x
*/
console.log("Task: A");

function drawTree(height) {
    if (height < 1) {
        console.log("Height should be at least 1.");
        return;
    }

    for (let i = 1; i <= height; i++) {
        let spaces = ' '.repeat(height - i);
        let leaves = '*'.repeat(2 * i - 1);
        
        console.log(spaces + leaves);
    }
    
    let trunkSpaces = ' '.repeat(height - 1);
    console.log(trunkSpaces + 'x');
}
drawTree(5);

/* -----------------------------------------------------------------------------
    Task: B

    Write a function that "draws" an arrow of a given size.
    Example: This is an arrow of size 3.

    *
    * *
    * * *
    * *
    * 
*/
console.log("Task: B");

function drawArrow(size) {
    let arrow = "";

    for (let i = 1; i <= size; i++) {
        arrow += "* ".repeat(i).trim() + "\n";
    }
    for (let i = size - 1; i >= 1; i--) {
        arrow += "* ".repeat(i).trim() + "\n";
    }

    console.log(arrow);
}
drawArrow(3);

/* -----------------------------------------------------------------------------
    Task: C
    Write a function that draws a box of n by m dimensions. Take into acount the diffrence in aspectratio.

    Example: This is a aproximatly a 2 by 2 box. 
    +--------+
    |        |
    |        |
    +--------+
*/
console.log("Task: C");
function drawBox(rows, cols) {
    const horizontal = '-';
    const vertical = '|';
    const corner = '+';
    const width = cols * 2;
    const topBottomBorder = corner + horizontal.repeat(width) + corner;
    const middleRow = vertical + ' '.repeat(width) + vertical;
    
    console.log(topBottomBorder);

    for (let i = 0; i < rows; i++) {
        console.log(middleRow);
    }

    console.log(topBottomBorder);
}

drawBox(2, 2);


/* -----------------------------------------------------------------------------
    Task: D
    Write a function that returns true if a word is a Heterogram.   
*/
console.log("Task: D");

function isHeterogram(word) {
    word = word.toLowerCase();

    const letters = new Set();

    for (const char of word) {
        if (/[a-z]/.test(char)) {
            if (letters.has(char)) {
                return false;
            }
            letters.add(char);
        }
    }

    return true;
}

console.log(isHeterogram("cat"));  // true
console.log(isHeterogram("food")); //false


/* -----------------------------------------------------------------------------
    Task: E
    Write a function that returns true if two words are Anagrams.
*/
console.log("Task: E");
function areAnagrams(word1, word2) {
    const normalize = (word) => word.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');

    return normalize(word1) === normalize(word2);
}

console.log(areAnagrams("listen", "silent"));            // true
console.log(areAnagrams("rail safety", "fairy tales"));  // true
console.log(areAnagrams("hello", "world"));              // false