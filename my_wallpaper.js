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


// 基礎圖樣色彩參數
let baseColors = ['#d65eff', '#62f4ff', '#ffffff'];

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  // pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true);

  pWallpaper.grid_settings.cell_width = 120;
  pWallpaper.grid_settings.cell_height = 120;
  pWallpaper.grid_settings.row_offset = 0;
}

function wallpaper_background() {
  background('#ffffff');
}

function my_symbol() {
  noStroke();
  push();
  translate(60, 60); // 置中
  drawPixelBlock();
  pop();
}

function drawPixelBlock() {
  let unit = 4; // 單位像素格大小
  let size = 15; // 格子寬高（像素格數）

  for (let x = -size; x <= size; x++) {
    for (let y = -size; y <= size; y++) {
      let d = dist(x, y, 0, 0);

      if (d < size && (x + y) % 2 === 0) {
        let index = floor(noise(x * 0.3, y * 0.3) * baseColors.length);
        fill(baseColors[index]);
        rect(x * unit, y * unit, unit, unit);
      }
    }
  }
}
