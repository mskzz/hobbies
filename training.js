console.log(`Test`)

/* 

Open Video Function 

When openvideo(), the CSS style of the pop up video
changes from none (hidden) to block (visible), which
makes the video appear on the user's screen.

*/

function openvideo() {
    let popupvideo = document.getElementById("popupvideo");
    popupvideo.style.display = "flex";
}

/* 

Close Video Function 

When closevideo(), the CSS style of the pop up video
changes from block (visible) to none (hidden), which
makes the video invisible on the user's screen.

*/

function closevideo() {
    let popupvideo = document.getElementById("popupvideo");
    popupvideo.style.display = "none";
}

function openvideo2() {
    let popupvideo2 = document.getElementById("popupvideo2");
    popupvideo2.style.display = "flex";
}

function closevideo2() {
    let popupvideo2 = document.getElementById("popupvideo2");
    popupvideo2.style.display = "none";
}

function openvideo3() {
    let popupvideo3 = document.getElementById("popupvideo3");
    popupvideo3.style.display = "flex";
}

function closevideo3() {
    let popupvideo3 = document.getElementById("popupvideo3");
    popupvideo3.style.display = "none";
}