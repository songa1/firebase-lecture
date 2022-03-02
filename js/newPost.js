const addPost = document.getElementById('addPost');
const title = document.getElementById('title');
const body = document.getElementById('body');

addPost.addEventListener('click',(e)=>{
    e.preventDefault();
    db.collection('posts').add({
        author: "Cishahayo Songa Achille",
        body: body.value,
        createdAt: new Date(),
        image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg",
        title: title.value
    }).then(res=>{
        title.value = "";
        body.value = "";
        alert("Post added");
        location.href = "posts.html";
    }).catch(err=>{
        alert("Error: " + err.message)
    })
})