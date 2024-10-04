
//Geofence Promo Maps

if (document.getElementById("robinHoodMain")) {
  initMap = function () {
    var myLatlng = new google.maps.LatLng(
        40.791824612255596,
        -74.19815140985031
      ),
      mapCenter = new google.maps.LatLng(
        40.791824612255596,
        -74.19815140985031
      ),
      mapCanvas = document.getElementById("map_canvas"),
      markerIcon = "" || null,
      mapOptions = {
        center: mapCenter,
        zoom: 17,
        scrollwheel: false,
        draggable: true,
        disableDefaultUI: false,
        mapTypeControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
      },
      map = new google.maps.Map(mapCanvas, mapOptions),
      contentString =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h4 id="firstHeading" class="firstHeading">' +
        "Robin Hood Car Wash" +
        "</h4>" +
        '<div id="bodyContent" class="lead">' +
        "23-29 Conger St, Bloomfield, NJ 07003" +
        "</div>" +
        "</div>",
      infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 400,
        maxHeight: 150,
      }),
      marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "Robin Hood Car Wash",
        icon: markerIcon,
      });
    map.set("styles", [
      {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [{ hue: "#ffff00" }, { saturation: 30 }, { lightness: 10 }],
      },
    ]);

    google.maps.event.addListener(marker, "click", function () {
      infowindow.open(map, marker);
    });
  };

  // Load the Google Maps JavaScript API with the callback parameter
  var script = document.createElement("script");
  script.src =
    "https://maps.googleapis.com/maps/api/js?key=AIzaSyAjMf65LdtNLc4KUTTRaMywyC_E1SKR9kE&callback=initMap";
  script.async = true;
  script.defer = true;
  script.onload = initMap;
  document.head.appendChild(script);

  const toggleCollapseBtns = document.getElementsByClassName(
    "toggle-collapse-btn"
  );
}

if (document.getElementById("cwExpressMain")) {
  initMap = function () {
    var myLatlng = new google.maps.LatLng(
        39.91264510953109,
        -74.15522821257873
      ),
      mapCenter = new google.maps.LatLng(39.91264510953109, -74.15522821257873),
      mapCanvas = document.getElementById("map_canvas"),
      markerIcon = "" || null,
      mapOptions = {
        center: mapCenter,
        zoom: 17,
        scrollwheel: false,
        draggable: true,
        disableDefaultUI: false,
        mapTypeControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
      },
      map = new google.maps.Map(mapCanvas, mapOptions),
      contentString =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h4 id="firstHeading" class="firstHeading">' +
        "Car Wash Express" +
        "</h4>" +
        '<div id="bodyContent" class="lead">' +
        "468 U.S. 9, Bayville, NJ 08721" +
        "</div>" +
        "</div>",
      infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 400,
        maxHeight: 150,
      }),
      marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "Car Wash Express",
        icon: markerIcon,
      });
    map.set("styles", [
      {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [{ hue: "#ffff00" }, { saturation: 30 }, { lightness: 10 }],
      },
    ]);

    google.maps.event.addListener(marker, "click", function () {
      infowindow.open(map, marker);
    });
  };

  // Load the Google Maps JavaScript API with the callback parameter
  var script = document.createElement("script");
  script.src =
    "https://maps.googleapis.com/maps/api/js?key=AIzaSyAjMf65LdtNLc4KUTTRaMywyC_E1SKR9kE&callback=initMap";
  script.async = true;
  script.defer = true;
  script.onload = initMap;
  document.head.appendChild(script);

  const toggleCollapseBtns = document.getElementsByClassName(
    "toggle-collapse-btn"
  );
}
if (document.getElementById("supremeCwMain")) {
  initMap = function () {
    var myLatlng = new google.maps.LatLng(
        40.73228868622892,
        -74.15469083192124
      ),
      mapCenter = new google.maps.LatLng(40.73228868622892, -74.15469083192124),
      mapCanvas = document.getElementById("map_canvas"),
      markerIcon = "" || null,
      mapOptions = {
        center: mapCenter,
        zoom: 17,
        scrollwheel: false,
        draggable: true,
        disableDefaultUI: false,
        mapTypeControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
      },
      map = new google.maps.Map(mapCanvas, mapOptions),
      contentString =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h4 id="firstHeading" class="firstHeading">' +
        "Supreme Car Wash" +
        "</h4>" +
        '<div id="bodyContent" class="lead">' +
        "800 Raymond Blvd, Newark, New Jersey" +
        "</div>" +
        "</div>",
      infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 400,
        maxHeight: 150,
      }),
      marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "Supreme Car Wash",
        icon: markerIcon,
      });
    map.set("styles", [
      {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [{ hue: "#ffff00" }, { saturation: 30 }, { lightness: 10 }],
      },
    ]);

    google.maps.event.addListener(marker, "click", function () {
      infowindow.open(map, marker);
    });
  };

  // Load the Google Maps JavaScript API with the callback parameter
  var script = document.createElement("script");
  script.src =
    "https://maps.googleapis.com/maps/api/js?key=AIzaSyAjMf65LdtNLc4KUTTRaMywyC_E1SKR9kE&callback=initMap";
  script.async = true;
  script.defer = true;
  script.onload = initMap;
  document.head.appendChild(script);

}
const toggleCollapseBtns = document.getElementsByClassName('toggle-collapse-btn');

document.querySelectorAll('.toggle-collapse-btn').forEach(item => {
  item.addEventListener("click", () => {
    const target_id = item.getAttribute("data-target");
    const target = document.getElementById(target_id);
    const result = target.classList.toggle("show");
    if (result === false) {
      item.textContent = "Show All Dates ";
      item.appendChild(document.createElement('i'));
      item.querySelector('i').className = "fal fa-angle-down";
    }
    else {
      item.textContent = "Show Less Dates ";
     
      item.appendChild(document.createElement('i'));
      item.querySelector('i').className = "fal fa-angle-up";
    }
    console.log('testing show more button');
  })
});
// Homepage hero imgs change on tab click
const heroHome = document.getElementById("homeHero");
const tabImgId = document.getElementById("homeHeroImage");

function ownerTab() {
  heroHome.style.backgroundImage =
    "url(./img/hero_images/car-wash-bay-compressed.jpeg)";
  tabImgId.src = "img/attendant-cropped-compressed.png";
}

function customerTab() {
  heroHome.style.backgroundImage = "url(./img/hero_images/car-field.jpg)";
  tabImgId.src = "img/cropped-girl.png";
}

// Navbar fixed to top on scroll up
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos || window.pageYOffset < 50) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-120px";
  }
  prevScrollpos = currentScrollPos;
};

$(document).ready(function () {
  $("#nav-icon3").click(function () {
    $(this).toggleClass("open");
  });
});

// Function to add the top bar
function addTopBar() {
  // Check if the current URL is in the /wash-owners folder
  const currentURL = window.location.pathname;
  
  if (currentURL.startsWith('/wash-owners') || currentURL === '/wash-owners') {
    // Create the top bar element
    const topBar = document.createElement('div');
    topBar.className = 'top-bar';
    
    // Create the text and link elements
    const textPart1 = document.createElement('span');
    textPart1.className = 'text-part1';
    textPart1.textContent = 'Stay competitive year-round. ';
    
    const link = document.createElement('a');
    link.href = 'https://everwash.com/ebook/customer-journey';
    link.className = 'text-part2';
    link.textContent = 'Download the eBook!';
    
    // Add hover effect, underline, and media query for responsive design
    const style = document.createElement('style');
    style.innerHTML = `
      .top-bar {
        background: linear-gradient(to right, #141c52, #28d5cb);
        color: white;
        text-align: center;
        padding: 10px;
        display: none !important;
      }
      .text-part1, .text-part2 {
        color: white;
      }
      .text-part2 {
        text-decoration: underline;
      }
      .text-part2:hover {
        color: lightgrey;
        text-decoration: underline;
      }
      @media (max-width: 425px) {
        .text-part1, .text-part2 {
          display: block;
        }
      }
    `;
    document.head.appendChild(style);
    
    // Append the text and link to the top bar
    topBar.appendChild(textPart1);
    topBar.appendChild(link);
    
    // Find the navigation bar
    const navBar = document.querySelector('nav');
    
    // Insert the top bar above the navigation bar
    if (navBar) {
      navBar.parentNode.insertBefore(topBar, navBar);
    } else {
      // If no navigation bar is found, append the top bar to the body
      document.body.prepend(topBar);
    }
  }
}

// Execute the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', addTopBar);

// Location Search
const searchBtns = document.querySelectorAll(".location-search-btn");
const locationFields = document.querySelectorAll(".location-search-field");

// Location Search Event Listeners
searchBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    if (locationValidation(index)) {
      // Checks for the existence of affiliate codes
      if (locationFields[index].hasAttribute("data-affiliate-code")) {
        locationSearch(
          locationFields[index].value,
          locationFields[index].dataset.affiliateCode
        );
      } else {
        locationSearch(locationFields[index].value);
      }
    }
  });
});

//Enter key triggers location search
locationFields.forEach((field, index) => {
  field.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      searchBtns[index].click();
    }
  });
});

// Location search
function locationSearch(zipcode, affiliateCode = "") {
  let searchUrl = "https://app.everwash.com/#locations/" + zipcode;
  if (affiliateCode !== "") {
    searchUrl = searchUrl + "/affinity/" + affiliateCode;
  }
  document.location.href = searchUrl;
}

function locationValidation(index) {
  let location = locationFields[index].value.trim();
  if (location) {
    return true;
  } else {
    document.querySelectorAll(".location-search-error")[index].style.display =
      "block";
    locationFields[index].style.borderColor = "#dc3545";
    return false;
  }
}

const stepOne = document.getElementById("howItWorksStepOne");
const stepTwo = document.getElementById("howItWorksStepTwo");
const stepThree = document.getElementById("howItWorksStepThree");
let currentStep = stepOne;

const stepOneImg = document.getElementById("stepOneImg");
const stepTwoImg = document.getElementById("stepTwoImg");
const stepThreeImg = document.getElementById("stepThreeImg");
let currentImage = stepOneImg;

// Handles scroll animation for Member's page 'How it works' section
var onScrollHandler = function () {
  if ($(window).width() >= 992) {
    let newImageUrl = currentImage.src;
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;

    const bodyRect = document.body.getBoundingClientRect();
    const stepTwoRect = stepTwo.getBoundingClientRect();
    const stepThreeRect = stepThree.getBoundingClientRect();

    const stepTwoOffset = stepTwoRect.top - bodyRect.top;
    const stepThreeOffset = stepThreeRect.top - bodyRect.top;
    if (
      scrollTop >
      stepThreeOffset - document.documentElement.clientHeight * 0.5
    ) {
      changeImageFade(stepThree, stepThreeImg);
    } else if (
      scrollTop >
      stepTwoOffset - document.documentElement.clientHeight * 0.5
    ) {
      changeImageFade(stepTwo, stepTwoImg);
    } else {
      changeImageFade(stepOne, stepOneImg);
    }
  }
};
// Handles scroll animation for Macaroni Kid's page 'How it works' section
var onScrollHandlerMK = function () {
  const stepOne = document.getElementById("howItWorksStepOne");
  const stepTwo = document.getElementById("howItWorksStepTwo");
  const stepThree = document.getElementById("howItWorksStepThree");
  const stepFour = document.getElementById("howItWorksStepFour");
  let currentStep = stepOne;

  const stepOneImg = document.getElementById("stepOneImg");
  const stepTwoImg = document.getElementById("stepTwoImg");
  const stepThreeImg = document.getElementById("stepThreeImg");
  const stepFourImg = document.getElementById("stepFourImg");
  let currentImage = stepOneImg;

  if ($(window).width() >= 992) {
    let newImageUrl = currentImage.src;
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;

    const bodyRect = document.body.getBoundingClientRect();
    const stepTwoRect = stepTwo.getBoundingClientRect();
    const stepThreeRect = stepThree.getBoundingClientRect();
    const stepFourRect = stepFour.getBoundingClientRect();

    const stepTwoOffset = stepTwoRect.top - bodyRect.top;
    const stepThreeOffset = stepThreeRect.top - bodyRect.top;
    const stepFourOffset = stepFourRect.top - bodyRect.top;
    if (
      scrollTop >
      stepFourOffset - document.documentElement.clientHeight * 0.5
    ) {
      changeImageFade(stepFour, stepFourImg);
    } else if (
      scrollTop >
      stepThreeOffset - document.documentElement.clientHeight * 0.5
    ) {
      changeImageFade(stepThree, stepThreeImg);
    } else if (
      scrollTop >
      stepTwoOffset - document.documentElement.clientHeight * 0.5
    ) {
      changeImageFade(stepTwo, stepTwoImg);
    } else {
      changeImageFade(stepOne, stepOneImg);
    }
  }
};

var onScrollHandlerUpdated = function () {
  const stepOne = document.getElementById("howItWorksStepOne");
  const stepTwo = document.getElementById("howItWorksStepTwo");
  const stepThree = document.getElementById("howItWorksStepThree");
  const stepFour = document.getElementById("howItWorksStepFour");
  let currentStep = stepOne;

  const stepOneImg = document.getElementById("stepOneImg");
  const stepTwoImg = document.getElementById("stepTwoImg");
  const stepThreeImg = document.getElementById("stepThreeImg");
  const stepFourImg = document.getElementById("stepFourImg");
  let currentImage = stepOneImg;

  if ($(window).width() >= 992) {
    let newImageUrl = currentImage.src;
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;

    const bodyRect = document.body.getBoundingClientRect();
    const stepTwoRect = stepTwo.getBoundingClientRect();
    const stepThreeRect = stepThree.getBoundingClientRect();
    const stepFourRect = stepFour.getBoundingClientRect();

    const stepTwoOffset = stepTwoRect.top - bodyRect.top;
    const stepThreeOffset = stepThreeRect.top - bodyRect.top;
    const stepFourOffset = stepFourRect.top - bodyRect.top;
    if (
      scrollTop >
      stepFourOffset - document.documentElement.clientHeight * 0.5
    ) {
      changeImageFade(stepFour, stepFourImg);
    } else if (
      scrollTop >
      stepThreeOffset - document.documentElement.clientHeight * 0.5
    ) {
      changeImageFade(stepThree, stepThreeImg);
    } else if (
      scrollTop >
      stepTwoOffset - document.documentElement.clientHeight * 0.5
    ) {
      changeImageFade(stepTwo, stepTwoImg);
    } else {
      changeImageFade(stepOne, stepOneImg);
    }
  }
};

// Handles 'How To Sign Up' Animation on Attendants Page
var onScrollHandlerAttendants = function () {
  const stepOne = document.getElementById("howItWorksStepOne");
  const stepTwo = document.getElementById("howItWorksStepTwo");
  const stepThree = document.getElementById("howItWorksStepThree");
  const stepFour = document.getElementById("howItWorksStepFour");
  const stepFive = document.getElementById("howItWorksStepFive");
  let currentStep = stepOne;

  const stepOneImg = document.getElementById("stepOneImg");
  const stepTwoImg = document.getElementById("stepTwoImg");
  const stepThreeImg = document.getElementById("stepThreeImg");
  const stepFourImg = document.getElementById("stepFourImg");
  const stepFiveImg = document.getElementById("stepFiveImg");
  let currentImage = stepOneImg;

  if ($(window).width() >= 992) {
    let newImageUrl = currentImage.src;
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;

    const bodyRect = document.body.getBoundingClientRect();
    const stepTwoRect = stepTwo.getBoundingClientRect();
    const stepThreeRect = stepThree.getBoundingClientRect();
    const stepFourRect = stepFour.getBoundingClientRect();
    const stepFiveRect = stepFive.getBoundingClientRect();

    const stepTwoOffset = stepTwoRect.top - bodyRect.top;
    const stepThreeOffset = stepThreeRect.top - bodyRect.top;
    const stepFourOffset = stepFourRect.top - bodyRect.top;
    const stepFiveOffset = stepFiveRect.top - bodyRect.top;
    if (
      scrollTop >
      stepFiveOffset - document.documentElement.clientHeight * 0.5
    ) {
      changeImageFade(stepFive, stepFiveImg);
    }
    else if (
      scrollTop >
      stepFourOffset - document.documentElement.clientHeight * 0.5
    ) {
      changeImageFade(stepFour, stepFourImg);
    } else if (
      scrollTop >
      stepThreeOffset - document.documentElement.clientHeight * 0.5
    ) {
      changeImageFade(stepThree, stepThreeImg);
    } else if (
      scrollTop >
      stepTwoOffset - document.documentElement.clientHeight * 0.5
    ) {
      changeImageFade(stepTwo, stepTwoImg);
    } else {
      changeImageFade(stepOne, stepOneImg);
    }
  }
};

// Triggers image change and card box-shadow on Members Page 'How it works' section
function changeImageFade(step, image) {
  currentStep.classList.remove("active-step-card");
  currentStep = step;
  currentStep.classList.add("active-step-card");
  currentImage.style.opacity = "0";
  currentImage = image;
  currentImage.style.opacity = "1";
}

if (document.getElementById("membersMain")) {
  document.addEventListener("scroll", onScrollHandlerUpdated);
}

if (document.getElementById("macaroniKidsMain")) {
  document.addEventListener("scroll", onScrollHandlerMK);
}
if (document.getElementById("attendantsMain")) {
  document.addEventListener("scroll", onScrollHandlerAttendants);
}

// On Scroll Animations
function animateOnScroll() {
  //Gets or sets the number of pixels that an element's content is scrolled vertically.
  var pageTop = window.pageYOffset || document.documentElement.scrollTop;

  // The innerHeight property returns the height of a window's viewport.
  var windowHeight =
    window.innerHeight ||
    doc.documentElement.clientHeight ||
    doc.getElementsByTagName("body")[0].clientHeight;

  var pageBottom = pageTop + windowHeight;
  var tags = document.getElementsByClassName("on-scroll-animation");
  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];
    if (tag.offsetTop + 200 < pageBottom) {
      tag.classList.add("visible");
    }
  }
}

if (document.getElementsByClassName("on-scroll-animation")) {
  window.addEventListener("scroll", animateOnScroll);
}

// Countdown for NRCC Page
let countDown = function () {
  let clockInput = document.getElementsByClassName("clock-input");
  let now = new Date();
  let target = new Date(2022, 8, 19);
  // var target = new Date(2022, 7, 31, 12, 60);
  let diff = target - now;
  if (diff <= 0) {
    document.getElementById("timeContainer").style.display = "none";
    document.getElementById("conventionDayMessage").style.display = "block";
  } else {
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    let minutes = Math.floor(diff / (1000 * 60)) % 60;
    let seconds = Math.floor(diff / 1000) % 60;
    clockInput[0].innerHTML = ("0" + days).slice(-2);
    clockInput[1].innerHTML = ("0" + hours).slice(-2);
    clockInput[2].innerHTML = ("0" + minutes).slice(-2);
    clockInput[3].innerHTML = ("0" + seconds).slice(-2);
  }
};


let countDownSCWA = function () {
  let clockInput = document.getElementsByClassName("clock-input");
  let now_local = new Date();
  let now = Date.UTC(
    now_local.getUTCFullYear(),
    now_local.getUTCMonth(),
    now_local.getUTCDate(),
    now_local.getUTCHours(),
    now_local.getUTCMinutes(),
    now_local.getUTCSeconds()
  );
  let target = Date.UTC(2023, 1, 22, 19);
  let diff = target - now;
  if (diff <= 0) {
    document.getElementById("timeContainer").style.display = "none";
    document.getElementById("conventionDayMessage").style.display = "block";
  } else {
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    let minutes = Math.floor(diff / (1000 * 60)) % 60;
    let seconds = Math.floor(diff / 1000) % 60;
    clockInput[0].innerHTML = ("0" + days).slice(-2);
    clockInput[1].innerHTML = ("0" + hours).slice(-2);
    clockInput[2].innerHTML = ("0" + minutes).slice(-2);
    clockInput[3].innerHTML = ("0" + seconds).slice(-2);
  }
};

if (document.getElementById("scwaMain")) {
  countDownSCWA();
  setInterval(countDownSCWA, 1000);
}


let countDownICA = function () {
  let clockInput = document.getElementsByClassName("clock-input");
  let now_local = new Date();
  let now = Date.UTC(
    now_local.getUTCFullYear(),
    now_local.getUTCMonth(),
    now_local.getUTCDate(),
    now_local.getUTCHours(),
    now_local.getUTCMinutes(),
    now_local.getUTCSeconds()
  );
  let target = Date.UTC(2023, 4, 8, 7, 0, 0);
  let diff = target - now;
  if (diff <= 0) {
    document.getElementById("timeContainer").style.display = "none";
    document.getElementById("conventionDayMessage").style.display = "block";
  } else {
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    let minutes = Math.floor(diff / (1000 * 60)) % 60;
    let seconds = Math.floor(diff / 1000) % 60;
    clockInput[0].innerHTML = ("0" + days).slice(-2);
    clockInput[1].innerHTML = ("0" + hours).slice(-2);
    clockInput[2].innerHTML = ("0" + minutes).slice(-2);
    clockInput[3].innerHTML = ("0" + seconds).slice(-2);
  }
};

if (document.getElementById("icaMain")) {
  countDownICA();
  setInterval(countDownICA, 1000);
}

let countDownNRCC = function () {
  let clockInput = document.getElementsByClassName("clock-input");
  let now_local = new Date();
  let now = Date.UTC(
    now_local.getUTCFullYear(),
    now_local.getUTCMonth(),
    now_local.getUTCDate(),
    now_local.getUTCHours(),
    now_local.getUTCMinutes(),
    now_local.getUTCSeconds()
  );
  let target = Date.UTC(2023, 9, 2, 19, 30, 0);
  let diff = target - now;
  if (diff <= 0) {
    document.getElementById("timeContainer").style.display = "none";
    document.getElementById("conventionDayMessage").style.display = "block";
  } else {
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    let minutes = Math.floor(diff / (1000 * 60)) % 60;
    let seconds = Math.floor(diff / 1000) % 60;
    clockInput[0].innerHTML = ("0" + days).slice(-2);
    clockInput[1].innerHTML = ("0" + hours).slice(-2);
    clockInput[2].innerHTML = ("0" + minutes).slice(-2);
    clockInput[3].innerHTML = ("0" + seconds).slice(-2);
  }
};

if (document.getElementById("nrccMain")) {
  countDownNRCC();
  setInterval(countDownNRCC, 1000);
}

// Animates a count up animation for elements with class ".js-animation-count-up". Used on home page stats.
function animateCountUp() {
  const counters = document.querySelectorAll(".js-animation-count-up");
  for (let n of counters) {
    const updateCount = () => {
      const target = +n.getAttribute("data-target");
      const count = +n.innerText;
      const speed = 30; // change animation speed here, higher number = slower
      const inc = target / speed;
      if (count < target) {
        n.innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 20); // change refresh rate, higher number = slower
      } else {
        n.innerText = target;
      }
    };
    updateCount();
  }
}
animateCountUp();

// Address Field Autocomplete
let autocomplete;
let componentZipCode = {
  postal_code: 'short_name'
};

function initAutocomplete() {
  autocomplete = new google.maps.places.Autocomplete(
    document.getElementById('carWashAddress'),
    {
      types: ['address'],
      componentRestrictions: {'country': ['USA']},
      fields: ['place_id', 'geometry', 'name', 'address_components']
    });

  autocomplete.addListener('place_changed', onPlaceChanged);
}

function onPlaceChanged() {
  let place = autocomplete.getPlace();
  let postalCode;

  for (let i = 0; i < place.address_components.length; i++) {
    let addressType = place.address_components[i].types[0];
    if (componentZipCode[addressType]) {
      postalCode = place.address_components[i][componentZipCode[addressType]];
      break;
    }
  }

  document.getElementById("carWashZipcode").value = postalCode;
}

document.addEventListener("DOMContentLoaded", function() {
  initAutocomplete();
});

// Prevent submission based on wash name
const carWashNameInput = document.querySelector("#carWashName");
const submitButton = document.querySelector("button[type='submit']");
let newButton = null;

carWashNameInput.addEventListener("input", function(event) {
  const carWashName = event.target.value.toLowerCase();
  const bannedWords = ["everwash", "ever wash", "toyota", "honda", "ford", "chevrolet", "chevy", "nissan", "kia", "tesla", "acura", "infinity", "infiniti", "Audi", "bmw", "bentley", "buick", "cadillac", "dodge", "gmc", "gm", "hyundai", "jeep", "lexus", "lincoln", "jaguar", "land rover", "maserati", "mazda", "mercedes-benz", "mercedes benz", "mercedes", "benz", "mercury", "mitsubishi", "pontiac", "porsche", "ram", "rolls-royce", "rolls royce", "saab", "saturn", "scion", "subaru", "suzuki", "volkswagen", "volvo", "na", "none"];

  let containsBannedWord = false;
    bannedWords.forEach(function(bannedWord) {
    if (carWashName.split(" ").includes(bannedWord)) {
    containsBannedWord = true;
    }
    });

    if (carWashName.includes("ever wash")) {
    containsBannedWord = true;
    }
    if (carWashName.includes("land rover")) {
    containsBannedWord = true;
    }
    if (carWashName.includes("mercedes benz")) {
    containsBannedWord = true;
    }
    if (carWashName.includes("rolls royce")) {
    containsBannedWord = true;
    }

  if (containsBannedWord) {
    submitButton.style.display = "none";
    if (!newButton) {
      newButton = document.createElement("a");
      newButton.classList.add("btn", "btn-accent", "btn-large");
      newButton.innerHTML = "Looks like you need support. Click Here.";
      newButton.href = "https://everwash.com/members/members-support.html#supportContactForm";
      submitButton.parentNode.insertBefore(newButton, submitButton);
    } else {
      newButton.style.display = "block";
    }
  } else {
    submitButton.style.display = "block";
    if (newButton) {
      newButton.style.display = "none";
    }
  }
});

window.addEventListener("pageshow", function(event) {
  const carWashName = carWashNameInput.value.toLowerCase();

  const containsBannedWord = bannedWords.some(function(bannedWord) {
    return carWashName.split(" ").includes(bannedWord);
  });

  if (containsBannedWord) {
    submitButton.style.display = "none";
    if (!newButton) {
      newButton = document.createElement("a");
      newButton.classList.add("btn", "btn-accent", "btn-large");
      newButton.innerHTML = "Looks like you need support. Click Here.";
      newButton.href = "https://everwash/members/members-support.html#supportContactForm";
      submitButton.parentNode.insertBefore(newButton, submitButton);
    } else {
      newButton.style.display = "block";
    }
  }
});

window.addEventListener("beforeunload", function(event) {
  carWashNameInput.value = "";
});



// Owl Carousel for 3 columns
$(function() {
  $('#owl-carousel-infobox').owlCarousel({
    margin: 5,
    loop: true,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:3500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
        },
        768:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
  });

  $('#owl-carousel-video').owlCarousel({
    items: 1,
    merge:true,
    loop:true,
    margin:10,
    video:true,
    lazyLoad:true,
    center:true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      768: {
        items: 2,
        nav: true
      },
      1000: {
        items: 3,
        nav: true
      }
    }
  });

  $('#owl-carousel-video div.owl-item').each(function(){
    var poster_img = $(this).find('.owl-video-wrapper .owl-video-tn').attr('srctype');
    $(this).find('.owl-video-wrapper').css('background-image', 'url(https:' + poster_img + ')');
  });
  
  setInterval(function () {
    var i = 1;
    $('#owl-carousel-video .owl-stage .owl-item').each(function(){
      if($(this).hasClass('active')) {
        $(this).attr('data-number', i);
        i = i + 1;
      } else {
        $(this).attr('data-number', 0);
      }

      var iframe_check = $(this).find('.item-video .owl-video-wrapper iframe').length;
      if(iframe_check) {
        $(this).find('.item-video .owl-video-wrapper .owl-video-play-icon').addClass('hide');
      }
    });
  }, 300);

  $('#owl-carousel-onevideo').owlCarousel({
    items: 1,
    merge:true,
    loop:true,
    margin:10,
    video:true,
    lazyLoad:true,
    center:true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      768: {
        items: 1,
        nav: true
      },
      1000: {
        items: 1,
        nav: true
      }
    }
  });

  // add poster for video
  $('#owl-carousel-onevideo div.owl-item').each(function(){
    var poster_img = $(this).find('.owl-video-wrapper .owl-video-tn').attr('srctype');
    $(this).find('.owl-video-wrapper').css('background-image', 'url(https:' + poster_img + ')');
  });

  // When active video, only show iframe
  setInterval(function() {
    $('#owl-carousel-onevideo div.owl-item').each(function() {
      if ($(this).hasClass('active')) {
        console.log('This .owl-item has the active class!');
      } else {
        if ($(this).find('iframe').length) {
          $(this).find('iframe').remove();
        }
      }
    });
  }, 1000);
});


// popup form submit to external action link & netlify
// Wash Owner Popup
if ($('#washOwnerPopup-external').length) {
  document.getElementById('washOwnerPopup-external').addEventListener('submit', async function (event) {
    // Prevent the default form submission
    event.preventDefault();
  
    var fname = $('#washOwnerPopup-external #name').val();
    $('#washOwnerPopup #name').val(fname);
    var lname = $('#washOwnerPopup-external #lastName').val();
    $('#washOwnerPopup #lastName').val(lname);
    var washemail = $('#washOwnerPopup-external #email').val();
    $('#washOwnerPopup #email').val(washemail);
    var washphone = $('#washOwnerPopup-external #phone').val();
    $('#washOwnerPopup #phone').val(washphone);
    var carwashname = $('#washOwnerPopup-external #carWashName').val();
    $('#washOwnerPopup #carWashName').val(carwashname);
    var washtype = $('#washOwnerPopup-external #wash-type').val();
    $('#washOwnerPopup #wash-type').val(washtype);
    var carwashstate = $('#washOwnerPopup-external #car-wash-state').val();
    $('#washOwnerPopup #car-wash-state').val(carwashstate);
    var carwashzip = $('#washOwnerPopup-external #carWashZipcode').val();
    $('#washOwnerPopup #carWashZipcode').val(carwashzip);
  
    try {
      const externalResponse = await fetch('https://slynerds.com/everwash-rev-calc-external.php', {
        method: 'POST',
        body: JSON.stringify({
          fname: fname,
          lname: lname,
          washemail: washemail,
          washphone: washphone,
          carwashname: carwashname,
          washtype: washtype,
          carwashstate: carwashstate,
          carwashzip: carwashzip,
        }),
      });
  
      if (externalResponse.ok) {
        const responseData = await externalResponse.json();
        if (responseData.status == 'success!!!') {
          console.log(responseData.message);
          $('#washOwnerPopup').trigger( "submit" );
        } else {
          console.log(responseData.message);
          alert(responseData.message);
        }
      } else {
        console.error('Error submitting to External Server:', externalResponse.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });
} 

// Case Study Popup
if ($('#caseStudyPopup-external').length) {
  document.getElementById('caseStudyPopup-external').addEventListener('submit', async function (event) {
    // Prevent the default form submission
    event.preventDefault();
  
    var fname = $('#caseStudyPopup-external #name').val();
    $('#caseStudyPopup #name').val(fname);
    var lname = $('#caseStudyPopup-external #lastName').val();
    $('#caseStudyPopup #lastName').val(lname);
    var washemail = $('#caseStudyPopup-external #email').val();
    $('#caseStudyPopup #email').val(washemail);
    var washphone = $('#caseStudyPopup-external #phone').val();
    $('#caseStudyPopup #phone').val(washphone);
    var carwashname = $('#caseStudyPopup-external #carWashName').val();
    $('#caseStudyPopup #carWashName').val(carwashname);
    var washtype = $('#caseStudyPopup-external #wash-type').val();
    $('#caseStudyPopup #wash-type').val(washtype);
    var carwashstate = $('#caseStudyPopup-external #car-wash-state').val();
    $('#caseStudyPopup #car-wash-state').val(carwashstate);
    var carwashzip = $('#caseStudyPopup-external #carWashZipcode').val();
    $('#caseStudyPopup #carWashZipcode').val(carwashzip);
  
    try {
      const externalResponse = await fetch('https://slynerds.com/everwash-casestudy-external.php', {
        method: 'POST',
        body: JSON.stringify({
          fname: fname,
          lname: lname,
          washemail: washemail,
          washphone: washphone,
          carwashname: carwashname,
          washtype: washtype,
          carwashstate: carwashstate,
          carwashzip: carwashzip,
        }),
      });
  
      if (externalResponse.ok) {
        const responseData = await externalResponse.json();
        if (responseData.status == 'success!!!') {
          console.log(responseData.message);
          $('#caseStudyPopup').trigger( "submit" );
        } else {
          console.log(responseData.message);
          alert(responseData.message);
        }
      } else {
        console.error('Error submitting to External Server:', externalResponse.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });
}

// Book A Call Popup
if ($('#bookacallPopup-external').length) {
  document.getElementById('bookacallPopup-external').addEventListener('submit', async function (event) {
    // Prevent the default form submission
    event.preventDefault();
  
    var fname = $('#bookacallPopup-external #name').val();
    $('#bookacallPopup #name').val(fname);
    var lname = $('#bookacallPopup-external #lastName').val();
    $('#bookacallPopup #lastName').val(lname);
    var washemail = $('#bookacallPopup-external #email').val();
    $('#bookacallPopup #email').val(washemail);
    var washphone = $('#bookacallPopup-external #phone').val();
    $('#bookacallPopup #phone').val(washphone);
    var carwashname = $('#bookacallPopup-external #carWashName').val();
    $('#bookacallPopup #carWashName').val(carwashname);
    var washtype = $('#bookacallPopup-external #wash-type').val();
    $('#bookacallPopup #wash-type').val(washtype);
    var carwashstate = $('#bookacallPopup-external #car-wash-state').val();
    $('#bookacallPopup #car-wash-state').val(carwashstate);
    var carwashzip = $('#bookacallPopup-external #carWashZipcode').val();
    $('#bookacallPopup #carWashZipcode').val(carwashzip);
  
    try {
      const externalResponse = await fetch('https://slynerds.com/everwash-bookacall-external.php', {
        method: 'POST',
        body: JSON.stringify({
          fname: fname,
          lname: lname,
          washemail: washemail,
          washphone: washphone,
          carwashname: carwashname,
          washtype: washtype,
          carwashstate: carwashstate,
          carwashzip: carwashzip,
        }),
      });
  
      if (externalResponse.ok) {
        const responseData = await externalResponse.json();
        if (responseData.status == 'success!!!') {
          console.log(responseData.message);
          $('#bookacallPopup').trigger( "submit" );
        } else {
          console.log(responseData.message);
          alert(responseData.message);
        }
      } else {
        console.error('Error submitting to External Server:', externalResponse.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });
}

// Schedule a Call Popup
if ($('#scheduleacallPopup-external').length) {
  document.getElementById('scheduleacallPopup-external').addEventListener('submit', async function (event) {
    // Prevent the default form submission
    event.preventDefault();
  
    var fname = $('#scheduleacallPopup-external #name').val();
    $('#scheduleacallPopup #name').val(fname);
    var lname = $('#scheduleacallPopup-external #lastName').val();
    $('#scheduleacallPopup #lastName').val(lname);
    var washemail = $('#scheduleacallPopup-external #email').val();
    $('#scheduleacallPopup #email').val(washemail);
    var washphone = $('#scheduleacallPopup-external #phone').val();
    $('#scheduleacallPopup #phone').val(washphone);
    var carwashname = $('#scheduleacallPopup-external #carWashName').val();
    $('#scheduleacallPopup #carWashName').val(carwashname);
    var washtype = $('#scheduleacallPopup-external #wash-type').val();
    $('#scheduleacallPopup #wash-type').val(washtype);
    var carwashstate = $('#scheduleacallPopup-external #car-wash-state').val();
    $('#scheduleacallPopup #car-wash-state').val(carwashstate);
    var carwashzip = $('#scheduleacallPopup-external #carWashZipcode').val();
    $('#scheduleacallPopup #carWashZipcode').val(carwashzip);
  
    try {
      const externalResponse = await fetch('https://slynerds.com/everwash-scheduleacall-external.php', {
        method: 'POST',
        body: JSON.stringify({
          fname: fname,
          lname: lname,
          washemail: washemail,
          washphone: washphone,
          carwashname: carwashname,
          washtype: washtype,
          carwashstate: carwashstate,
          carwashzip: carwashzip,
        }),
      });
  
      if (externalResponse.ok) {
        const responseData = await externalResponse.json();
        if (responseData.status == 'success!!!') {
          console.log(responseData.message);
          $('#scheduleacallPopup').trigger( "submit" );
        } else {
          console.log(responseData.message);
          alert(responseData.message);
        }
      } else {
        console.error('Error submitting to External Server:', externalResponse.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });
}

// Start Boosting Your Revenue Today Popup
if ($('#startboostingyourrevenuetodayPopup-external').length) {
  document.getElementById('startboostingyourrevenuetodayPopup-external').addEventListener('submit', async function (event) {
    // Prevent the default form submission
    event.preventDefault();
  
    var fname = $('#startboostingyourrevenuetodayPopup-external #name').val();
    $('#startboostingyourrevenuetodayPopup #name').val(fname);
    var lname = $('#startboostingyourrevenuetodayPopup-external #lastName').val();
    $('#startboostingyourrevenuetodayPopup #lastName').val(lname);
    var washemail = $('#startboostingyourrevenuetodayPopup-external #email').val();
    $('#startboostingyourrevenuetodayPopup #email').val(washemail);
    var washphone = $('#startboostingyourrevenuetodayPopup-external #phone').val();
    $('#startboostingyourrevenuetodayPopup #phone').val(washphone);
    var carwashname = $('#startboostingyourrevenuetodayPopup-external #carWashName').val();
    $('#startboostingyourrevenuetodayPopup #carWashName').val(carwashname);
    var washtype = $('#startboostingyourrevenuetodayPopup-external #wash-type').val();
    $('#startboostingyourrevenuetodayPopup #wash-type').val(washtype);
    var carwashstate = $('#startboostingyourrevenuetodayPopup-external #car-wash-state').val();
    $('#startboostingyourrevenuetodayPopup #car-wash-state').val(carwashstate);
    var carwashzip = $('#startboostingyourrevenuetodayPopup-external #carWashZipcode').val();
    $('#startboostingyourrevenuetodayPopup #carWashZipcode').val(carwashzip);
  
    try {
      const externalResponse = await fetch('https://slynerds.com/everwash-startboostingyourrevenuetoday-external.php', {
        method: 'POST',
        body: JSON.stringify({
          fname: fname,
          lname: lname,
          washemail: washemail,
          washphone: washphone,
          carwashname: carwashname,
          washtype: washtype,
          carwashstate: carwashstate,
          carwashzip: carwashzip,
        }),
      });
  
      if (externalResponse.ok) {
        const responseData = await externalResponse.json();
        if (responseData.status == 'success!!!') {
          console.log(responseData.message);
          $('#startboostingyourrevenuetodayPopup').trigger( "submit" );
        } else {
          console.log(responseData.message);
          alert(responseData.message);
        }
      } else {
        console.error('Error submitting to External Server:', externalResponse.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });
}

// Schedule a Consultation Now Popup
if ($('#scheduleaconsultationnowPopup-external').length) {
  document.getElementById('scheduleaconsultationnowPopup-external').addEventListener('submit', async function (event) {
    // Prevent the default form submission
    event.preventDefault();
  
    var fname = $('#scheduleaconsultationnowPopup-external #name').val();
    $('#scheduleaconsultationnowPopup #name').val(fname);
    var lname = $('#scheduleaconsultationnowPopup-external #lastName').val();
    $('#scheduleaconsultationnowPopup #lastName').val(lname);
    var washemail = $('#scheduleaconsultationnowPopup-external #email').val();
    $('#scheduleaconsultationnowPopup #email').val(washemail);
    var washphone = $('#scheduleaconsultationnowPopup-external #phone').val();
    $('#scheduleaconsultationnowPopup #phone').val(washphone);
    var carwashname = $('#scheduleaconsultationnowPopup-external #carWashName').val();
    $('#scheduleaconsultationnowPopup #carWashName').val(carwashname);
    var washtype = $('#scheduleaconsultationnowPopup-external #wash-type').val();
    $('#scheduleaconsultationnowPopup #wash-type').val(washtype);
    var carwashstate = $('#scheduleaconsultationnowPopup-external #car-wash-state').val();
    $('#scheduleaconsultationnowPopup #car-wash-state').val(carwashstate);
    var carwashzip = $('#scheduleaconsultationnowPopup-external #carWashZipcode').val();
    $('#scheduleaconsultationnowPopup #carWashZipcode').val(carwashzip);
  
    try {
      const externalResponse = await fetch('https://slynerds.com/everwash-scheduleaconsultationnow-external.php', {
        method: 'POST',
        body: JSON.stringify({
          fname: fname,
          lname: lname,
          washemail: washemail,
          washphone: washphone,
          carwashname: carwashname,
          washtype: washtype,
          carwashstate: carwashstate,
          carwashzip: carwashzip,
        }),
      });
  
      if (externalResponse.ok) {
        const responseData = await externalResponse.json();
        if (responseData.status == 'success!!!') {
          console.log(responseData.message);
          $('#scheduleaconsultationnowPopup').trigger( "submit" );
        } else {
          console.log(responseData.message);
          alert(responseData.message);
        }
      } else {
        console.error('Error submitting to External Server:', externalResponse.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });
}

// Schedule your Consultation Today Popup
if ($('#scheduleyourconsultationtodayPopup-external').length) {
  document.getElementById('scheduleyourconsultationtodayPopup-external').addEventListener('submit', async function (event) {
    // Prevent the default form submission
    event.preventDefault();
  
    var fname = $('#scheduleyourconsultationtodayPopup-external #name').val();
    $('#scheduleyourconsultationtodayPopup #name').val(fname);
    var lname = $('#scheduleyourconsultationtodayPopup-external #lastName').val();
    $('#scheduleyourconsultationtodayPopup #lastName').val(lname);
    var washemail = $('#scheduleyourconsultationtodayPopup-external #email').val();
    $('#scheduleyourconsultationtodayPopup #email').val(washemail);
    var washphone = $('#scheduleyourconsultationtodayPopup-external #phone').val();
    $('#scheduleyourconsultationtodayPopup #phone').val(washphone);
    var carwashname = $('#scheduleyourconsultationtodayPopup-external #carWashName').val();
    $('#scheduleyourconsultationtodayPopup #carWashName').val(carwashname);
    var washtype = $('#scheduleyourconsultationtodayPopup-external #wash-type').val();
    $('#scheduleyourconsultationtodayPopup #wash-type').val(washtype);
    var carwashstate = $('#scheduleyourconsultationtodayPopup-external #car-wash-state').val();
    $('#scheduleyourconsultationtodayPopup #car-wash-state').val(carwashstate);
    var carwashzip = $('#scheduleyourconsultationtodayPopup-external #carWashZipcode').val();
    $('#scheduleyourconsultationtodayPopup #carWashZipcode').val(carwashzip);
  
    try {
      const externalResponse = await fetch('https://slynerds.com/everwash-scheduleyourconsultationtoday-external.php', {
        method: 'POST',
        body: JSON.stringify({
          fname: fname,
          lname: lname,
          washemail: washemail,
          washphone: washphone,
          carwashname: carwashname,
          washtype: washtype,
          carwashstate: carwashstate,
          carwashzip: carwashzip,
        }),
      });
  
      if (externalResponse.ok) {
        const responseData = await externalResponse.json();
        if (responseData.status == 'success!!!') {
          console.log(responseData.message);
          $('#scheduleyourconsultationtodayPopup').trigger( "submit" );
        } else {
          console.log(responseData.message);
          alert(responseData.message);
        }
      } else {
        console.error('Error submitting to External Server:', externalResponse.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });
}

// Schedule a Call Today Popup
if ($('#scheduleacalltodayPopup-external').length) {
  document.getElementById('scheduleacalltodayPopup-external').addEventListener('submit', async function (event) {
    // Prevent the default form submission
    event.preventDefault();
  
    var fname = $('#scheduleacalltodayPopup-external #name').val();
    $('#scheduleacalltodayPopup #name').val(fname);
    var lname = $('#scheduleacalltodayPopup-external #lastName').val();
    $('#scheduleacalltodayPopup #lastName').val(lname);
    var washemail = $('#scheduleacalltodayPopup-external #email').val();
    $('#scheduleacalltodayPopup #email').val(washemail);
    var washphone = $('#scheduleacalltodayPopup-external #phone').val();
    $('#scheduleacalltodayPopup #phone').val(washphone);
    var carwashname = $('#scheduleacalltodayPopup-external #carWashName').val();
    $('#scheduleacalltodayPopup #carWashName').val(carwashname);
    var washtype = $('#scheduleacalltodayPopup-external #wash-type').val();
    $('#scheduleacalltodayPopup #wash-type').val(washtype);
    var carwashstate = $('#scheduleacalltodayPopup-external #car-wash-state').val();
    $('#scheduleacalltodayPopup #car-wash-state').val(carwashstate);
    var carwashzip = $('#scheduleacalltodayPopup-external #carWashZipcode').val();
    $('#scheduleacalltodayPopup #carWashZipcode').val(carwashzip);
  
    try {
      const externalResponse = await fetch('https://slynerds.com/everwash-scheduleacalltoday-external.php', {
        method: 'POST',
        body: JSON.stringify({
          fname: fname,
          lname: lname,
          washemail: washemail,
          washphone: washphone,
          carwashname: carwashname,
          washtype: washtype,
          carwashstate: carwashstate,
          carwashzip: carwashzip,
        }),
      });
  
      if (externalResponse.ok) {
        const responseData = await externalResponse.json();
        if (responseData.status == 'success!!!') {
          console.log(responseData.message);
          $('#scheduleacalltodayPopup').trigger( "submit" );
        } else {
          console.log(responseData.message);
          alert(responseData.message);
        }
      } else {
        console.error('Error submitting to External Server:', externalResponse.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });
}




// Disable spaces and strings (non-numeric characters) in a phone number field
function validatePhoneNumber(input) {
  // Remove non-numeric characters
  input.value = input.value.replace(/\D/g, '');
}

//reCaptcha call back
// function recaptcha_callback() {
//   var submitBtn =  document.querySelector("#submit-btn");
//   submitBtn.removeAttribute('disabled');
//   submitBtn.style.cursor = 'pointer';
// }

