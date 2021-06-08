var colorList = ["red","green","blue"];

function MakeBox(color) {
  var that = this;
  this.count = 0;
  this.ele = document.createElement("div");
  this.addOne = function () {
    that.count += 1;
    that.ele.innerHTML = that.count;
  };
  this.ele.style.backgroundColor = color;
  this.ele.style.color = "white";
  this.ele.style.width = "200px";
  this.ele.style.height = "100px";
  this.ele.style.textAlign = "center";
  this.ele.style.lineHeight = "100px";
  this.ele.style.borderRadius = "10px";
  this.ele.style.fontSize = "18px";
  this.ele.innerHTML = this.count;
  this.ele.onclick = this.addOne;
  document.body.appendChild(this.ele);
}

for(var ii = 0; ii < colorList.length; ii++) {
  new MakeBox(colorList[ii]);
}