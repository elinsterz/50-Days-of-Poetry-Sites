// Daniel Shiffman
// code for https://youtu.be/vqE8DMfOajk

function Particle(x, y) {
    this.x = x;
    this.y = y;
    this.r = 20;
    
    this.update = function() {
      this.x += random(-5, 5);
      this.y += random(-5, 5);
  
      this.x = constrain(this.x, 0, width);    
      this.y = constrain(this.y, 0, height);    
    }
    
    this.show = function() {
      noStroke();
      let px = floor(this.x / vScale);
      let py = floor(this.y / vScale);
      let col = video.get(px, py);
    //   console.log(col);
     fill (col[0], col[1], col[2], slider.value()); 
      ellipse(this.x, this.y, this.r, this.r);    
    }
    
  }
  