/**
 * 
 * The filter part
 * in the app class let's add an eventlistener at the id filter-meals on keyup and call this._filterItems.bind(this, 'meals')
 * do the same for workout
 * now let's create our filterItems
 * Under removeItems create a new method _filterItems(type, e)
 * first create a const text set to e.target.value.toLowerCase()
 * and for test just console text
 * now let's loop through the items
 * document.querySelectorAll(`#{type}-items .card`) so this will get all meal-items or workout-items id with class of card
 * document.querySelectorAll(`#{type}-items .card`).forEach(item => {
 *  const name = item.firstElementChild.firstElementChild.textContent
 * })
 * then do a check if name.toLowerCase().indexOf(text) !== -1 then item.style.display = 'block' else item.style.display = 'none'
 * Reset everything
 * in the app constructor create a eventlistener for the reset id on click and call the method _reset.bind(this)
 * now at the App class behind filterItems create the method _reset()
 * call the _tracker.reset()
 * and to reset the elements in the dom
 * get the element id meal-items innerHTML and set it to nothing
 * do the same for workout-items
 * set the filter-meals id value to nothing
 * same to filter-workouts
 * now lets create our reset at CalorieTracker
 * right below removeWorkout and create this public method reset
 * first let's set the _totalCalories to zero
 * set _meals and _workouts to an ampty array
 * then just render
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

  reset(){
    this._totalCalories = 0;
    this._meals = [];
    this._wokouts = [];
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
  
 
}

const app = new App();