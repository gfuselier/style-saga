var myWidget = cloudinary.createUploadWidget({
  cloudName: 'dsyymbmvk', 
  uploadPreset: 'style-saga'}, (error, result) => { 
    if (!error && result && result.event === "success") { 
      console.log('Done! Here is the image info: ', result.info); 
      document.querySelector('#post-picture').value = result.info.secure_url;
    }
  }
)

const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#post-title').value.trim();
    const description = document.querySelector('#post-description').value.trim();
    const picture = document.querySelector('#post-picture').value.trim();
  
    if (title && description && picture) {
      const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({ title, description, picture }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post.');
      }
    } else {
      alert('Please make sure all fields are completed before submitting.')
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/posts/post/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete post. Please try again.');
      }
    }
  };
  
  document
    .querySelector('#create-post-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.post-list')
    .addEventListener('click', delButtonHandler);
  
  document
    .getElementById("upload_widget")
    .addEventListener("click", function(){
        myWidget.open();
      }, false);