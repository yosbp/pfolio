/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));


/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form"),
  contactName = document.getElementById("contact-name"),
  contactEmail = document.getElementById("contact-email"),
  contactProject = document.getElementById("contact-project"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  // Verifica si hay algun valor
  if ( contactName.value === "" || contactEmail.value === "" || contactProject.value === "") {
    // Añade o elimina color
    contactMessage.classList.remove("color-blue");
    contactMessage.classList.add("color-red");

    // Muestra Mensaje de error
    contactMessage.textContent = "Llena todos los campos! 📩";
  } else {
    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_rhnl35v', 'template_xeeb64v', '#contact-form', 'BgHsx6ch0x_KIvga6').then(
      () => {
        // Enseña mensaje exitoso y añade color
        contactMessage.classList.add("color-blue");
        contactMessage.textContent = "Mensaje enviado ✅";

        // Elimina el mensaje despues de 5 segundos
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);
      },
      (error) => {
        alert("OOPS! ALGO HA FALLADO!...", error);
      }
    );

    // Limpia todos los valores
    contactName.value = "";
    contactEmail.value = "";
    contactProject.value = "";
  }
};
contactForm.addEventListener("submit", sendEmail);
