// Load the JSON file and use the data
fetch('assets/artwork.json')
  .then(response => response.json())
  .then(data => {
    console.log('Data loaded:', data);
    data.forEach(item => {
        addCoverToContainer(item);
        addModalToContainer(item);     
    });
  })
  .catch(error => console.error('Error loading JSON:', error));

  
  

const artContainer = document.getElementById('art-container');

// Function to add images to the container
function addCoverToContainer(item, container = artContainer) {
  const art_div = document.createElement('div');
  art_div.className = 'art-div btn';
  
  const img = document.createElement('img');
  img.src = item.cover;
  img.className = 'img-fluid art-img';
  
  art_div.appendChild(img);
  container.appendChild(art_div);

  art_div.addEventListener('click', () => {
    const modal = document.getElementById(`modal${item.id}`);
    modal.style.display = "block";
  });
}

// Function to add modals for images
function addModalToContainer(item, container = artContainer) {
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.id = `modal${item.id}`;
  
  const modal_content = document.createElement('div');
  modal_content.className = 'modal-content';

  console.log(item);

  // the main image or video
  let main1
  if (item.type === 'video') {
  main1 = document.createElement('video');
  main1.autoplay = true;
  main1.muted = true;
  main1.controls = true;
  main1.setAttribute('controlslist', 'nodownload');
  main1.setAttribute('loop', 'false');
  main1.setAttribute('playsinline', 'true');
  main1.className = 'video';
  main1.style.width = '100%';
  main1.style.height = 'auto';
  main1.type = 'video/mp4';
    }    
  else {
  main1 = document.createElement('img');
  main1.className = 'img-fluid';
    }
    console.log(main1);

  if (item.main) {
    main1.src = item.main;
    }
    else { 
    main1.src = item.cover;
    }


 /// text content
  const intro = document.createElement('div');
  if (item.title) {
  intro.innerHTML = `<h2>${item.title}</h2>`;
  }

  // Conditionally add `data` and `material` attributes if they exist
  if (item.date) {
    const data = document.createElement('p');
    data.innerHTML = `<em>${item.date}</em> `;
    intro.appendChild(data);
  }

  if (item.medium) {
    const material = document.createElement('p');
    material.innerHTML = `<strong>${item.material}</strong> `;
    intro.appendChild(material);
  }

  if (item.size) {
    const size = document.createElement('p');
    size.innerHTML = `<strong>${item.size}</strong> `;
    intro.appendChild(size);
  }

  if (item.description) {
    const description = document.createElement('p');
    description.innerHTML = `${item.description}`;
    intro.appendChild(description);
    }

  if (item.url) {
    const url = document.createElement('a');
    url.href = item.url;
    if (item.text_for_url) {
      url.innerHTML = item.text_for_url;
    } else {
        url.innerHTML = 'More info';
        }
    intro.appendChild(url);
    }

  let more_img_container

  modal_content.appendChild(main1);
  modal_content.appendChild(intro);
  if (item.more_img) {
    addMoreImagesToModal(item, modal_content);
    }

  modal.appendChild(modal_content);
  container.appendChild(modal);

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
        stopVideo(modal);
    }
  });
}


function addMoreImagesToModal(item, modal) {
    const more_img_container = document.createElement('div');
    more_img_container.className = 'more-img-container row';

    // Adjust the container for better layout
    more_img_container.style.margin = '0';
    more_img_container.style.padding = '15px';  // Add some padding to the container for spacing

    item.more_img.forEach(img => {
        const img_div = document.createElement('div');
        img_div.className = 'col-md-6 mb-3'; // Add margin-bottom for better spacing

        const more_img = document.createElement('img');
        more_img.src = img;

        // Keep aspect ratio and allow image scaling within the div
        more_img.style.width = "100%";
        more_img.style.height = "auto";  // Maintain aspect ratio
        more_img.style.borderRadius = '8px'; // Soft rounded corners for a modern look
        more_img.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';  // Add a subtle shadow for depth

        more_img.className = 'img-fluid';  // Bootstrap class for responsive image scaling

        img_div.appendChild(more_img);
        more_img_container.appendChild(img_div);
    });

    modal.appendChild(more_img_container);
}


// Stop video function
function stopVideo(modal) {
  const video = modal.querySelector('video');
  if (video) {
    video.pause();
    video.currentTime = 0;
  }
}
