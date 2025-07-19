var typeWriterElement = document.getElementById('app');

// List of strings to display in turn
var textArray = [
  'I am a computers scientist.',
  'My research focuses on visualization for AI.',
  'I am also a gemologist and jewellery appraiser.',
  'I like Art.',
];

// Initialize Typewriter with loop
var typewriter = new Typewriter(app, {
  loop: false, // Disable looping in the Typewriter instance
  delay: 75,
});

function delWriter(text, i, cb) {
	if (i >= 0 ) {
		typeWriterElement.innerHTML = text.substring(0, i--);
		// generate a random Number to emulate backspace hitting.
 		var rndBack = 10 + Math.random() * 100;
		setTimeout(function() {
			delWriter(text, i, cb);
		},rndBack); 
	} else if (typeof cb == 'function') {
		setTimeout(cb,1000);
	}
};

// function to generate the keyhitting effect
function typeWriter(text, i, cb) {
	if ( i < text.length+1 ) {
		typeWriterElement.innerHTML = text.substring(0, i++);
		// generate a random Number to emulate Typing on the Keyboard.
		var rndTyping = 150 - Math.random() * 100;
		setTimeout( function () { 
			typeWriter(text, i++, cb)
		},rndTyping);
	} else if (i === text.length+1) {
		setTimeout( function () {
			delWriter(text, i, cb)
		},1000);
	}
};

// the main writer function
function StartWriter(i) {
	if (typeof textArray[i] == "undefined") {
		setTimeout( function () {
			StartWriter(0)
		},1000);
	} else if(i < textArray[i].length+1) {
		typeWriter(textArray[i], 0, function () {
			StartWriter(i+1);
		});
	}  
};
// wait one second then start the typewriter
setTimeout( function () {
	StartWriter(0);
},1000);
	

// cover image
var granimInstance = new Granim({
    element: '#canvas-image-blending',
    direction: 'top-bottom',
    isPausedWhenNotInView: true,
    image : {
        // source: 'assets/church.jpg', //change image for intro section if desired
        source:  "assets/artwork/AI_art/cover.png",
        blendingMode: 'multiply',
        // stretchMode: ['stretch', 'none'],
    },
    states : {
        "default-state": {
            gradients: [
                ['#29323c', '#485563'],
                ['#FF6B6B', '#556270'],
                ['#80d3fe', '#7ea0c4'],
                ['#f0ab51', '#eceba3']
            ],
            transitionSpeed: 8000
        }
    }
});

/////// see artwork.js
// const art_container = document.getElementById('artwork');
// // add all images in folder '/assets/artwork' to the art_container
// dir_list = [
//   // "assets/castal.jpg",
//   "assets/artwork/seals/wangquanoj8k.png",
//   "assets/artwork/AI_art/IMG_3540.JPEG",
//   "assets/artwork/seals/yeyousuomeng.jpg",
//   "assets/artwork/seals/xunsishi.jpg",
//   "assets/artwork/seals/ChangShengBuLao.jpg",
//   "assets/artwork/mokume/zoom.jpg",
//   "assets/artwork/cube/main1.jpg",
//   "assets/artwork/drawing/underlight.jpg",
//   "assets/artwork/drawing/objects.png",
//   "assets/artwork/metalcraft/unkown1.jpg",
//   "assets/artwork/metalcraft/unkown3.jpg",
//   "assets/artwork/metalcraft/warrior1.jpg",
//   "assets/artwork/tag/onpants.jpg",
//   "assets/artwork/others/seastar.jpg",
//   "assets/artwork/others/decryptoart.PNG",
//   "assets/artwork/others/gravity_3views.png",
// ]


// function addImageToContainer(image_src, size = "col-md-3", container = art_container) {
//   // Create a div with the specified size and the 'art-div' class
//   const art_div = document.createElement('div');
//   art_div.className = 'art-div btn';
  
//   // Create an img element, set its source and add the appropriate classes
//   const img = document.createElement('img');
//   img.src = image_src;
//   img.className = 'img-fluid art-img'; // img-fluid is a Bootstrap class for responsive images
  
//   // Append the image to the art_div and then append the div to the container
//   art_div.appendChild(img);
//   container.appendChild(art_div);

//   // Add an event listener to the image to open a modal when clicked
//   art_div.addEventListener('click', () => {
//     // Get the modal element with the same name as the image
//     const modal = document.getElementById(`modal${image_src.split("/").slice(-1)[0].split(".")[0]}`);
//     modal.style.display = "block";
//   });
// }


// // add the modal for each image, just a enlarged view of the image
// function addModalToContainer(image_src, container = art_container) {
//   // Create a modal div with the specified size and the 'modal' class
//   const modal = document.createElement('div');
//   modal.className = 'modal';
//   modal.id = `modal${image_src.split("/").slice(-1)[0].split(".")[0]}`;
  
//   // Create a div for the modal content
//   const modal_content = document.createElement('div');
//   modal_content.className = 'modal-content';
//   modal_content.style = "text-align: center;";
  
//   // Create an img element, set its source and add the appropriate classes
//   const img = document.createElement('img');
//   img.src = image_src;
//   img.className = 'img-fluid'; // img-fluid is a Bootstrap class for responsive images

  
//   //// Create a span element with the class 'closeModal
//   // const span = document.createElement('span');
//   // span.className = 'closeModal';
//   // span.innerHTML = '&times;';

//   // Append the image and span to the modal content and then append the content to the modal
//   // modal_content.appendChild(span);
//   modal_content.appendChild(img);
//   modal.appendChild(modal_content);

//   // Append the modal to the container
//   container.appendChild(modal);

//   // Add an event listener to the span to close the modal when clicked
//   // span.addEventListener('click', () => {
//   //   modal.style.display = "none";
//   // });

//   // Add an event listener to the modal to close it when clicked outside of the modal
//   modal.addEventListener('click', (event) => {
//     if (event.target === modal) {
//       modal.style.display = "none";
//       stopVideo(modal);
//     }
//   });
// }


// // Assuming dir_list is an array of image paths
// dir_list.forEach(image_src => addImageToContainer(image_src));
// // Assuming dir_list is an array of image paths
// dir_list.forEach(image_src => addModalToContainer(image_src));


// /// write a special modal for the modaldecryptoart and overwrite the above function

// // Create a modal div with the specified size and the 'modal' class
// const decryptoart_modal = document.getElementById('modaldecryptoart').getElementsByClassName('modal-content')[0];
// const intro_decryptoart = document.createElement('div');
// // intro_decryptoart.className = 'modal-content';
// // remove the original content
// decryptoart_modal.innerHTML = "";
// intro_decryptoart.innerHTML = `
//   <video autoplay muted class="AssetMedia--video" controls controlslist="nodownload" loop playsinline 
//        poster="https://i.seadn.io/gae/DhCMLwf9nLHyi6fItPevwMHkt5XI5NL_NS_CabqiQCRAHhy2PrD-tmCnlinMmURXDifk146YUmpO86qMDsigUSSLU_zgqiwEnL6MkMA?w=500&auto=format" 
//        preload="metadata" style="width: 100%; height: auto;">
//     <source src="https://openseauserdata.com/files/473b22ee19a4b9eb23a59368c6b6b36c.mp4#t=0.001" type="video/mp4">
//     <source src="your-fallback-video.webm" type="video/webm">
//     Your browser does not support the video tag.
// </video>
//     <h2>Decrypto Art</h2>
//     <h2></h2>
//     <p><strong>Creation Date:</strong> March 16, 2021</p>
//     <p>This piece was created during the height of interest in crypto art, a form of digital expression secured by cryptographic technology. But what truly defines crypto art? In this work, I use two paper clips to pick a physical lock—a metaphor for the act of breaking through barriers and accessing hidden value. Just as a cryptographic key unlocks ownership of digital assets, the paper clips symbolize an unconventional approach to revealing what’s secured. After uploading this artwork to the blockchain as an NFT, a deeper question arises: does this transformation make it crypto art because it exists within a digital ledger, or is it decryption art, unlocking new ways to interpret and access value?</p>

//     <p><strong>Link to NFT:</strong> 
//         <a href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/85338033498794955317087390683198712353501472751027363964759608170044358393857" target="_blank">
//             View NFT on OpenSea
//         </a>
//     </p>

// `;
// decryptoart_modal.appendChild(intro_decryptoart);



// // Create a function to stop the video
// function stopVideo(modal) {
//   const video = modal.querySelector('video');
//   if (video) {
//     video.pause();
//     video.currentTime = 0; // Reset video to the start
//   }
// }


//BUTTON 1
// var modal1 = document.getElementById("modal1");

// // Get the button that opens the modal
// var btnModal1 = document.getElementById("btn1");

// // Get the <span> element that closes the modal
// var spanModal1 = document.getElementsByClassName("closeModal1")[0];

// // When the user clicks on the button, open the modal
// btnModal1.onclick = function() {
//   modal1.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// spanModal1.onclick = function() {
//   modal1.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal1) {
//     modal1.style.display = "none";
//   }
// }

// //BUTTON 2
// var modal2 = document.getElementById("modal2");

// // Get the button that opens the modal
// var btnModal2 = document.getElementById("btn2");

// // Get the <span> element that closes the modal
// var spanModal2 = document.getElementsByClassName("closeModal2")[0];

// // When the user clicks on the button, open the modal
// btnModal2.onclick = function() {
//   modal2.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// spanModal2.onclick = function() {
//   modal2.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal2) {
//     modal2.style.display = "none";
//   }
// }

// //BUTTON 3 -- links to outside website
// var btn3 = document.getElementById("btn3");
// btn3.onclick = function() { 
//   window.open("https://www.nintendo.com", "_blank") //TODO add your link
// }

// //BUTTON 4
// var modal4 = document.getElementById("modal4");

// // Get the button that opens the modal
// var btnModal4 = document.getElementById("btn4");

// // Get the <span> element that closes the modal
// var spanModal4 = document.getElementsByClassName("closeModal4")[0];

// // When the user clicks on the button, open the modal
// btnModal4.onclick = function() {
//   modal4.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// spanModal4.onclick = function() {
//   modal4.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal4) {
//     modal4.style.display = "none";
//   }
// }

// //BUTTON 5
// var modal5 = document.getElementById("modal5");

// // Get the button that opens the modal
// var btnModal5 = document.getElementById("btn5");

// // Get the <span> element that closes the modal
// var spanModal5 = document.getElementsByClassName("closeModal5")[0];

// // When the user clicks on the button, open the modal
// btnModal5.onclick = function() {
//   modal5.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// spanModal5.onclick = function() {
//   modal5.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal5) {
//     modal5.style.display = "none";
//   }
// }

// //BUTTON 6 -- links to outside website
// var btn6 = document.getElementById("btn6");
// btn6.onclick = function() { 
//   window.open("https://www.arduino.cc", "_blank") //TODO add your link
// }

// //HOBBY MODALS

// //BUTTON HOBBY 1
// var modalHobby1 = document.getElementById("modalHobby1");

// // Get the button that opens the modal
// var btnHobby1 = document.getElementById("hobbyBtn1");

// // Get the <span> element that closes the modal
// var spanModalHobby1 = document.getElementsByClassName("closeModalHobby1")[0];

// // When the user clicks on the button, open the modal
// btnHobby1.onclick = function() {
//   modalHobby1.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// spanModalHobby1.onclick = function() {
//   modalHobby1.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modalHobby1) {
//     modalHobby1.style.display = "none";
//   }
// }

// //BUTTON HOBBY 2
// var modalHobby2 = document.getElementById("modalHobby2");

// // Get the button that opens the modal
// var btnHobby2 = document.getElementById("hobbyBtn2");

// // Get the <span> element that closes the modal
// var spanModalHobby2 = document.getElementsByClassName("closeModalHobby2")[0];

// // When the user clicks on the button, open the modal
// btnHobby2.onclick = function() {
//   modalHobby2.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// spanModalHobby2.onclick = function() {
//   modalHobby2.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modalHobby2) {
//     modalHobby2.style.display = "none";
//   }
// }

// //BUTTON HOBBY 3
// var modalHobby3 = document.getElementById("modalHobby3");

// // Get the button that opens the modal
// var btnHobby3 = document.getElementById("hobbyBtn3");

// // Get the <span> element that closes the modal
// var spanModalHobby3 = document.getElementsByClassName("closeModalHobby3")[0];

// // When the user clicks on the button, open the modal
// btnHobby3.onclick = function() {
//   modalHobby3.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// spanModalHobby3.onclick = function() {
//   modalHobby3.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modalHobby3) {
//     modalHobby3.style.display = "none";
//   }
// }

// //BUTTON HOBBY 4
// var modalHobby4 = document.getElementById("modalHobby4");

// // Get the button that opens the modal
// var btnHobby4 = document.getElementById("hobbyBtn4");

// // Get the <span> element that closes the modal
// var spanModalHobby4 = document.getElementsByClassName("closeModalHobby4")[0];

// // When the user clicks on the button, open the modal
// btnHobby4.onclick = function() {
//   modalHobby4.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// spanModalHobby4.onclick = function() {
//   modalHobby4.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modalHobby4) {
//     modalHobby4.style.display = "none";
//   }
// }

// //BUTTON HOBBY 5
// var modalHobby5 = document.getElementById("modalHobby5");

// // Get the button that opens the modal
// var btnHobby5 = document.getElementById("hobbyBtn5");

// // Get the <span> element that closes the modal
// var spanModalHobby5 = document.getElementsByClassName("closeModalHobby5")[0];

// // When the user clicks on the button, open the modal
// btnHobby5.onclick = function() {
//   modalHobby5.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// spanModalHobby5.onclick = function() {
//   modalHobby5.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modalHobby5) {
//     modalHobby5.style.display = "none";
//   }
// }

// //BUTTON HOBBY 6
// var modalHobby6 = document.getElementById("modalHobby6");

// // Get the button that opens the modal
// var btnHobby6 = document.getElementById("hobbyBtn6");

// // Get the <span> element that closes the modal
// var spanModalHobby6 = document.getElementsByClassName("closeModalHobby6")[0];

// // When the user clicks on the button, open the modal
// btnHobby6.onclick = function() {
//   modalHobby6.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// spanModalHobby6.onclick = function() {
//   modalHobby6.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modalHobby6) {
//     modalHobby6.style.display = "none";
//   }
// }
