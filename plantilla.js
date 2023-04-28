class Plantilla{

    async addNavbar() {
        const response = await fetch("barra.html");
        const text = await response.text();
        const navbar = document.getElementById("mainMenu");
        navbar.classList.add("navbar","navbar-expand-md");
        navbar.innerHTML = text;
      }

    async addFooter() {
        
      }

    async addHeader() {
        const response = await fetch("encabezado.html");
        const text = await response.text();
        const header = document.getElementById("header");
        header.innerHTML = text;
      }
}