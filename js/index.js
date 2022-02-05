import * as Model from "./Model.js";
import slider from "./slider.js";
import * as links from "./hyperLink.js";

const navLogo = document.querySelector(".nav-logo");

// MENU
const topOffer = document.querySelector(".top-offer");
const grocery = document.querySelector(".grocery");
const mobiles = document.querySelector(".mobiles");
const fashions = document.querySelector(".fashions");
const Electronics = document.querySelector(".electronics");
const appliances = document.querySelector(".appliances");
const travel = document.querySelector(".travel");
const toys = document.querySelector(".toys");

const menuImage = document.querySelectorAll(".menu--img");
const menuContainer = document.querySelector(".menu-container");
const sectionParent = document.querySelector(".section-fashion");
const navCart = document.querySelector(".nav-cart");
const slideshowContainer = document.querySelector(".slideshow-container");

slider();

const selectionMyCart = function () {
  sectionParent.innerHTML = "";
  sectionParent.insertAdjacentHTML("afterbegin", links.myCartParentHtml.call(this, Model.bookmarks));
};

const clothsChoose = function (data) {
  menuImage.forEach((img) => (img.style.display = "none"));

  let cloth;
  if (data.classList.contains("fashion-women")) {
    cloth = Model.womenModel.map((html) => links.sectionGridChild.call(this, html)).join("");
  }
  if (data.classList.contains("fashion-men") || data.classList.contains("fashions")) {
    cloth = Model.menModel.map((html) => links.sectionGridChild.call(this, html)).join("");
  }

  sectionParent.innerHTML = "";
  sectionParent.insertAdjacentHTML("afterbegin", links.fashionsHtml.call(this, cloth));
};
const electronicsChoose = function (data) {
  menuImage.forEach((img) => (img.style.display = "none"));

  const electronic = Model.electronicsModel.map((html) => links.sectionGridChild.call(this, html)).join("");

  sectionParent.innerHTML = "";
  sectionParent.insertAdjacentHTML("afterbegin", links.electronicsHtml.call(this, electronic));
};

fashions.addEventListener("click", function (e) {
  e.preventDefault();
  slideshowContainer.style.display = "none";
  clothsChoose(e.target.closest(".fashions"));
});

Electronics.addEventListener("click", function (e) {
  e.preventDefault();
  slideshowContainer.style.display = "none";
  console.log("working");
  electronicsChoose(e.target.closest(".electronics"));
});

sectionParent.addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.closest(".fashion-women")) {
    clothsChoose(e.target.closest(".fashion-women"));
  }

  if (e.target.closest(".fashion-men")) {
    clothsChoose(e.target.closest(".fashion-men"));
  }

  if (e.target.closest(".product-remove")) {
    const data = e.target.closest(".product-remove").dataset.remove;
    Model.bookmarks.map((mark, i) => mark.id === data && Model.bookmarks.splice(i, 1));
    selectionMyCart();
  }

  const dataCloths = e.target.closest(".cloth-icon");

  if (dataCloths?.dataset.category === "men") {
    if (dataCloths.dataset.add) {
      const model = Model.menModel.filter((model) => dataCloths.dataset.add === model.id);
      Model.bookmarks.push(...model);
    } else {
      const model = Model.menModel.filter((model) => dataCloths.dataset.remove === model.id);
      Model.bookmarks.map((mark, i) => mark.id === dataCloths && Model.bookmarks.splice(i, 1));
    }
  }

  if (dataCloths?.dataset.category === "women") {
    if (dataCloths.dataset.add) {
      const model = Model.womenModel.filter((model) => dataCloths.dataset.add === model.id);
      Model.bookmarks.push(...model);
    } else {
      const model = Model.womenModel.filter((model) => dataCloths.dataset.remove === model.id);
      Model.bookmarks.map((mark, i) => mark.id === dataCloths && Model.bookmarks.splice(i, 1));
    }
  }

  if (dataCloths?.dataset.category === "electronics") {
    if (dataCloths.dataset.add) {
      const model = Model.electronicsModel.filter((model) => dataCloths.dataset.add === model.id);
      Model.bookmarks.push(...model);
    } else {
      const model = Model.electronicsModel.filter((model) => dataCloths.dataset.remove === model.id);
      Model.bookmarks.map((mark, i) => mark.id === dataCloths && Model.bookmarks.splice(i, 1));
    }
  }
});

navLogo.addEventListener("click", function () {
  menuContainer.style.display = "flex";
  menuImage.forEach((img) => (img.style.display = "block"));
  sectionParent.innerHTML = "";
  slideshowContainer.style.display = "block";
  console.log(Model.bookmarks);
});

navCart.addEventListener("click", function (e) {
  e.preventDefault();
  menuContainer.style.display = "none";
  slideshowContainer.style.display = "none";
  menuImage.forEach((img) => (img.style.display = "none"));
  selectionMyCart();
});

fashions.addEventListener("click", function (e) {
  e.preventDefault();
  slideshowContainer.style.display = "none";
  clothsChoose(e.target.closest(".fashions"));
});

Electronics.addEventListener("click", function (e) {
  e.preventDefault();
  slideshowContainer.style.display = "none";
  console.log("working");
  electronicsChoose(e.target.closest(".electronics"));
});
