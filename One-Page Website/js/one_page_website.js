// ------------- FADE-OUT EFFECT --------------- //

window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('fade-out');
});


// ----------- LIGHTBOX FUNCTIONALITY ---------- //

function openModal() {  // Displays the gallery box
    document.getElementById("lightbox").style.display = "block";
}

function closeModal() { // hides the gallery box again
    document.getElementById("lightbox").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1} // back to 1 if you go over
    if (n < 1) {slideIndex = slides.length} // to end of slides if go under
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
} 

// ------------ FORM EMPTY ALERTS -------------------- //

function validateForm() {
    var x = document.forms["newsletter"]["name"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    };
    var x = document.forms["newsletter"]["email"].value;
    if (x == "") {
        alert("Please enter a valid email address");
        return false;
    };
}

// --------------- POP-UP FORM  ----------------------- //

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}