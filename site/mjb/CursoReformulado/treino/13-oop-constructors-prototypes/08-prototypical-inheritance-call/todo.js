//Just to know the sintax but the way to go is with classes
/**
 * Create a function as object first letter uppercase Shape with the parameter name
 * now create a function Rectangle with name, height and width
 * before set the properties inherit the Shape function by Shape.call 
 * call this and name
 * now create a new object rect Rectangle 1, 20, 20
 * console log rect
 * 
 * Now create a function Circle with the parameter name and radius
 * as we have name in Shape call Shape.call this and name and set radius
 * Create a new object cir Circle 'Circle 1', 30
 * console log rect and cir
 * 
 * Now let's create a prototype in Shape so that we can inherit that prototype in Rectangle
 * create a Shape prototype logName that will simple console log `Shape Name: ${this.name}` 
 * Now try to call rect.logName();
 * You'll get an error because there is no logName in Rectangle
 * We need to inherit it on Rectangle
 * To do so call Rectangle prototype = Object create (Shape.prototype)
 * Do the same for Cicle object
 * console log rect and cir logName()
 * Note that if we console log rect.constructor in the console it will show as Shape
 * To show the constructor as Rectangle we need to set the Rectangle.prototype.constructor to Rectangle
 * the same for Circle
 * 
 * Finely imagine that we want a prototype to do something diferent in other so 
 * copy the Shape.prototype.logName and create a Rectanglo.prototype.logName but with text Rectangle Name: name
 */