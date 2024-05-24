/**
 * Refector this code using promise
 * Also Create a check if(!error) to resolve and reject when reject return 'Something Went Wrong'
 * To make it fency create a function showError and create an h3 element, set the h3 element innerHTML to <strong>error</strong>
 * then add it to the DOM id posts
 * 
 */
const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' },
];

function createPost(post, cb) {
  setTimeout(() => {
    posts.push(post);
    cb();
  }, 2000);
}

function getPosts() {
  setTimeout(() => {
    posts.forEach(function (post) {
      const div = document.createElement('div');
      div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
      document.querySelector('#posts').appendChild(div);
    });
  }, 1000);
}

createPost({ title: 'Post Three', body: 'This is post' }, getPosts);
