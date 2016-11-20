(function() {


function Toggler(selector) {
        handler = document.querySelector(selector);
        
        return{
          getElem: function(){
            return handler; 
          },
          show: function(){
            handler.style.display = "block";
          },
          hide: function(){
            handler.style.display = "none";
          }  
        };
        
    }
var elem = new Toggler("#section");
var button = document.querySelector("#button");

console.log(button)
 
button.addEventListener("click", function() {
 
    if(elem.getElem().style.display == "none") {
        elem.show();
    } else {
        elem.hide();
    }
 
}, false);

})();