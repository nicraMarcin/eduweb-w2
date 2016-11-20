(function() {


function fetcch(url, success_fn, error_fn)
    {
        var req = new XMLHttpRequest();
        req.open('GET', url, false);
        try {
            req.send(null); 
        }
        catch(error) {
            error_fn(error);
            return false;
        }
        success_fn(req.responseText);
    }
fetcch("https://jsonplaceholder.typicode.com/users",
    function(data) {     console.log("Sukces");     console.log(data); },
    function(err) {     console.log("Wystąpił błąd!");     console.log(err); }
)


})();