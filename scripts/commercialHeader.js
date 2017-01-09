/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
        
  var screenWithFraction = 1/2;
  var newScreenSize = screen.width *screenWithFraction;
  var fractionOfScreenReseverdForContactInfoAndLogo = 1/3;
window.onload =  function (){
  var headerElements = document.getElementsByClassName("headerElement");
  var header = document.getElementById("headerContainer");
  var headerContact = document.getElementById("headerContactInfo");
    header.style.width = newScreenSize + "px";
    document.getElementById("bodyContainer").style.width = newScreenSize + "px";
  for(i = 0; i < headerElements.length; i++){
      headerElements[i].style.width = (newScreenSize/headerElements.length)*(1- fractionOfScreenReseverdForContactInfoAndLogo)  + "px";
      headerElements[i].style.fontSize = (newScreenSize/headerElements.length)/8  + "px";
  }
  headerContact.style.width = (3/5)*fractionOfScreenReseverdForContactInfoAndLogo*newScreenSize + "px";
  document.getElementById("headerPhoneNumber").style.fontSize = (newScreenSize)/30  + "px";
  document.getElementById("headerEmail").style.fontSize = (newScreenSize)/70  + "px";
  document.getElementById("headerImageSquare").style.width = (2/5)*fractionOfScreenReseverdForContactInfoAndLogo*newScreenSize + "px"; 
  document.getElementById("headerImageSquare").childNodes[0].style.width = (2/5)*fractionOfScreenReseverdForContactInfoAndLogo*newScreenSize + "px"; 
  
      if($(window).width() < newScreenSize){
          window.onresize();
      }
  };
  window.onresize = function(){
      if($(window).width() > screen.width/4){
      if($(window).width() < newScreenSize){
  var headerElements = document.getElementsByClassName("headerElement");
  var header = document.getElementById("headerContainer");
  var headerContact = document.getElementById("headerContactInfo");
    header.style.width = $(window).width() + "px";;
  for(i = 0; i < headerElements.length; i++){
      headerElements[i].style.width = ($(window).width()/headerElements.length)*(1- fractionOfScreenReseverdForContactInfoAndLogo)  + "px";
      headerElements[i].style.fontSize = ($(window).width()/headerElements.length)/8  + "px";
  }
  headerContact.style.width = (3/5)*fractionOfScreenReseverdForContactInfoAndLogo*$(window).width() + "px";
  document.getElementById("headerPhoneNumber").style.fontSize = ($(window).width())/30  + "px";
  document.getElementById("headerEmail").style.fontSize = ($(window).width())/70  + "px";
  document.getElementById("headerImageSquare").style.width = (2/5)*fractionOfScreenReseverdForContactInfoAndLogo*$(window).width() + "px"; 
  document.getElementById("headerImageSquare").childNodes[0].style.width = (2/5)*fractionOfScreenReseverdForContactInfoAndLogo*$(window).width() + "px"; 
    document.getElementById("bodyContainer").style.width = $(window).width() + "px";
      }
  }
  }
var toType = function(obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}