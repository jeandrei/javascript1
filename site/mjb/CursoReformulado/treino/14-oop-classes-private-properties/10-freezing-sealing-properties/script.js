
// Sealing - Prevents properties from being added or removed. Can still be changed.

// Freezing - Prevents properties from being added, removed or changed, basically you block all properties in an object


/**
 * Create an rectObj with name Rectangle 1, widht 10 and height 10
 * create a let descriptors and set ito to Object.getOwnPropertyDescriptors(rectObj) then console log descriptors
 * you'll see that configurable, enumerable and writable are all true
 * now let's seal it, before the line of descriptors getOwnPropertyDescriptors seal the object like Object.seal(object)
 * now note that the configurable is now set to false in all of the properties
 * now try to add a property color red to the object
 * and console log the object. You'll see that the property is not added
 * now try to delet the name property
 * you'll see that the name is still there
 * seal you can't add or remove properties but you can change
 * so change the width, set to 20
 * Now let's freeze
 * Create an new object circleObj with name Circle 1 and radius 30
 * then freeze it Object.freeze(object)
 * now set descriptors to getOwnPropertyDescriptors(circleObj)
 * and console log descriptors
 * You'll see that the configurable and writable are false now
 * if we try to add a property it will not be added
 * try to add the property color red
 * try to delete the name
 * you'll see the name is not removed
 * try to change the name to New Name you'll see the name will not be changed
 * We have methods to check if an object is seal or frozen isSealed and isFrozen
 * console log 
 * rectObj is sealed? object.isSealed
 * rectObj is frozen? object.isFrozen
 * circleObj is sealed? object.isSealed
 * circleObj is frozen? object.isFrozen
 * When an object is frozen it is also sealed because sealed is when configurable is true and wen you freeze configurable and writable are set to true
 * 
 * 
 * 
 */