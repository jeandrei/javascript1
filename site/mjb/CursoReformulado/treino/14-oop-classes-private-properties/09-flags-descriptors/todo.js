/**
 * When creating an object it has some flags that can be changed, by default all of them are true but you can chanche
 * Like if we define a name property and we set the configurable to false, then we can't modify it
 */
// [[Configurable]] - if `true`, the property can be deleted and these attributes can be modified, otherwise not
// [[Enumerable]] - if `true`, the property will be returned in a `for...in` loop, otherwise not
// [[Writable]] - if `true`, the value of the property can be changed, otherwise not
// [[Value]] - the value of the property
/**
 * We can check what are the descriptors of an object with getOwnPropertyDescriptor(object, 'property')
 * so create a let descriptor and set it to the object getOwnPropertyDescriptor of object Math property PI
 * console log descriptor
 * 
 * Now lets create an object literal rectObj with name Rectangle 1, width 10 and height 10
 * now set descriptor to getOwnPropertyDescriptor of rectObj and property name, then console log descriptor, you'll check that everything is true
 * now before getOwnPropertyDescriptor set the rectObj
 * it takes 3 arguments, the object, the property you want to chanche and an object with the flags
 * Object.defineProperty(obj, 'property',{writable: false, configurable: false, enumerable: false})
 * now after that try to change the name like rectObj.name = 'New Name'; or try to delete like delete rectObj.name
 * and then console log rectObj
 * you'll see that the name hasn't change
 * and the property is not deleted
 * both because the flags are set to false
 * for enumerable
 * try to do a for loop like for let key, value of object.entries(rectObj)
 * console log key: value it must show just the width and the height because the name property the flags are set to false
 * and finaly to see all the property descriptor you can use Object.getOwnPropertyDescriptors(object) descriptors on plural
 * so console log getOwnPropertyDescriptors of rectObj
 * 
 */