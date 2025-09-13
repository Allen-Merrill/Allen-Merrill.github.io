// Function to open tabs
function openTab(tabName) {
    let tabs = document.getElementsByClassName("tab-content");
    for (let t of tabs) {
      t.style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";

    // Calls my appear function
    if (tabName == "project") {
      typeProjectsTab();
    }
  }
  
// Effect 1, change between photos
// Array of image paths
let images = ["https://media.licdn.com/dms/image/v2/D4E2DAQFw2DP90dYm4Q/profile-treasury-image-shrink_160_160/B4EZZpTxZRHkAo-/0/1745523513191?e=1758405600&v=beta&t=BjSmJ7iKkEUeEL8XP6ikTIp-_LdXyKcu5RIc8kAJNMk", "images/Game.png"];
let current = 0;

// Function to go to next image
function nextImage() {
  current = (current + 1) % images.length;
  document.getElementById("projectImage").src = images[current];
}

// Function to go to previous image
function prevImage() {
  current = (current - 1 + images.length) % images.length;
  document.getElementById("projectImage").src = images[current];
}

// Effect 2, 
// Function to toggle project description
function toggleDescription() {
  let desc = document.getElementById("projectDescription");
  if (desc.style.display === "none") {
    desc.style.display = "block";
  } else {
    desc.style.display = "none";
  }
}

// Effect 3, open the project photos
// Open lightbox with clicked image
function openLightbox(src) {
  document.getElementById("lightboxImage").src = src;
  document.getElementById("lightbox").style.display = "flex";
}

// Close lightbox
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// Effect 4, chnage to light mode
let isDarkMode = true; 

function toggleLightMode() {
  let contentBlocks = document.querySelectorAll(".tab-content, .tab-content p, .tab-content h2, .tab-content h1");
  
  if (isDarkMode) {
    // Light mode
    document.querySelector("#project").style.backgroundColor = "white";
    contentBlocks.forEach(el => {
      el.style.color = "black";
    });
  } else {
    // Dark mode
    document.querySelector("#project").style.backgroundColor = "black";
    contentBlocks.forEach(el => {
      el.style.color = "white";
    });
  }
  isDarkMode = !isDarkMode;
}

// Effect 5, make letter appear one by one
function typeText(elementId, text, speed = 50, callback = null) {
  const el = document.getElementById(elementId);
  el.innerHTML = ""; 
  let i = 0;

  const interval = setInterval(() => {
    if (i < text.length) {
      el.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(interval);
      if (callback) callback();
    }
  }, speed);
}

// Function to type heading first, then paragraph
function typeProjectsTab() {
  typeText("projectsHeading", "Projects", 50, () => {
    typeText("projectsText", "This tab will contain at least 5 JavaScript effects.", 30);
  });
}

