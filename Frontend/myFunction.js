function myFunction(){
    var x = document.getElementById("sidebar");
    var y = document.getElementById("main");
    if(x.style.display === "none"){
        x.style.display = "block";
        y.style.display = "none";

    }else{
        x.style.display = "none";
        y.style.display = "block";
    }
}
function myCloseFunction(){
    var x = document.getElementById("main");
    var y = document.getElementById("sidebar");
    if(x.style.display === "none"){
        x.style.display = "block";
        y.style.display = "none";

    }else{
        x.style.display = "none";
        y.style.display = "block";
    }
    
}