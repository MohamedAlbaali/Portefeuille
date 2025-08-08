// document.addEventListener("DOMContentLoaded", function() {
//     // Sliders
//     document.querySelectorAll('.slider').forEach(slider => {
//     let images = slider.querySelectorAll('img');
//     let index = 0;

//     slider.querySelector('.next').onclick = () => {
//         images[index].classList.remove('active');
//         index = (index + 1) % images.length;
//         images[index].classList.add('active');
//     };

//     slider.querySelector('.prev').onclick = () => {
//         images[index].classList.remove('active');
//         index = (index - 1 + images.length) % images.length;
//         images[index].classList.add('active');
//     };
//     });

//     // Read More modal
//     let modal = document.getElementById('modal');
//     let closeBtn = modal.querySelector('.close');
//     let fullTextElem = modal.querySelector('.full-text');

//     document.querySelectorAll('.read-more').forEach(btn => {
//     btn.addEventListener('click', function() {
//         let project = this.closest('.proj');
//         let title = project.querySelector('h3').textContent;
//         let fullText = this.getAttribute('data-full');
//         modal.querySelector('h3').textContent = title;
//         fullTextElem.textContent = fullText;
//         modal.style.display = 'flex';
//     });
//     });

//     closeBtn.onclick = () => {
//     modal.style.display = 'none';
//     };

//     window.onclick = e => {
//     if (e.target == modal) modal.style.display = 'none';
//     };
// });
    
document.addEventListener("DOMContentLoaded", function() {
    // Sliders
    document.querySelectorAll('.slider').forEach(slider => {
        let images = slider.querySelectorAll('img');
        let index = 0;

        slider.querySelector('.next').onclick = () => {
            images[index].classList.remove('active');
            index = (index + 1) % images.length;
            images[index].classList.add('active');
        };

        slider.querySelector('.prev').onclick = () => {
            images[index].classList.remove('active');
            index = (index - 1 + images.length) % images.length;
            images[index].classList.add('active');
        };
    });

    // Read More modal
    let modal = document.getElementById('modal');
    let closeBtn = modal.querySelector('.close');
    let fullTextElem = modal.querySelector('.full-text');

    document.querySelectorAll('.read-more').forEach(btn => {
        btn.addEventListener('click', function() {
            let project = this.closest('.proj');
            let title = project.querySelector('h3').textContent;
            let fullText = this.getAttribute('data-full');
            modal.querySelector('h3').textContent = title;
            fullTextElem.innerHTML = fullText;  // هنا innerHTML بدلاً من textContent
            modal.style.display = 'flex';
        });
    });

    closeBtn.onclick = () => {
        modal.style.display = 'none';
    };

    window.onclick = e => {
        if (e.target == modal) modal.style.display = 'none';
    };

});
