// Edited From:

// Daniel Shiffman
// http://codingtra.in
// Steering Text Paths
// Video: https://www.youtube.com/watch?v=4hA7G3gup-4


function Vehicle(x, y) {
    this.pos = createVector(random(width), random(height));
    this.target = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.acc = createVector();
    this.r = 1.5;
    this.maxspeed = 8;
    this.maxforce = 22;
  }
  
  Vehicle.prototype.behaviors = function() {
    let arrive = this.arrive(this.target);
    let mouse = createVector(mouseX, mouseY);
    let flee = this.flee(mouse);
  
    arrive.mult(1);
    flee.mult(10);
  
    this.applyForce(arrive);
    this.applyForce(flee);
  }
  
  Vehicle.prototype.applyForce = function(f) {
    this.acc.add(f);
  }
  
  Vehicle.prototype.update = function() {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0);
  }
  
  Vehicle.prototype.show = function() {
    stroke(255);
    strokeWeight(this.r);
    point(this.pos.x, this.pos.y);
  }
  
  
  Vehicle.prototype.arrive = function(target) {
    let desired = p5.Vector.sub(target, this.pos);
    let d = desired.mag();
    let speed = this.maxspeed;
    if (d < 50) {
      speed = map(d, 0, 100, 0, this.maxspeed);
    }
    desired.setMag(speed);
    let steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxforce);
    return steer;
  }
  
  Vehicle.prototype.flee = function(target) {
    let desired = p5.Vector.sub(target, this.pos);
    let d = desired.mag();
    if (d < 50) {
      desired.setMag(this.maxspeed);
      desired.mult(-1);
      var steer = p5.Vector.sub(desired, this.vel);
      steer.limit(this.maxforce);
      return steer;
    } else {
      return createVector(0, 0);
    }
  }
  