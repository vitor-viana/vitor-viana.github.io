function toggleMenu() {
    const ul = document.getElementById('nav');
    ul.classList.toggle('active');
}

const showMoreBtn = document.getElementById("show-more-btn");

if (showMoreBtn) {
    showMoreBtn.addEventListener("click", function() {
        const moreContent = document.getElementById("more-project-ul");
        if (moreContent.style.display === "none") {
            moreContent.style.display = "flex";
            showMoreBtn.textContent = "Mostrar Menos";
        } else {
            moreContent.style.display = "none";
            showMoreBtn.textContent = "Mostrar Mais";
        }
    });
}

const modalButtons = document.querySelectorAll("[data-modal]");
const modalCloseButtons = document.querySelectorAll("[data-close-modal]");
const modals = document.querySelectorAll(".competencia-modal");

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) {
        return;
    }

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
}

function closeModal(modal) {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    if (!document.querySelector(".competencia-modal.is-open")) {
        document.body.classList.remove("modal-open");
    }
}

modalButtons.forEach((button) => {
    button.addEventListener("click", function() {
        openModal(button.dataset.modal);
    });
});

modalCloseButtons.forEach((button) => {
    button.addEventListener("click", function() {
        const modal = button.closest(".competencia-modal");
        if (modal) {
            closeModal(modal);
        }
    });
});

modals.forEach((modal) => {
    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            closeModal(modal);
        }
    });
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        const openModalElement = document.querySelector(".competencia-modal.is-open");
        if (openModalElement) {
            closeModal(openModalElement);
        }
    }
});
