const container = document.querySelector(".container");
const picsumURL = "https://picsum.photos/300/300";
const rows = 10;

for (let i = 0; i < rows * 4; i++) {
  const img = document.createElement("img");
  //   img.src =  `${unsplashURL}${getRandomSize()}`;

  img.src = picsumURL + `?random=${Math.random()}`; // prevent caching
  container.appendChild(img);
}

// console.log(getRandomNumber());

function getRandomSize() {
  return `${getRandomNumber()}/${getRandomNumber()}`;
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 300;
}
