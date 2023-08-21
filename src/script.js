// NAV BAR SCROLL ANIMATION
const navBar = document.getElementById("navBar");

const handleNavBarScroll = () => {
  const shouldAddShadow = window.scrollY > 30;
  navBar.classList.toggle("shadow-lg", shouldAddShadow);
  navBar.classList.toggle("shadow-gray-300", shouldAddShadow);
};

window.addEventListener("scroll", handleNavBarScroll);

// LOGOS CLICKED SMOOTH ANIMATION
const smoothScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

document.querySelectorAll("#logoLink").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    smoothScrollToTop();
  });
});

// OTHERS BUTTON SCROLL ON CLICK
const contactButtonMain = document.getElementById("contactMainBtn");
const seeWhatWeDoButtonMain = document.getElementById("seeWhatWeDoMainBtn");
const letsGetCloserBtn = document.getElementById("letsGetCloserBtn");
const footer = document.getElementById("footer");
const ourProjects = document.getElementById("ourProjects");
const instagramSection = document.getElementById("instagramSection");

contactButtonMain.addEventListener("click", () => {
  footer.scrollIntoView({ behavior: "smooth" });
});

seeWhatWeDoButtonMain.addEventListener("click", () => {
  ourProjects.scrollIntoView({ behavior: "smooth" });
});

letsGetCloserBtn.addEventListener("click", () => {
  instagramSection.scrollIntoView({ behavior: "smooth" });
});

// INTRO SECTION SLIDER
let currentSlideID = 0;
const header = document.getElementById("h1");
const paragraphMain = document.getElementById("pMain");
const sliderElement = document.getElementById("slider");
const slides = [...sliderElement.children];
const totalSlides = slides.length;

const slideContent = [
  {
    header: `
      Nowoczesna
      <span class="xl:block">aranżacja</span>
      <span class="block">Twojego ogrodu</span>`,
    paragraph: `
      <span class="block md:contents">Marka GiardDesign to wieloletnie doświadczenie</span> i wysoka estetyka realizacji.
      <span class="block md:inline">Oferujemy kompleksowy zakres usług</span>
      <span class="block md:content">z indywidualnym podejściem do każdego projektu.</span>`,
  },
  {
    header: `
      Zaplanujmy
      <span class="xl:block">ogrodowy</span>
      <span class="block">raj razem!</span>`,
    paragraph: `
      <span class="block md:contents">Razem z Tobą zaplanujemy przestrzeń ogrodu, </span>
      <span class="block md:contenn">tworząc harmonię między scenerią a funkcjonalnością,</span>
      <span class="block md:content">aby spełnić Twoje marzenia.</span>`,
  },
  {
    header: `
      Ogród jest
      <span class="xl:block">kreatywnym</span>
      <span class="block">wyrazem</span>`,
    paragraph: `
      <span class="block md:contents">Nasz wkład nada twemu ogrodowi niezwykły charakter,</span>
      <span class="block md:content">Twoje propozycje zostaną wzięte pod uwagę
      i zostaną uwzględnione w projekcie.</span>`,
  },
];

sectionSlideRun();

const next = () => {
  currentSlideID = (currentSlideID + 1) % totalSlides;
  sectionSlideRun();
};

const prev = () => {
  currentSlideID = (currentSlideID - 1 + totalSlides) % totalSlides;
  sectionSlideRun();
};

function showSlide() {
  slides.forEach((slide, index) => {
    const shouldShow = index === currentSlideID;
    slide.classList.toggle("hidden", !shouldShow);
  });
}

function showDiffHeroText() {
  const currentSlide = slideContent[currentSlideID] || slideContent[0];
  header.innerHTML = currentSlide.header;
  paragraphMain.innerHTML = currentSlide.paragraph;
}

function sectionSlideRun() {
  showSlide();
  showDiffHeroText();
}

// NAVBAR AND DROPDOWN
const groupElement = document.getElementById("groupElement");
const menu = document.getElementById("menu");
let menuVisible = false;

groupElement.addEventListener("click", toggleMenuVisibility);
menu.addEventListener("click", stopPropagation);
document.addEventListener("click", closeMenuIfNotTarget);

function toggleMenuVisibility() {
  menuVisible = !menuVisible;
  updateMenuDisplay();
}

function stopPropagation(event) {
  event.stopPropagation();
}

function closeMenuIfNotTarget(event) {
  if (!groupElement.contains(event.target)) {
    closeMenu();
  }
}

const updateMenuDisplay = () => {
  menu.style.visibility = menuVisible ? "visible" : "hidden";
};

const closeMenu = () => {
  menuVisible = false;
  updateMenuDisplay();
};

const closedIcon = document.getElementById("hamburgerClosed");
const openedIcon = document.getElementById("hamburgerOpened");
const mobileNavContainer = document.querySelector(".mobile-nav-bar");
let showContent = false;

closedIcon.addEventListener("click", toggleNavBarIcons);
openedIcon.addEventListener("click", toggleNavBarIcons);

function toggleNavBarIcons() {
  showContent = !showContent;
  closedIcon.classList.toggle("hidden");
  openedIcon.classList.toggle("hidden");
  displayMobileNavContent();
}

const displayMobileNavContent = () => {
  mobileNavContainer.classList.toggle("hidden", !showContent);
  mobileNavContainer.classList.toggle("flex", showContent);
};

const setupDesktopMenu = () => {
  const desktopGroupElement = document.querySelector(".desktop-group-element");
  const desktopMenu = document.querySelector(".desktop-menu");
  let desktopMenuVisible = false;

  desktopGroupElement.addEventListener("click", () => {
    desktopMenuVisible = !desktopMenuVisible;
    updateDesktopMenuDisplay();
  });

  const updateDesktopMenuDisplay = () => {
    desktopMenu.style.visibility = desktopMenuVisible ? "visible" : "hidden";
  };

  document.addEventListener("click", (event) => {
    if (!desktopGroupElement.contains(event.target)) {
      closeDesktopMenu();
    }
  });

  const closeDesktopMenu = () => {
    desktopMenu.style.visibility = "hidden";
    desktopMenuVisible = false;
  };

  desktopMenu.addEventListener("click", (event) => {
    event.stopPropagation();
  });
};

setupDesktopMenu();

// MASONRY GRID WITH GALLERY
const projects = document.getElementById("projects");
const gradient = document.getElementById("gradient");
const rollBtn = document.getElementById("btnRoll");
const rollText = document.querySelector(".roll-text");
const rollImg = document.querySelector(".roll-img");
const projectImgs = document.querySelectorAll(".project-img");

const currImgDisplayed = document.getElementById("sliderGalleryImage");
const masonryPopup = document.getElementById("masonryPopup");
const masonryPopupContent = document.getElementById("masonryPopupContent");
const closeGallery = document.getElementById("btnCloseGallery");
const left = document.getElementById("btnLeftMasonry");
const right = document.getElementById("btnRightMasonry");

let currentSrcOfImgClicked = "";
let popupOpened = false;
let rolledDown = false;
let currentImgIndex = 0;

function projectsAreaClasses() {
  if (!rolledDown) {
    projects.classList.remove("overflow-hidden");
    projects.classList.add("block");
    projects.classList.remove("h-[1000px]");
  } else {
    projects.classList.remove("block");
    projects.classList.add("overflow-hidden");
    projects.classList.add("h-[1000px]");
  }

  rolledDown = !rolledDown;
}

function toggleGradient() {
  gradient.classList.toggle("hidden");
}

function rollBtnStyling() {
  if (rolledDown) {
    rollBtn.classList.add("bg-green");
    rollBtn.classList.add("text-white");
    rollBtn.classList.remove("text-blackText");
    rollBtn.classList.remove("border-one");
  } else {
    rollBtn.classList.remove("bg-green");
    rollBtn.classList.remove("text-white");
    rollBtn.classList.add("text-blackText");
    rollBtn.classList.add("border-one");
  }
}

function rollBtnContent() {
  if (rolledDown) {
    rollText.textContent = "Zwiń";
    rollImg.classList.toggle("rotate-180");
  } else {
    rollText.textContent = "Rozwiń";
    rollImg.classList.toggle("rotate-180");
  }
}

function logicOfElementsOnCLick() {
  projectsAreaClasses();
  toggleGradient();
  rollBtnStyling();
  rollBtnContent();
}

const arrayFromNodeList = [...projectImgs];

const arrOfSrcImgs = arrayFromNodeList.map((img) => {
  const arrOnlySrc = img.src;
  return arrOnlySrc;
});

function handleImageClick(event) {
  currentSrcOfImgClicked = event.target.src;
  currentImgIndex = arrOfSrcImgs.indexOf(currentSrcOfImgClicked);
  changeImg(0);
  toggleImagePopup();
}

function toggleImagePopup() {
  popupOpened = !popupOpened;
  openClosePopup();
}

function changeImg(offset) {
  currentImgIndex =
    (currentImgIndex + offset + arrOfSrcImgs.length) % arrOfSrcImgs.length;
  currentSrcOfImgClicked = arrOfSrcImgs[currentImgIndex];
  currImgDisplayed.src = currentSrcOfImgClicked;
}

function openClosePopup() {
  if (popupOpened) {
    popupOpened = !popupOpened;
    masonryPopup.classList.remove("hidden");
    masonryPopup.classList.add("flex");
  } else {
    popupOpened = !popupOpened;
    masonryPopup.classList.add("hidden");
    masonryPopup.classList.remove("flex");
  }
}

rollBtn.addEventListener("click", logicOfElementsOnCLick);

closeGallery.addEventListener("click", () => {
  masonryPopup.classList.remove("flex");
  masonryPopup.classList.add("hidden");
});

left.addEventListener("click", () => changeImg(-1));
right.addEventListener("click", () => changeImg(1));

masonryPopup.addEventListener("click", () => {
  masonryPopup.classList.remove("flex");
  masonryPopup.classList.add("hidden");
});

masonryPopupContent.addEventListener("click", (event) => {
  event.stopPropagation();
});
