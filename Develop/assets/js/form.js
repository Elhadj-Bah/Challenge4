// TODO: Create a variable that selects the form element


document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('blogForm');

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.

function handleFormSubmission(event) {
  
    event.preventDefault();
  
    const username = document.getElementById('username').value.trim();
    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();
  
  
    //Clear previous error message 
    errorMessage.textContent = '';
    
    //Missing data validation
    if (!username || !title || !content) {
        errorMessage.textContent = 'Please complete the from.';
        return;
      }

      const posts = JSON.parse(localStorage.getItem('posts')) || [];
      posts.push({ username, title, content});
      localStorage.setItem('posts', JSON.stringify(posts));
      
  
    redirectPage();

}
// Redirect to posts page
function redirectPage() {
window.location.href = 'blog.html';

};
});


// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.

form.addEventListener('submit', handleFormSubmission); 
