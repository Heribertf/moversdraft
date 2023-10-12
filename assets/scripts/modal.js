// document.querySelector(".button.button-normal").addEventListener("click", function () {
//     document.getElementById("moveNowModal").classList.add("active");
//     document.getElementById("moveNowModal").style.display = "block";
// });

const heroButton = document.querySelector(".button.button-normal");
const aboutButton = document.querySelector(".button.button-about");
const chooseButton = document.querySelector(".button.button-choose");

const elemArr = [heroButton, aboutButton, chooseButton];

for (let i = 0; i < elemArr.length; i++) {
    elemArr[i].addEventListener("click", function () {
        document.getElementById("moveNowModal").classList.add("active");
        document.getElementById("moveNowModal").style.display = "block";
    });
}

document.getElementById("closeModal").addEventListener("click", function () {
    document.getElementById("moveNowModal").classList.remove("active");
    document.getElementById("moveNowModal").style.display = "none";
});

document.getElementById("moveNowForm").addEventListener("submit", function (e) {
    e.preventDefault();
    // Handle form submission here (e.g., send the data to your server).
    // Close the modal after successful submission.
    document.getElementById("moveNowModal").style.display = "none";
});



const cityDropdown = document.getElementById("city");
const otherCityLabel = document.getElementById("otherCityLabel");
const otherCityInput = document.getElementById("otherCity");

cityDropdown.addEventListener("change", function () {
    if (cityDropdown.value === "Other") {
        otherCityLabel.style.display = "block";
        otherCityInput.style.display = "block";
    } else {
        otherCityLabel.style.display = "none";
        otherCityInput.style.display = "none";
    }
});
