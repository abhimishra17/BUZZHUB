
const postButton = document.getElementById('post-button');
const postFeed = document.getElementById('post-feed');

postButton.addEventListener('click', () => {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const imageFile = document.getElementById('image-upload').files[0];

    if (title.trim() === "" || description.trim() === "") {
        alert("Title and description are required.");
        return;
    }

   
    const post = document.createElement('div');
    post.className = 'post';

   
    const postTitle = document.createElement('h3');
    postTitle.textContent = title;
    post.appendChild(postTitle);

    
    const postDescription = document.createElement('p');
    postDescription.textContent = description;
    post.appendChild(postDescription);


    if (imageFile) {
        const reader = new FileReader();
        reader.onload = () => {
            const postImage = document.createElement('img');
            postImage.src = reader.result;
            post.appendChild(postImage);
        };
        reader.readAsDataURL(imageFile);
    }


    postFeed.appendChild(post);

  
    document.getElementById('title').value = "";
    document.getElementById('description').value = "";
    document.getElementById('image-upload').value = "";
});
