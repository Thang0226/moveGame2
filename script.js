/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size, speed) {
  this.image = image;
  this.top = top;
  this.left = left;
  this.width = size;
  this.height = size / 2;
  this.speed = speed;

  this.getHeroElement = function () {
    return (
      '<img width="' +
      this.width +
      '"' +
      ' height="' +
      this.height +
      '"' +
      ' src="' +
      this.image +
      '"' +
      ' style="top: ' +
      this.top +
      "px; left:" +
      this.left +
      'px;position:absolute;" />'
    );
  };

  this.moveRight = function () {
    this.left += this.speed;
    console.log("right: " + this.left);
  };

  this.moveLeft = function () {
    this.left -= this.speed;
    console.log("left: " + this.left);
  };

  this.moveUp = function () {
    this.top -= this.speed;
    console.log("up: " + this.top);
  };

  this.moveDown = function () {
    this.top += this.speed;
    console.log("down: " + this.top);
  };
}

let hero = new Hero("car.jpg", 0, 0, 400, 5);

function start() {
  if (hero.left < window.innerWidth - hero.width && hero.top == 0) {
    hero.moveRight();
  } else if (
    hero.top < window.innerHeight - hero.height &&
    hero.left >= window.innerWidth - hero.width
  ) {
    hero.moveDown();
  } else if (hero.left > 0) {
    hero.moveLeft();
  } else if (hero.top > 0) {
    hero.moveUp();
  }
  document.getElementById("game").innerHTML = hero.getHeroElement();
  setTimeout(start, 8);
}

start();
