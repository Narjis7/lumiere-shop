const button = document.querySelectorAll(".product button");
const items = document.querySelector(".items");
const order = document.querySelector(".order");
const subtotal = document.querySelector(".order #subtotal");
const tax = document.querySelector(".order #tax");
const total = document.querySelector(".total h1");
const itemsP= document.querySelector(".items p");

let count=0;

button.forEach(function(button){
    
    button.addEventListener("click", function(){
    count++;
    const product = button.parentElement;
    const productH2 = product.querySelector("h2");
    const productP = product.querySelector("span");
    const productImg= product.querySelector("img");
  
    itemsP.style.display="none";
    button.disabled = true;
     showdata(
        productImg.getAttribute("src"),
        productH2.textContent,
        productP.textContent,
        button
    );
    updateTotal();
    if(count==2){
    items.style.height="auto";
    order.style.height="auto";
    };
    
    
    });
  
});
function updateTotal() {
    let subtotalValue = 0;

    const products = document.querySelectorAll(".item");

    products.forEach(function(product) {
        const price = product.querySelector("h1").textContent;
        subtotalValue += parseFloat(price.replace("$", ""));
    });

    const taxValue = subtotalValue * 0.08;
    const totalValue = subtotalValue + taxValue;

    subtotal.textContent = "$" + subtotalValue.toFixed(2);
    tax.textContent = "$" + taxValue.toFixed(2);
    total.textContent = "$" + totalValue.toFixed(2);
}
  function showdata(x,pg,pr,addButton){
   
    const divf= document.createElement("div");
    divf.classList.add("item")
    const img= document.createElement("img");
    img.src = x;
    const h3 =document.createElement("h3");
    h3.textContent=pg;
    const p=document.createElement("p");
    p.textContent="$"+pr;


    /*button------------ */
   let countPro=1;
    const but1=document.createElement("button");
    but1.textContent="-";
    const but2=document.createElement("button");
    but2.textContent="+";
    const h2=document.createElement("h2");
    h2.textContent=countPro.toString();
    but2.addEventListener("click",function(){
     countPro++;
      h2.textContent=countPro.toString();
      h1.textContent="$"+(pr*countPro);
       updateTotal();
    });
   but1.addEventListener("click",function(){
    countPro--;
    if(countPro<1){ 
        count--;
        divf.remove();
        addButton.disabled = false;
    }
     else{
       h2.textContent=countPro.toString(); 
     }
     if(count<1){
         itemsP.style.display="block";
         order.style.height="546px";
         items.style.height="200px";

     }
        h1.textContent="$"+(pr*countPro);
        updateTotal();
    });
    const divs= document.createElement("div");
    divs.classList.add("count");
    divs.append(but1,h2,but2);
    /*End button------------ */


    const divt= document.createElement("div");
    divt.append(h3,p,divs);
   const h1= document.createElement("h1");
    h1.textContent="$"+pr;
    divf.append(img,divt,h1);
    items.append(divf);
  

};

