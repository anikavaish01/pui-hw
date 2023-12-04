
const TIMELINE_DATA = [
    { year: "1974",
    location: "mmm",
    image: "./mom_and_me.jpg",
    description:"mmm"
    },
    { year: "1976",
    location: "nnn",
    image: "./mom_photo.png",
    description:""
    },    
    { year: "1974",
    location: "ooo",
    image: "./page_banner.jpg",
    description:""
    },    
    { year: "1974",
    location: "ppp",
    image: "./mom_and_me.jpg",
    description:""
    },    
    { year: "1974",
    location: "qqq",
    image: "./mom_and_me.jpg",
    description:""
    },    
    { year: "1974",
    location: "rrr",
    image: "./mom_and_me.jpg",
    description:""
    },    
    { year: "1974",
    location: "sss",
    image: "./mom_and_me.jpg",
    description:""
    },
]

function populateTimeline(){

    for(const t of TIMELINE_DATA) {
        const template = document.querySelector('#timeline_info');
        const clone = template.content.cloneNode(true);

        updateTimelineCard(clone, t);

        const timelineCard = document.querySelector('.timeline');
        timelineCard.appendChild(clone);

    }
}

function updateTimelineCard(timelineCard, t){
    const timelineYear = timelineCard.querySelector('.timeline__content-title');
    timelineYear.innerText = t.year;

    // const timelineLocation = timelineCard.querySelector('#timeline_location');
    // timelineLocation.innerText = t.location;

    const timelineImage = timelineCard.querySelector('.timeline__img');
    timelineImage.src = t.image;

    const timelineDescription = timelineCard.querySelector('#timeline_description');
    timelineDescription.innerText = t.description;
}

populateTimeline()
function qs(selector, all = false) {
    return all
      ? document.querySelectorAll(selector)
      : document.querySelector(selector);
  }
  
  const sections = qs(".section", true);
  const timeline = qs(".timeline");
  const line = qs(".line");
  line.style.bottom = `calc(100% - 20px)`;
  let prevScrollY = window.scrollY;
  let up, down;
  let full = false;
  let set = 0;
  const targetY = window.innerHeight * 0.8;
  
  function scrollHandler(e) {
    const { scrollY } = window;
    up = scrollY < prevScrollY;
    down = !up;
    const timelineRect = timeline.getBoundingClientRect();
    const lineRect = line.getBoundingClientRect(); // const lineHeight = lineRect.bottom - lineRect.top;
  
    const dist = targetY - timelineRect.top;
    console.log(dist, targetY, timelineRect.top);
  
    if (down && !full) {
      set = Math.max(set, dist);
      line.style.bottom = `calc(100% - ${set}px)`;
    }
  
    if (dist > timeline.offsetHeight + 50 && !full) {
      full = true;
      line.style.bottom = `-50px`;
    }
  
    sections.forEach((item) => {
      // console.log(item);
      const rect = item.getBoundingClientRect(); //     console.log(rect);
  
      if (rect.top + item.offsetHeight / 5 < targetY) {
        item.classList.add("show-me");
      }
    }); // console.log(up, down);
  
    prevScrollY = window.scrollY;
  }
  
  scrollHandler();
  line.style.display = "block";
  window.addEventListener("scroll", scrollHandler);