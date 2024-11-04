var character = document.getElementById('character');
var block = document.getElementById('block');
let scoreElement = document.getElementById('score');
let score = 0;

function jump() {
  if (character.classList != 'animate') character.classList.add('animate');
  setTimeout(function () {
    character.classList.remove('animate');
  }, 500);
}

document.addEventListener('keydown', function (event) {
  if (event.code === 'Space') {
    jump();
  }
});

function updateScore() {
  score++;
  scoreElement.innerText = `Score: ${score}`;
}

var checkDead = setInterval(function () {
  var characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue('top')
  );
  var blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue('left')
  );
  if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
    alert('Game Over! Your score: ' + score);
    resetGame();
  }
}, 10);

function resetGame() {
  score = 0;
  scoreElement.innerText = `Score: ${score}`;
  block.style.animation = 'none';
  setTimeout(() => {
    block.style.animation = 'block 1s infinite linear';
  }, 10);
}

let scoreInterval = setInterval(updateScore, 10);
