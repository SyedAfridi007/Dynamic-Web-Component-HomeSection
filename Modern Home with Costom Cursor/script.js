let mouseCursor = document.querySelector(".cursor");

let navLinks = document.querySelectorAll('.nav-items');

let titleLinks = document.querySelector('.title-1');
let titleLinks_2 = document.querySelector('.title-2');
let titleLinks_3 = document.querySelector('.title-3');

let video_1 = document.querySelector('.video-1');
let video_2 = document.querySelector('.video-2');
let video_3 = document.querySelector('.video-3');




window.addEventListener('mousemove' , cursor);
function cursor(e){
    mouseCursor.style.top = (e.pageY) + 'px';
    mouseCursor.style.left = (e.pageX) + 'px';
    mouseCursor.style.display='block';
}

navLinks.forEach(link => {
  link.addEventListener('mouseover', ()=>{
    mouseCursor.classList.add('link-grow');
  })
  link.addEventListener('mouseleave', ()=>{
    mouseCursor.classList.remove('link-grow');
  })
})




titleLinks.addEventListener('mouseover', ()=>{
  mouseCursor.classList.add('title-link-grow');
  mouseCursor.classList.add('media-blend');
  video_1.style.display="block";
})
titleLinks.addEventListener('mouseleave', ()=>{
  mouseCursor.classList.remove('title-link-grow');
  mouseCursor.classList.remove('media-blend');
  video_1.style.display='none';
})



titleLinks_2.addEventListener('mouseover', ()=>{
  mouseCursor.classList.add('title-link-grow');
  mouseCursor.classList.add('media-blend');
  video_2.style.display="block";
})

titleLinks_2.addEventListener('mouseleave', ()=>{
  mouseCursor.classList.remove('title-link-grow');
  mouseCursor.classList.remove('media-blend');
  video_2.style.display='none';
})



titleLinks_3.addEventListener('mouseover', ()=>{
  mouseCursor.classList.add('title-link-grow');
  mouseCursor.classList.add('media-blend');
  video_3.style.display="block";
})
titleLinks_3.addEventListener('mouseleave', ()=>{
  mouseCursor.classList.remove('title-link-grow');
  mouseCursor.classList.remove('media-blend');
  video_3.style.display='none';
})
