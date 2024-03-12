function openProjectModal(projectName) {
    const modal = document.getElementById('project-modal');
    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = `<h2>${projectName}</h2><p>Detailed description of ${projectName}.</p>`;
    modal.style.display = 'flex';
}

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('project-modal');
    modal.addEventListener('click', function () {
        modal.style.display = 'none';
    });
});
