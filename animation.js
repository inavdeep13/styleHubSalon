gsap.registerPlugin(ScrollTrigger);

/* LENIS */

const lenis = new Lenis({
  duration: 1.2,
  smoothWheel: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

lenis.on("scroll", ScrollTrigger.update);

/* NAVBAR */

gsap.from(".navbar", {
  y: -100,
  opacity: 0,
  duration: 1,
  ease: "power4.out",
});

/* HERO */

gsap.from(".subtitle", {
  opacity: 0,
  y: 30,
  duration: 1,
});

gsap.from(".hero-title", {
  x: -150,
  opacity: 0,
  duration: 1.5,
  ease: "power4.out",
});

gsap.from(".hero p", {
  y: 40,
  opacity: 0,
  duration: 1,
  delay: 0.3,
});

gsap.from(".hero-btn", {
  scale: 0,
  opacity: 0,
  duration: 1,
  delay: 0.6,
  ease: "back.out(1.7)",
});

gsap.from(".hero-image", {
  x: 150,
  opacity: 0,
  duration: 1.5,
  ease: "power4.out",
});

/* IMAGE PARALLAX */

gsap.to(".hero-image img", {
  yPercent: -15,

  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
});

/* NAVBAR BG CHANGE */

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){

    gsap.to(".navbar",{
      background:"rgba(0,0,0,0.9)",
      duration:.3
    });

  }else{

    gsap.to(".navbar",{
      background:"rgba(0,0,0,0.4)",
      duration:.3
    });

  }

});


gsap.utils.toArray(".service-item").forEach((item)=>{

    gsap.from(item,{

        y:100,
        opacity:0,

        duration:1,

        scrollTrigger:{
            trigger:item,
            start:"top 80%"
        }

    });

});

gsap.utils.toArray(".service-image img").forEach((img)=>{

    gsap.from(img,{

        scale:1.3,

        duration:1.5,

        scrollTrigger:{
            trigger:img,
            start:"top 80%"
        }

    });

});


gsap.from("#contact h2",{

    y:100,
    opacity:0,

    duration:1,

    scrollTrigger:{
        trigger:"#contact",
        start:"top 75%"
    }

});

gsap.from("#bookingForm",{

    x:100,
    opacity:0,

    duration:1.2,

    scrollTrigger:{
        trigger:"#bookingForm",
        start:"top 80%"
    }

});

gsap.from("#contact h3",{

    x:-100,
    opacity:0,

    duration:1.2,

    scrollTrigger:{
        trigger:"#contact",
        start:"top 75%"
    }

});


gsap.from("#location h2",{

    y:100,
    opacity:0,

    duration:1,

    scrollTrigger:{
        trigger:"#location",
        start:"top 75%"
    }

});

gsap.from("#location iframe",{

    scale:.8,
    opacity:0,

    duration:1.2,

    scrollTrigger:{
        trigger:"#location",
        start:"top 75%"
    }

});

gsap.from("#location h3",{

    x:-100,
    opacity:0,

    duration:1.2,

    scrollTrigger:{
        trigger:"#location",
        start:"top 75%"
    }

});

gsap.from(".direction-btn",{
    y:100,
    opacity:0,

    duration:1.2,

    scrollTrigger:{
        trigger:".direction-btn",
        start:"top 85%"
    }
});

gsap.from(".footer > div",{

    y:100,
    opacity:0,

    duration:1.2,

    scrollTrigger:{
        trigger:".footer",
        start:"top 80%"
    }

});