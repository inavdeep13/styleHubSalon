
const mobileMenu = document.getElementById("mobileMenu");

document.querySelectorAll("#mobileMenu a").forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.add("hidden");

    });

});



const form = document.getElementById("bookingForm");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    const name =
        document.getElementById("name").value;

    const phone =
        document.getElementById("phone").value;

    const service =
        document.getElementById("service").value;

    const date =
        document.getElementById("date").value;

    const time =
        document.getElementById("time").value;

    const message =
        document.getElementById("message").value;

    const whatsappMessage =

`*New Appointment Request*

Name: ${name}

Phone: ${phone}

Service: ${service}

Date: ${date}

Time: ${time}

Message: ${message}`;

    const salonNumber = "916283333495";

    window.open(
        `https://wa.me/${salonNumber}?text=${encodeURIComponent(whatsappMessage)}`,
        "_blank"
    );

});



const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        scrollBtn.classList.remove("hidden");

    }else{

        scrollBtn.classList.add("hidden");

    }

});

scrollBtn.addEventListener("click",()=>{

    lenis.scrollTo(0);

});


