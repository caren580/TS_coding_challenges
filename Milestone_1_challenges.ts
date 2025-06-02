//challenge 1 sum of two numbers
function addition(num1: number, num2: number): number{
    return num1+num2;
}
//console.log(addition(8,5));

// challenge 2 convert minutes into seconds
function convert(minutes:number):number{
    return minutes * 60;
}
//console.log(convert(5));//300

//challenge 3 perimeter of a rectangle
function findPerimeter(length:number, width:number):number{
    return 2 * (length + width);
}
//console.log(findPerimeter(3,2));//10

// challenge 4 check negative
function isNegative(number:number):boolean{
    if(number<0){
        return true
    }else{
        return false
    }

}
//console.log(isNegative(-4))//true
//console.log(isNegative(2))//false

//challenge 5 can i drive
function canDrive(name:string, age:number):void{
    if(age >=18){
        console.log(`${name} is old enough to drive`)
    } else{
        console.log(`${name} is not old enough to drive yet`)
    }
}
//canDrive("Caren",22)//Caren is old enough to drive
//canDrive("John", 16)//John is not old enough to drive yet

//challenge 6 Largest number
function findLargest(a:number, b:number, c:number):number{
    if(a>b && a<c){
        return a
    }else if(b>a && b>c){
        return b
    }else{
        return c
    }
}
//console.log(findLargest(5,2,9));//9
//console.log(findLargest(-2,-3,-8));//-8

//challenge 7 BMI calculator
function calculateBMI(weight:number, height:number):string {
    let BMI = weight/ (height * height)
    if(BMI <= 18.5){
        return `your BMI is ${BMI} - underweight`;
    }else if (BMI >= 18.5 && BMI <= 24.5) {
        return `your BMI is ${BMI}- normalweight`;
    }else if (BMI >= 25 && BMI <= 29.9) {
        return `your BMI is ${BMI} - overweight`;
    }else{
        return `your BMI is ${BMI} -obese`;
    }
}
//console.log(calculateBMI(62, 1.25));//your BMI is 39.68 - obese

//challenge 8 greeting based on time
function greetuser(name:string, hour:number):string{
    if (hour >= 5 && hour <= 11) {
    return `good morning ${name}`;
  } else if (hour >= 12 && hour <= 17) {
    return `good afternoon ${name}`;
  } else if (hour >= 18 && hour <= 21) {
    return `good evening ${name}`;
  } else {
    return `good night ${name}`;
  }

}
//console.log(greetuser("caren", 15));//good afternoon caren

//challenge 9 fizz buzz

function fizzBuzzCheck(number: number): string {
  if (number % 3 === 0 && number % 5 === 0) {
    return "fizzbuzz";
  } else if (number % 3 === 0) {
    return "fizz";
  } else if (number % 5 === 0) {
    return "buzz"; 
  } else {
    return number.toString();
  }
}
console.log(fizzBuzzCheck(3));//fizz



