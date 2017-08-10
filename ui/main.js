console.log('Loaded!');

var element = document.getElementById('main-text');

element.InnerHTML = "New text.";

var img = document.getElementById('id');
img.onclick = function(){
    img.style.marginLeft='100px';
};