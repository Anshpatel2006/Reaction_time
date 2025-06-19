const box = document.getElementById('box');
 let start;
function moveBox() {
  const randomX = Math.random() * 500;
  const randomY = Math.random() * 500;

  box.style.position = 'absolute';
  box.style.left = `${randomX}px`;
  box.style.top =  `${randomY}px`;
  start= new Date();
}


box.onclick = function () {
    let end=new Date();
    let reactiontime = (end-start)/1000;

    alert(`Box clicked and reaction time is ${reactiontime}`);
    moveBox();
};
