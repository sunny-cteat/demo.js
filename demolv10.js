window.onload = function() {
    const items = document.getElementsByClassName('item');
    const week = ['!_!', '@_@', '#_#', '$_$', '^_^'];
    for(let i = 0; i < items.length; i++){
        items[i].onclick = function () {
            items[i].innerHTML = week[i];
            items[i].style.color = 'black';
        }
    }
};