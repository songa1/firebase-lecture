
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
            
            const readMore = document.createElement('button');
            readMore.textContent = "Read More";

            readMore.addEventListener('click', (e) => {
                e.preventDefault();
                location.href = "info.html#"+doc.id;
            })

        postData.appendChild(postTitle);
        postData.appendChild(postSummary);
        postData.appendChild(readMore);

    postDiv.appendChild(postImage);
    postDiv.appendChild(postData);

    postsContainer.appendChild(postDiv);
}

db.collection('posts').get().then(res=>{
    res.docs.forEach(doc=>{
        renderPosts(doc);
    })
})