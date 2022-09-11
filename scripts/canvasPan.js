var imageWidth = 180;
var imageHeight = 160;
var canvas = null;
var ctx = null;
var bounds = null;
var selectedBox = null;
var panX = 0;
var panY = 0;
var mouseX = 0;
var mouseY = 0;
var oldMouseX = 0;
var oldMouseY = 0;
var mouseHeld = false;
var boxArray = [];

function DraggableBox(x, y, width, height, text) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.text = text;
  this.isSelected = false;
}

DraggableBox.prototype.isCollidingWidthPoint = function (x, y) {
  return (
    x > this.x &&
    x < this.x + this.width &&
    y > this.y &&
    y < this.y + this.height
  );
};

DraggableBox.prototype.drag = function (newX, newY) {
  this.x = newX - this.width * 0.5;
  this.y = newY - this.height * 0.5;
};

DraggableBox.prototype.draw = function () {
  if (this.isSelected) {
    ctx.fillStyle = "darkcyan";
    ctx.fillRect(this.x - panX, this.y - panY, this.width, this.height);
    ctx.fillStyle = "black";
  } else {
    ctx.fillRect(this.x - panX, this.y - panY, this.width, this.height);
  }

  ctx.fillStyle = "white";
  ctx.fillText(
    this.text,
    this.x + this.width * 0.5 - panX,
    this.y + this.height * 0.5 - panY,
    this.width
  );
  ctx.fillStyle = "black";
};

window.onmousedown = function (e) {
  mouseHeld = true;

  if (!selectedBox) {
    for (var i = boxArray.length - 1; i > -1; --i) {
      if (boxArray[i].isCollidingWidthPoint(mouseX + panX, mouseY + panY)) {
        selectedBox = boxArray[i];
        selectedBox.isSelected = true;
        requestAnimationFrame(draw);
        return;
      }
    }
  }
};

window.onmousemove = function (e) {
  mouseX = e.clientX - bounds.left;
  mouseY = e.clientY - bounds.top;

  if (mouseHeld) {
    if (!selectedBox) {
      panX += oldMouseX - mouseX;
      panY += oldMouseY - mouseY;
    } else {
      selectedBox.x = mouseX - selectedBox.width * 0.5 + panX;
      selectedBox.y = mouseY - selectedBox.height * 0.5 + panY;
    }
  }

  oldMouseX = mouseX;
  oldMouseY = mouseY;

  requestAnimationFrame(draw);
};

window.onmouseup = function (e) {
  mouseHeld = false;

  if (selectedBox) {
    selectedBox.isSelected = false;
    selectedBox = null;
    requestAnimationFrame(draw);
  }
};

function draw() {
  ctx.fillStyle = "gray";
  ctx.fillRect(0, 0, imageWidth, imageHeight);

  var box = null;
  var xMin = 0;
  var xMax = 0;
  var yMin = 0;
  var yMax = 0;

  ctx.fillStyle = "black";

  for (var i = 0; i < boxArray.length; ++i) {
    box = boxArray[i];

    xMin = box.x - panX;
    xMax = box.x + box.width - panX;
    yMin = box.y - panY;
    yMax = box.y + box.height - panY;

    if (xMax > 0 && xMin < imageWidth && yMax > 0 && yMin < imageHeight) {
      box.draw();
    }
  }
}

window.onload = function () {
  canvas = document.getElementById("canvas");
  canvas.width = imageWidth;
  canvas.height = imageHeight;

  bounds = canvas.getBoundingClientRect();
  ctx = canvas.getContext("2d");
  ctx.textAlign = "center";
  ctx.font = "15px Arial";

  boxArray.push(
    new DraggableBox(
      Math.random() * 320,
      Math.random() * 240,
      100,
      25,
      "This is a draggable text box"
    )
  );
  boxArray.push(
    new DraggableBox(
      Math.random() * 320,
      Math.random() * 240,
      100,
      50,
      "Another text box"
    )
  );
  boxArray.push(
    new DraggableBox(
      Math.random() * 320,
      Math.random() * 240,
      100,
      50,
      "Text in a box"
    )
  );
  boxArray.push(
    new DraggableBox(
      Math.random() * 320,
      Math.random() * 240,
      100,
      50,
      "I find this box quite texing"
    )
  );
  boxArray.push(
    new DraggableBox(
      Math.random() * 320,
      Math.random() * 240,
      150,
      50,
      "You weren't supposed to find this box"
    )
  );
  requestAnimationFrame(draw);
};

window.onunload = function () {
  canvas = null;
  ctx = null;
  bounds = null;
  selectedBox = null;
  boxArray = null;
};
