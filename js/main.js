var models = [
  {
    name: "Coding isn't difficult",
    image: "images/1.jfif",
    link: "https://unsplash.com/photos/m_HRfLhgABo",
  },
  {
    name: "Code",
    image: "images/2.jfif",
    link: "https://unsplash.com/photos/f77Bh3inUpE",
  },
  {
    name: "Code",
    image: "images/3.jfif",
    link: "https://unsplash.com/photos/4hbJ-eymZ1o",
  },
  {
    name: "Code",
    image: "images/4.jfif",
    link: "https://unsplash.com/photos/SyYmXSDnJ54",
  },
  {
    name: "Code",
    image: "images/5.jfif",
    link: "https://unsplash.com/photos/vc3iVL_znJ8",
  },
];

var index = 0;
var imagesCount = models.length;
var interval;
var settings = {
  duration: "2000",
  random: false,
};

init(settings);

document
  .querySelector(".fa-arrow-circle-left")
  .addEventListener("click", () => {
    index--;
    showSlide(index);
  });

document
  .querySelector(".fa-arrow-circle-right")
  .addEventListener("click", () => {
    index++;
    showSlide(index);
  });

document.querySelectorAll(".arrow").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    clearInterval(interval);
  });
});

document.querySelectorAll(".arrow").forEach((item) => {
  item.addEventListener("mouseleave", () => {
    init(settings);
  });
});

function init(settings) {
  var prev;

  interval = setInterval(() => {
    if (settings.random) {
      // random index
      do {
        index = Math.floor(Math.random() * imagesCount);
      } while (index == prev);
      prev = index;
    } else {
      if (imagesCount == index + 1) {
        index = -1;
      }
      showSlide(index);
      console.log(index);
      index++;
    }
    showSlide(index);
  }, settings.duration);
}

function showSlide(i) {
  index = i;
  if (i < 0) {
    index = imagesCount - 1;
  }
  if (i >= imagesCount) {
    index = 0;
  }
  document.querySelector(".card-title").textContent = models[index].name;
  document
    .querySelector(".card-img-top")
    .setAttribute("src", models[index].image);
  document.querySelector(".card-link").setAttribute("href", models[index].link);
}
