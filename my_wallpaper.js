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
let motifSize = 120;
let colors = ['#f25f5c', '#247ba0', '#70c1b3', '#ffe066']; 

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH); 
  //pWallpaper.output_mode(GRID_WALLPAPER); 

  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); 

  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background('#f6f1e9'); 
}

function my_symbol() {
  push();
  translate(100, 100); 
  rotate(45); 

 
  drawRhombusPart(-30, 0, colors[0]); 
  drawRhombusPart(30, 0, colors[1]);  
  drawRhombusPart(0, -30, colors[2]); 
  drawRhombusPart(0, 30, colors[3]);  

  pop();
}

function drawRhombusPart(x, y, col) {
  push();
  translate(x, y);
  fill(col);
  noStroke();
  beginShape();
  vertex(-30, -60);
  vertex(30, -60);
  vertex(60, 60);
  vertex(0, 60);
  endShape(CLOSE);
  pop();
}






