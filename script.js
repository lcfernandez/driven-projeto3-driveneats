let selectedItems = 0;
let selectedDishName = "";
let selectedBeverageName = "";
let selectedDeserveName = "";
let selectedDishPrice = 0.0;
let selectedBeveragePrice = 0.0;
let selectedDeservePrice = 0.0;


function deSelect(option, options) {
    const icon = option.querySelector("ion-icon");
    const preSelected = document.querySelector(options + " .selected");
    let change = false;

    if (preSelected) {   
        const iconPreSelected = preSelected.querySelector("ion-icon");

        preSelected.classList.remove("selected");
        iconPreSelected.classList.add("hidden");

        change = true;
    }
    
    option.classList.add("selected");
    icon.classList.remove("hidden");

    const name = option.querySelector(".description h4").innerHTML;
    const price = Number(option.querySelector(".description h5 span").innerHTML.replace(",", "."));
        
    if (options === ".dishes") {
        selectedDishName = name;
        selectedDishPrice = price;
    } else if (options === ".beverages") {
        selectedBeverageName = name;
        selectedBeveragePrice = price;
    } else {
        selectedDeserveName = name;
        selectedDeservePrice = price;
    }

    if (!change) {
        selectedItems++;

        if (selectedItems === 3) {
            enableButton();
        }
    }
}

function enableButton() {
    const button = document.querySelector("button");

    button.classList.add("enabled");
    button.innerHTML = "Fechar pedido";
}

function checkout(button) {
    if (button.classList.contains("enabled")) {
        
        const total = (selectedDishPrice + selectedBeveragePrice + selectedDeservePrice).toFixed(2);

        const background = document.querySelector(".background");
        const confirm = document.querySelector(".confirm");
        
        background.classList.remove("hidden");
        confirm.classList.remove("hidden");

        confirm.querySelector(".total span").innerHTML = total;


        // const name = prompt("Qual é o seu nome?");
        // const address = prompt("Qual é o seu endereço?");
        // const whatsappMessage = encodeURIComponent(`Olá, gostaria de fazer o pedido:\n- Prato: ${selectedDishName}\n- Bebida: ${selectedBeverageName}\n- Sobremesa: ${selectedDeserveName}\nTotal: R$ ${total}\n\nNome: ${name}\nEndereço: ${address}`);
        //window.open(`https://wa.me/5521999999999?text=${whatsappMessage}`);
    }
}
