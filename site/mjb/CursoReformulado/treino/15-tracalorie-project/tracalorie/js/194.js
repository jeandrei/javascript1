/**
 * 
 * Let's do the remove part
 * Inside the app class we are gonna have a removeItem
 * so inside the app class constructor first let's create an eventlistener target the meal-items id element it will get all the items
 * event must be click and call the method this._removeItem.bind(this, 'meal') that we are gonna create. note that meal is the type
 * now below the method newItem let's create the _removeItem(type, e)
 * inside check if e.target.classList.contains the class delete in this case button or e.target.classList.contains fa-xmark in this case the icon
 * do a confirm 'Are you sure?'
 * if confirm just consolo log 'delete'
 * now we wanna get the id that we add in the item with the attribute data-id
 * and so instead of console removed lets create a const id and set it to e.target.closest('.card').getAttribute('data-id');
 * closest('.card') whatever class card closest to us
 * and console log the id
 * if when remove a meal it shows the id in the console it's ok
 * now lets do a check if it is a meal or a workout type so that we can do different things on each one
 * check if type === 'meal then call this._tracker.removeMeal(id) else call _tracker.removeWorkout(id)
 * and finaly remove from the DOM e.target.closest('.card').remove()
 * note that we don't have created yet the removeMeal neither the removeWorkout
 * so let's create it
 * so as it is a public method we can put it behind addWorkout at CalorieTracker class
 * so create a class removeMeal(id)
 * create a const index and set it to this._meals.findIndex((meal) => meal.id === id) 
 * Note that wen the findIndex doesn't find a match it return a -1 value
 * so check if index != -1 then
 * create a const meal and set it to this._meals[index] to get the current meal is being deleted
 * then update the totalCalories _totalCalories -= meal.calories;
 * then remove the meal from the array
 * this._meals.splice(index, 1)
 * then render again this._render()
 * Now do the same for workout
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
    this._displayNewMeal(meal);
    this._render();
  }

  addWorkout(workout){
    this._wokouts.push(workout);
    this._totalCalories -= workout.calories;
    this._displayNewWorkout(workout);
    this._render();
  }

  removeMeal(id){
    const index = this._meals.findIndex((meal) => meal.id === id);
    if(index !== -1){
      const meal = this._meals[index];
      this._totalCalories -= meal.calories;
      this._meals.splice(index, 1);
      this._render();
    }
  }

  removeWorkout(id){
    const index = this._wokouts.findIndex((workout) => workout.id === id);
    if(index !== -1){
      const workout = this._wokouts[index];
      this._totalCalories += workout.calories;
      this._wokouts.splice(index, 1);
      this._render();
    }
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

  _displayNewMeal(meal){
    const mealsEl = document.getElementById('meal-items');
    const mealEl = document.createElement('div');
    mealEl.classList.add('card', 'my-2');
    mealEl.setAttribute('data-id', meal.id);
    mealEl.innerHTML = `
      <div class="card-body">
        <div class="d-flex align-items-center justify-content-between">
          <h4 class="mx-1">${meal.name}</h4>
          <div
            class="fs-1 bg-primary text-white text-center rounded-2 px-2 px-sm-5"
          >
            ${meal.calories}
          </div>
          <button class="delete btn btn-danger btn-sm mx-2">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
    `;
    mealsEl.appendChild(mealEl);
  }

  _displayNewWorkout(workout){
    const workoutsEl = document.getElementById('workout-items');
    const workoutEl = document.createElement('div');
    workoutEl.classList.add('card', 'my-2');
    workoutEl.setAttribute('data-id', workout.id);
    workoutEl.innerHTML = `
      <div class="card-body">
        <div class="d-flex align-items-center justify-content-between">
          <h4 class="mx-1">${workout.name}</h4>
          <div
            class="fs-1 bg-secondary text-white text-center rounded-2 px-2 px-sm-5"
          >
            ${workout.calories}
          </div>
          <button class="delete btn btn-danger btn-sm mx-2">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
    `;
    workoutsEl.appendChild(workoutEl);
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
    document.getElementById('meal-form').addEventListener('submit',this._newItem.bind(this, 'meal'));
    document.getElementById('workout-form').addEventListener('submit',this._newItem.bind(this, 'workout'));
    document.getElementById('meal-items').addEventListener('click', this._removeItem.bind(this, 'meal'));
    document.getElementById('workout-items').addEventListener('click', this._removeItem.bind(this, 'workout'));
  }

  _newItem(type, e){
    e.preventDefault();
    const name = document.getElementById(`${type}-name`);
    const calories = document.getElementById(`${type}-calories`);
    if(name.value === '' || calories.value === ''){
      alert('Please fill in all fields');
      return;
    }
    

    if(type === 'meal'){
      const meal = new Meal(name.value, +calories.value);
      this._tracker.addMeal(meal);
    } else {
      const workout = new Workout(name.value, +calories.value);
      this._tracker.addWorkout(workout);
    }
    
    name.value = '';
    calories.value = '';
    const collapseItem = document.getElementById(`collapse-${type}`);
    const bsCollapse = new bootstrap.Collapse(collapseItem,{
      toggle: true
    });
  }

  _removeItem(type, e){  
    if(e.target.classList.contains('delete') || e.target.classList.contains('fa-xmark')){
      if(confirm('Are you sure?')){
       const id = e.target.closest('.card').getAttribute('data-id');
       if(type === 'meal'){
        this._tracker.removeMeal(id);
       } else {
        this._tracker.removeWorkout(id);
       }

       e.target.closest('.card').remove();

      }
    }
  }

 
}

const app = new App();