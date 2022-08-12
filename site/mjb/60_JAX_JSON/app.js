
document.querySelector('#button1').addEventListener('click',loadCustomer);


document.querySelector('#button2').addEventListener('click',loadCustomers);


// Load single Customer
function loadCustomer(e){
  const xhr = new XMLHttpRequest();
  xhr.open('GET','customer.json', true);

  xhr.onload = function(){
    if(this.status === 200){
      //console.log(this.responseText);
      // parse int necessário para poder fazer customer.id, customer.name
      // caso contrário é apenas uma string
      const customer = JSON.parse(this.responseText);

      const output = `
                      <ul>
                        <li>ID: ${customer.id}</li>
                        <li>NAME: ${customer.name}</li>
                        <li>COMPANY: ${customer.company}</li>
                        <li>PHONE: ${customer.phone}</li>
                      </ul>
                      `;
      document.querySelector('#customer').innerHTML = output;
    }
  }

  xhr.send();
}

// Load customers
function loadCustomers(e){
  const xhr = new XMLHttpRequest();
  xhr.open('GET','customers.json', true);

  xhr.onload = function(){
    if(this.status === 200){
    
      const customers = JSON.parse(this.responseText);

      let output = '';
      customers.forEach(function(customer){
         output += `
        <ul>
          <li>ID: ${customer.id}</li>
          <li>NAME: ${customer.name}</li>
          <li>COMPANY: ${customer.company}</li>
          <li>PHONE: ${customer.phone}</li>
        </ul>
        `;
      });      
      
      document.querySelector('#customers').innerHTML = output;
    }
  }

  xhr.send();
}