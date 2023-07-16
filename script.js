function openLightbox(imageUrl) {
      var lightbox = document.getElementById("lightbox");
      var lightboxImage = document.getElementById("lightbox-image");
      lightboxImage.src = imageUrl;
      lightbox.style.display = "block";
    }

function closeLightbox() {
      var lightbox = document.getElementById("lightbox");
      lightbox.style.display = "none";
    }

var button = document.getElementById("websiteButton");
var list = document.getElementById("websiteList");

button.addEventListener("click", function() {
      if (list.style.display === "none") {
        list.style.display = "block";
      } 
      else {
        list.style.display = "none";
      }
    });