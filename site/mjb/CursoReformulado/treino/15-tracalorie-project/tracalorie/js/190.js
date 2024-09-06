/**
 * Let's work in the progress bar
 * 
 * In bootstrap to create a progress bar all we need is a div with class
 * progress-bar
 * to set the value we can simply do with css like
 * style="width: 50%"
 * In the CalorieTracker above the render
 * create a method _displayCaloriesProgress
 * inside create a const progressEl and set it to the id calorie-progress
 * then create a const percentage and set it to
 * the totalCalories / by the calorieLimit and multiplay 100;
 * then create a const width and set it to Math.min(percentage, 100) 
 * it will return the width we need
 * now to add that to the progress bar
 * progressEl style width `${width}%`
 * then call the _displayCaloriesProgress in the render because the render is called in addMeal and addWorkout
 * also call it in the CalorieTracker constructor to update as the app loads
 * turn the red when overgain calories
 * first lets turn red the box id calories-remaining
 * but the class we need to change is card bg-light 
 * keep in mind that card bg-light is two level above calories-remaining
 * so in the method _displayCaloriesRemaining
 * check if remaining <= 0 then set caloriesRemainigEl.parentElement.parentElement.remove('bg-light')
 * then add bg-danger
 * else do the oposite
 * now to do the same for the progress bar
 * create a const progressEl and set it to id calorie-progress
 * make the progressEl.classList.remove('bg-suces')
 * add the class bg-danger
 * in the else do the same
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
    this._displayCaloriesProgress();
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
    const progressEl = document.getElementById('calorie-progress');
    if(remainig <= 0){
      caloriesRemainigEl.parentElement.parentElement.classList.remove('bg-light');
      caloriesRemainigEl.parentElement.parentElement.classList.add('bg-danger');
      progressEl.classList.remove('bg-sucess');
      progressEl.classList.add('bg-danger');
    } else {
      caloriesRemainigEl.parentElement.parentElement.classList.remove('bg-danger');
      caloriesRemainigEl.parentElement.parentElement.classList.add('bg-light');    
      progressEl.classList.remove('bg-danger');
      progressEl.classList.add('bg-sucess');
    }
  }
  
  _displayCaloriesProgress(){
    const progressEl = document.getElementById('calorie-progress');
    const percentage = (this._totalCalories / this._calorieLimit) * 100;
    const width = Math.min(percentage, 100);
    progressEl.style.width = `${width}%`;
  }

  _render(){
    this._displayCaloriesTotal();
    this._displayCaloriesConsumed();
    this._displayCaloriesBurned();
    this._displayCaloriesRemaining();
    this._displayCaloriesProgress();
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
