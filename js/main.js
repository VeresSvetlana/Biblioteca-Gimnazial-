new SimpleLightbox({ elements: '.activitate-imagini a' });
AOS.init({
    duration: 1000,
    offset: 100,
    once: true
});

emailjs.init("m0FP-MhYEbmtyMwkb");

function mobile() {
    var x = document.getElementById("navbar");
    if (x.className === "nav") {
        x.className = "nav mobile";
    }else {
        x.className = "nav";
    }
}