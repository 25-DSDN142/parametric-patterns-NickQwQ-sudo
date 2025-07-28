//your parameter variables go here!
let rect_width  = 100;
let rect_height = 100;
    
    


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
 translate(rect_width / 2, rect_height / 2);

}



function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  // pWallpaper.output_mode(GRID_WALLPAPER);

  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); // set to false when you're ready to print

  // Grid settings
  pWallpaper.grid_settings.cell_width = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset = 0;
}

function wallpaper_background() {
  background(240, 255, 240); // light honeydew green
}

function my_symbol() { 
  translate(100, 100); 
  drawFlower(0, 0, 60, 12, color("#00ffff"), color("#ff00ff")); 
}




function drawFlower(x, y, size, petals, color1, color2) {
  push();
  translate(x, y);
  noStroke();

    
  for (let i = 0; i < 36; i++) {
    let angle = (360 / 36) * i;
    push();
    rotate(angle);

    let grad7 = drawingContext.createLinearGradient(0, -size * 1.3, 0, size * 0.3);
    grad7.addColorStop(0, color("#ffcc00").toString());  
    grad7.addColorStop(1, color("#cc0066").toString());  
    drawingContext.fillStyle = grad7;

    beginShape();
    vertex(0, 0);
    bezierVertex(-size * 0.18, -size * 0.7, -size * 0.18, -size * 1.3, 0, -size * 1.65);
    bezierVertex(size * 0.18, -size * 1.3, size * 0.18, -size * 0.7, 0, 0);
    endShape(CLOSE);

    pop();
  }

  

  for (let i = 0; i < 30; i++) {
    let angle = (360 / 30) * i;
    push();
    rotate(angle);

    let grad6 = drawingContext.createLinearGradient(0, -size * 1.2, 0, size * 0.3);
    grad6.addColorStop(0, color("#22ffff").toString());  
    grad6.addColorStop(1, color("#ff0066").toString());  
    drawingContext.fillStyle = grad6;

    beginShape();
    vertex(0, 0);
    bezierVertex(-size * 0.15, -size * 0.6, -size * 0.15, -size * 1.1, 0, -size * 1.4);
    bezierVertex(size * 0.15, -size * 1.1, size * 0.15, -size * 0.6, 0, 0);
    endShape(CLOSE);

    pop();
  }

    
  for (let i = 0; i < 24; i++) {
    let angle = (360 / 24) * i;
    push();
    rotate(angle);

    let grad0 = drawingContext.createLinearGradient(0, -size * 0.9, 0, size * 0.2);
    grad0.addColorStop(0, color("#330066").toString()); 
    grad0.addColorStop(1, color("#000000").toString()); 
    drawingContext.fillStyle = grad0;

    beginShape();
    vertex(0, 0);
    bezierVertex(-size * 0.2, -size * 0.4, -size * 0.2, -size * 1.0, 0, -size * 1.2);
    bezierVertex(size * 0.2, -size * 1.0, size * 0.2, -size * 0.4, 0, 0);
    endShape(CLOSE);

    pop();
  }



  for (let i = 0; i < petals; i++) {
    let angle = (360 / petals) * i;
    push();
    rotate(angle);

    let grad1 = drawingContext.createLinearGradient(0, -size * 0.6, 0, size * 0.1);
    grad1.addColorStop(0, color1.toString());
    grad1.addColorStop(1, color2.toString());
    drawingContext.fillStyle = grad1;

    beginShape();
    vertex(0, 0);
    bezierVertex(-size * 0.15, -size * 0.3, -size * 0.15, -size * 0.7, 0, -size);
    bezierVertex(size * 0.15, -size * 0.7, size * 0.15, -size * 0.3, 0, 0);
    endShape(CLOSE);

    
    stroke(255, 80);
    strokeWeight(1);
    line(0, -size * 0.8, 0, -size * 1.05);
    line(-size * 0.05, -size * 0.9, size * 0.05, -size * 0.9);
    noStroke();
    pop();
  }

  
  for (let i = 0; i < petals; i++) {
    let angle = (360 / petals) * i + 360 / (petals * 2);
    push();
    rotate(angle);

    let grad2 = drawingContext.createLinearGradient(0, -size * 0.5, 0, size * 0.1);
    grad2.addColorStop(0, color("#ff77ff").toString());
    grad2.addColorStop(1, color("#5522aa").toString());
    drawingContext.fillStyle = grad2;

    beginShape();
    vertex(0, 0);
    bezierVertex(-size * 0.1, -size * 0.2, -size * 0.1, -size * 0.5, 0, -size * 0.7);
    bezierVertex(size * 0.1, -size * 0.5, size * 0.1, -size * 0.2, 0, 0);
    endShape(CLOSE);
    pop();
  }

  
  for (let i = 0; i < petals + 6; i++) {
    let angle = (360 / (petals + 6)) * i;
    push();
    rotate(angle);

    let grad3 = drawingContext.createLinearGradient(0, -size * 0.4, 0, size * 0.05);
    grad3.addColorStop(0, color("#ff99aa").toString());
    grad3.addColorStop(1, color("#ffcc33").toString());
    drawingContext.fillStyle = grad3;

    beginShape();
    vertex(0, 0);
    bezierVertex(-size * 0.07, -size * 0.1, -size * 0.07, -size * 0.3, 0, -size * 0.5);
    bezierVertex(size * 0.07, -size * 0.3, size * 0.07, -size * 0.1, 0, 0);
    endShape(CLOSE);
    pop();
  }

  
    
   for (let i = 0; i < petals + 6; i++) {
    let angle = (360 / (petals + 6)) * i + 15;
    push();
    rotate(angle);

    stroke("#ffdd88");
    strokeWeight(0.7);
    line(0, 0, 0, -size * 0.3);
    pop();
  }

  
  noStroke();
  fill(lerpColor(color1, color2, 0.5));
  circle(0, 0, size * 0.2);

  pop();
}



