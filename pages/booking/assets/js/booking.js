// js for panes

const createButton = document.getElementById("creation-button"),
        multiCreateButton = document.getElementById("multi-creation-button"),
        creationForm = document.getElementById("creation-form"),
        multiCreationForm = document.getElementById("multi-creation-form")

createButton.addEventListener("click", function() {
    creationForm.style.display = "block"
    multiCreationForm.style.display = "none"
    createButton.classList.add("cfb-active")
    multiCreateButton.classList.remove("cfb-active")
})
multiCreateButton.addEventListener("click", function() {
    creationForm.style.display = "none"
    multiCreationForm.style.display = "block"

    createButton.classList.remove("cfb-active")
    multiCreateButton.classList.add("cfb-active")
})

//js for form