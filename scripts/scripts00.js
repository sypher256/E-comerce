function Payement(ProductName, ProductPrice){
   document.querySelector('.payement-div').innerHTML=`
   <div>
        <button onclick="CancelPage2();" class="cancel-payment-page">X</button>
        <div class="pay22">
            
            <h2 class="product-name">Make Your payements</h2>

            <div class="input-number-div">
                <p>Enter you mobile money number<br>
                    Confirm Your Payement by Enter You Mobile money pin Code
                </p>
                <h2 class="pN">${ProductName}</h2>

                <p class="pay-price">${ProductPrice}</p>

                <input value="+256 " class="input-payment" type="text">
                
            </div>
            <button onclick="FinalPayment();" class="final-button">Make Payment</button>
        </div>
   </div>
        
   `
}

function FinalPayment(){
    document.querySelector('.payement-div').innerHTML='';
    alert(`Your Payment is being processed
    You will receive a push notification 
    To confirm your payment
    `)
}
function CancelPage2(){
    document.querySelector('.payement-div').innerHTML='';
}

const search =() =>{
    const searchbox = document.querySelector('.Search-element').value.toUpperCase()
    const storeitems = document.getElementById('All-container');
    const product = document.querySelectorAll(".product");
    const pname = storeitems.getElementsByTagName("h2");
    

    for ( var i=0; i<pname.length;i++){
        let match = product[i].getElementsByTagName("h2")[0];

        if(match){
            let textvalue = match.textContent|| match.innerHTML;
    
            if (textvalue.toUpperCase().indexOf(searchbox) > -1){
                product[i].style.display = "";
            }else{
                product[i].style.display = "none";
            }
        }
    }  
}







