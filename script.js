const confirm = document.querySelector(".confirm");
const background = document.querySelector(".background");
let selectedItems = 0;
let selectedDishName = "";
let selectedBeverageName = "";
let selectedDeserveName = "";
let selectedDishPrice = 0.0;
let selectedBeveragePrice = 0.0;
let selectedDeservePrice = 0.0;
let total = "";

function cancel() {
    // Closing confirmation modal
    confirm.classList.add("hidden");
    background.classList.add("hidden");
}

function deSelect(option, item) {
    // Checking if an option of the same item was already selected 
    const preSelected = document.querySelector(item + " .selected");

    // Deselecting if necessary
    if (preSelected) {   
        const iconPreSelected = preSelected.querySelector("ion-icon");
        iconPreSelected.classList.add("hidden");
        preSelected.classList.remove("selected");
    }
    
    // Selecting the option
    const icon = option.querySelector("ion-icon");
    icon.classList.remove("hidden");
    option.classList.add("selected");

    // Taking the name and price
    const name = option.querySelector("h4").innerHTML;
    const price = Number(option.querySelector("h5 span").innerHTML.replace(",", "."));
        
    if (item === ".dishes") {
        selectedDishName = name;
        selectedDishPrice = price;
    } else if (item === ".beverages") {
        selectedBeverageName = name;
        selectedBeveragePrice = price;
    } else {
        selectedDeserveName = name;
        selectedDeservePrice = price;
    }

    // Enabling the checkout button when one of each item is selected (for the first time)
    if (!preSelected) {
        selectedItems++;

        if (selectedItems === 3) {
            enableCheckout(document.querySelector(".checkout"));
        }
    }
}

function checkout(button) {
    if (button.classList.contains("enabled")) {        
        total = (selectedDishPrice + selectedBeveragePrice + selectedDeservePrice).toFixed(2);

        // Showing confirmation modal
        confirm.classList.remove("hidden");
        background.classList.remove("hidden");

        // Taking options names, prices and the total of the order for the confirmation modal
        confirm.querySelector(".selected-dish-name").innerHTML = selectedDishName;
        confirm.querySelector(".selected-beverage-name").innerHTML = selectedBeverageName;
        confirm.querySelector(".selected-deserve-name").innerHTML = selectedDeserveName;
        confirm.querySelector(".selected-dish-price").innerHTML = String(selectedDishPrice.toFixed(2)).replace(".", ",");
        confirm.querySelector(".selected-beverage-price").innerHTML = String(selectedBeveragePrice.toFixed(2)).replace(".", ",");
        confirm.querySelector(".selected-deserve-price").innerHTML = String(selectedDeservePrice.toFixed(2)).replace(".", ",");
        confirm.querySelector(".total-price").innerHTML = `R$ ${total.replace(".", ",")}`;
    }
}

function enableCheckout(button) {
    button.classList.add("enabled");
    button.innerHTML = "Fechar pedido";
}

function makeOrder() {
    const name = prompt("Qual é o seu nome?");
    const address = prompt("Qual é o seu endereço?");
    const whatsappMessage = encodeURIComponent(`Olá, gostaria de fazer o pedido:\n- Prato: ${selectedDishName}\n- Bebida: ${selectedBeverageName}\n- Sobremesa: ${selectedDeserveName}\nTotal: R$ ${total}\n\nNome: ${name}\nEndereço: ${address}`);
    window.open(`https://wa.me/5521999999999?text=${whatsappMessage}`);
}
