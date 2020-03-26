const imagesOne = document.querySelector('.load-one');
const imagesTwo = document.querySelector('.load-two');
const imagesThree = document.querySelector('.load-three');
const imagesFor = document.querySelector('.load-for');
const imagesFive = document.querySelector('.load-five');
const imagesSix = document.querySelector('.load-six');

const  intersections = document.querySelector('.intersections');

function imagesLoad() {
    const options = {
        threshold: 1.0,
      };
      
      const onEntry = (entries, observer) => {
          
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                imagesOne.style.opacity = '1'; 
                imagesTwo.style.opacity = '1'; 
                imagesThree.style.opacity = '1'; 
                imagesFor.style.opacity = '1'; 
                imagesFive.style.opacity = '1'; 
                imagesSix.style.opacity = '1';
                 
            }
        });
      };
      
      const observer = new IntersectionObserver(onEntry, options);
      
      observer.observe(intersections);
}


imagesLoad();