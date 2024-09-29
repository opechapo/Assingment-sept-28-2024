//1. Create a JavaScript function that takes an array of numbers as input and returns a new array with all elements doubled. Explain how the map() method is used to achieve this.
// 2. ⁠Write a JavaScript function that stores a user's name in localStorage, retrieves it, and displays it in the console. How does the Web Storage API handle storing and retrieving data?
// 3. ⁠Create a Car class in JavaScript with properties for maker, model, color and year. Implement a method that returns a string describing the car. Create 4 new cars from the Car class.
// 4. Write a JavaScript function using the map method to create a new array of five objects, where each employee's salary is increased by 10%. The new array should retain the original employee names and update their salary.
// 5. ⁠2. Write a JavaScript function using the forEach method to print each customer's name followed by the list of items they ordered in the following format
// Customer: John
// Items: Laptop, Mouse, Keyboard

// Customer: Sarah
// Items: Monitor, Headphones

// Customer: Michael
// Items: Phone, Charger, Case

// Customer: Anna
// Items: Tablet.

// 6.Dynamic Content Generation
// Create an HTML page with a form and a div container. Write JavaScript code to
// (a) Add new input fields dynamically based on user selection.
//  ( b)Create a table row with data from form inputs when a button is clicked 
// (c) Generate a random quote and display it in a div when a button is clicked.






//(1)

const planets=[2,4,6,8,10]

function multiplyy(arr){
  return planets.map((num) => num*2)
  
}
console.log(multiplyy());




// (2)
//Set 
const myName= localStorage.setItem('myNick', JSON.stringify({name:"Chapo"}))
console.log(myName);

//GET
const getName= localStorage.getItem('myNick')
console.log(getName);




// (3)

class Car {
  constructor (maker,model,color,year){
    this.maker= maker,
    this.model= model,
    this.color=color,
    this.year=year
  }
  about(){
   console.log(`"This is the latest ${this.year} ${this.maker} ${this.model} coming in ${this.color}"`);
   
  }
  

}
const benzo= new Car("Mercedes-Benz","G-63","darkPurple","2025");
console.log(benzo.about());

const Tesla = new Car("Tesla","Cyber-Truck","Grey","2024")
console.log(Tesla.about());

const Bugatti = new Car("Bugatti","DIvo","Black","2024")
console.log(Bugatti.about());

const Innoson = new Car("Innoson","EVs","Green","2024")
console.log(Innoson.about());

const Audi = new Car("Audi","E-Tron","darkPurple","2024")
console.log(Audi.about());





// (4)

const employees= [
  {
    name:"Kasali",
    salary:"40"
  },
  {
    name:"Mutiu",
    salary:"20"
  },
  {
    name:"Sani",
    salary:"60"
  },
  {
    name:"Audu",
    salary:"80"
  },
  {
    name:"Kasali",
    salary:"40"
  }
]

function newSalary (employees) {
  return employees.map (employee => ({
    name: employee.name,
    salary: employee.salary *1.10
  }))
}

const updatedEmployees= newSalary(employees)
console.log(updatedEmployees);










