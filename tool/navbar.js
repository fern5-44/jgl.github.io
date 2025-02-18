document.addEventListener("DOMContentLoaded", function () {
  fetch("https://fern5-44.github.io/jgl.github.io/tool/navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar-container").innerHTML = data;

      // Sidebar-Steuerung mit neu geladenen Elementen verbinden
      document.querySelector(".sidenav .closebtn").onclick = closeNav;
      document.querySelector(".topnav a").onclick = openNav;
    })
    .catch(error => console.error("Error loading navbar:", error));
});

function openNav() {
  const sidenav = document.getElementById("mySidenav");
  const main = document.getElementById("main");

  if (sidenav && main) {
    sidenav.style.width = "250px";
    main.style.marginLeft = "250px";
  } else {
    console.error("Sidenav or Main content not found");
  }
}

function closeNav() {
  const sidenav = document.getElementById("mySidenav");
  const main = document.getElementById("main");

  if (sidenav && main) {
    sidenav.style.width = "0";
    main.style.marginLeft = "0";
  } else {
    console.error("Sidenav or Main content not found");
  }
}

// Footer laden
  fetch("https://fern5-44.github.io/jgl.github.io/tool/footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer-container").innerHTML = data;
    })
    .catch(error => console.error("Error loading footer:", error));
