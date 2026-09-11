(function () {
  "use strict";

  var GRID = 20;
  var TICK_MS = 125;
  var STORAGE_KEY = "aarenxia-snake-best";

  var canvas = document.getElementById("snake-canvas");
  if (!canvas || !canvas.getContext) return;

  var ctx = canvas.getContext("2d");
  var scoreEl = document.getElementById("snake-score");
  var bestEl = document.getElementById("snake-best");
  var overlay = document.getElementById("snake-overlay");
  var overlayTitle = document.getElementById("snake-overlay-title");
  var overlayMsg = document.getElementById("snake-overlay-msg");
  var startBtn = document.getElementById("snake-start");
  var restartBtn = document.getElementById("snake-restart");
  var stage = canvas.parentElement;
  var pad = document.querySelector(".snake-pad");

  var cell = canvas.width / GRID;
  var snake;
  var dir;
  var pendingDir;
  var food;
  var score;
  var best = 0;
  var running = false;
  var dead = false;
  var started = false;
  var awaitingMove = false;
  var tickTimer = null;
  var foodPulse = 0;
  var touchStart = null;

  try {
    best = parseInt(localStorage.getItem(STORAGE_KEY) || "0", 10) || 0;
  } catch (e) {
    best = 0;
  }
  bestEl.textContent = String(best);

  function showOverlay(title, msg, buttonLabel) {
    overlayTitle.textContent = title;
    overlayMsg.textContent = msg;
    startBtn.textContent = buttonLabel || "Play";
    overlay.hidden = false;
  }

  function hideOverlay() {
    overlay.hidden = true;
  }

  function randomEmptyCell() {
    var occupied = {};
    for (var i = 0; i < snake.length; i++) {
      occupied[snake[i].x + "," + snake[i].y] = true;
    }
    var free = [];
    for (var y = 0; y < GRID; y++) {
      for (var x = 0; x < GRID; x++) {
        if (!occupied[x + "," + y]) free.push({ x: x, y: y });
      }
    }
    if (!free.length) return null;
    return free[Math.floor(Math.random() * free.length)];
  }

  function resetGame() {
    var mid = Math.floor(GRID / 2);
    snake = [
      { x: mid - 1, y: mid },
      { x: mid - 2, y: mid },
      { x: mid - 3, y: mid }
    ];
    dir = { x: 1, y: 0 };
    pendingDir = { x: 1, y: 0 };
    score = 0;
    scoreEl.textContent = "0";
    food = randomEmptyCell();
    dead = false;
    foodPulse = 0;
  }

  function setDirection(nx, ny) {
    if (!started || dead) return;
    // Block immediate reverse into self once moving
    if (!awaitingMove && nx === -dir.x && ny === -dir.y) return;
    pendingDir = { x: nx, y: ny };
    if (awaitingMove) {
      awaitingMove = false;
      dir = pendingDir;
      running = true;
      startLoop();
    }
  }

  function bumpScore() {
    scoreEl.classList.remove("is-bump");
    // force reflow for replay
    void scoreEl.offsetWidth;
    scoreEl.classList.add("is-bump");
    setTimeout(function () {
      scoreEl.classList.remove("is-bump");
    }, 180);
  }

  function gameOver() {
    dead = true;
    running = false;
    stopLoop();
    if (score > best) {
      best = score;
      bestEl.textContent = String(best);
      try {
        localStorage.setItem(STORAGE_KEY, String(best));
      } catch (e) {}
    }
    showOverlay(
      "Game over",
      "Score " + score + (score >= best && score > 0 ? " — new best!" : "") + ". Press Restart or Play again.",
      "Play again"
    );
    draw();
  }

  function step() {
    if (!running || dead) return;
    dir = pendingDir;
    var head = snake[0];
    var next = { x: head.x + dir.x, y: head.y + dir.y };

    if (next.x < 0 || next.y < 0 || next.x >= GRID || next.y >= GRID) {
      gameOver();
      return;
    }

    for (var i = 0; i < snake.length; i++) {
      if (snake[i].x === next.x && snake[i].y === next.y) {
        gameOver();
        return;
      }
    }

    snake.unshift(next);

    if (food && next.x === food.x && next.y === food.y) {
      score += 1;
      scoreEl.textContent = String(score);
      bumpScore();
      food = randomEmptyCell();
      if (!food) {
        // Filled the board — win
        running = false;
        stopLoop();
        if (score > best) {
          best = score;
          bestEl.textContent = String(best);
          try {
            localStorage.setItem(STORAGE_KEY, String(best));
          } catch (e) {}
        }
        showOverlay("You win", "Board cleared with score " + score + ".", "Play again");
        draw();
        return;
      }
    } else {
      snake.pop();
    }

    foodPulse = (foodPulse + 1) % 20;
    draw();
  }

  function drawRoundedCell(x, y, pad, radius, fill) {
    var px = x * cell + pad;
    var py = y * cell + pad;
    var size = cell - pad * 2;
    ctx.beginPath();
    if (typeof ctx.roundRect === "function") {
      ctx.roundRect(px, py, size, size, radius);
    } else {
      ctx.rect(px, py, size, size);
    }
    ctx.fillStyle = fill;
    ctx.fill();
  }

  function draw() {
    var w = canvas.width;
    var h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    // soft grid
    ctx.strokeStyle = "rgba(30, 42, 36, 0.07)";
    ctx.lineWidth = 1;
    for (var g = 1; g < GRID; g++) {
      ctx.beginPath();
      ctx.moveTo(g * cell + 0.5, 0);
      ctx.lineTo(g * cell + 0.5, h);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, g * cell + 0.5);
      ctx.lineTo(w, g * cell + 0.5);
      ctx.stroke();
    }

    if (food) {
      var pulse = 1 + 0.08 * Math.sin((foodPulse / 20) * Math.PI * 2);
      var pad = cell * (0.22 - (pulse - 1));
      drawRoundedCell(food.x, food.y, pad, 4, "#c9782a");
      // highlight
      ctx.fillStyle = "rgba(255, 230, 180, 0.45)";
      ctx.beginPath();
      ctx.arc(
        food.x * cell + cell * 0.38,
        food.y * cell + cell * 0.38,
        cell * 0.12,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }

    for (var i = snake.length - 1; i >= 0; i--) {
      var seg = snake[i];
      var t = i / Math.max(snake.length - 1, 1);
      var shade = i === 0 ? "#2f6b52" : mixMoss(t);
      var pad = i === 0 ? 1.5 : 2.5;
      drawRoundedCell(seg.x, seg.y, pad, i === 0 ? 5 : 3, shade);
      if (i === 0) {
        // eyes
        var ex = dir.x !== 0 ? dir.x : 0;
        var ey = dir.y !== 0 ? dir.y : 0;
        var cx = seg.x * cell + cell / 2;
        var cy = seg.y * cell + cell / 2;
        var ox = ex * cell * 0.18;
        var oy = ey * cell * 0.18;
        var px = -ey * cell * 0.16;
        var py = ex * cell * 0.16;
        ctx.fillStyle = "#f5faf6";
        ctx.beginPath();
        ctx.arc(cx + ox + px, cy + oy + py, cell * 0.09, 0, Math.PI * 2);
        ctx.arc(cx + ox - px, cy + oy - py, cell * 0.09, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#1e2a24";
        ctx.beginPath();
        ctx.arc(cx + ox + px + ex * 1.5, cy + oy + py + ey * 1.5, cell * 0.045, 0, Math.PI * 2);
        ctx.arc(cx + ox - px + ex * 1.5, cy + oy - py + ey * 1.5, cell * 0.045, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  function mixMoss(t) {
    // lighter toward the tail
    var r = Math.round(47 + t * 40);
    var g = Math.round(107 + t * 35);
    var b = Math.round(82 + t * 25);
    return "rgb(" + r + "," + g + "," + b + ")";
  }

  function stopLoop() {
    if (tickTimer) {
      clearInterval(tickTimer);
      tickTimer = null;
    }
  }

  function startLoop() {
    stopLoop();
    tickTimer = setInterval(step, TICK_MS);
  }

  function play() {
    resetGame();
    started = true;
    running = false;
    awaitingMove = true;
    dead = false;
    hideOverlay();
    draw();
    stopLoop();
  }

  function onKey(e) {
    var key = e.key;
    if (
      key === "ArrowUp" ||
      key === "ArrowDown" ||
      key === "ArrowLeft" ||
      key === "ArrowRight" ||
      key === " " ||
      key === "w" ||
      key === "a" ||
      key === "s" ||
      key === "d" ||
      key === "W" ||
      key === "A" ||
      key === "S" ||
      key === "D"
    ) {
      e.preventDefault();
    }

    if (!started || dead) {
      if (key === "Enter" || key === " ") play();
      return;
    }

    if (key === "ArrowUp" || key === "w" || key === "W") setDirection(0, -1);
    else if (key === "ArrowDown" || key === "s" || key === "S") setDirection(0, 1);
    else if (key === "ArrowLeft" || key === "a" || key === "A") setDirection(-1, 0);
    else if (key === "ArrowRight" || key === "d" || key === "D") setDirection(1, 0);
    else if (key === "r" || key === "R") play();
  }

  function onPadClick(e) {
    var btn = e.target.closest("[data-dir]");
    if (!btn) return;
    e.preventDefault();
    if (!started || dead) {
      play();
    }
    var d = btn.getAttribute("data-dir");
    if (d === "up") setDirection(0, -1);
    else if (d === "down") setDirection(0, 1);
    else if (d === "left") setDirection(-1, 0);
    else if (d === "right") setDirection(1, 0);
  }

  function onTouchStart(e) {
    if (e.touches.length !== 1) return;
    var t = e.touches[0];
    touchStart = { x: t.clientX, y: t.clientY, time: Date.now() };
  }

  function onTouchEnd(e) {
    if (!touchStart) return;
    var t = e.changedTouches[0];
    var dx = t.clientX - touchStart.x;
    var dy = t.clientY - touchStart.y;
    var absX = Math.abs(dx);
    var absY = Math.abs(dy);
    touchStart = null;

    if (Math.max(absX, absY) < 24) {
      if (!started || dead) play();
      return;
    }

    if (!started || dead) {
      play();
    }

    if (absX > absY) setDirection(dx > 0 ? 1 : -1, 0);
    else setDirection(0, dy > 0 ? 1 : -1);
  }

  startBtn.addEventListener("click", play);
  restartBtn.addEventListener("click", play);
  window.addEventListener("keydown", onKey, { passive: false });
  stage.addEventListener("touchstart", onTouchStart, { passive: true });
  stage.addEventListener("touchend", onTouchEnd, { passive: true });
  if (pad) {
    pad.addEventListener("click", onPadClick);
  }

  // Initial idle preview
  resetGame();
  started = false;
  running = false;
  awaitingMove = false;
  draw();
  showOverlay("Snake", "Press Play, then steer with arrows, WASD, swipe, or the pad.", "Play");
  // Lightweight API for automated tests / console debugging
  window.__SNAKE__ = {
    play: play,
    setDirection: setDirection,
    getState: function () {
      return {
        score: score,
        dead: dead,
        running: running,
        awaitingMove: awaitingMove,
        started: started,
        snake: snake ? snake.map(function (s) { return { x: s.x, y: s.y }; }) : [],
        food: food ? { x: food.x, y: food.y } : null,
        dir: dir ? { x: dir.x, y: dir.y } : null
      };
    }
  };
})();
