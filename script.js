var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;

document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
      if(character.classList == "jump"){return}
    character.classList.add("jump");
    setTimeout(function(){
        character.classList.remove("jump");
    },300);
      }
});
var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<145 && blockLeft> 60 && characterTop>=420){
        block.style.animation = "none";
        alert("Game Over. score: "+Math.floor(counter/50));
        counter=0;
        block.style.animation = "block 2s infinite linear";
    }else {
        counter++;
        document.getElementById("score").innerHTML = Math.floor(counter/50);
    }
}, 10);