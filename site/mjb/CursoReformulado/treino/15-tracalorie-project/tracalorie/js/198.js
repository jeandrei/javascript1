/**
 * 
 * Set the totalCalories to localStorage
 * First at the constructor of CalorieTracker set the _totalCalories to Storage.getTotalCalories(0) we are gonna create
 * now Storage class behind the getCalorieLimit create a method getTotalCalories(defaultCalories = 0)
 * create a let totalCalories
 * then check if there is in localStorage the item with 'totalCalories' is iqual to null
 * if so set the totalCalories to defaultCalories
 * else set totalCalories to +localStorage.getItem('totalCalories');
 * and finaly return the totalCalories
 * now also create a method updateTotalCalories(calories)
 * then simply call localStorage.setItem('totalCalories', calories);
 * now whenever we add or remove a meal or a workout we need to call this method
 * so at the CalorieTracker when we add a meal after get the totalCalories we also need to Storage.updateTotalCalories(this._totalCalories) 
 * do the same for workout
 * also when remove a meal and when remove a workout
 * 
 * 
 * 
 */
class CalorieTracker{
  constructor(){
    this._calorieLimit = Storage.getCalorieLimit();
    this._totalCalories = Storage.getTotalCalories(0);
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
    Storage.updateTotalCalories(this._totalCalories);
    this._displayNewMeal(meal);
    this._render();
  }

  addWorkout(workout){
    this._wokouts.push(workout);
    this._totalCalories -= workout.calories;
    Storage.updateTotalCalories(this._totalCalories);
    this._displayNewWorkout(workout);
    this._render();
  }

  removeMeal(id){
    const index = this._meals.findIndex((meal) => meal.id === id);
    if(index !== -1){
      const meal = this._meals[index];
      this._totalCalories -= meal.calories;
      Storage.updateTotalCalories(this._totalCalories);
      this._meals.splice(index, 1);
      this._render();
    }
  }

  removeWorkout(id){
    const index = this._wokouts.findIndex((workout) => workout.id === id);
    if(index !== -1){
      const workout = this._wokouts[index];
      this._totalCalories += workout.calories;
      Storage.updateTotalCalories(this._totalCalories);
      this._wokouts.splice(index, 1);
      this._render();
    }
  }

  reset(){
    this._totalCalories = 0;
    this._meals = [];
    this._wokouts = [];
    this._render();
  }

  setLimit(calorieLimit){
    this._calorieLimit = calorieLimit;
    Storage.setCalorieLimit(calorieLimit);
    this._displayCaloriesLimit();
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

class Storage {
  static getCalorieLimit(defaultLimit = 2000){
    let calorieLimit;
    if(localStorage.getItem('calorieLimit') === null){
      calorieLimit = defaultLimit;
    } else {
      calorieLimit = localStorage.getItem('calorieLimit');
    }
    return calorieLimit;
  }

  static setCalorieLimit(calorieLimit){
    localStorage.setItem('calorieLimit', calorieLimit);
  }

  static getTotalCalories(defaultCalories = 0){
    let totalCalories;
    if(localStorage.getItem('totalCalories') === null){
      totalCalories = defaultCalories;
    } else {
      totalCalories = +localStorage.getItem('totalCalories');
    }
    return totalCalories;
  }

  static updateTotalCalories(calories){
    localStorage.setItem('totalCalories', calories);
  }
}

class App{
  constructor(){
    this._tracker = new CalorieTracker();
    document.getElementById('meal-form').addEventListener('submit',this._newItem.bind(this, 'meal'));
    document.getElementById('workout-form').addEventListener('submit',this._newItem.bind(this, 'workout'));
    document.getElementById('meal-items').addEventListener('click', this._removeItem.bind(this, 'meal'));
    document.getElementById('workout-items').addEventListener('click', this._removeItem.bind(this, 'workout'));
    document.getElementById('filter-meals').addEventListener('keyup', this._filterItems.bind(this, 'meal'));
    document.getElementById('filter-workouts').addEventListener('keyup', this._filterItems.bind(this, 'workout'));
    document.getElementById('reset').addEventListener('click', this._reset.bind(this));
    document.getElementById('limit-form').addEventListener('submit', this._setLimit.bind(this));
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

  _filterItems(type, e){   
    const text = e.target.value.toLowerCase();  
    document.querySelectorAll(`#${type}-items .card`).forEach((item) => 
    {
      const name = item.firstElementChild.firstElementChild.textContent;
      
      if(name.toLowerCase().indexOf(text) !== -1){        
        item.style.display = 'block';
      } else {        
        item.style.display = 'none';
      }
    })
  }

  _reset(){
    this._tracker.reset();// we need to create this at CalorieTracker class
    document.getElementById('meal-items').innerHTML = '';
    document.getElementById('workout-items').innerHTML = '';
    document.getElementById('filter-meals').value = '';
    document.getElementById('filter-workouts').value = '';
  }

  _setLimit(e){//this is a private setLimit
    e.preventDefault();
    const limit = document.getElementById('limit');
    if(limit.value === ''){
      alert('Please add a limit');
      return;
    }
    this._tracker.setLimit(+limit.value);//this public set limit we need to create
    limit.value = '';
    const modalEl = document.getElementById('limit-modal');
    const modal = bootstrap.Modal.getInstance(modalEl);
    modal.hide();
  }
  
 
}

const app = new App();