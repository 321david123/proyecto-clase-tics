window.addEventListener("scroll", function(){
    let img1 = document.getElementById("id1");
    img1.classList.toggle("qwer", window.scrollY > 140)
    let img2 = document.getElementById("id2");
    img2.classList.toggle("qwer", window.scrollY > 240)
    let img3 = document.getElementById("id3");
    img3.className("qwer", window.scrollY > 320)
    // img3.style.removeProperty("display",window.scrollY<320)
    // let li = document.getElementById("it");
    // li.classList.toggle("letras", window.scrollY > 40)
  })