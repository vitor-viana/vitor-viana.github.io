function toggleMenu() {
    const ul = document.getElementById('nav');
    ul.classList.toggle('active');
}

document.getElementById("show-more-btn").addEventListener("click", function() {
    var moreContent = document.getElementById("more-project-ul");
    if (moreContent.style.display === "none") {
        moreContent.style.display = "flex";
        document.getElementById("show-more-btn").textContent = "Mostrar Menos";
    } else {
        moreContent.style.display = "none";
        document.getElementById("show-more-btn").textContent = "Mostrar Mais";
    }
});
