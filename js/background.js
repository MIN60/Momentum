//랜덤으로 배경화면 이미지를 변경합니다. 
const bgImage = [
    "water01",
    "water02",
    "water03",
    "water04",
    "water05"
  ];
  
  const background = document.querySelector("body");
  
  function handleBackground() {
    const chosenImage = bgImage[Math.floor(Math.random() * bgImage.length)];
    const imgSrc = `url(img/${chosenImage}.jpg)`
    background.style.backgroundImage = imgSrc;
  }
  
  handleBackground();
  