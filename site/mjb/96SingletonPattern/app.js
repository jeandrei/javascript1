// Execute on at a time
// Example would create one user at a time instead of creating
// multiples users at a tima

const Singleton = (function(){
  let instance;

  function createInstance(){
    const object = new Object({name: 'Brad'});
    return object;
  }

  return {
    getInstance: function(){
      if(!instance){
        instance = createInstance();
      }
      return instance;
    }
  }
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA === instanceB);//if they are equal it means
//that only one instance was created

//console.log(instanceA);
