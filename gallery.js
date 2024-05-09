const images = document.querySelectorAll('.photo');
const container = document.querySelector('.gallery__bottom-side');
function filterImages(category) {
    
    
    images.forEach(image => {
        if (category === 'all' || image.classList.contains(category)) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}
let i = 0;
    function snowMode() {
        if (i === 0) {
            var newElement = document.createElement('div');
            newElement.className='snow'
            container.appendChild(newElement);
            console.log("start");i++
        } else {
            i-=1

            console.log("pause");
            var elementsToRemove = document.querySelectorAll('.snow');
            elementsToRemove.forEach(function(element) {
            element.remove();
});
        }
    }
