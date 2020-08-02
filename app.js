
var animation = anime({
    targets: 'div.box',
    translateY:[
        {value: 200, duration: 800},
        {value: 0, duration: 800}
    ],
    delay: function(el, i) { return i * 100; },
    // direction: 'alternate',
    loop: true,
    autoplay: true,
    easing: 'easeInOutSine'
})
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')
btn1.addEventListener('click', function(){
    animation.play();
})
btn2.addEventListener('click', function(){
    animation.pause();
})
btn3.addEventListener('click', function(){
    animation.reverse();
})
