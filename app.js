
var name =prompt('QUESTION:1. Write a program that takes input a name from user & said Hi','please enter your name');
alert('hi,'+name +"!" );







var z= +prompt('2. Write a program to take input a number from user & display any no of table & by default no 5 table is displayed "enter a number"','5');
document.write("<br/>"+z+" x 1 = "+z);
document.write("<br/>"+z+" x 2 = "+z*2);
document.write("<br/>"+z+" x 3 = "+z*3);
document.write("<br/>"+z+" x  4 = "+z*4);
document.write("<br/>"+z+" x 5 = "+z*5);
document.write("<br/>"+z+" x 6 = "+z*6);
document.write("<br/>"+z+" x 7 = "+z*7);
document.write("<br/>"+z+" x 8 = "+z*8);
document.write("<br/>"+z+" x 9 = "+z*9);
document.write("<br/>"+z+" x 10 = "+z*10);




var city=prompt("3. Write a program to take “city” name as input from user. If userenters “Karachi”, welcome the user like this: “Welcome to city of lights”",'please enter your city');
if(city==='karachi')
{
    alert("Welcome to the city of light");
}



var gender=prompt("4. Write a program to take “gender” as input from user. If theuser is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.",'please enter your gender');
if(gender==='male')
{
    alert("Good Morning Sir.");
}
else if(gender==='female')
{
    alert("GOod Morning Ma'am.")
}





 var signal=prompt("5. Write a program to take input color of road traffic signal from the user & show the message according to this table:",'please select the colour of road traffic');
 if(signal==='red')
 {alert("vehicles must stop");
 }
 else if(signal ==='yellow')
 {
    alert("vehicles should get ready to move")
 }

 else if(signal ==='green')
 {
    alert("vehicles can move now")
 }




var maxage=prompt("6. Write a program to take input max age & current age from user. If the current age is less than or equal to max age, show the message “You are welcome”",'enter maximum age');
var currentage=prompt('enter current age');
if(currentage<=maxage)
{
    alert("You are Welcome");
}





var fuel=prompt('7. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”','please  remaining fuel in car (in litres)');
 if(fuel<0.25)
 {
     alert("'Please refill the fuel in your car'");
 }






/////////part a///////////
var a = 4;
if (++a === 5){
 alert("given condition for variable a is true");
}

// alert shows the result and it is true because in condition
// we use pre increament operator

///////////part b/////////

var b = 82;
if (b++ === 83){
 alert("given condition for variable b is true");
}
// alert popup not be shown because in condition we use 
// post increament in it so first it check the condition and then increament

/////////part c////////////

var c = 12;
if (c++ === 13){
 alert("condition 1 is true");
}
if (c === 13){
 alert("condition 2 is true");
}
if (++c < 14){
 alert("condition 3 is true");
}
if(c === 14){
 alert("condition 4 is true");
}
// the answer of this program is condition 2 is true
// because in first condition the value of c is 12
// and then the second consition the value of c is now 13 becuase of use of post 
// incremnet in first condition so consition is true

////////////part d////////////

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
 alert("The cost equals");
}

// the answer is the cost equals because we add materialCost
//and laborcost then cheack the consition and it is true


///////////part e/////////////////



if (true){
 alert("True");
}
if (false){
 alert("False");
}


// the answer is true because by default if condition is true



///////////////part f///////////////
if("car" < "cat"){
 alert("car is smaller than cat");
}

// alert is show becuase in this condition we check the aphabetic order










alert ('9. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:MARKS SHEET');

var totalMarks=300;
var subject1=+prompt("enter your marks in subject1");
var subject2=+prompt("enter your marks in subject2");
var subject3=+prompt("enter your marks in subject3");
var totalobtained=subject1+subject2+subject3;
var per=(totalobtained/totalMarks)*100;

if(per>=80)
{
    alert('Total Marks'+totalMarks+'' );
    alert('Marks Obtained'+totalobtained+'');
    alert(per);
    alert("Grade : A-one");
    alert('remarks : Excellent');
}

else if(per>=70)
{

    alert('Total Marks :'+totalMarks+'' );
    alert('Marks Obtained :'+totalobtained+'');
       alert('Percentage :'+per+'');
    alert("Grade : A");
    alert('remarks : Good');
}

else if(per>=60)
{
    
    alert('Total Marks :'+totalMarks+'' );
    alert('Marks Obtained :'+totalobtained+'');
    alert('Percentage :'+per+'');
    alert("Grade : B");
    alert('remarks :You need to improve');
}

else
{
   
    alert('Total Marks :'+totalMarks+'' );
    alert('Marks Obtained :'+totalobtained+'');
    alert('Percentage :'+per+'');
    alert("Grade : Fail");
    alert('remarks : Sorry');
}

















alert('10. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Take input from users, the following:','SHOPPING CART')
var item1= prompt('name of the first item');
var item2= prompt('name of the second item');
var price1= +prompt('price of the first item');
var price2= +prompt('price of the second item');
var orderquan1= +prompt('order quantity of the first item');
var orderquan2= +prompt('order quantity of the second item');
var shipping = 250;

var totalcost=(price1*orderquan1)+(price2*orderquan2);
var discount= (totalcost*10)/100;
var afterdis= totalcost-discount;
if (totalcost>2000)
{
    alert('Price of:'+item1+'is'+price1+'.');
    alert('Quantity:'+item1+'is'+orderquan1+'.');
    alert('Price of:'+item2+'is'+price2+'.');
    alert('Quantity:'+item1+'is'+orderquan2+'.');
    alert('Shipping Charges:'+shipping+'');
    alert('Total cost of your order is:'+totalcost+'.');
alert('Discounted Price:'+afterdis+'.');
}

else
{
 alert('Price of:'+item1+'is'+price1+'.');
    alert('Quantity:'+item1+'is'+orderquan1+'.');
    alert('Price of:'+item2+'is'+price2+'.');
    alert('Quantity:'+item1+'is'+orderquan2+'.');
    alert('Shipping Charges:'+shipping+'');
    alert('Total cost of your order is:'+totalcost+'.');

}















alert('11. Guess game: Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.');
var secret =+prompt('enter a secret number only 1 to 10');
var guess= +prompt('enter your guess number only 1 to 10');
if (guess===secret)
{
    alert('Bingo! Correctanswer');
}
else if(guess===secret-1 ||guess===secret+1)
{
    alert('Close enough to the correct answer');
}





var number=prompt('12. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.','given number');
if((number%3)===0)
{alert('divisible by 3');
}
else{
    alert('not divisible by 3');
}

alert('13. Names & Total scores of two teams are taken as input. Write a program that shows which team has won the game or show if there is a tie. (Team A or Team B)');
var team1=prompt('enter your team name 1 :');
var team2=prompt('enter your team name 2 :');
var score1=+prompt('enter '+team1 + "score :");
var score2=+prompt('enter '+team2 + "score :");
if (score1>score2 ){
    alert(team1+ ' have won the game');
}

else if (score2>score1 ){
    alert( team2 +' have won the game');
}
else if(score1===score2){
    alert('there is a tie');
}

alert('14. Take a string, a number and a Boolean in three variables.Write a program that checks the type of variables & responds accordingly. Like :');
var str=prompt('enter a string');
var num=+prompt('enter a number');
var bool=prompt('enter a booleon');
if( str===str)
{alert(str+ " is a string");
}


if(num===num)
{alert(num+ " is a number");

}


if(bool===bool)
{alert(bool+ " is a boolean");

}




alert('15. Write a program that checks whether the given input is an even number or an odd number')
var givernum= prompt("enter your number");
if((givernum%2)==0)
{
    alert(givernum+' is even');
}
else{
    alert(givernum+' is odd');
}




alert('16. Weather in Karachi nowadays is too cool, write a program that takes temperature as input and shows a message based on following criteria');
var temp= +prompt("Enter the temparature");
if (temp>40)
{
    alert("Its Too Hot Outside");
}

else if (temp>30)
{
    alert("The Weather Today is Normal");
}
else if (temp>20)
{
    alert("Today weather is COOL");
}
else if (temp>10)
{
    alert("OMG! Today weather is COOL");
}


alert('17. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:')
var firstno=+prompt('enter first number');
var secondno=+prompt('enter second number');
var operator=prompt('enter any one operator +,-,*,/,%');
if(operator=== '+')
{
    alert(firstno+secondno);
}
else if(operator=== '-')
{
    alert(firstno-secondno);
}
else if(operator=== '*')
{
    alert(firstno*secondno);
}
else if(operator=== '/')
{
    alert(firstno/secondno);
}
else if(operator=== '%')
{
    alert(firstno%secondno);
}


alert('18. Write a program that takes user input day name. If the day is Monday, Tuesday, Wednesday, Thursday or Friday, then show “It’s a week day”. If the day is Saturday then show “It’s weekend”. If the day is Sunday then show “Yay! It’s a holiday”.')
var dayname=prompt('Enter a day name');
if(dayname==='monday'|| dayname==='tuesday'||dayname==='wednesday'||dayname==='thursday'||dayname==='friday')
{
    alert("It's a week day");
}
else if(dayname==='saturday')
{
    alert('its a weekend');
}
else if(dayname==='sunday')
{
    alert('yay!its a holiday');
}



alert('9. Write a program that takes input user’s score, if it’s greater than 50, say “You are passed”. Otherwise, show “Try again!”')
var score=+prompt('enter the score');
if(score>=50)
{
    alert('You are passed');
}
else{
    alert("Try Again");
}



alert('20. Write a program that:   a. takes 2 numbers.   b. tells whichever number is the greater (higher) number.  c. tells if they are equal  Show the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").')
var num1=prompt("enter the number");
var num2=prompt('enter the other number');
if(num1>num2 )
{
    alert('The Greater number of '+num1+ 'and' +num2+ "is" +num1);
}
 else if(num1<num2 )
 {
     alert('The lesser number of '+num1+ 'and' +num2+ 'is' +num1  );
 }

else if(num1===num2)
{
    alert("they are equal");
}








alert('21. The Translator: Write a program that:        a. takes 1 input, a language code (e.g. "es", "de", "en")                b. tells "Hello, World" for the given language, for atleast 3   languages. It should default to returning English. (Hint: use translate.google.com to check the translation ofhello world in different languages)');
var lcode=prompt("enter your code related to this 'fr' 'ja' 'ko'",'en')
if(lcode=== 'fr')
{
    alert('Bonjour le monde');

}

else if(lcode=== 'ja')
{
    alert('こんにちは世界');

}
else if(lcode=== 'ko')
{
    alert('안녕 세상');

}
else{
    alert('Hello world');
}






var num=+prompt('22. Write a program to take input a number & tell whether it’s a positive or negative number.',"enter a number and check wheather it is positive or negetive");
if(num>=1)
{
    alert('its a positive number');
}
else{
    alert('its a negative number');
}




alert('23. The Pluralizer: Write a program that:    a. takes 2 inputs, a noun and a number.    b. tells the number and pluralized form, like "5 cats" or "1 dog".');
var no=+prompt('enter a number');
var noun=prompt('enter a noun');
if(no>1)
{
    alert(no+''+noun+'s' );
}
else{
    alert(no+''+noun+'');
}





