document.addEventListener("keydown", (e) => {
const frame = document.getElementById("gpxFrame").contentWindow;


// Translate arrow keys to scroll events
if (e.key === "ArrowUp") frame.scrollBy(0, -50);
if (e.key === "ArrowDown") frame.scrollBy(0, 50);
if (e.key === "ArrowLeft") frame.scrollBy(-50, 0);
if (e.key === "ArrowRight") frame.scrollBy(50, 0);


// Enter key → click center
if (e.key === "Enter") {
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
