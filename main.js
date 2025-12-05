document.addEventListener("keydown", (e) => {
const frame = document.getElementById("myFrame").contentWindow;
alert('done')

// Translate arrow keys to scroll events
if (e.key === "ArrowUp" || e.keyCode === 38) frame.scrollBy(0, -50);
if (e.key === "ArrowDown" || e.keyCode === 40) frame.scrollBy(0, 50);
if (e.key === "ArrowLeft" || e.keyCode === 37) frame.scrollBy(-50, 0);
if (e.key === "ArrowRight" || e.keyCode === 39) frame.scrollBy(50, 0);


// Enter key → click center
if (e.key === "Enter" || e.keyCode === 13) {
const centerX = frame.innerWidth / 2;
const centerY = frame.innerHeight / 2;
const evt = new frame.MouseEvent("click", {
clientX: centerX,
clientY: centerY,
bubbles: true
});
frame.dispatchEvent(evt);
}
});



