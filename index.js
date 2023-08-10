//Iteration #1: Find the maximum

function max(num1,num2){

    return Math.max(num1,num2)

}

console.log(max(2,5));





//Iteration #2: Find the longest word
function findLongestWord(arr) {
    let longestWord = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > longestWord.length) {
            longestWord = arr[i]; 
        }
    }

    return longestWord;
}

const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
const longestWord = findLongestWord(words);





//Iteration #3: Calculate the sum

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function count(sum,num){
    return sum+num / numbers.length;
}
function result(){
    console.log(numbers.reduce(count));
}
result();





//Bonus - Iteration #3.2: A generic sum() function


const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];



function avr(arr){

    let num = 0;
    let str=0;
    for(let i=0;i<arr.length;i++){
    if(typeof arr[i]==='number'){
        num += arr[i]
        str++
    }else if(typeof arr[i]==='boolean'){
        num += arr ?1:0;
        validCount++;
    }else if(typeof arr[i]==='string'){
        num += arr[i].length
        str++;
    }

    
    }
    
    return num / sum
    

}
console.log(avr(mixedArr));

//Iteration #4: Calculate the average

let X = [2, 6, 9, 10, 7, 4, 1, 9];



function averageNumbers(arr){
    let sum = 0;

    for(let i=0;i<arr.length;i++){
        sum +=arr[i] 
    }
return sum/arr.length
}

console.log(averageNumbers(X));

//Iteration #4.2: Array of strings






//Bonus - Iteration #4.3: A generic avg() function







//Iteration #5: Unique arrays






//Iteration #6: Find elements



const words = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(arr){
    if(arr.includes('machine')===true){
        return "exist";
    }else{
        return "nothing";
    }

}
console.log(doesWordExist(words));


//Iteration #7: Count repetition

const words = [
    'machine',
    'matter',
    'subset',
    'trouble',
    'starting',
    'matter',
    'eating',
    'matter',
    'truth',
    'disobedience',
    'matter'
];

function findDuplicate(arr, item) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            count++;
        }
    }

    if (count > 1) {
        return "There is a duplicate.";
    } else {
        return "No duplicate found.";
    }
}

console.log(findDuplicate(words, 'matter'));
//Bonus - Iteration #8

//i didnt do the bonus

