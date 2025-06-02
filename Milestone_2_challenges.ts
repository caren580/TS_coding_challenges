//challenge 1 sum of positives
function sumOfPositives(arr: number[]): number {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
}
//console.log(sumOfPositives([1, -3 ,5,-2,9,-8]));//15

//challenge 2 find maximum value
function findMax(arr: number[]): number {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
//console.log(findMax([3,7,2,9,5]));//9

//challenge 3 election winner
type Candidate = {
  name: string;
  votes: number;
};
const candidates: Candidate[] = [
  {name: "Alice", votes:50},
  {name: "Bob", votes:75},
  {name: "Charlie", votes:65}
];
function findWinner(arr: Candidate[]): Candidate {
  let winner = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].votes > winner.votes) {
      winner = arr[i];
    }
  }
  return winner;
}

//console.log(findWinner(candidates)); //{name:'Bob,votes:75}

//challenge 4 longest word
function findLongestWord(arr: string[]): string {
    let longest = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }
    return longest;
}
//console.log(findLongestWord(["apple", "banana", "pear", "grapefruit"]));//grapefruit

//challenge 5 count properties
type Person = {
  name: string;
  age: number;
  city: string;
};

function countProperties(obj: Person): number {
  return Object.keys(obj).length;
}
//console.log(countProperties({ name :"alice", age:25 , city: "paris"}));//3

//challenge 6 filter by length
function filterByLength(arr: string[], minLength: number): string[] {
    return arr.filter(i => i.length >= minLength);
}
//console.log(filterByLength(["cat", "giraffe", "hippo", "dog", "elephant" ] ,5));//[ 'giraffe', 'hippo', 'elephant' ]

//challenge 7 sum of even numbers
function sumEvenNumbers(arr: number[]): number {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }
    return sum;
}
//console.log(sumEvenNumbers([1 ,2 ,3 , 4, 5, 6]));//12

//challenge 8 difference between sum of even and odd numbers
function differenceOddEven(arr: number[]): number {
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sumEven += arr[i];
        } else {
            sumOdd += arr[i];
        }
    }
    return sumEven - sumOdd;
}
//console.log(differenceOddEven([1, 2, 3, 4, 5, 6]));//3

//challenge 9 count truthy
type myTypes = {
  a: number,
  b: string,
  c: boolean,
  d: number,
  e: null
};

function countTruthy(obj: myTypes): number {
  let count = 0;
  const values = Object.values(obj);

  for (let i = 0; i < values.length; i++) {
    if (values[i]) {
      count++;
    }
  }

  return count;
}
//console.log(countTruthy({ a:0, b:"Hello", c:false, d:42, e:null}));//2

//challenge 10 average of numbers
function average(arr: number[]): number {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total / arr.length;
}
//console.log(average([2, 4, 6, 8]));//5

//challenge 11 linear search
function linearSearch(arr: number[], val: number): number {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return -1;
}
console.log(linearSearch([5, 3, 7, 1, 4], 7));//2
console.log(linearSearch([5, 3, 7, 1, 4], 10));//-1

