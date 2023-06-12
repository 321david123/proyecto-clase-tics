window.addEventListener("scroll", function(){
    //let img1 = document.getElementById("id1");
    
    let cont = document.getElementById("cont");
    let text1 = document.getElementById("text1");
    let conttt = document.getElementById("contenedortodo");
    let img1 = document.getElementById("id1");
    let img2 = document.getElementById("id2");
    let img3 = document.getElementById("id3");
    
    //if(this.window.scrollY > 140){
    //  cont.classList.add("qwer")
    //}

    this.window.scrollY>140 ? cont.classList.add("qwer"):cont.classList.toggle("a")
    this.window.scrollY>300 ? text1.classList.add("text1"):cont.classList.toggle("a")
    //this.window.scrollY>400 ? conttt.classList.add("cont-td"):cont.classList.toggle("a")
    this.window.scrollY>400 ? img1.classList.add("interior-cont1"):cont.classList.toggle("a")
    this.window.scrollY>400 ? img1.classList.add("Animation-text"):cont.classList.toggle("a")
    this.window.scrollY>520 ? img2.classList.add("interior-cont1"):cont.classList.toggle("a")
    this.window.scrollY>520 ? img2.classList.add("Animation-text"):cont.classList.toggle("a")
    this.window.scrollY>670 ? img3.classList.add("interior-cont1"):cont.classList.toggle("a")
    this.window.scrollY>670 ? img3.classList.add("Animation-text"):cont.classList.toggle("a")
    
    //img1.classList.toggle("qwer", window.scrollY > 140)
    //let img2 = document.getElementById("id2");
    //img2.classList.toggle("qwer", window.scrollY > 240)
    //let img3 = document.getElementById("id3");
    //img3.classList.add("qwer", window.scrollY > 320)
    // img3.style.removeProperty("display",window.scrollY<320)
    // let li = document.getElementById("it");
    // li.classList.toggle("letras", window.scrollY > 40)
  })