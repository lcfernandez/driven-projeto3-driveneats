let selectedItems = 0;
let selectedDish = "";
let selectedBeverage = "";
let selectedDeserve = "";
let selectedDishPrice = 0.0;
let selectedBeveragePrice = 0.0;
let selectedDeservePrice = 0.0;


function deSelect(option, options) {
    const icon = option.querySelector("ion-icon");
    const selected = document.querySelector(options + " .selected");
    let exclusion = false;

    if (selected) {   
        const iconSelected = selected.querySelector("ion-icon");

        selected.classList.remove("selected");
        iconSelected.classList.add("hidden");

        // Mutual exclusion verification
        if (selected === option) {
            option.classList.toggle("selected");
            icon.classList.toggle("hidden");
            exclusion = true;
        }

        selectedItems--;
    }
    
    option.classList.toggle("selected");
    icon.classList.toggle("hidden");

    if (!exclusion) {
        selectedItems++;
        
        if (options === ".dishes") {
            selectedDish = option.querySelector(".description h4").innerHTML;
            selectedDishPrice = Number(option.querySelector(".description h5 span").innerHTML.replace(",", "."));
        } else if (options === ".beverages") {
            selectedBeverage = option.querySelector(".description h4").innerHTML;
            selectedBeveragePrice = Number(option.querySelector(".description h5 span").innerHTML.replace(",", "."));
        } else {
            selectedDeserve = option.querySelector(".description h4").innerHTML;
            selectedDeservePrice = Number(option.querySelector(".description h5 span").innerHTML.replace(",", "."));
        }
    }

    enableButton();
}

function enableButton() {
    const button = document.querySelector("button");

    if (selectedItems === 3) {
        button.classList.add("enabled");
        button.innerHTML = "Fechar pedido";
    } else {
        button.classList.remove("enabled");
        button.innerHTML = "Selecione os 3 itens <br/> para fechar o pedido";
    }
}

function checkout(button) {
    if (button.classList.contains("enabled")) {
        const total = (selectedDishPrice + selectedBeveragePrice + selectedDeservePrice).toFixed(2);
        const whatsappMessage = encodeURIComponent(`Olá, gostaria de fazer o pedido:\n- Prato: ${selectedDish}\n- Bebida: ${selectedBeverage}\n- Sobremesa: ${selectedDeserve}\nTotal: R$ ${total}`);
        
        window.open(`https://wa.me/5521999999999?text=${whatsappMessage}`);
    }
}