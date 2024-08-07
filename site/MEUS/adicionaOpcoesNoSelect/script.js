const arraySelect = [
'AC',
'AL',
'AM',
'AP',
'AC',
'BA',
'CE',
'DF',
'ES',
'GO',
'MA',
'MT',
'MS',
'MG',
'PA',
'PB',
'PR',
'PE',
'PE',
'PI',
'RJ',
'RN',
'RN',
'RO',
'RS',
'RR',
'SC',
'SE',
'SP',
'TO' 
];
const mySelect = document.getElementById('my-select');

function addOptionsToSelect(select,arrayOptions){ 
  const option = document.createElement('option');
  option.textContent = 'Selecione...';
  option.setAttribute('value', 'null');
  select.appendChild(option);
  for(i = 0; i < arrayOptions.length; i++){
    const option = document.createElement('option');    
    option.textContent = `${arrayOptions[i].trim()}`;
    option.setAttribute('value', arrayOptions[i].trim());
    select.appendChild(option);    
  }
}

addOptionsToSelect(mySelect,arraySelect)