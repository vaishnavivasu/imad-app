var button = document.getElementById('counter');
button.onclick = function() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if(request.readystate === XMLHttpRequest.DONE) {
            if(request.status === 200) {
                var counter = request.respondText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    request.open('GET', 'http://vaishnaviv1698.imad.hasura-app.io/counter', 'true');
    request.send(null);
}