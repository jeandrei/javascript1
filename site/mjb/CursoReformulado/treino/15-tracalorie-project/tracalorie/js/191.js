/**
 * Let's create an app class so that we can add new meal and add workout and we can handle events and all that
 * so at the bottom create create a class app and in the constructor lets create a private _tracker and set it to a new CalorieTracker();
 * then everytime we want to access a method we can call it by calling this._tracker."any of public method"
 * in the constructor is where we put all of our eventlisteners and to create a new meal or new workout we will call the method newItem
 * still in the constructor lets get the element id meal-form and add an eventlisteners submit and call the method this._newMeal that we will
 * create right next
 * create in the app class a private method called _newMeal, we will call it when we submit the form
 * for now get the e event object, prevent default and just console log this
 * now at the bottom instanciate the app const app = new App();
 * and in the form in meal add something and submit. check the console. it will console the form object instead of the tracker
 * to fix this we can use the bind(this) in the addEventListener submit _newMeal. now we can see that it is related to our app instance
 * now let's get the input field in the _newMeal method
 * first remove the console log
 * then create a const name and set it to the element id meal-name 
 * now create a const calories and set it to the element id meal-calories
 * now let's do a little validation on inputs
 * check if name.value is iqual to nothing or calories.value is iqual to nothing if so alert Please fill in all fields and just return
 * now after the validation let's create a new meal
 * create a const meal and set it to a new Meal and pass the name.value and +calories.value the plus sign is to force javascript to turn the string to number
 * now call the _tracker.addMeal(mea) meal we just created
 * now just clear the form setting the name and calories value to nothing
 * now do the same for workout method _newWorkout
 * now lets close the form after the user submit
 * in the _newMeal at the bottom create a const collapseMeal and set it to element id collapse-meal
 * now create a const bsCollapse and set it to a new bootstrap.Collapse(collapseMeal,{toggle: true}); we hava access to it because we are including the bootstrap javascript file
 * do the same for _newWorkout
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

class App{
  constructor(){
    this._tracker = new CalorieTracker();
    document.getElementById('meal-form').addEventListener('submit',this._newMeal.bind(this));
    document.getElementById('workout-form').addEventListener('submit',this._newWorkout.bind(this));
  }

  _newMeal(e){
    e.preventDefault();
    const name = document.getElementById('meal-name');
    const calories = document.getElementById('meal-calories');
    if(name.value === '' || calories.value === ''){
      alert('Please fill in all fields');
      return;
    }

    const meal = new Meal(name.value, +calories.value);
    this._tracker.addMeal(meal);
    name.value = '';
    calories.value = '';
    const collapseMeal = document.getElementById('collapse-meal');
    const bsCollapse = new bootstrap.Collapse(collapseMeal,{
      toggle: true
    });
  }

  _newWorkout(e){
    e.preventDefault();
    const name = document.getElementById('workout-name');
    const calories = document.getElementById('workout-calories');
    if(name.value === '' || calories.value === ''){
      alert('Please fill in all fields');
      return;
    }

    const workout = new Workout(name.value, +calories.value);
    this._tracker.addWorkout(workout);
    name.value = '';
    calories.value = '';
    const collapseWorkout = document.getElementById('collapse-workout');
    const bsCollapse = new bootstrap.Collapse(collapseWorkout,{
      toggle: true
    });
  }
}

const app = new App();