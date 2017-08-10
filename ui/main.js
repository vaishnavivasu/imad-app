console.log('Loaded!');

var element = document.getElementById('main-text');

element.InnerHTML = "New text.";

var img = document.getElementById('id');
var marginLeft = 0;
function marginRight() {
    marginLeft = marginLeft + 100
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function(){
    var interval = setInterval(moveRight, 100);
};