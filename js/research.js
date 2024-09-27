// Add an event listener to the image to open a modal when clicked

const work_flow_img = document.getElementById('workflow-img');



const research_div = document.getElementById('research')

// add modal
const modal = document.createElement('div');
modal.className = 'modal';
modal.id = 'workflow_modal';

const modal_content = document.createElement('div');
modal_content.className = 'modal-content';
modal_content.style.width = '40%';

// the main image or video
const main1 = document.createElement('img');
main1.className = 'img-fluid';
main1.src = work_flow_img.src;
main1.style.width = '100%';
main1.style.height = 'auto';

const caption = document.createElement('p');
caption.innerHTML = 'General workflow of decision map techniques. Figure from <a href="http://webspace.science.uu.nl/~telea001/uploads/PAPERS/Inf23/paper.pdf" target="_blank">Wang et al., 2023</a>.';


modal_content.appendChild(main1);
modal_content.appendChild(caption);
modal.appendChild(modal_content);
research_div.appendChild(modal);

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
        stopVideo(modal);
    }
    }
);

work_flow_img.addEventListener('click', () => {
    console.log('clicked');
    const modal = document.getElementById('workflow_modal');
    modal.style.display = "block";
    }
);