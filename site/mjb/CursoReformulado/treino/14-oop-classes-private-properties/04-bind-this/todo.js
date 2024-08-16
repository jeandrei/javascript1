/**
 * 
 * Create a class App with serverName = 'localhost';
 * create a const app new App
 * now create a method getServerName and simply console log this.serverName
 * now in the constructor create a Event Listerne for button and call the 
 * getServerName
 * You' see that the result is gonna be undefined
 * in the getServerName just console log this you'll see that it will console the button itself
 * The reason is that when we call this inside querySelector button this is relatedo to the object selected
 * to fix that and select the object itself in this case App we need to bind this
 * so add .bind(this) in the EventListener
 * 
 */
