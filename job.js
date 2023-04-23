var years = null;
var degree = null;
var ret = null;
var feel = null;
var remot = null;

function y1(){
    years = 1;
    const a = document.querySelector(".y1");
    const b = document.querySelector(".y2");
    const c = document.querySelector(".y3");        
    a.style.backgroundColor = "yellow";
    b.style.backgroundColor = "white"; 
    c.style.backgroundColor = "white"; 
}
function y2(){
    years = 3;
    const a = document.querySelector(".y1");
    const b = document.querySelector(".y2");
    const c = document.querySelector(".y3");        
    a.style.backgroundColor = "white";
    b.style.backgroundColor = "yellow"; 
    c.style.backgroundColor = "white"; 
}
function y3(){
    years = 5;
    const a = document.querySelector(".y1");
    const b = document.querySelector(".y2");
    const c = document.querySelector(".y3");        
    a.style.backgroundColor = "white";
    b.style.backgroundColor = "white"; 
    c.style.backgroundColor = "yellow"; 
}
function ms(){
    degree = "ms";
    const a = document.querySelector(".ms");
    const b = document.querySelector(".hs");
    const c = document.querySelector(".b");
    const d = document.querySelector(".g");
    const e = document.querySelector(".phd");          
    a.style.backgroundColor = "yellow";
    b.style.backgroundColor = "white"; 
    c.style.backgroundColor = "white"; 
    d.style.backgroundColor = "white"; 
    e.style.backgroundColor = "white";                
}

function hs(){
    degree = "hs";
    const a = document.querySelector(".ms");
    const b = document.querySelector(".hs");
    const c = document.querySelector(".b");
    const d = document.querySelector(".g");
    const e = document.querySelector(".phd");          
    a.style.backgroundColor = "white";
    b.style.backgroundColor = "yellow"; 
    c.style.backgroundColor = "white"; 
    d.style.backgroundColor = "white"; 
    e.style.backgroundColor = "white";                
}
function b(){
    degree = "bs";
    const a = document.querySelector(".ms");
    const b = document.querySelector(".hs");
    const c = document.querySelector(".b");
    const d = document.querySelector(".g");
    const e = document.querySelector(".phd");          
    a.style.backgroundColor = "white";
    b.style.backgroundColor = "white"; 
    c.style.backgroundColor = "yellow"; 
    d.style.backgroundColor = "white"; 
    e.style.backgroundColor = "white"; 
}
function g(){
    degree = "g";
    const a = document.querySelector(".ms");
    const b = document.querySelector(".hs");
    const c = document.querySelector(".b");
    const d = document.querySelector(".g");
    const e = document.querySelector(".phd");          
    a.style.backgroundColor = "white";
    b.style.backgroundColor = "white"; 
    c.style.backgroundColor = "white"; 
    d.style.backgroundColor = "yellow"; 
    e.style.backgroundColor = "white";                
}
function phd(){
    degree = "phd";
    const a = document.querySelector(".ms");
    const b = document.querySelector(".hs");
    const c = document.querySelector(".b");
    const d = document.querySelector(".g");
    const e = document.querySelector(".phd");          
    a.style.backgroundColor = "white";
    b.style.backgroundColor = "white"; 
    c.style.backgroundColor = "white"; 
    d.style.backgroundColor = "white"; 
    e.style.backgroundColor = "yellow";                
}

function r1(){
    ret = 0;
    const a = document.querySelector(".r1");
    const b = document.querySelector(".r2");
    const c = document.querySelector(".r3");   
    const d = document.querySelector(".r4");     
    a.style.backgroundColor = "yellow";
    b.style.backgroundColor = "white"; 
    c.style.backgroundColor = "white"; 
    d.style.backgroundColor = "white"; 
}

function r2(){
    ret = 1;
    const a = document.querySelector(".r1");
    const b = document.querySelector(".r2");
    const c = document.querySelector(".r3");   
    const d = document.querySelector(".r4");     
    a.style.backgroundColor = "white";
    b.style.backgroundColor = "yellow"; 
    c.style.backgroundColor = "white"; 
    d.style.backgroundColor = "white"; 
}

function r3(){
    ret = 6;
    const a = document.querySelector(".r1");
    const b = document.querySelector(".r2");
    const c = document.querySelector(".r3");   
    const d = document.querySelector(".r4");     
    a.style.backgroundColor = "white";
    b.style.backgroundColor = "white"; 
    c.style.backgroundColor = "yellow"; 
    d.style.backgroundColor = "white"; 
}

function r4(){
    ret = 12;
    const a = document.querySelector(".r1");
    const b = document.querySelector(".r2");
    const c = document.querySelector(".r3");   
    const d = document.querySelector(".r4");     
    a.style.backgroundColor = "white";
    b.style.backgroundColor = "white"; 
    c.style.backgroundColor = "white"; 
    d.style.backgroundColor = "yellow"; 
}

function f1(){
    
    feel = "service industry";
    const a = document.querySelector(".f1");
    const b = document.querySelector(".f2");
    const c = document.querySelector(".f3");        
    a.style.backgroundColor = "yellow";
    b.style.backgroundColor = "white"; 
    c.style.backgroundColor = "white"; 
}

function f2(){
    feel = "sport industry";
    const a = document.querySelector(".f1");
    const b = document.querySelector(".f2");
    const c = document.querySelector(".f3");        
    a.style.backgroundColor = "white";
    b.style.backgroundColor = "yellow"; 
    c.style.backgroundColor = "white"; 
}

function f3(){
    feel = "technology industry";
    const a = document.querySelector(".f1");
    const b = document.querySelector(".f2");
    const c = document.querySelector(".f3");        
    a.style.backgroundColor = "white";
    b.style.backgroundColor = "white"; 
    c.style.backgroundColor = "yellow"; 
}

function w1(){
   remot = true;
    const a = document.querySelector(".w1");
    const b = document.querySelector(".w2");
  
    a.style.backgroundColor = "yellow";
    b.style.backgroundColor = "white"; 
  
}
function w2(){
    remot = false;
    const a = document.querySelector(".w1");
    const b = document.querySelector(".w2");
          
    a.style.backgroundColor = "white";
    b.style.backgroundColor = "yellow"; 
  
}

function getR(){
    if(degree == null || feel == null || years == null || remot == null|| ret == null){
        var disp = document.getElementById("errorMessage");
        disp.innerText = "You must answer all the questions";
        return;
    }
    var str = "You should probably work in "
    if(degree === "bs" || degree === "g" || degree === "phd"){
        if(years == 3 || years == 5 || feel === "technology industry"){
            //return technology service like scientists and Analyst\
            str += "technology service like scientists and Analyst"
        }else{
            //service 
            str+= "service as a worker or accountant "
        }

        }
    if(degree === "ms" || degree === "hs"){
        if(feel === "sport industry" || years == 1){
                // return sport industry like atheletes
                str+= "the sport industry as an athlete "
                       
        }else{
            // service industry 
            str+= "service as a worker or accountant "
        }
    }
    else{
        str+= "service as a worker or accountant "
    }
        str += " you can start working in " + ret + " months";

        var disp = document.getElementById("errorMessage");
        disp.innerText = str;
    
    }


