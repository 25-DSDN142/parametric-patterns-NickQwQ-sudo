// Parameters
let rect_width = 100;
let rect_height = 100;

// Layer 7 - Orange and Red
let layer7_count = 36; // Number of petals
let layer7_color1 = "#ff9933"; // Gradient start color
let layer7_color2 = "#cc3300"; // Gradient end color
let layer7_widthFactor = 0.18; // Top peak height multiplier
let layer7_heightTop = 0.7; // Middle control point
let layer7_heightMid = 1.3; // Bottom control point
let layer7_heightBottom = 1.65; // Width factor

// Layer 6 - Red and Dark Red
let layer6_count = 30;
let layer6_color1 = "#ff6666";
let layer6_color2 = "#990000";
let layer6_widthFactor = 0.15;
let layer6_heightTop = 0.6;
let layer6_heightMid = 1.1;
let layer6_heightBottom = 1.4;

// Layer 5 - Dark Purple and Black
let layer5_count = 24;
let layer5_color1 = "#330066";
let layer5_color2 = "#000000";
let layer5_widthFactor = 0.2;
let layer5_heightTop = 0.4;
let layer5_heightMid = 1.0;
let layer5_heightBottom = 1.2;

// Layer 4 - Cyan and Pink
let layer4_count = 12;
let layer4_color1 = "#00ffff";
let layer4_color2 = "#ff00ff";
let layer4_widthFactor = 0.15;
let layer4_heightTop = 0.3;
let layer4_heightMid = 0.7;
let layer4_heightBottom = 1.0;

// Layer 3 - Purple and Dark Purple
let layer3_count = 12;
let layer3_color1 = "#ff77ff";
let layer3_color2 = "#5522aa";
let layer3_widthFactor = 0.1;
let layer3_heightTop = 0.2;
let layer3_heightMid = 0.5;
let layer3_heightBottom = 0.7;

// Layer 2 - Pink and yellow
let layer2_count = 18;
let layer2_color1 = "#ff99aa";
let layer2_color2 = "#ffcc33";
let layer2_widthFactor = 0.07;
let layer2_heightTop = 0.1;
let layer2_heightMid = 0.3;
let layer2_heightBottom = 0.5;

// Middle Star
let center_star_radius1 = 0.1;
let center_star_radius2 = 0.2;
let center_star_points = 5;

// Wallpaper setup function
function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false);
  pWallpaper.grid_settings.cell_width = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset = 0;
}

function wallpaper_background() {
  background(220, 240, 255);
}

function my_symbol() {
  
  translate(200 / 2, 200 / 2);
  drawFlower(0, 0, 40);
}

// Draw each layer of the flower
function drawFlower(x, y, size) {
  push();
  translate(x, y);
  noStroke();

  drawLayer(layer7_count, size, layer7_widthFactor, layer7_heightTop, layer7_heightMid, layer7_heightBottom, layer7_color1, layer7_color2);
  drawLayer(layer6_count, size, layer6_widthFactor, layer6_heightTop, layer6_heightMid, layer6_heightBottom, layer6_color1, layer6_color2);
  drawLayer(layer5_count, size, layer5_widthFactor, layer5_heightTop, layer5_heightMid, layer5_heightBottom, layer5_color1, layer5_color2);
  drawLayer(layer4_count, size, layer4_widthFactor, layer4_heightTop, layer4_heightMid, layer4_heightBottom, layer4_color1, layer4_color2, true);
  drawLayer(layer3_count, size, layer3_widthFactor, layer3_heightTop, layer3_heightMid, layer3_heightBottom, layer3_color1, layer3_color2);
  drawLayer(layer2_count, size, layer2_widthFactor, layer2_heightTop, layer2_heightMid, layer2_heightBottom, layer2_color1, layer2_color2);

  drawStar(0, 0, size * center_star_radius1, size * center_star_radius2, center_star_points,
           lerpColor(color(layer4_color1), color(layer4_color2), 0.5));

  pop();
}

// Draw a single layer of petals
function drawLayer(count, size, widthFactor, heightTop, heightMid, heightBottom, col1, col2, withDecor = false) {
  for (let i = 0; i < count; i++) {
    let angle = (360 / count) * i;
    push();
    rotate(angle);

    let grad = drawingContext.createLinearGradient(0, -size * heightMid, 0, size * 0.3);
    grad.addColorStop(0, color(col1).toString());
    grad.addColorStop(1, color(col2).toString());
    drawingContext.fillStyle = grad;

    beginShape();
    vertex(0, 0);
    bezierVertex(-size * widthFactor, -size * heightTop, -size * widthFactor, -size * heightMid, 0, -size * heightBottom);
    bezierVertex(size * widthFactor, -size * heightMid, size * widthFactor, -size * heightTop, 0, 0);
    endShape(CLOSE);

    if (withDecor) {
      stroke(255, 80);
      strokeWeight(1);
      line(0, -size * 0.8, 0, -size * 1.05);
      line(-size * 0.05, -size * 0.9, size * 0.05, -size * 0.9);
      noStroke();
    }

    pop();
  }
}

// Center pattern
function drawStar(x, y, r1, r2, npoints, fillCol) {
  fill(fillCol);
  noStroke();
  beginShape();
  for (let i = 0; i < npoints * 2; i++) {
    let angle = i * 360 / (npoints * 2);
    let r = (i % 2 === 0) ? r2 : r1;
    let sx = cos(angle) * r;
    let sy = sin(angle) * r;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

