    // Tab Navigacijos funkcionalumas
    
    function tab2click() {
    //paspaudus tab2 slepiame tab1 ir rodome tab2 bootstrap kalsiu pagalba d-none = display: none
        document.querySelector("#tab1Content").classList.add("d-none");
        document.querySelector("#tab2Content").classList.remove("d-none");
        // padarome aktyvų tab skirtuką
        document.querySelector("#navigationTab1").classList.remove("active");
        document.querySelector("#navigationTab2").classList.add("active");
    }

    // klausomės paspaudimo ant tab2
    document.querySelector("#navigationTab2").onclick = tab2click;
    
    function tab1click() {
    //paspaudus tab1 slepiame tab2 ir rodome tab1 bootstrap kalsiu pagalba d-none = display: none
        document.querySelector("#tab2Content").classList.add("d-none");
        document.querySelector("#tab1Content").classList.remove("d-none");
        // padarome aktyvų tab skirtuką
        document.querySelector("#navigationTab2").classList.remove("active");
        document.querySelector("#navigationTab1").classList.add("active");
    }

    // klausomės paspaudimo ant tab1
    document.querySelector("#navigationTab1").onclick = tab1click;
    
    
    // =================================================================================================
    
    
    // tab1 autorinių sutarčių checkbox funkcija
    function tab1Toggle() {
        // jei varnele uždedama pašaliname d-none klasę ir parodome įvedimo lauką
        if (document.querySelector('#authorAgreementCheckbox').checked) {
            document.querySelector("#authorAgreementInput").classList.toggle("d-none");
        } else {
            // jei varnele nuimama pridedame d-none klasę ir parodome įvedimo lauką
            document.querySelector("#authorAgreementInput").classList.toggle("d-none");
        }
    }

    // tab2 autorinių sutarčių checkbox funkcija
    function tab2Toggle() {
        // jei varnele uždedama pašaliname d-none klasę ir parodome įvedimo lauką
        if (document.querySelector('#tab2AuthorAgreementCheckbox').checked) {
            document.querySelector("#tab2authorAgreementInput").classList.toggle("d-none");
        } else {
             // jei varnele nuimama pridedame d-none klasę ir parodome įvedimo lauką
            document.querySelector("#tab2authorAgreementInput").classList.toggle("d-none");
        }
    }

  // =====================================================================================================================
    
    // TAB 1 procentai ir skaičiavimai 
    
    // Pensijų ir soc. draudimas 3% 
    // Sveikatos draudimas 6%
    // autoriniai mokesčiai 24%
    // Darbdavio įmokos Sodrai 31.18%
    // Taikytinas NPD 8%
    // Gyventojo pajamų mokestis 15% (VMI)
    
    // procentinius dydžius nustatome konstatomis
    const GYVPAJAMUMOKESTIS = 0.15;
    const SVEIKDRAUDPROC = 0.06;
    const SODROSPROC = 0.03;
    const KITIMOKESCIAI = 0.23;
    const DARBDAVIOMOKESČIAI = 0.3118;
    const AUTORINIUSUTPROC = 0.24;
    // constanta naudojama apskaiciuoti atlyginimą ant popieriaus
    const ANTPOPIERIAUSPROC = 0.76;
    
    
    // tab1 mokesčių skaičiavimo funkcija ==============================================================================
    function tab1SalaryEnter() {
        // Gaunam value is ivedimo formos
        let enteredValue = document.querySelector("#tab1algaAntPopieriaus").value
        //skaiciuojam sodra
        document.querySelector("#sodra").value = (enteredValue * SODROSPROC).toFixed(2);
        let sodra = document.querySelector("#sodra").value;
        //skaiciuojam sveikatos draudima 
        document.querySelector("#sveikatosDraudimas").value = (enteredValue * SVEIKDRAUDPROC).toFixed(2);
        let sveikatosDraudimas = document.querySelector("#sveikatosDraudimas").value
        //skaiciuojam Gyventojo pajamų mokesti 15%
        document.querySelector("#gyvPajamuMokestis").value = (enteredValue * GYVPAJAMUMOKESTIS).toFixed(2);
        let gyvPajamuMokestis = document.querySelector("#gyvPajamuMokestis").value
        //skaiciuojam darbdavio mokescius
        document.querySelector("#employer").value = (enteredValue * (1 + DARBDAVIOMOKESČIAI)).toFixed(2);
        let darbdavioMokesčiai = document.querySelector("#employer").value;
        // skaičiuojame autoriniu sutarciu sumą po mokesčių
        // patikriname ar kas nors yra įvesta į autorinių sut lauką
        if (!document.querySelector("#authorAgreement").value == "") {
            let enteredValueAuth = document.querySelector("#authorAgreement").value
            let amoutAfterAuthorAgreementTax = enteredValueAuth *(1 - AUTORINIUSUTPROC);
            // skaiciuojam atlyginima i rankas su Autorinem sutartim
            document.querySelector("#salaryTakeHome").value = (enteredValue - sodra - sveikatosDraudimas - gyvPajamuMokestis + amoutAfterAuthorAgreementTax).toFixed(2);
        } else {
        // skaiciuojam atlyginima i rankas jei nera Autorinių sutarčių
        document.querySelector("#salaryTakeHome").value = (enteredValue - sodra - sveikatosDraudimas - gyvPajamuMokestis).toFixed(2);
        }
    }


    
    
    
    // tab2 mokesčių skaičiavimo funkcija ==============================================================================
    function tab2SalaryEnter() {
        // Gaunam value is ivedimo formos
        let enteredValue = document.querySelector("#tab2salaryTakeHome").value
        
        // skaičiuojame autoriniu sutarciu sumą su atlyginimu
        // pasitikriname ar yra yvesta reiksme i autorinių sutarčių lauką
        if (!(document.querySelector("#tab2AuthorAgreement").value) == "") {
            let enteredValueAuth = document.querySelector("#tab2AuthorAgreement").value
            // skaičiuojame įvestos sumos į rankas išraišką ant popieriaus
            let amoutAfterAuthorAgreementTax = enteredValueAuth / (1 - AUTORINIUSUTPROC);
            
            // skaiciuojam atlyginima ant popieriaus + Autorinių sutarčių suma ant popieriaus
            document.querySelector("#tab2salaryOnPaper").value = (enteredValue / ANTPOPIERIAUSPROC + amoutAfterAuthorAgreementTax).toFixed(2);
            // išsaugome gautą sumą tolimesniems skaičiavimams
            var atlyginimasAntPopieriaus = document.querySelector("#tab2salaryOnPaper").value
        } else {
        // paskaičiuojame ir atvaizduojame atlyginimą ant popieriaus kai nera įvesta autorinių sutarcių suma
        document.querySelector("#tab2salaryOnPaper").value = (enteredValue / ANTPOPIERIAUSPROC).toFixed(2);
        var atlyginimasAntPopieriaus = document.querySelector("#tab2salaryOnPaper").value
        }
        
        //skaiciuojam sodra
        document.querySelector("#tab2PensijuDraudimas").value = (atlyginimasAntPopieriaus * SODROSPROC).toFixed(2);
        //skaiciuojam pajamu mokesti
        document.querySelector("#tab2PajamuMokestis").value = (atlyginimasAntPopieriaus * GYVPAJAMUMOKESTIS).toFixed(2);
        //skaiciuojam Sveikatos draudimą
        document.querySelector("#tab2HealthInsurance").value = (atlyginimasAntPopieriaus * SVEIKDRAUDPROC).toFixed(2);
        //skaiciuojam darbdavio mokescius
        document.querySelector("#tab2DarbdavioMokesciai").value = (atlyginimasAntPopieriaus * DARBDAVIOMOKESČIAI).toFixed(2);
        //skaiciuojam kaina darbdaviui
        document.querySelector("#tab2KainuojaDarbdaviui").value = (atlyginimasAntPopieriaus * (1 + DARBDAVIOMOKESČIAI)).toFixed(2);
    }

