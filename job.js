var years = null;
var degree = null;

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
    degree = ms;
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
    degree = hs;
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
    degree = hs;
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
    degree = g;
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
    degree = phd;
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