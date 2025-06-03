//challenge 1 sum of positives
function sumOfPositives(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
}
//console.log(sumOfPositives([1, -3 ,5,-2,9,-8]));//15
//challenge 2 find maximum value
function findMax(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
var candidates = [
    { name: "Alice", votes: 50 },
    { name: "Bob", votes: 75 },
    { name: "Charlie", votes: 65 }
];
function findWinner(arr) {
    var winner = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].votes > winner.votes) {
            winner = arr[i];
        }
    }
    return winner;
}
//console.log(findWinner(candidates)); //{name:'Bob,votes:75}
//challenge 4 longest word
function findLongestWord(arr) {
    var longest = "";
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }
    return longest;
}
function countProperties(obj) {
    return Object.keys(obj).length;
}
//console.log(countProperties({ name :"alice", age:25 , city: "paris"}));//3
//challenge 6 filter by length
function filterByLength(arr, minLength) {
    return arr.filter(function (i) { return i.length >= minLength; });
}
//console.log(filterByLength(["cat", "giraffe", "hippo", "dog", "elephant" ] ,5));//[ 'giraffe', 'hippo', 'elephant' ]
//challenge 7 sum of even numbers
function sumEvenNumbers(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }
    return sum;
}
//console.log(sumEvenNumbers([1 ,2 ,3 , 4, 5, 6]));//12
//challenge 8 difference between sum of even and odd numbers
function differenceOddEven(arr) {
    var sumEven = 0;
    var sumOdd = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sumEven += arr[i];
        }
        else {
            sumOdd += arr[i];
        }
    }
    return sumEven - sumOdd;
}
function countTruthy(obj) {
    var count = 0;
    var values = Object.values(obj);
    for (var i = 0; i < values.length; i++) {
        if (values[i]) {
            count++;
        }
    }
    return count;
}
//console.log(countTruthy({ a:0, b:"Hello", c:false, d:42, e:null}));//2
//challenge 10 average of numbers
function average(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total / arr.length;
}
//console.log(average([2, 4, 6, 8]));//5
//challenge 11 linear search
function linearSearch(arr, val) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return -1;
}
//console.log(linearSearch([5, 3, 7, 1, 4], 7));//2
//console.log(linearSearch([5, 3, 7, 1, 4], 10));//-1
//challenge 12 reverse linear search
function reverseLinearSearch(arr, val) {
    var lastIndex = -1;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            lastIndex = i;
        }
    }
    return lastIndex;
}
//console.log(reverseLinearSearch([5, 3, 7, 1, 4, 7], 7));//5
//console.log(reverseLinearSearch([5, 3, 7, 1,4],10));//-1
//challenge 13 linear search all indices
function linearSearchAll(arr, val) {
    var allIndices = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            allIndices.push(i);
        }
    }
    return allIndices;
}
function occurrences(arr) {
    var occ = {};
    for (var i = 0; i < arr.length; i++) {
        var word = arr[i];
        if (occ[word]) {
            occ[word] += 1;
        }
        else {
            occ[word] = 1;
        }
    }
    return occ;
}
//console.log(occurrences(["apples", "bananas", "apples", "oranges", "apples"]));//{ apples: 3, bananas: 1, oranges: 1 }
// Challenge 15: Remove duplicates
function removeDuplicates(arr) {
    var uniqueArray = [];
    for (var i = 0; i < arr.length; i++) {
        if (!uniqueArray.includes(arr[i])) {
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
}
console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5])); //[ 1, 2, 3, 4, 5 ]
