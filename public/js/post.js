const newCommentFormHandler = async (event) => {
    event.preventDefault();

    const text = document.querySelector('#comment-text').value.trim();
    const post_id = event.target.getAttribute('data-id');

    if (text) {
        const response = await fetch(`/api/comments`, {
          method: 'POST',
          body: JSON.stringify({ text, post_id }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (response.ok) {
            console.log(response)
          document.location.reload(); 
        } else {
          alert('Failed to create comment.');
        }
      } else {
        alert('Please write a comment before submitting.')
      }
}

// const delButtonHandler = async (event) => {
//     if (event.target.hasAttribute('data-id')) {
//       const id = event.target.getAttribute('data-id');
  
//       const response = await fetch(`/api/comments/${id}`, {
//         method: 'DELETE',
//       });
  
//       if (response.ok) {
//         document.location.replace('/post/:id');
//       } else {
//         alert('Failed to delete comment. Please try again.');
//       }
//     }
//   };

  document
    .querySelector('#new-comment-form')
    .addEventListener('submit', newCommentFormHandler);

    // document
    // .querySelector('.comment-list')
    // .addEventListener('click', delButtonHandler);   
  