const collage__imgs = [...document.querySelectorAll('.collage__img')]
const img_full = document.querySelector('.image_full img');

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 400,
  })

sr.reveal('.bomb--left')
sr.reveal('.bomb--right,',{origin:'bottom'})

sr.reveal('.principal__title, .circle_photo',{ distance: '0px',opacity: 0})
sr.reveal('.image_full',{origin:'left'})
sr.reveal(collage__imgs[0],{origin:'bottom',delay:500})
sr.reveal(collage__imgs[1],{origin:'bottom',delay:1000})
sr.reveal(collage__imgs[2],{origin:'bottom',delay:1500})
sr.reveal('.card__info',{origin:'left',delay:500})

setInterval(()=>{
  let src = img_full.src;
  img_full.style.opacity = "0";
  if(src.includes('klee-full-2')){
     newSrc = './imgs/klee-full-1.png'
  }
  else{ 
    newSrc = './imgs/klee-full-2.png'
  }
  setTimeout(()=>{
    img_full.src = newSrc
    img_full.style.opacity = "1";
  },500)
},9000)