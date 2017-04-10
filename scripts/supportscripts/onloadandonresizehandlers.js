
window.onload = function () {
    for (var i in this) {
        if ((typeof this[i]).toString() == "function" && this[i].toString().indexOf("native") == -1) {
            if (this[i].name.toString().includes("Onload")) {
                var onloadFuntion = window[this[i].name.toString()];
                try {
                    onloadFuntion();
                } catch (e) {
                    console.log(e);
                }
            }
        }
    }
};
window.onresize = function () {
    for (var i in this) {
        if ((typeof this[i]).toString() == "function" && this[i].toString().indexOf("native") == -1) {
            if (this[i].name.toString().includes("Onresize")) {
                var onloadFuntion = window[this[i].name.toString()];
                try {
                    onloadFuntion();
                } catch (e) {
                    console.log(e);
                }
            }
        }
    }
};
