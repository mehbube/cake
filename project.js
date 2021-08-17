const header = document.getElementById("header");
window.addEventListener("scroll", function () {
  let st = document.documentElement.scrollTop;
  if (st > header.offsetTop) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

const clickVideo = document.getElementById("clickVideo");

clickVideo.addEventListener("click", function () {
  // document.getElementById("iframe").style.display = "block";
  document.getElementById("iframe").classList.add("iframe")

});
