// Select all dropdown menus
const dropdownMenus = document.querySelectorAll(".select-menu");

// Loop through each dropdown menu
dropdownMenus.forEach(optionMenu => {
    const selectBtn = optionMenu.querySelector(".select-btn");
    const options = optionMenu.querySelectorAll(".option");
    const sBtn_text = optionMenu.querySelector(".sBtn-text");

    // Toggle dropdown on button click
    selectBtn.addEventListener("click", () => {
        // Close other dropdowns if they are open
        dropdownMenus.forEach(menu => {
            if (menu !== optionMenu) {
                menu.classList.remove("active");
            }
        });
        // Toggle the current dropdown
        optionMenu.classList.toggle("active");
    });

    // Add click event to each option
    options.forEach(option => {
        option.addEventListener("click", () => {
            // Remove 'selected' class from all options in this dropdown
            options.forEach(opt => opt.classList.remove("selected"));

            // Add 'selected' class to the clicked option
            option.classList.add("selected");

            // Update the select button text
            let selectedOption = option.querySelector(".option-text").innerText;
            sBtn_text.innerText = selectedOption;

            // Close the dropdown
            optionMenu.classList.remove("active");
        });
    });
});

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
    dropdownMenus.forEach(optionMenu => {
        if (!optionMenu.contains(e.target)) {
            optionMenu.classList.remove("active");
        }
    });
});


// const optionMenu = document.querySelector(".select-menu"),
//     selectBtn = optionMenu.querySelector(".select-btn"),
//     options = optionMenu.querySelectorAll(".option"),
//     sBtn_text = optionMenu.querySelector(".sBtn-text");

// // Toggle dropdown on button click
// selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

// // Add click event to each option
// options.forEach(option => {
//     option.addEventListener("click", () => {
//         // Remove 'selected' class from all options
//         options.forEach(opt => opt.classList.remove("selected"));

//         // Add 'selected' class to the clicked option
//         option.classList.add("selected");

//         // Update the select button text
//         let selectedOption = option.querySelector(".option-text").innerText;
//         sBtn_text.innerText = selectedOption;

//         // Close the dropdown
//         optionMenu.classList.remove("active");
//     });
// });
