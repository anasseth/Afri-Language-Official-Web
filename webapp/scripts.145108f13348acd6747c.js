function waripay(){var t=document.getElementById("wpay");t.style.background="transparent",t.style.border="none";var e=document.createElement("img");e.style.width=t.dataset.size+"px";var a=t.dataset.transaction;t.addEventListener("click",(function(){window.location.href="https://www.waripay.io/#/Checkout/"+a})),e.src=this.img,t.appendChild(e)}