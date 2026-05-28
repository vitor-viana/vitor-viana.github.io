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

const projectModalButtons = document.querySelectorAll("[data-modal]");
const projectModals = document.querySelectorAll(".projeto-modal");
const projectModalCloseButtons = document.querySelectorAll("[data-close-modal]");

function openProjectModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) {
        return;
    }

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
}

function closeProjectModal(modal) {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    if (!document.querySelector(".projeto-modal.is-open")) {
        document.body.classList.remove("modal-open");
    }
}

projectModalButtons.forEach((button) => {
    button.addEventListener("click", function() {
        openProjectModal(button.dataset.modal);
    });
});

projectModalCloseButtons.forEach((button) => {
    button.addEventListener("click", function() {
        const modal = button.closest(".projeto-modal");
        if (modal) {
            closeProjectModal(modal);
        }
    });
});

projectModals.forEach((modal) => {
    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            closeProjectModal(modal);
        }
    });
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        const openProjectModalElement = document.querySelector(".projeto-modal.is-open");
        if (openProjectModalElement) {
            closeProjectModal(openProjectModalElement);
        }
    }
});
