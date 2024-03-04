var arr = ['crash', 'kick-bass', 'snare', 'tom-1', 'tom-2', 'tom-3', 'tom-4'];
var keys = ['w', 'a', 's', 'd', 'j', 'k', 'l'];

//By pressing buttons on screen
for(let i=0; i<document.querySelectorAll('.drum').length; i++){
    document.querySelectorAll('button')[i].addEventListener('click', () => {
        var audio = new Audio('sounds/' + arr[i] + '.mp3');
        audio.play();

        buttonAnimation(keys[i]);
    })
}

//By Pressing Keyboard Keys
document.addEventListener('keypress', (event) => {
    for(let i=0; i<document.querySelectorAll('.drum').length; i++){
        if(event.key == keys[i]){
            var audio = new Audio('sounds/' + arr[i] + '.mp3');
            audio.play();
        }

        buttonAnimation(event.key);
    }
})

//button animation
function buttonAnimation(currentKey) {
    var actBtn = document.querySelector('.' + currentKey);
    actBtn.classList.add('pressed')
    
    setTimeout(function(){
        actBtn.classList.remove('pressed');
    }, 100);
}

