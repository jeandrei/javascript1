
/**
 * Another way to add prototype but not in the constructor is to create an object literals with all the functions
 * and then call it in the object create
 * that way we don't need to call like object.prototype.function we can call simply object.function
 * Create a const rectanglePrototypes as an object literals and inside create the functions
 * area width * height, perimeter 2 * (width + height) and isSquare height === width
 * Now create a function createRectangle with height and width parameter
 * and object create rectanglePrototypes with height and width values
 * Note: the declaration of the properties are different in this case we need to set as object like
 * height: { value: heigth }, * 
 * Now create a const rect createRectangle(10, 20)
 * console log rect, rect area and rect isSquare
 */