const player = document.getElementById("player");
const obstacle = document.getElementById("obstacle");
const scoreDisplay = document.getElementById("score");
let score = 0;
let gameInterval;

document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        jump();
    }
});

function jump() {
    if (!player.classList.contains("jump")) {
        player.classList.add("jump");
        setTimeout(() => {
            player.classList.remove("jump");
        }, 500);
    }
}

function startGame() {
    score = 0;
    scoreDisplay.textContent = score;
    obstacle.style.right = "-40px";
    gameInterval = setInterval(moveObstacle, 20);
}

function moveObstacle() {
    let obstaclePos = parseInt(window.getComputedStyle(obstacle).getPropertyValue("right"));
    let playerBottom = parseInt(window.getComputedStyle(player).getPropertyValue("bottom"));

    // Move o obstáculo para a esquerda
    if (obstaclePos < 640) {
        obstacle.style.right = (obstaclePos + 5) + "px";
    } else {
        obstacle.style.right = "-40px";
        score++;
        scoreDisplay.textContent = score;
    }

    // Verifica colisão
    if (obstaclePos > 480 && obstaclePos < 530 && playerBottom < 40) {
        alert("Game Over! Sua pontuação: " + score);
        clearInterval(gameInterval);
    }
}

function restartGame() {
    clearInterval(gameInterval);
    startGame();
}

startGame();
