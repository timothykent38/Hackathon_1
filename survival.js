
        var haveCovid = false;
        var liveWithCovid = false;
        var doseOfVaccine = -1;
        var mentalyWell = true;
        var relationship = true;
        var resultChance = -1;

        function survival1N() {
            haveCovid = false;
            const y = document.querySelector(".buttonY1");
            const n = document.querySelector(".buttonN1");
            n.style.backgroundColor = "yellow";
            y.style.backgroundColor = "white";
        }

        function survival1Y() {
            haveCovid = true;
            const y = document.querySelector(".buttonY1");
            const n = document.querySelector(".buttonN1");
            n.style.backgroundColor = "white";
            y.style.backgroundColor = "yellow";
        }

        function survival2N() {
            liveWithCovid = false;
            const y = document.querySelector(".buttonY2");
            const n = document.querySelector(".buttonN2");
            n.style.backgroundColor = "yellow";
            y.style.backgroundColor = "white";
        }

        function survival2Y() {
            liveWithCovid = true;
            const y = document.querySelector(".buttonY2");
            const n = document.querySelector(".buttonN2");
            n.style.backgroundColor = "white";
            y.style.backgroundColor = "yellow";
        }

        function vac1() {
            doseOfVaccine = 0;
            const y = document.querySelector(".vac2");
            const w = document.querySelector(".vac3");
            const z = document.querySelector(".vac4");
            const n = document.querySelector(".vac1");
            n.style.backgroundColor = "yellow";
            y.style.backgroundColor = "white";
            w.style.backgroundColor = "white";
            z.style.backgroundColor = "white";

        }
        function vac2() {
            doseOfVaccine = 1;
            const y = document.querySelector(".vac2");
            const w = document.querySelector(".vac3");
            const z = document.querySelector(".vac4");
            const n = document.querySelector(".vac1");
            n.style.backgroundColor = "white";
            y.style.backgroundColor = "yellow";
            w.style.backgroundColor = "white";
            z.style.backgroundColor = "white";

        }

        function vac3(){
                doseOfVaccine = 2;
                const y = document.querySelector(".vac2");
                const w = document.querySelector(".vac3");
                const z = document.querySelector(".vac4");
                const n = document.querySelector(".vac1");
                n.style.backgroundColor = "white";
                y.style.backgroundColor = "white"; 
                w.style.backgroundColor = "yellow"; 
                z.style.backgroundColor = "white";

            }
            function vac4(){
                doseOfVaccine = 3;
                const y = document.querySelector(".vac2");
                const w = document.querySelector(".vac3");
                const z = document.querySelector(".vac4");
                const n = document.querySelector(".vac1");
                n.style.backgroundColor = "white";
                y.style.backgroundColor = "white"; 
                w.style.backgroundColor = "white"; 
                z.style.backgroundColor = "yellow";

            }


        function survival4N() {
            mentalyWell = false;
            const y = document.querySelector(".buttonY4");
            const n = document.querySelector(".buttonN4");
            n.style.backgroundColor = "yellow";
            y.style.backgroundColor = "white";
        }

        function survival4Y() {
            mentalyWell = true;
            const y = document.querySelector(".buttonY4");
            const n = document.querySelector(".buttonN4");
            n.style.backgroundColor = "white";
            y.style.backgroundColor = "yellow";
        }

        function survival5N() {
            relationship = false;
            const y = document.querySelector(".buttonY5");
            const n = document.querySelector(".buttonN5");
            n.style.backgroundColor = "yellow";
            y.style.backgroundColor = "white";
        }

        function survival5Y() {
            relationship = true;
            const y = document.querySelector(".buttonY5");
            const n = document.querySelector(".buttonN5");
            n.style.backgroundColor = "white";
            y.style.backgroundColor = "yellow";
        }

        function getSR(){
            
            if(haveCovid){
                resultChance=51;
            }else{
                resultChance=100;
            }
            
            if(liveWithCovid){
                resultChance-=22;
            }
            if(mentalyWell){
                resultChance+=39;
            }else{
                resultChance-=29
            }
            if(relationship){
                resultChance+=19;
            }else{
                resultChance-=8
            }  
            var temp = parseInt(doseOfVaccine);
            resultChance = (resultChance + (temp*20));
            if(resultChance>100){
                resultChance=100;
            }
        var disp = null;
          disp = document.getElementById("result");
         // document.write(disp);
         disp.innerHTML = "Your survival chance is " + resultChance + '%';   

        }
