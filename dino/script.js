var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0; 

function jump() {
    if (!character.classList.contains("animate")) {
        character.classList.add("animate");
    }
    setTimeout(function() {
        character.classList.remove("animate");
    }, 500);
}

document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        jump();
    }
});

var checkDead = setInterval(function() {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    
    
    if (blockLeft < 50 && blockLeft > 0 && characterTop >= 150) {
        block.style.animation = "none"; 
        alert("Game Over. Score: " + Math.floor(counter / 100)); 
        counter = 0; 
        block.style.animation = "block 1.5s infinite linear"; 
    } else {
        counter++; 
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100); 
    }
}, 10);
