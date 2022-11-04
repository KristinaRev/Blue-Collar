const miniTitle = document.getElementById("mini-title-offer");
const mainTitle = document.getElementById("title-offer");
const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const mainImgOffer = document.getElementById('offer-img');
const btnCommercial = document.getElementById('commercial-btn');
const btnResidential = document.getElementById('residential-btn');
const btnIndustrial = document.getElementById('Industrial-btn');


function initialResidentialOffer() {
    miniTitle.innerHTML = `<div>
    <img src="images/icons/residential-btn.svg" alt="icon" loading="lazy" height="27" width="23"class="mini-image"></div>
    <div class="welcome-text">?</div>`;
    mainTitle.innerHTML =`Residential`;
    text1.innerHTML = `Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
    Lorem Ipsum Gene`;
    text2.innerHTML = `Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
    Lorem Ipsum Gene`;
    mainImgOffer.innerHTML = `<img src="" alt="Residential image" loading="lazy">`;
}

function initialCommercialOffer() {
    miniTitle.innerHTML = `<div>
    <img src="images/icons/Commercial-btn.svg" alt="icon" loading="lazy" height="27" width="23" class="mini-image">
    </div>
    <div class="welcome-text">Electrical installation</div>`;
    mainTitle.innerHTML =`Commercial`;
    text1.innerHTML = `Electrical & Maintenance Services Ltd offers a full range of electrical services to suit your needs – from moving a light switch to complete house rewires.`;
    text2.innerHTML = `In addition to providing fully qualified, competent electricians in and around London, the company also runs an electrical wholesale shop.`;
    mainImgOffer.innerHTML = `<img src="images/commercial.png" alt="Commercial image" loading="lazy">`;
}

function initialIndustrialOffer() {
    miniTitle.innerHTML = `<div>
    <img src="images/icons/Industrial-btn.svg" alt="icon" loading="lazy" height="27" width="23"class="mini-image"></div>
    <div class="welcome-text">?</div>`;
    mainTitle.innerHTML =`Industrial`;
    text1.innerHTML = `Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
    Lorem Ipsum Gene`;
    text2.innerHTML = `Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
    Lorem Ipsum Gene`;
    mainImgOffer.innerHTML = `<img src="" alt="Industrial image" loading="lazy">`;
}


btnCommercial.addEventListener("click", initialCommercialOffer);
btnResidential.addEventListener("click", initialResidentialOffer);
btnIndustrial.addEventListener("click", initialIndustrialOffer);
