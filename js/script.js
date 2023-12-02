const wrapper= document.querySelector(".wrapper");
const question= document.querySelector(".question");
const berry= document.querySelector(".berry");
const yesBtn= document.querySelector(".yesbtn");
const noBtn= document.querySelector(".nobtn");

yesBtn.addEventListener('click', ()=>{
    question.innerHTML=":33333333 tesim sa";
    berry.src="../img/HeartCat.jpg";
});
noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;
  
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
  
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
  });
