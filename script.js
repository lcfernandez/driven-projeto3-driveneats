let selectedItems = 0;

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