const newCommentFormHandler = async (event) => {
    event.preventDefault();

    const text = document.querySelector('#comment-text').value.trim();

    if (text) {
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
          alert('Make sure to write a comment before submitting.');
        }
      }
}