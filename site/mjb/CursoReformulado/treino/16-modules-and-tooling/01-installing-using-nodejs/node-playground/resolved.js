/* Seção 17 Aula 205  */
async function getUser() {
  const response = await fetch('https://api.github.com/users/bradtraversy');
  const data = await response.json();
  console.log(data);
}

getUser();
