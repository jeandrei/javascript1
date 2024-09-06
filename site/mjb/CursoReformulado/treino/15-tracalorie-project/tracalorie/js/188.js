/**
 * lesson 188
 * 
 * First let's create the base CalorieTracker
 * that includes the _calorieLimit, _totalCalories, _meals array and _workouts array
 * then we'll create the public methods addMeal and addWorkout
 * and as we add a meal or a workout we need to also create the two objects Meal and workout
 * and so we need to create this classes Meal and workout
 * So create a class CalorieTracker with
 * the property _calorieLimit and set to 200
 * note that it must be private
 * create a _totalCalories and set it to 0;
 * now create a _meals and set to ampty array
 * also create a _workouts array
 * now create a addMeal(meal) and push the meal
 * to the _meals array
 * also update the _totalCalories add the meal.calories to  _totalCalories
 * then do the same for addWorkout(workout) but push to the array _workouts
 * but this time we need to remove workout.calories from _totalCalories
 * 
 * Now create a class Meal
 * with name, calories
 * in the constructor create a id
 * and we need to generate an id
 * so id = Math.random().toString(16) it is exadecimal
 * so console log Math.random().toString(16) you'll see that it will
 * generate 0.sometext
 * so to remove the zero we can do a slice(2)
 * now just add the name and calories
 * now do the same for the class Workout
 * 
 * now to test
 * create a const tracker = new CalorieTracker
 * 
 * create a new meal
 * const breakfast = new Meal('Breakfast',400)
 * tracker.addMeal(breakfast)
 * 
 * then create a Workout
 * const run = new Workout('Morning Run', 300);
 * tracker.addWorkout(run);
 * 
 * now for test console log tracker._meals
 * console log tracker._workouts
 * also console log totalCalories it must return 100
 * 
 * 
 * 
 * 
 */
class CalorieTracker{
  constructor(){
    this._calorieLimit = 200;
    this._totalCalories = 0;
    this._meals = [];
    this._workouts = [];
  }

  addMeal(meal){
    this._meals.push(meal);
    this._totalCalories += meal.calories;    
  }

  addWorkout(workout){
    this._workouts.push(workout);
    this._totalCalories -= workout.calories;    
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

const tracker = new CalorieTracker();

const breakfast = new Meal('Breakfast', 400);
tracker.addMeal(breakfast);

const run = new Workout('Morning Run', 300);
tracker.addWorkout(run);

console.log(tracker._meals);
console.log(tracker._workouts);
console.log(tracker._totalCalories);