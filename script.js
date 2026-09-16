/* =====================================
   IRENA KIM PORTFOLIO
   ===================================== */


/* ---------- MOBILE MENU ---------- */

const menuButton =
  document.querySelector(".menu-btn");

const navLinks =
  document.querySelector(".nav-links");


if (menuButton) {

  menuButton.addEventListener(
    "click",
    function () {

      navLinks.classList.toggle("open");

    }
  );

}


/* ---------- CLOSE MOBILE MENU ---------- */

document
  .querySelectorAll(".nav-links a")
  .forEach(function (link) {

    link.addEventListener(
      "click",
      function () {

        if (navLinks) {

          navLinks.classList.remove(
            "open"
          );

        }

      }
    );

  });


/* ---------- CONTACT FORM ---------- */

const contactForm =
  document.querySelector(
    "#contact-form"
  );


if (contactForm) {

  contactForm.addEventListener(
    "submit",
    function (event) {

      event.preventDefault();


      const message =
        document.querySelector(
          "#form-message"
        );


      message.textContent =
        "Thanks! Your message has been received in this demo.";


      message.style.marginTop =
        "20px";


      message.style.padding =
        "12px";


      message.style.background =
        "#c6d83e";


      message.style.border =
        "2px solid #472019";


      contactForm.reset();

    }
  );

}


/* ---------- ACTIVE PAGE ---------- */

const currentPage =
  window.location.pathname
    .split("/")
    .pop();


document
  .querySelectorAll(".nav-links a")
  .forEach(function (link) {

    const linkPage =
      link
        .getAttribute("href")
        .split("/")
        .pop();


    if (
      linkPage === currentPage ||
      (
        currentPage === "" &&
        linkPage === "index.html"
      )
    ) {

      link.style.textDecoration =
        "underline";

      link.style.textDecorationThickness =
        "3px";

      link.style.textUnderlineOffset =
        "6px";

    }

  });
