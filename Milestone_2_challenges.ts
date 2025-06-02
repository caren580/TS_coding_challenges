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

console.log(findWinner(candidates)); //{name:'Bob,votes:75}
