const buttons = document.querySelectorAll('.btns');
buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        document.querySelector('.bg-modal').style.display = "flex";
    });
});



const modal = document.getElementById("myModal");
const closeModalBtn = document.getElementById("closeModalBtn");

closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});


window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});



        const slider = document.getElementById("userSlider");
        const popupMessage = document.getElementById("popupMessage");
        const pricingPlans = document.querySelectorAll(".pricing-plan");
    

        slider.addEventListener("input", () => {
            const value = parseInt(slider.value);
            let message = "";

            if(value === 0){
                message = "nothing selected";
                pricingPlans[0].classList.remove("highlighted");
                pricingPlans[1].classList.remove("highlighted");
                pricingPlans[2].classList.remove("highlighted");
            }
            else if (value > 0 && value <= 10) {
                message = (value-1) + " users" ;
                pricingPlans[0].classList.add("highlighted");
                pricingPlans[1].classList.remove("highlighted");
                pricingPlans[2].classList.remove("highlighted");
            } else if (value > 10 && value <= 20) {
                message = (value-1) + " users";
                pricingPlans[0].classList.remove("highlighted");
                pricingPlans[1].classList.add("highlighted");
                pricingPlans[2].classList.remove("highlighted");
            } else {
                message = "20 or more users";
                pricingPlans[0].classList.remove("highlighted");
                pricingPlans[1].classList.remove("highlighted");
                pricingPlans[2].classList.add("highlighted");
            }

            popupMessage.textContent = message;
        });

        
    












      





















