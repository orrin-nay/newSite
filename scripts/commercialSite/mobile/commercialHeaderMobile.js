/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var screenWithFraction = 1 / 2;
var newScreenSize = $(window).width();
var small = false;
animationTime = 250;
small = false;
 function commercialHeaderMobileOnload() {
    var headerElements = document.getElementsByClassName("headerElement");
    var header = document.getElementById("headerContainer");
    header.style.width = newScreenSize + "px";
    document.getElementById("bodyContainer").style.width = newScreenSize + "px";
    document.getElementById("headerImageSquare").style.width = (1.2 / 10)  * newScreenSize + "px";
    document.getElementById("headerImageSquare").childNodes[0].style.width = (1.2 / 10)  * newScreenSize + "px";
    document.getElementById("headerPhoneNumber").style.fontSize = (newScreenSize) / 14 + "px";
    document.getElementById("headerEmail").style.fontSize = (newScreenSize) / 30 + "px";
    
    document.getElementById("headerHolder").style.width = ($(document.getElementById("headerContactInfo")).width() + $(document.getElementById("headerImageSquare")).width() + 5) + "px";

    for (i = 0; i < headerElements.length; i++) {
        headerElements[i].style.width = (newScreenSize / (headerElements.length)) + "px";
        if (window.scrollY > 0) {
        headerElements[i].style.fontSize = 0 + "px";
    } else {
        headerElements[i].style.fontSize = (newScreenSize / (headerElements.length)) / 5 + "px";
    }
    }
    if (window.scrollY > 0) {
        small = true;
    } else {
        small = false;
    }
    if(window.scrollY > 0){
        small = true;
    }
    document.getElementById("bodyContainer").style.marginTop = ($(header).height()) + "px";
};
window.onscroll = function () {
    var headerElements = document.getElementsByClassName("headerElement");
    if (window.scrollY > 0) {
        if (!small) {
            for (i = 0; i < headerElements.length; i++) {
                $(headerElements[i]).animate({
                    fontSize: "-=" + ((newScreenSize / (headerElements.length)) / 5) + "px"
                }, animationTime);
            }
            small = true;
        }
    } else {
        if (small) {
            for (i = 0; i < headerElements.length; i++) {
                $(headerElements[i]).animate({
                    fontSize: "+=" + ((newScreenSize / (headerElements.length)) / 5) + "px"
                }, animationTime);
            }
            small = false;
        }
    }
};