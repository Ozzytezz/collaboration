const burgirBtn = document.querySelector('.burgir');
const headerNav = document.querySelector('.link');
const kamote = document.querySelector('.kamote');


burgirBtn.addEventListener("click", () => {    
    burgirBtn.classList.toggle('open');
    headerNav.classList.toggle('open');
    kamote.classList.toggle('open');
})

const header = document.querySelector(".header");
window.addEventListener("scroll" , () => {
  console.log(scrollY);
  if (scrollY >= 100) {
  header.classList.add("blue");
} else {
  header.classList.remove("blue")
}

});