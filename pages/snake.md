---
layout: game
title: Snake
description: Play a classic Snake game — eat, grow, avoid the walls.
keywords: snake, game
permalink: /snake/
extra_css: /css/snake.css
extra_js: /js/snake.js
---

<div class="snake-app" id="snake-app">
  <div class="snake-hud">
    <div class="snake-score-block">
      <span class="snake-label">Score</span>
      <span class="snake-score" id="snake-score">0</span>
    </div>
    <div class="snake-score-block">
      <span class="snake-label">Best</span>
      <span class="snake-score" id="snake-best">0</span>
    </div>
    <button type="button" class="snake-btn" id="snake-restart" aria-label="Restart game">Restart</button>
  </div>

  <div class="snake-stage">
    <canvas id="snake-canvas" width="400" height="400" aria-label="Snake game board"></canvas>
    <div class="snake-overlay" id="snake-overlay" hidden>
      <p class="snake-overlay-title" id="snake-overlay-title">Snake</p>
      <p class="snake-overlay-msg" id="snake-overlay-msg">Arrow keys or WASD to move. Swipe on touch.</p>
      <button type="button" class="snake-btn snake-btn-primary" id="snake-start">Play</button>
    </div>
  </div>

  <p class="snake-hint">Arrows / WASD · swipe to steer · eat the morsel · don't hit yourself or the wall</p>
</div>
