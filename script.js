(function() {


if(typeof !String.prototype.repeat === "function"){

    
        String.prototype.repeat = function(ilosc) {
            var result = "";
        for(var i = 0; i<ilosc;i++)
            {
                result = result+this;
            }
            return result;
    };
}
    
    var tekst = "powtórz ";

    console.log(tekst.repeat(2));


})();