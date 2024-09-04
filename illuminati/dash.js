document.addEventListener('DOMContentLoaded', () => {
    // Update Date and Time
    const dateElement = document.getElementById('date');
    const timeElement = document.getElementById('time');

    function updateTime() {
        const now = new Date();
        dateElement.textContent = now.toLocaleDateString();
        timeElement.textContent = now.toLocaleTimeString();
    }

    setInterval(updateTime, 1000);
    updateTime();

    // Like Button Functionality
    const likeButtons = document.querySelectorAll('.like-btn');

    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const post = button.closest('.post');
            const likeCount = post.querySelector('.like-count');
            let likes = parseInt(likeCount.textContent);
            likes += 1;
            likeCount.textContent = likes;
        });
    });

    // Reply Functionality
    const replyInputs = document.querySelectorAll('.reply-input');

    replyInputs.forEach(input => {
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && input.value.trim() !== '') {
                const post = input.closest('.post');
                const repliesContainer = post.querySelector('.replies');
                const newReply = document.createElement('p');
                newReply.textContent = input.value;
                repliesContainer.appendChild(newReply);
                input.value = '';
            }
        });
    });

    // Dropdown Toggle Functionality
    const dropdowns = document.querySelectorAll('.dropdown-toggle');

    dropdowns.forEach(button => {
        button.addEventListener('click', () => {
            const dropdownContent = button.nextElementSibling;
            dropdownContent.classList.toggle('show');
        });
    });

    // Close the dropdown menu if the user clicks outside of it
    window.addEventListener('click', (event) => {
        if (!event.target.matches('.dropdown-toggle')) {
            const dropdowns = document.querySelectorAll('.dropdown-content');
            dropdowns.forEach(dropdown => {
                if (dropdown.classList.contains('show')) {
                    dropdown.classList.remove('show');
                }
            });
        }
    });
});
