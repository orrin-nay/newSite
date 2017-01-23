function commercialFooterOnloadOrResize(){  
    document.getElementById("footerContent").style.fontSize = ($(document.getElementById("bodyContainer")).width()/50) + "px";
    document.getElementById("bodyContainer").style.paddingBottom = $("#footerContainer").height() + "px";
    $("#footerContainer").width($(document.getElementById("bodyContainer")).width());
    if($("html").height() > $(window).height()){
        document.getElementById("footerContainer").style.position = "relative";
    }
    else{
        document.getElementById("footerContainer").style.position = "absolute";
        
        space = ($(window).width() - $("#bodyContainer").width()) / 2;
        if (space > 0) {
            document.getElementById("footerContainer").style.right = space + "px";
        } else {
            document.getElementById("footerContainer").style.right = space * 2 + "px"
        }
    }
}

