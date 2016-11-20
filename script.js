(function() {


function createData(obj) {
 
    var data = obj;
    
    return {
      set: function(key, value)  {
        if(key !=null && value != null)
            {
                data[key] = value;   
            }else{
                console.log("Atrybut dla set nie podany.");
            }
      },
      get: function(key){
        return data[key];
      }
    };
 
}
 
var data = createData({});
 
data.set("imie", "Marcin");
 
console.log( data.get("imie") );

})();