
// target smooth projet vers image :

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});




// js pour overlay test reussi 

document.addEventListener("DOMContentLoaded", function() {
const images = document.querySelectorAll('.section-right .colonnes img[data-overlay]');
images.forEach(image => {
        image.addEventListener('click', function() {
            const overlayId = this.getAttribute('data-overlay'); 
            const overlay = document.getElementById('overlay-' + overlayId); 
            
            if (overlay) {
                overlay.style.display = 'flex';  
            }
        });
    });
const closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const overlay = this.closest('.overlay'); 
            overlay.style.display = 'none';
        });
    });
window.addEventListener('click', function(event) {
    const overlays = document.querySelectorAll('.overlay');
    overlays.forEach(overlay => {
        if (event.target === overlay) {
        overlay.style.display = 'none'; 
            }
        });
    });
});

document.querySelectorAll('.colonne2 img').forEach(image => {
    image.addEventListener('click', function(event) {
        event.stopPropagation(); 
    });
});




// slick js pour defilement auto image
$(document).ready(function(){
    $('.your-class').slick({
      infinite: true,
      adaptiveHeight: true,
    //   autoplay: true,
      autoplaySpeed: 5000,
     
    });
  });


// js pour adapter mes colonnes en smartphone pour eviter de trop html

document.addEventListener("DOMContentLoaded", function() {
    const colonne1 = document.querySelector('.colonnes:nth-child(1)');
    const colonne2 = document.querySelector('.colonnes:nth-child(2)');
    const colonne3 = document.querySelector('.colonnes:nth-child(3)');

    function redistributeImages() {
        console.log("Current window width: ", window.innerWidth); 
        if (window.innerWidth <= 768) {
            console.log("Redistributing images...");
            const imagesCol3 = colonne3.querySelectorAll('img');
            const textsCol3 = colonne3.querySelectorAll('p');
            
            imagesCol3.forEach((img, index) => {
                if (index % 2 === 0) {
                    colonne1.appendChild(img);
                    colonne1.appendChild(textsCol3[index]);
                } else {
                    colonne2.appendChild(img);
                    colonne2.appendChild(textsCol3[index]);
                }
            });
        }
    }
    redistributeImages();
    window.addEventListener('resize', redistributeImages);
});






// overlay menu smartphone
document.getElementById('menu-contact').addEventListener('click', function() {
    openOverlay('overlay-contact');
});

document.getElementById('menu-info').addEventListener('click', function() {
    openOverlay('overlay-info');
});

function openOverlay(overlayId) {
    document.getElementById(overlayId).style.display = 'block';
    document.getElementById(overlayId).addEventListener('click', function(event) {
        if (event.target === this) {
            closeOverlay(overlayId);
        }
    });
}
function closeOverlay(overlayId) {
    document.getElementById(overlayId).style.display = 'none';
}

