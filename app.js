// Get the element where the man starts running
var fakeCanvas = document.getElementById('app');

// Offests for sprite of the man
var xPosOffset = 0;
var yPosOffset = 0;

// I don't know what I am using this for #LOL
var mansPace = 0;

// The path where the man does his intense running
var lastPosition = 0;

// Control how fast the man moves
var footStepSpeed = 2;

var appendPx = function(string) {
	return string + "px";
}

var change = function(arg) {
    let backgroundPosition = "background-position: -" + appendPx(xPosOffset) + " -" + appendPx(mansPace);
    
    // A
    fakeCanvas.style = backgroundPosition;
    xPosOffset += 85;
    yPosOffset += mansPace;

    if (xPosOffset >= 427) {
        xPosOffset = 0;
        if (mansPace > 409.5) {
            mansPace = 0;
        } else {
            mansPace += 102.5;
        }
    }
    
    if (yPosOffset > 512) {
        yPosOffset = 0;
    }
    
    fakeCanvas.style.left = appendPx(lastPosition);
    
    // If the person goes out of the current window
    // Get him back to start
    if (lastPosition > window.outerWidth) {
        lastPosition = 0;
    }

    // The person moves after each frame
    lastPosition = lastPosition + footStepSpeed;
    requestAnimationFrame(change);
}

// Let the browser decide what is the best FPS for the animation
requestAnimationFrame(change);