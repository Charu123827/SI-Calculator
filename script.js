function calculate()
{
    const p=document.getElementById("p").value; 
    const r=document.getElementById("r").value;  
    const y=document.getElementById("y").value;   

    // console.log(p,r,y);
    // console.log(typeof(p));

    const interest=parseFloat(p)*parseFloat(r)*parseFloat(y)/100;
    const total=interest+parseFloat(p);
    console.log(interest);
    console.log(total);

    document.getElementById("interest").innerHTML="<h1>Interest is "+interest+"</h1>";
    document.getElementById("total").innerHTML="<h1>Total Amount is "+total+"</h1>";
}