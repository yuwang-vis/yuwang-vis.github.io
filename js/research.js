const researchModalTriggers = document.querySelectorAll('.js-research-modal');

if (researchModalTriggers.length > 0) {
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.id = 'research-modal';

  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content research-modal-content';

  const closeButton = document.createElement('button');
  closeButton.className = 'research-modal-close';
  closeButton.type = 'button';
  closeButton.setAttribute('aria-label', 'Close enlarged research figure');
  closeButton.innerHTML = '&times;';

  const modalImage = document.createElement('img');
  modalImage.className = 'img-fluid';
  modalImage.style.width = '100%';
  modalImage.style.height = 'auto';

  const caption = document.createElement('p');

  modalContent.appendChild(closeButton);
  modalContent.appendChild(modalImage);
  modalContent.appendChild(caption);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  function closeResearchModal() {
    modal.style.display = 'none';
  }

  researchModalTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      modalImage.src = trigger.dataset.modalSrc || '';
      modalImage.alt = trigger.dataset.modalAlt || '';
      caption.innerHTML = trigger.dataset.modalCaption || '';
      modal.style.display = 'block';
    });
  });

  closeButton.addEventListener('click', closeResearchModal);

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeResearchModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.style.display === 'block') {
      closeResearchModal();
    }
  });
}
