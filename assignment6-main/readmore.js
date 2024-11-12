const readMoreBtn = document.getElementById('readMoreBtn');
const moreText = document.getElementById('moreText');

readMoreBtn.addEventListener('click', function()   
 {
    if (moreText.style.display === 'none') {
        moreText.style.display = 'block';
        readMoreBtn.textContent = 'Read Less';
    } else {
        moreText.style.display = 'none';
        readMoreBtn.textContent = 'Read More';   

    }
});