/**
 * Updating the numbers, meals and workout
 * in the CalorieTracker we'll add new methods
 * let's start with the method _displayCaloriesTotal
 * create a const totalCaloriesEl and set it to element id calories-total
 * now just set the totalCaloriesEl innerHtml  to the _totalCalories
 * It wont change in the dom because we need to update the dom
 * and so inside the constructor call the _displayCaloriesTotal()
 * it still wont update the value.
 * We need to render to update
 * So let's create a render method
 * _render()
 * now just call _displayCaloriesTotal
 * and call render in the addMeal and addWorkout
 * now everytime we add a meal or workout the totalCaloriesEl will be update
 * now let's display the limit
 * we want to show what's in _calorieLimit
 * so lets create a method _displayCaloriesLimit
 * Create a const calorieLimitEl and get the element id calories-limit
 * then set the calorieLimitEl innerHTML to _calorieLimit
 * now in the CalorieTracker constructor
 * call the _displayCaloriesLimit
 * Now let's do the consumed and burned
 * above the render method
 * create a method _displayCaloriesConsumed
 * create a const caloriesConsumedEl and set to the id element calories-consumed
 * now create a const consumed and using reduce
 * get all _meals reduce remember reduce needs a call back funciton
 * with the acumulatior "total" and the value "meal" 
 * return the total + meal.calories,0 where 0 is the value
 * of start
 * now let's output that
 * caloriesConsumedEl innerHTML set it to consumed
 * now we need to call the _displayCaloriesConsumed in
 * CalorieTracker constructor
 * in the render because it will change everytime we add a meal
 * Now do the same with burn name it as _displayCaloriesBurned
 * Now let's show the calories remaining
 * To do that create another method called _displayCaloriesRemaining
 * We just need to subtract the totalcalories from calorieLimit
 * first let's get the dom elements
 * create a const caloriesRemainigEl and set to the element id of calories-remaining
 * create a const remaining and set it to _calorieLimit - _totalCalories
 * now just set the caloriesRemainigEl innerHTML to remaining
 * then call it in the constructor and also in the render
 * 
 * 
 * 
 */
class CalorieTracker{
  constructor(){
    this._calorieLimit = 2000;
    this._totalCalories = 0;
    this._meals = [];
    this._wokouts = [];
    this._displayCaloriesTotal();
    this._displayCaloriesLimit();
    this._displayCaloriesConsumed();
    this._displayCaloriesBurned();
    this._displayCaloriesRemaining();
  }

  addMeal(meal){
    this._meals.push(meal);
    this._totalCalories += meal.calories;
    this._render();
  }

  addWorkout(workout){
    this._wokouts.push(workout);
    this._totalCalories -= workout.calories;
    this._render();
  }

  _displayCaloriesTotal(){
    const totalCaloriesEl = document.getElementById('calories-total');
    totalCaloriesEl.innerHTML = this._totalCalories;
  }

  _displayCaloriesLimit(){
    const calorieLimitEl = document.getElementById('calories-limit');
    calorieLimitEl.innerHTML = this._calorieLimit;
  }

  _displayCaloriesConsumed(){
    const caloriesConsumedEl = document.getElementById('calories-consumed');
    const consumed = this._meals.reduce((total,meal) => total += meal.calories, 0);
    caloriesConsumedEl.innerHTML = consumed;
  }

  _displayCaloriesBurned(){
    const caloriesBurnedEl = document.getElementById('calories-burned');
    const burned = this._wokouts.reduce((total,workout) => total += workout.calories, 0);
    caloriesBurnedEl.innerHTML = burned;
  }

  _displayCaloriesRemaining(){
    const caloriesRemainigEl = document.getElementById('calories-remaining');    
    const remainig = this._calorieLimit - this._totalCalories;
    caloriesRemainigEl.innerHTML = remainig;
  }

  _render(){
    this._displayCaloriesTotal();
    this._displayCaloriesConsumed();
    this._displayCaloriesBurned();
    this._displayCaloriesRemaining();
  }
}

class Meal{
  constructor(name, calories){
    this.id = Math.random().toString(16).slice(2);
    this.name = name;
    this.calories = calories;
  }
}

class Workout{
  constructor(name, calories){
    this.id = Math.random().toString(16).slice(2);
    this.name = name;
    this.calories = calories;
  }
}

const tracker = new CalorieTracker;
const breakfast = new Meal('Breakfast', 400);
tracker.addMeal(breakfast);

const lunch = new Meal('Lunch', 350);
tracker.addMeal(lunch);

const run = new Workout('Morning Run', 300);
tracker.addWorkout(run);
//const gim = new Workout('Gim', 500);
//tracker.addWorkout(gim);
console.log(tracker);
console.log(tracker._totalCalories);
