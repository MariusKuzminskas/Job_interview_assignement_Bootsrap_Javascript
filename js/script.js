//document.ready(function() {

    
    function tab2click() {
    //presing a tab2
    document.querySelector("#tab1Content").classList.add("d-none");
    document.querySelector("#navigationTab1").classList.remove("active");
    document.querySelector("#navigationTab2").classList.add("active");
    }

    document.querySelector("#navigationTab2").onclick = tab2click;


//});