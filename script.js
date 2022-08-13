function deSelect(option, options) {
    const icon = option.querySelector("ion-icon");
    const selected = document.querySelector(options + " .selected");

    if (selected) {   
        const iconSelected = selected.querySelector("ion-icon");

        selected.classList.remove("selected");
        iconSelected.classList.add("hidden");

        // Mutual exclusion verification
        if (selected === option) {
            option.classList.toggle("selected");
            icon.classList.toggle("hidden");
        }
    }
    
    option.classList.toggle("selected");
    icon.classList.toggle("hidden");
}