//your parameter variables go here!
let rect_width  = 20;
let rect_height = 30;
     
    





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
  rect(40 ,40, rect_width, rect_height);
}


// Parameters
let petalColor = '#67b7d1';
let innerColor = '#f5c542';
let strokeColor = '#000000';

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH); 
  //pWallpaper.output_mode(GRID_WALLPAPER); 

  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true);

  pWallpaper.grid_settings.cell_width = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset = 0;
}

function wallpaper_background() {
  background('#e1f5fe'); 
}

function my_symbol() {
  push();
  translate(100, 100); 

  
  for (let i = 0; i < 8; i++) {
    push();
    rotate(i * 45);
    drawPetal(40); // 半徑 40
    pop();
  }

  
  for (let i = 0; i < 12; i++) {
    push();
    rotate(i * 30);
    drawPetal(70); 
    pop();
  }

  pop();
}

function drawPetal(radius) {
  stroke(strokeColor);
  strokeWeight(1.5);
  fill(petalColor);

  beginShape();
  vertex(radius, 0);
  bezierVertex(radius + 10, -20, radius + 30, -20, radius + 40, 0);
  bezierVertex(radius + 30, 20, radius + 10, 20, radius, 0);
  endShape(CLOSE);

  fill(innerColor);
  ellipse(radius + 20, 0, 10, 10); // 中心裝飾圓
}







