/**
 * Dealing with object property
 * Create a function object Rectangle with name, width and heigth 
 * Set this name, width and heigth
 * create a function area to return the width * height
 * 
 * then create a new instance rect1 'Rectangle 1' 20, 20
 * and a new instance rect2 'Rectangle 2' 20, 30
 * then console log rect1 name rect2 width using dot notation
 * console log rect1['width'] use bracket notation
 * 
 * Add a property color red to rect1
 * 
 * add a function perimeter 2 * (width + height) use arrow function  to rect2
 * note: you can't use the letter this becouse this is gonna be the window object because we are not in the  constructor
 * then console log rect2.perimeter
 * to remove a property simply use delete so delete the rect2.perimeter property
 * 
 * Check for existing property
 * console log if rect2 hawOwnProperty('color') 
 * do the same as rect1
 * as we add color just to rect1 just rect1 will return true
 * 
 * Get the keys of objects
 * console log Object keys rect1
 * Get the values
 * console log Object values rect2
 * Get entries
 * console log Object entries rect1
 * Object entries will return the key and the value
 * 
 * do a for loop [key,value] of Object.entries(rect1)
 * using back backticks console log key and value
 * now console log only if the typeof value is different as function
 */