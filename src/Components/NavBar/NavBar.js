onload = () => {
  let navBarToggler = document.querySelector("#navBarToggler");
  let navBarHiddenToggler = document.querySelector("#navBarHiddenToggler");
  let hiddenNavBar = document.querySelector(".hiddenNavBar");
  let circleAroundToggler = document.querySelector("#circleAroundToggler");
  let navBarLinksArrowParent = document.querySelector(
    "#navBarLinksArrowParent"
  );
  let subLinksContainer = document.querySelector(".subLinksContainer");

  window.onscroll = () => {
    if (window.scrollY >= 170) {
      circleAroundToggler.classList.remove("hidden");
    } else {
      circleAroundToggler.classList.add("hidden");
    }
  };

  navBarToggler.addEventListener("click", () => {
    hiddenNavBar.classList.add("translate");
    circleAroundToggler.classList.add("rotate");
  });

  navBarHiddenToggler.addEventListener("click", () => {
    hiddenNavBar.classList.remove("translate");
    circleAroundToggler.classList.remove("rotate");
  });

  circleAroundToggler.addEventListener("click", () => {
    if (hiddenNavBar.classList.contains("translate")) {
      hiddenNavBar.classList.remove("translate");
      circleAroundToggler.classList.remove("rotate");
    } else {
      hiddenNavBar.classList.add("translate");
      circleAroundToggler.classList.add("rotate");
    }
  });

  navBarLinksArrowParent.addEventListener("mouseenter", () => {
    subLinksContainer.classList.remove("d-none");
  });

  subLinksContainer.addEventListener("mouseout", () => {
    setTimeout(removeSubList, 5000);
  });

  let removeSubList = () => {
    subLinksContainer.classList.add("d-none");
  };
};
