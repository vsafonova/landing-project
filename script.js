
const createLinks = () => {
  const projectsList = document.querySelector(".projects-list");

  projectsData.forEach((project, index) => {
    const createdLi = document.createElement("li");
    createdLi.classList.add("projects-list__item");

    const createdA = document.createElement("a");
    createdA.classList.add("projects-list__link");

    createdA.innerText = project.city + ' ' + project.style;

    if (index === 0) {
      createdA.classList.add("active");
    }

    createdLi.appendChild(createdA);
    projectsList.appendChild(createdLi);
  });
};

const projectsData = [
  {
    city: "Rostov-on-Don",
    style: "LCD admiral",
    area: "81 m2",
    time: "3.5 months",
    cost: "Upon request",
    image: "./images/slider1.png",
  },
  {
    city: "Sochi",
    style: "Thieves",
    area: "105 m2",
    time: "4 months",
    cost: "Upon request",
    image: "./images/slider2.png",
  },
  {
    city: "Rostov-on-Don",
    style: "Patriotic",
    area: "93 m2",
    time: "3 months",
    cost: "Upon request",
    image: "./images/slider3.png",
  },
];
createLinks();

const city = document.querySelector(".name-city");
const style = document.querySelector(".style");
const area = document.querySelector(".area");
const time = document.querySelector(".time");
const cost = document.querySelector(".cost");
const design = document.querySelector(".design-image");
const prev = document.querySelector(".carousel-last");
const next = document.querySelector(".carousel-next");
const projectLinks = document.querySelectorAll(".projects-list__link");
const projectDots = document.querySelectorAll(".carousel-dots");

const displayProject = (index) => {
  const project = projectsData[index];
  city.innerText = project.city;
  style.innerText = project.style;
  area.innerText = project.area;
  time.innerText = project.time;
  cost.innerText = project.cost;
  design.src = project.image;

  setActiveLink(index);
  setActiveDot(index);
};

let currentIndex = 0;
displayProject(currentIndex);

const setProject = (index) => {
  index = (index + projectsData.length) % projectsData.length;
  displayProject(index);
  currentIndex = index;
};

prev.addEventListener("click", () => {
  setProject(currentIndex - 1);
});

next.addEventListener("click", () => {
  setProject(currentIndex + 1);
});

projectLinks.forEach((element, index) => {
  element.addEventListener("click", () => {
    setProject(index);
  });
});

function setActiveLink(index) {
  const currenLink = projectLinks[currentIndex];
  currenLink.classList.remove("active");
  const newActiveLink = projectLinks[index];
  newActiveLink.classList.add("active");
}

function setActiveDot(index) {
  const currenDot = projectDots[currentIndex];
  currenDot.classList.remove("active");
  const newActiveDot = projectDots[index];
  newActiveDot.classList.add("active");
}
