// doggy game
var doggy = document.querySelector('.doggy');
var bubble = document.querySelector('.bubble');
var woofs = ['Wow', 'Such app', 'Much code', 'Woof woof', 'Hello there', 'Me hungry', 'Can I haz a cookie?', 'Cookie pwease'];
var barks = ['woof1', 'woof2'];

// register service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
        .then(function() {
            console.log('SW registered');
        });
}

doggy.addEventListener('click', function (event) {
    var randomWoof = woofs[Math.floor((Math.random() * woofs.length))];
    var randomBark = barks[Math.round(Math.random())];

    bubble.classList.toggle('on');

    if(bubble.classList.contains('on')) {
        var bark = new Audio('src/sound/' + randomBark + '.wav');

        bubble.innerHTML = randomWoof;
        bark.play();

        if(woofs.indexOf(randomWoof) > 4) {
            doggy.classList.add('sits');
        } else {
            doggy.classList.remove('sits');
        }
    }
});
