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

  for (let i = 0; i < petals; i++) {
    let angle = (360 / petals) * i;
    push();
    rotate(angle);

    
    let grad = drawingContext.createLinearGradient(0, -size * 0.6, 0, size * 0.1);
    grad.addColorStop(0, color1.toString());
    grad.addColorStop(1, color2.toString());
    drawingContext.fillStyle = grad;

    beginShape();
    vertex(0, 0);
    bezierVertex(-size * 0.15, -size * 0.3, -size * 0.15, -size * 0.7, 0, -size);
    bezierVertex(size * 0.15, -size * 0.7, size * 0.15, -size * 0.3, 0, 0);
    endShape(CLOSE);
    pop();
  }

  pop();
}


