var pic = document.getElementById("vimage");
var started = false;
var newX = 250;
var newY = 250;
var size = 100;
var changeX = 1;
var changeY = 1;
var id = 0;
var dec = false;

var clearRect = function(e) {
    var rect = document.createElementNS(
	"http://www.w3.org/2000/svg",
	"rect"
    );
    rect.setAttribute("x", 0);
    rect.setAttribute("y", 0);
    rect.setAttribute("width", pic.getAttribute("width"));
    rect.setAttribute("height", pic.getAttribute("height"));
    rect.setAttribute("fill", "white");
    pic.appendChild(rect);
    //old[0] = -1;
};

var dvds = function(e) {
    if (!started) {
	clearRect();
	id = setInterval(dvd, 30);
	started = true;
    }
};

var dvd = function(e) {
    var i = document.createElementNS(
	"http://w3.org/2000/svg",
	"image"
    );
    clearRect();
    
    if (newX >= 600 - 100) {
	changeX = -1 * Math.floor(Math.random() * 2);
    }
    if (newY >= 600 - 50) {
	changeY = -1 * Math.floor(Math.random() * 2);
    }
    if (newX <= 0) {
	changeX = Math.floor(Math.random() * 2);
    }
    if (newY <= 0) {
	changeY = Math.floor(Math.random() * 2);
    }
    i.setAttribute("xlink:href", "dvd.png");
    i.setAttribute("x", newX);
    i.setAttribute("y", newY);
    i.setAttribute("height", 50);
    i.setAttribute("width", 100);
    pic.appendChild(i);
    console.log(newX + " " + newY);
    newX += changeX;
    newY += changeY;
    
};

var anim = function(e) {
    if (!started) {
	clearRect();
	id = setInterval(animate, 30);
	started = true;
    }
};

var animate = function(e) {
    clearRect();
    var c = document.createElementNS(
	"http://www.w3.org/2000/svg",
	"circle"
    );
    c.setAttribute("cx", 250);
    c.setAttribute("cy", 250);
    c.setAttribute("fill", "red");
    c.setAttribute("stroke", "black");
    c.setAttribute("r", size);
    if (!dec) {
	size --;
    }
    else {
	size ++;
    }
    if (size == 0) {
	dec = true;
    }
    pic.appendChild(c);
};

var stop = function(e) {
    clearInterval(id);
    started = false;
};

document.getElementById("clear").addEventListener("click", clearRect);
document.getElementById("stop").addEventListener("click", stop);
document.getElementById("dvd").addEventListener("click", dvds);
document.getElementById("animate").addEventListener("click", anim);

