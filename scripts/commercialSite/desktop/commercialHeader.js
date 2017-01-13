/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var screenWithFraction = 1 / 2;
var newScreenSize = screen.width * screenWithFraction;
var fractionOfScreenReseverdForContactInfoAndLogo = 1 / 3;
var small = false;
var size;
animationTime = 150;
function commercialHeaderOnload () {
    var headerElements = document.getElementsByClassName("headerElement");
    var header = document.getElementById("headerContainer");
    var headerContact = document.getElementById("headerContactInfo");
    header.style.width = newScreenSize + "px";
    document.getElementById("bodyContainer").style.width = newScreenSize + "px";
    for (i = 0; i < headerElements.length; i++) {
        headerElements[i].style.width = (newScreenSize / headerElements.length) * (1 - fractionOfScreenReseverdForContactInfoAndLogo) + "px";
        headerElements[i].style.fontSize = (newScreenSize / headerElements.length) / 8 + "px";
    }
    headerContact.style.width = (3 / 5) * fractionOfScreenReseverdForContactInfoAndLogo * newScreenSize + "px";
    document.getElementById("headerPhoneNumber").style.fontSize = (newScreenSize) / 30 + "px";
    document.getElementById("headerEmail").style.fontSize = (newScreenSize) / 70 + "px";
    document.getElementById("headerImageSquare").style.width = (2 / 5) * fractionOfScreenReseverdForContactInfoAndLogo * newScreenSize + "px";
    document.getElementById("headerImageSquare").childNodes[0].style.width = (2 / 5) * fractionOfScreenReseverdForContactInfoAndLogo * newScreenSize + "px";
    document.getElementById("bodyContainer").style.marginTop = ($(header).height()) + "px";
    
    if (window.scrollY > 0) {
        small = true;
    } else {
        small = false;
    }
    if ($(window).width() < newScreenSize) {
        window.onresize();
    } else {
    size = newScreenSize;
    window.onscroll();
        space = ($(window).width() - $(header).width()) / 2;
        if (space > 0) {
            header.style.right = space + "px";
        } else {
            header.style.right = space * 2 + "px"
        }
    }
};
function commercialHeaderOnresize() {
    var header = document.getElementById("headerContainer");
    if ($(window).width() > screen.width / 4) {
        if ($(window).width() <= newScreenSize) {
            size = $(window).width();
            var headerElements = document.getElementsByClassName("headerElement");
            var headerContact = document.getElementById("headerContactInfo");
            header.style.width = $(window).width() + "px";
            ;
            for (i = 0; i < headerElements.length; i++) {
                headerElements[i].style.width = ($(window).width() / headerElements.length) * (1 - fractionOfScreenReseverdForContactInfoAndLogo) + "px";
                headerElements[i].style.fontSize = ($(window).width() / headerElements.length) / 8 + "px";
            }
            headerContact.style.width = (3 / 5) * fractionOfScreenReseverdForContactInfoAndLogo * $(window).width() + "px";
            document.getElementById("headerPhoneNumber").style.fontSize = ($(window).width()) / 30 + "px";
            document.getElementById("headerEmail").style.fontSize = ($(window).width()) / 70 + "px";
            document.getElementById("headerImageSquare").style.width = (2 / 5) * fractionOfScreenReseverdForContactInfoAndLogo * $(window).width() + "px";
            document.getElementById("headerImageSquare").childNodes[0].style.width = (2 / 5) * fractionOfScreenReseverdForContactInfoAndLogo * $(window).width() + "px";
            document.getElementById("bodyContainer").style.width = $(window).width() + "px";

            document.getElementById("bodyContainer").style.marginTop = ($(header).height()) + "px";
            window.onscroll();
        } else {
            size = newScreenSize;
                window.onload();
            window.onscroll();
        }
    }

    space = ($(window).width() - $(header).width()) / 2;
    if (space > 0) {
        header.style.right = space + "px";
    } else {
        header.style.right = space * 2 + "px"
    }

};
window.onscroll = function () {
    if (window.scrollY > 0) {
        if (!small) {
            $(document.getElementById("headerContactInfo")).animate(
                    {width: "+=" + (((4) / 5) * fractionOfScreenReseverdForContactInfoAndLogo * size - ((3) / 5) * fractionOfScreenReseverdForContactInfoAndLogo * size) + "px"}, animationTime);
            $(document.getElementById("headerImageSquare")).animate(
                    {width: "-=" + ((2 / 5) * fractionOfScreenReseverdForContactInfoAndLogo * size - (1 / 5) * fractionOfScreenReseverdForContactInfoAndLogo * size) + "px"}, animationTime);
            $(document.getElementById("headerImageSquare").childNodes[0]).animate(
                    {width: "-=" + ((2 / 5) * fractionOfScreenReseverdForContactInfoAndLogo * size - (1 / 5) * fractionOfScreenReseverdForContactInfoAndLogo * size) + "px"}, animationTime);
            $("#headerPhoneNumber").animate(
                    {fontSize: "+=" + ((size) / 24 - (size) / 30) + "px"
                    }, animationTime);
            $("#headerEmail").animate(
                    {fontSize: "+=" + ((size) / 56 - (size) / 70) + "px"
                    }, animationTime);
            small = true;
        } else {
            document.getElementById("headerContactInfo").style.width = (4 / 5) * fractionOfScreenReseverdForContactInfoAndLogo * size + "px";
            document.getElementById("headerImageSquare").style.width = (1 / 5) * fractionOfScreenReseverdForContactInfoAndLogo * size + "px";
            document.getElementById("headerImageSquare").childNodes[0].style.width = (1 / 5) * fractionOfScreenReseverdForContactInfoAndLogo * size + "px";
            document.getElementById("headerPhoneNumber").style.fontSize = (size) / 24 + "px";
            document.getElementById("headerEmail").style.fontSize = (size) / 56 + "px";
        }
    } else {
        if (small) {
            $(document.getElementById("headerContactInfo")).animate(
                    {width: "-=" + (((4) / 5) * fractionOfScreenReseverdForContactInfoAndLogo * size - ((3) / 5) * fractionOfScreenReseverdForContactInfoAndLogo * size) + "px"}, animationTime);
            $(document.getElementById("headerImageSquare")).animate(
                    {width: "+=" + ((2 / 5) * fractionOfScreenReseverdForContactInfoAndLogo * size - (1 / 5) * fractionOfScreenReseverdForContactInfoAndLogo * size) + "px"}, animationTime);
            $(document.getElementById("headerImageSquare").childNodes[0]).animate(
                    {width: "+=" + ((2 / 5) * fractionOfScreenReseverdForContactInfoAndLogo * size - (1 / 5) * fractionOfScreenReseverdForContactInfoAndLogo * size) + "px"}, animationTime);
            $("#headerPhoneNumber").animate(
                    {fontSize: "-=" + ((size) / 24 - (size) / 30) + "px"
                    }, animationTime);
            $("#headerEmail").animate(
                    {fontSize: "-=" + ((size) / 56 - (size) / 70) + "px"
                    }, animationTime);
            small = false;
        } else {
            document.getElementById("headerContactInfo").style.width = (3 / 5) * fractionOfScreenReseverdForContactInfoAndLogo * size + "px";
            document.getElementById("headerImageSquare").style.width = (2 / 5) * fractionOfScreenReseverdForContactInfoAndLogo * size + "px";
            document.getElementById("headerImageSquare").childNodes[0].style.width = (2 / 5) * fractionOfScreenReseverdForContactInfoAndLogo * size + "px";
            document.getElementById("headerPhoneNumber").style.fontSize = (size) / 30 + "px";
            document.getElementById("headerEmail").style.fontSize = (size) / 70 + "px";
        }
    }
}
var toType = function (obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
};

