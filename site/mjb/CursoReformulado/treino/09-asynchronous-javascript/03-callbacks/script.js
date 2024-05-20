/**
 * Create a function toggle getting the e event object
 * then e.target.classList.toggle change to class 'danger'
 * then create a addEventListener click in the button and run the toggle function
 * Now comment the code above
 * create a const object with two objects
 * title: 'Post One', body: 'This is post one'
 * title: 'Post Two', body: 'This is post two'
 * 
 * now create a function getPosts()
 * Inside the function 
 * create a setTimeout with 1000ms
 * inside the setTimeout 
 * posts.forEach for forEach post 
 * create a const div with a createElement div
 * then in the div created in the innerHTML `<strong>${post.title}</strong> - ${post.body}`;
 * and in the #posts id appendChild the div
 * 
 * now create a function createPost(post,cb) where cb is the callback
 * inside the funciton create a setTimeout 2000ms
 * inside the setTimeout just do posts.push(post)
 * and call the callback cb
 * the callback cb is gonna be the getPosts function so that every time a post is added the function getPosts is gonna update the posts
 * 
 * so in the end of the code call the funciton createPost({ title: 'Post Three', body: 'This is post' }, getPosts);
 * 
 * Note that if you do not call the getPosts in the createPost function as the create posts takes 2 seconds and the 
 * getPosts takdes 1 second when loading the page the post created will not be incorporated 
 * 
 * 
 */