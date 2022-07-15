// Listen for submit
document.querySelector('#loan-form').addEventListener('submit', function(e){

  // Hide results
  document.querySelector('#results').style.display = 'none';  

  // Show loader
  document.querySelector('#loading').style.display = 'block';

  setTimeout(calculateResults, 2000);
  e.preventDefault();
});


// Calculate Results
function calculateResults(e){  
 
  // UI VARS
  const amount = document.querySelector('#amount');
  const interest = document.querySelector('#interest');
  const year = document.querySelector('#year');
  const monthlyPayment = document.querySelector('#monthly-payment');
  const totalPayment = document.querySelector('#total-payment');
  const totalInterest = document.querySelector('#total-interest');

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatePayments = parseFloat(years.value) * 12;

  // Compute montly payment
  const x = Math.pow(1 + calculatedInterest, calculatePayments);

  const monthly = (principal*x*calculatedInterest)/(x-1);

  if(isFinite(monthly)){
    monthlyPayment.value = monthly.toFixed(2);//toFixed número de casas decimais
    totalPayment.value = (monthly * calculatePayments).toFixed(2);
    totalInterest.value = ((monthly * calculatePayments)-principal).toFixed(2);
    // Show results
    document.querySelector('#results').style.display = 'block';  
    // Hide loading gift
    document.querySelector('#loading').style.display = 'none';
  } else {
    showError('Please check your numbers');
  }
  
}

// Show Error
function showError(error){
  
  // Hide results
  document.querySelector('#results').style.display = 'none';  
  // Hide loading gift
  document.querySelector('#loading').style.display = 'none';



  //Verifico se já não está sendo exibido um erro se sim interrompo 
  //para evitar múltiplas mensagens de erro
  const isThereAnError = document.querySelector('.alert');
  if(isThereAnError != null){
    return;
  }

  // Create a div
  const errorDiv = document.createElement('div');

  // Get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // Add Class
  errorDiv.className = 'alert alert-danger';

  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // Insert error above heading
  card.insertBefore(errorDiv,heading);

  // Clear error after 3 seconds
  setTimeout(clearError, 3000);

}

// Clear error
function clearError(){
  document.querySelector('.alert').remove();
}