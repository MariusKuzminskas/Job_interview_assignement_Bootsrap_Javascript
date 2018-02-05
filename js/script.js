//document.ready(function() {

    
    // Clicking on tabs functions and event listeners
    function tab2click() {
    //hiding tab1 showing tab2
        document.querySelector("#tab1Content").classList.add("d-none");
        document.querySelector("#tab2Content").classList.remove("d-none");
        document.querySelector("#navigationTab1").classList.remove("active");
        document.querySelector("#navigationTab2").classList.add("active");
    }

    //listening for a click on tab2
    document.querySelector("#navigationTab2").onclick = tab2click;
    
    function tab1click() {
    //hiding tab2 showing tab1
        document.querySelector("#tab2Content").classList.add("d-none");
        document.querySelector("#tab1Content").classList.remove("d-none");
        document.querySelector("#navigationTab2").classList.remove("active");
        document.querySelector("#navigationTab1").classList.add("active");
    }

    //listening for a click on tab1
    document.querySelector("#navigationTab1").onclick = tab1click;
    
//});