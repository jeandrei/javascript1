class EasyHTTP{

  /*************************************GET****************************** */
  //get with Promise
  getP(url){
    return new Promise((resolve,reject)=>{      
      fetch(url)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    })
    
  }

  //get with async await
  async getA(url){    
    const response = await fetch(url);
    const result = await response.json();
    return result;
  }

  /*************************************POST****************************** */
  //Post with Promise
  postP(url,data){
    return new Promise((resolve,reject)=>{
      fetch(url,{
        method: 'POST',
        headers:{
          'Content-type':'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    }) 
  }


  //Post async await
  async postA(url,data){
    const response = await fetch(url,{
      method: 'POST',
      headers:{
        'Content-type':'application/json'
      },
      body: JSON.stringify(data)
    })
    const resData = await response.json();
    return resData;
  }


  /*************************************PUT****************************** */
  //Put with Promise
  putP(url,data){
    return new Promise((resolve, reject)=>{
      fetch(url,{
        method:'PUT',
        headers:{
          'Content-type':'application/json'
        },
        body:JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err))
    });
  }

  //Put async await
  async putA(url,data){
    const response = await fetch(url,{
      method: 'PUT',
      headers:{
        'Content-type':'application/json'
      },
      body: JSON.stringify(data)
    });

    const resData = await response.json();
    return resData;    
  }

  /*************************************DELETE**************************** */
  //Delete with Promise
  deletP(url){
    return new Promise((resolve, reject)=>{
      fetch(url,{
        method: 'DELETE',
        headers: {
          'Content-type':'application/json'
        }
      })
      .then(res => res.json())
      .then(() => resolve('Resource Deleted'))
      .catch(err => reject('Something went wrong'))
    })
  }

  //DElete with await async
  async deleteA(url){
    const response = await fetch(url,{
      method:'DELETE',
      headers:{
        'Content-type':'application/json'
      }
    })
    const res = await 'Data was removed';
    return res;
  }











}