
const renderPosts = (doc) => {
    const postsContainer = document.querySelector('.posts');

    const postDiv = document.createElement('div');
    postDiv.setAttribute('class', 'post');

        const postImage = document.createElement('img');
        postImage.src = doc.data().image;

        const postData = document.createElement('div');
        postData.className = 'blog-summary';

            const postTitle = document.createElement('p');
            postTitle.className = 'title';
            postTitle.textContent = doc.data().title;

            const postSummary = document.createElement('p');
            postSummary.textContent = doc.data().body.substring(0, 100);
            
            const editBtn = document.createElement('button');
            editBtn.textContent = "Edit";
            editBtn.style.backgroundColor = "green";

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = "Delete";
            deleteBtn.style.backgroundColor = "red";

            deleteBtn.addEventListener("click",(e)=>{
                e.preventDefault();
                db.collection('posts').doc(doc.id).delete()
                .then(res=>{
                    alert("Post deleted");
                    location.reload();
                }).catch(err=>{
                    alert("Error: " + err.message)
                })
            })

            editBtn.addEventListener('click',(e)=>{
                e.preventDefault();
                location.href = `update.html#${doc.id}`
            })



        postData.appendChild(postTitle);
        postData.appendChild(postSummary);
        postData.appendChild(editBtn);
        postData.appendChild(deleteBtn);

    postDiv.appendChild(postImage);
    postDiv.appendChild(postData);

    postsContainer.appendChild(postDiv);
}

db.collection('posts').get().then(res=>{
    res.docs.forEach(doc=>{
        renderPosts(doc);
    })
})