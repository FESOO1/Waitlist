const floatingObjects = document.querySelectorAll('.floating-object');
let startPositionX = 0, startPositionY = 0, newPositionX = 0, newPositionY = 0;


for (let i = 0; i < floatingObjects.length; i++) {
    floatingObjects[i].addEventListener('mousedown', e => {
        startPositionX = e.clientX;
        startPositionY = e.clientY;

        document.addEventListener('mousemove', moveFloatingObjects);

        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', moveFloatingObjects);
        });
    });

    function moveFloatingObjects(e) {
        newPositionX = startPositionX - e.clientX;
        newPositionY = startPositionY - e.clientY;

        startPositionX = e.clientX;
        startPositionY = e.clientY;

        floatingObjects[i].style.top = (floatingObjects[i].offsetTop - startPositionY) + 'px';
        floatingObjects[i].style.left = (floatingObjects[i].offsetLeft - startPositionX) + 'px';
    };
};