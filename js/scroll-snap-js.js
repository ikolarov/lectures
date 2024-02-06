const sections = document.querySelectorAll(".viewer .slide");
let mobileStart;
let debounce;

const handleScrollToSection = (direction) => {
    clearTimeout(debounce);
    debounce = setTimeout(function () {
        for(let i = 0; i < sections.length; i++) {
            const section = sections[i];
            if(!section.classList.contains("active")){
                continue;
            }

            if(direction === "up") {
                handleClassChange(section, section.previousElementSibling);
            } else if(direction === "down"){
                handleClassChange(section, section.nextElementSibling);
            }

            break;
        }

    }, 100);
}

window.addEventListener('touchstart', function(e) {
    mobileStart = e.changedTouches[0];
});


window.addEventListener('touchend', function(e) {
  let end = e.changedTouches[0];

  if(end.screenY - mobileStart.screenY > 0){
    handleScrollToSection('up')
  }
  else if(end.screenY - mobileStart.screenY < 0){
    handleScrollToSection('down')
  }
});

const handleClassChange = (section, element) => {
    if(element) {
        section.classList.remove("active");
        element.classList.add("active");
        element.scrollIntoView({
            behavior: "smooth",
        });
    }
}

const detectMouseWheelDirection = ( e ) => {
    let delta = null,
        direction = false;

    if ( e.wheelDelta ) { 
        delta = e.wheelDelta / 60;
    } else if ( e.detail ) {
        delta = -e.detail / 2;
    }
    if ( delta !== null ) {
        direction = delta > 0 ? 'up' : 'down';
    }

    return direction;
}


sections?.[0]?.classList.add("active");

document.addEventListener('wheel', function (e) {
    const direction = detectMouseWheelDirection(e);
    handleScrollToSection(direction);
    
    return false;
});
