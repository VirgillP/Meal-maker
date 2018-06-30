const menu = {
  _courses: {
     _appetizers: [],
     _mains: [],
     _desserts: [],  
    set appetizers (appetizer) {
      this._appetizers.push(appetizerIndex);
    },
    set mains (main) {
      this._mains.push(mainIndex);
    },
    set desserts (dessert) {
      this._desserts.push(dessertIndex);
    },
    get appetizers () {
      return this._appetizers;
    },
    get mains () {
      return this._mains;
    },
    get desserts () {
      return this._desserts;
    }//End of the getter and setters
  }, //End of Courses
 
   get courses(){
     return{
   appetizers: this._courses.appetizers,
   mains: this._courses.mains,
   desserts: this._courses.desserts}
 },//End of getter courses 
 
 addDishToCourse (courseName, dishName, dishPrice) {
const dish = {
      name: dishName,
      price: dishPrice
    };
    this._courses[courseName].push(dish);
  },//End of the dishtocourse method

  getRandomDishFromCourse(courseName){
  const dishes = this._courses[courseName];
  
  const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];  
  },//End of the randomdishfromcourse method
  
  generateRandomMeal(){
   const appetizer = this.getRandomDishFromCourse("appetizers");
   const main = this.getRandomDishFromCourse("mains");
    const dessert = this.getRandomDishFromCourse("desserts");
    const totalPrice = 
    appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The price is ZAR ${totalPrice}`;
 
  }//End of generaterandommeal
} //End of menu object
  menu.addDishToCourse("appetizers", "Buffalo Chicken Wings", 65.00);
menu.addDishToCourse("appetizers", "Pepper Poppers", 35.00);
menu.addDishToCourse("appetizers", "Chicken Livers", 35.00);

menu.addDishToCourse("mains", "Kouseband with brown rice and steamed dry Anjumara", 112.00);
menu.addDishToCourse("mains", "Antroewa with long grain rice and beef strips", 99.00);
menu.addDishToCourse("mains", "Klaroen with white short rice and smoked dry chicken", 120.00);

menu.addDishToCourse("desserts", "Apple pie", 23.00);
menu.addDishToCourse("desserts", "Rosemary sweet cake", 23.00);
menu.addDishToCourse("desserts", "Djamu dessert", 38.00);
  let meal = menu.generateRandomMeal();
    console.log(meal)
//That was a great meal!