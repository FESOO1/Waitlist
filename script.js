/* const floatingObjects = document.querySelectorAll('.floating-object');
let startPositionX = 0, startPositionY = 0, newPositionX = 0, newPositionY = 0;

// DRAGGING FUNCTION

for (let i = 0; i < floatingObjects.length; i++) {
    floatingObjects[i].addEventListener('mousemove', e => {
        startPositionY = e.clientY;
        startPositionX = e.clientX;

        document.addEventListener('mousemove', mouseMoveFunction);
        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', mouseMoveFunction);
        });

    });
    function mouseMoveFunction(e) {
        newPositionY = startPositionY - e.clientY;
        newPositionX = startPositionX - e.clientX;

        startPositionY = e.clientY;
        startPositionX = e.clientX;

        floatingObjects[i].style.top = (floatingObjects[i].offsetTop - newPositionY) + 'px';
        floatingObjects[i].style.left = (floatingObjects[i].offsetLeft - newPositionX) + 'px';
    };
}; */