document.addEventListener("keydown", (e) => {
const frame = document.getElementById("myFrame").contentWindow;
//alert(e.keyCode)

// Translate arrow keys to scroll events
if ( e.keyCode === 38) frame.scrollBy(0, -50);  //"ArrowUp"
if ( e.keyCode === 40) frame.scrollBy(0, 50);  //"ArrowDown"
if ( e.keyCode === 37) frame.scrollBy(-50, 0);  //"ArrowLeft"
if ( e.keyCode === 39) frame.scrollBy(50, 0);  //"ArrowRight
if ( e.keyCode === 10009) alert('Back');  //"Back"
if ( e.keyCode === 10252) alert('Play');  //"Play"

// Enter key → click center
if (  e.keyCode === 13) {  //"Enter"
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





