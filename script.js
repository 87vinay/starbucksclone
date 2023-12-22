let menu = document.querySelector("#menu-icon");
      let navbar = document.querySelector(".navbar");

      menu.onclick = () => {
        menu.classList.toggle("bx-x");
        navbar.classList.toggle("active");
      };

      window.onscroll = () => {
        menu.classList.remove("bx-x");
        navbar.classList.remove("active");
      };

      document.addEventListener("DOMContentLoaded", function () {
        const boxes = document.querySelectorAll(".box");

        function checkBoxes() {
          const triggerBottom = window.innerHeight * 0.8;

          boxes.forEach((box) => {
            const boxTop = box.getBoundingClientRect().top;

            if (boxTop < triggerBottom && !box.classList.contains("show")) {
              box.classList.add("show");

              box.style.animation = "fadeInUp 1s ease";
              box.style.animationFillMode = "forwards";

              const stars = box.querySelector(".stars");
              stars.style.transform = "scale(1)";
              stars.style.transition = "transform 0.5s ease-in-out";

              box.style.transform = "rotateY(0)";
              box.style.transition = "transform 1s ease-in-out";

              box.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
              box.style.transition = "box-shadow 0.5s ease-in-out";
            }
          });
        }

        function setScrollEffectFlag() {
          localStorage.setItem("scrollEffectTriggered", "true");
        }

        const scrollEffectFlag = localStorage.getItem("scrollEffectTriggered");

        if (!scrollEffectFlag) {
          checkBoxes();
          setScrollEffectFlag();
        }

        window.addEventListener("scroll", checkBoxes);
      });

      window.addEventListener("load", () => {
        const fallingText = document.getElementById("fallingText");
        fallingText.style.opacity = "1";
      });