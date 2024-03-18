let name = "Isaiah Wolf"; //string operator
let age = 19; //number operator


function verifyAdulthood(name, age) //fucntion with parameters
{
    if (age >= 18) //if older than 18
    {
        return `Welcome, ${name}!`;
    } 
    else //if younger than 18
    {
        return `You are not old enough to enter, ${name}.`;
    }
}


console.log(verifyAdulthood(name, age)); //displays text based on which if else statement was met
