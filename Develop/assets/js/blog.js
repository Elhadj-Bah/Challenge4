// TODO: Create a variable that selects the main element, and a variable that selects the back button element

document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.getElementById('main-content');


function createPostElement(post) {
    const postElement = document.createElement('div');
    postElement.classList.add('post-card');

    const postTitle = document.createElement('h3');
    postTitle.textContent = post.title;
    postElement.appendChild(postTitle);

    const postContent = document.createElement('p');
    postContent.textContent = post.content;
    postElement.appendChild(postContent);

    const postAuthor = document.createElement('span');
    postAuthor.textContent = `Posted by: ${post.username}`;
    postElement.appendChild(postAuthor);

    return postElement;
}

// TODO Create a function that handles the case where there are no blog posts to display

function handleNoPosts() {
    const noPostsMessage = document.createElement('p');
    noPostsMessage.textContent = `"No Blog posts yet..."`
    mainContent.appendChild(noPostsMessage);
}

// Create a function that reads from local storage and returns the data
function getPostsFromLocalStorage() {
    return JSON.parse(localStorage.getItem('posts')) || [];
}
// Call the function to render the list of blog posts
function  renderBlogList() {
    const posts = getPostsFromLocalStorage();

    if (posts.length === 0) {
        handleNoPosts();
        return;
    }

    posts.forEach(post => {

        mainContent.appendChild(postElement);
    });
}

renderBlogList();

});



 
