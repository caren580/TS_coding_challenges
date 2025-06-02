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
console.log(findLargest(5,2,9));//9
console.log(findLargest(-2,-3,-8));//-8
