function loadPost (){
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(data => displayPost(data))
}
/*
1. Get the container element where you want to add the new elements
2. Creat Child Elemetn
3.set innerText or innerHTML
4. appendChild



*/

function displayPost(posts){
    const postContainer = document.getElementById('post-container');

   for(const post of posts) {
console.log(post);
    const postDiv =document.createElement('div');
    postDiv.classList.add('post');
    postDiv.innerHTML =`
    <h4> User- ${post.userId} <h/4>
    <h5> Post: ${post.title} </h5>
    <p> Post Description: ${post.body}</p>

    `;

    postContainer.appendChild(postDiv);

   }
  

}



loadPost();