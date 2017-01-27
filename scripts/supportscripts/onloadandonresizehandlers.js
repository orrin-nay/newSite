
            window.onload = function () {
                            for(var i in this) {
	if((typeof this[i]).toString()=="function"&&this[i].toString().indexOf("native")==-1){
		if(this[i].name.toString().includes("Onload")){
                    var onloadFuntion = window[this[i].name.toString()];
                    console.log(onloadFuntion.name);
                    onloadFuntion();
                }
	}
}
            };
            window.onresize = function () {
                            for(var i in this) {
	if((typeof this[i]).toString()=="function"&&this[i].toString().indexOf("native")==-1){
		if(this[i].name.toString().includes("Onresize")){
                    var onloadFuntion = window[this[i].name.toString()];
                    console.log(onloadFuntion.name);
                    onloadFuntion();
                }
	}
}
            };
