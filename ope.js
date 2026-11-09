// ========================================  
// HERO TEXT ANIMATION  
// ========================================  
  
const words = [  
    "Ideas",  
    "Brands",  
    "Visions",  
    "Creativity",  
    "Dreams"  
];  
  
let wordIndex = 0;  
  
const changingText =  
    document.querySelector(".changing-text");  
  
  
setInterval(() => {  
  
    changingText.style.opacity = "0";  
  
    setTimeout(() => {  
  
        wordIndex++;  
  
        if (wordIndex >= words.length) {  
            wordIndex = 0;  
        }  
  
        changingText.textContent =  
            words[wordIndex];  
  
        changingText.style.opacity = "1";  
  
    }, 300);  
  
}, 2500);  
  
  
// ========================================  
// CONTACT FORM  
// ========================================  
  
const form =  
    document.getElementById("contactForm");  
  
  
form.addEventListener(  
    "submit",  
    function(event) {  
  
        event.preventDefault();  
  
        alert(  
            "Thank you! Your enquiry has been received."  
        );  
  
        form.reset();  
  
    }  
);  
  
  
// ========================================  
// SCROLL REVEAL  
// ========================================  
  
const cards =  
    document.querySelectorAll(  
        ".service-card, " +  
        ".portfolio-item, " +  
        ".process-card"  
    );  
  
  
const observer =  
    new IntersectionObserver(  
        (entries) => {  
  
            entries.forEach(entry => {  
  
                if (  
                    entry.isIntersecting  
                ) {  
  
                    entry.target.style.opacity =  
                        "1";  
  
                    entry.target.style.transform =  
                        "translateY(0)";  
  
                }  
  
            });  
  
        },  
        {  
            threshold: 0.15  
        }  
    );  
  
  
cards.forEach(card => {  
  
    card.style.opacity = "0";  
  
    card.style.transform =  
        "translateY(40px)";  
  
    card.style.transition =  
        "0.8s ease";  
  
    observer.observe(card);  
  
});  
