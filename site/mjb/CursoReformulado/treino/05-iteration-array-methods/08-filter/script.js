/**Create a const numbers array with numbers from 1 to 12 */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

/**Create a const evenNumbers that will get just the even numbers using filter method */

//console.log(evenNumbers)

// Short version
//Create a const evenNumbers2 that will get even numbers like above but the short version of filter then cons

// Same with forEach
/**Create a const evenNumbers3 and do de same again but using forEach method */

const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
]

// Get only retail companies
/**Create a const retailCompanies thet will get just the companies with the category propertie of Retail then console log retailCompanies */

const retailCompanies = companies.filter((compani) => {
  return compani.category === 'Retail'
})

console.log(retailCompanies)

// Get companies that started in or after 1980 and ended in or before 2005
/**Now create a const earlyCompanies that will get just the companies with the propertie start greater or iqual to 1980 and propertie end less or iqual to 2005  then console log earlyCompanies*/

const earlyCompanies = companies.filter((compani) => {
  return compani.start >= 1980
})

console.log(earlyCompanies)

// Get companies that lasted 10 years or more
/**Create a longCompanies that has the propertie end less propertie start greater or iqual to 10 (end - use short version and then console log longCompanies */

const longCompanies = companies.filter((compani) => {
  return compani.end - compani.start >= 10
})

console.log(longCompanies)
