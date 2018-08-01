// YOUR TASK: Add more pictures!
var pictures = ['./imgs/dog.jpg','./imgs/a.jpeg','./imgs/b.jpeg',"./imgs/c.jpeg","./imgs/d.jpeg","./imgs/e.jpeg"];
var currentIndex = 0;

function showNextPicture() {
  currentIndex++; // increment current picture
  // if currentIndex is too large, start from the beginning again
  if (currentIndex >= pictures.length) {
    currentIndex = 0;
  }

  // YOUR TASK: Finish this function!
}