// Timeline data containing information for each timeline event
const TIMELINE_DATA = [
  {
    year: "1974",
    location: "HYDERABAD, TELANGANA",
    image: "./assets/hyderabad_baby.jpg",
    alt_text: "Black-and-white photograph of family of 5 in front of a home outside a garden.",
    description: "Within the four walls of this ancestral home located in the heart of the bustling city of Hyderabad, India, my grandmother delivered my mother on August 10, 1974 at 11:22 pm. Here, she was raised as the youngest of three sisters to a Colonel father and a mother involved in community leadership. This beautiful, yet humble home saw its fair share of mischief and fun: a large and grassy front garden made for some exciting activities including catching dragonflies and fostering stray kittens, while a terrace allowed for wonderful views, morning picnics, and picking pink bougainvillea flowers from nearby trees."
  },
  {
    year: "1975",
    location: "KANPUR, UTTAR PRADESH",
    image: "./assets/kanpur.jpg",
    alt_text: "Family photo of dad holding one daughter in his arms, as the other two stand beside him.",
    description: "As a commanding officer in the Indian Army, my grandfather was given the unique opportunity to accompany a traveling troop of men through the mountains surrounding the nearby Tista River. My mother and her sisters accompanied him on this excursion. Along the way, they saw tucans, baboons, deer, and most memorable of all, an Indian leopard. My mother fondly remembers jumping into the pool below the Chitrey waterfall as well as lazing around in the sun afterwards and eating a batch of momos, or local street dumplings."
  },
  {
    year: "1979",
    location: "WELLINGTON, TAMIL NADU",
    image: "./assets/wellington.jpg",
    alt_text: "A group of friends gathered around a birthday cake. An elderly lady supervises them.",
    description: "Prior to my mother's 5th birthday, my grandfather was deployed to the small, rural town of Wellington in Tamil Nadu, India. With idyllic mountain landscapes and rich vegetation all year round, it was here that my mother discovered her passion for the outdoors. This is in part because my grandfather encouraged independence and self-sufficiency, teaching all of his daughters how to ride bicycles and navigate the windy town roads on their own."
  },
  {
    year: "1982",
    location: "SILIGURI, WEST BENGAL",
    image: "./assets/west_bengal.jpg",
    alt_text: "Two girls in a field whispering secrets.",
    description: "In the quaint rural landscape of West Bengal, my mother with her school friends and sisters would frequently ride down to Ooty Lake (about 14 km from home), feed the monkeys and geese, climb the indigenous Jamun trees, and eat the fruit they bore. If the weather cooperated and the opportunity presented itself, she would even wade into the lake, swim, and play water games."
  },
  {
    year: "1984",
    location: "NEW DELHI, INDIA",
    image: "./assets/delhi.jpg",
    alt_text: "A group of 6 girls standing in front of a cloth painting.",
    description: "A drastic change from the slow-paced life of Siliguri, my mother and her sisters were hesitant to return to the crowded, busy cityscape. Little did she know that living in New Delhi would turn out to be much more terrible than she anticipated. Specifically, my mother witnessed the assassination of Prime Minister Indira Gandhi at Safdarjung Road, 22 km from the Army Residence in which she lived. This incident left India in a state of political unrest and instability, resulting in mass upheaval and violent rioting. And she was right in the middle of it."
  },
  {
    year: "1988",
    location: "BARODA, GUJARAT",
    image: "./assets/baroda_dance.jpg",
    alt_text: "Two lines of 3 girls practicing a dance in traditional wear.",
    description: "Following two years in New Delhi, my grandfather was stationed in the quiet city of Baroda, Gujarat. Here, my mother took interest in many school activities, participating in the school's annual dance competition, swim competition, poem recitation competition, and debate competition."
  },
  {
    year: "1989",
    location: "BARODA, GUJARAT",
    image: "./assets/baroda_award.jpg",
    alt_text: "A woman receiving an award on stage from a group of professors.",
    description: "Under the mentorship of her English teacher, my mother became an avid reader, going through 3 or 4 books every week and winning multiple English. It was my mother's education in Baroda that prompted her to later pursue Literature Studies at a university level. Although moving schools so frequently could be rather intimidating and daunting, my mother was a social magnet, attracting friends wherever she went. Some of her dearest friends, Sarita and Gautmi, she made at Kendriya Vidyalaya EME."
  },
  {
    year: "1990",
    location: "UDHAMPUR, JAMMU & KASHMIR",
    image: "./assets/udhampur.jpg",
    alt_text: "A group of 3 friends standing in front of a tree at a picnic.",
    description: "My grandfather's subsequent posting came when my mother was entering the eighth grade, and it was in Udhampur, a small district in the Indian Union territory of Jammu and Kashmir. Because of ambiguity during land allocation following the Indian Independence Movement, Jammu and Kashmir was and continues to be a widely disputed over area between Pakistan and India. And yet, the political unrest did little to mar my mother's experience. She lived in the Army Cantonment, a private military residence, which boasted its own set of gardens and livestock. Here, she adopted her first stray Dachshund puppy named Willie."
  },
  {
    year: "1990",
    location: "MANALI, HIMACHAL PRADESH",
    image: "./assets/manali_camp.jpg",
    alt_text: "A group of friends sitting atop rocks at a nature camp.",
    description: "During summer vacation, my mother went on a scenic roadtrip with her friends throughout Himachal Pradesh. With large botanical gardens, mountains overflowing with greenery in the spring and snow-capped in the winter, clear blue rivers, and abundant wildlife, my mother had the time of her life hiking nature trails, camping, biking, swimming, and boating."
  },
  {
    year: "1992",
    location: "HYDERABAD, TELANGANA",
    image: "./assets/womens_college.jpg",
    alt_text: "A group of college friends sitting on the hood of a car in front of college.",
    description: "After completing her secondary schooling in Udhampur, my mother returned to Hyderabad to pursue higher education. Enrolling in the Women's College, my mother studied English with an emphasis in Literature and Linguistics. She worked alongside her advisor to develop a thesis about variations in phonetic vocalizations between bilingual Marathi-English speaking individuals and monolingual English speaking individuals."
  },
  {
    year: "1996",
    location: "HYDERABAD, TELANGANA",
    image: "./assets/university_of_hyderabad.jpg",
    alt_text: "Three friends sitting atop a rock amidst a sandy landscape.",
    description: "Following the completion of her Bachelor's degree, my mom began her Master's degree in the University of Hyderabad. It was here that my mom made some of her closest friends, including Prashanti, Rashmi, Arjun, and Ryan. After 3 years of hard work and diligence, my mother graduated with highest honors."
  },
  {
    year: "1998",
    location: "MUMBAI, MAHARASHTRA",
    image: "./assets/teaching.jpg",
    alt_text: "A group of colleagues in front of a banyan tree in college.",
    description: "Post-graduation, my mother met my father, who worked overseas in the United States, through a mutual friend. Although my mother did not own a computer at the time, she opened a line of email communication between them, traveling to the local coffee shop to gain access to a computer. After months of back-and-forth (his interest and her doubt), my mother slowly fell in love, and they both married in December 1999."
  },
  {
    year: "2001",
    location: "PITTSBURGH, PENNSYLVANIA",
    image: "./assets/pittsburgh.jpg",
    alt_text: "Mom squatting beside her infant daughter in a carrier.",
    description: "After living with her in-laws for approximately 2 months, my mother moved with my father to Pittsburg, Pennsylvania. Here, my father held a job in IT Management for Alcoa, while my mother began pursuing further education in English. One year post-marriage, my mother became pregnant with me, and I was born 10 months thereafter in October 2001."
  },
  {
    year: "2005",
    location: "SANTA CLARITA, CALIFORNIA",
    image: "./assets/santa_clarita.jpg",
    alt_text: "Family photograph of dad, mom, and son in front of a home temple.",
    description: "After my father received a job offer at Fox Corporation based in Century City, my parents decided that it was time to make the move to California and settle down into quiet suburban life. On the outskirts of Los Angeles, 23238 Barnacle Lane has been my family's home for the past 18 years. This is where I have been raised alongside my little brother, Mihir, and my sweet pup, Mylo, and where I have made all my best and worst memories."
  }
]

// Function to populate the timeline using the provided data
function populateTimeline() {
  for (const t of TIMELINE_DATA) {
    // Clone the timeline item template
    const template = document.querySelector('.timeline-item-wrapper');
    const clone = template.content.cloneNode(true);

    // Update the cloned timeline item with data
    updateTimelineCard(clone, t);

    // Append the cloned timeline item to the timeline container
    const timelineCard = document.querySelector('.timeline');
    timelineCard.appendChild(clone);
  }
}

// Function to update a timeline item with the provided data
function updateTimelineCard(timelineCard, t) {
  const timelineYear = timelineCard.querySelector('.timeline__content-title');
  timelineYear.innerText = t.year;

  const timelineLocation = timelineCard.querySelector('.timeline-item');
  timelineLocation.setAttribute('data', t.location);

  const timelineImage = timelineCard.querySelector('.timeline__img');
  timelineImage.src = t.image;
  timelineImage.alt = t.alt_text;

  const timelineDescription = timelineCard.querySelector('.timeline__content-desc');
  timelineDescription.innerText = t.description;
}

// Call the function to populate the timeline on page load
populateTimeline();

// jQuery plugin for the timeline functionality
(function ($) {
  $.fn.timeline = function () {
    var selectors = {
      id: $(this),
      item: $(this).find(".timeline-item"),
      activeClass: "timeline-item--active",
      img: ".timeline__img"
    };

    // Set the first item as active and background image
    selectors.item.eq(0).addClass(selectors.activeClass);
    selectors.id.css("background-image", "url(" + selectors.item.first().find(selectors.img).attr("src") + ")");

    var itemLength = selectors.item.length;

    // Handle scroll events to change the active timeline item
    $(window).scroll(function () {
      var max, min;
      var pos = $(this).scrollTop();
      selectors.item.each(function (i) {
        min = $(this).offset().top;
        max = ($(this).height() + $(this).offset().top);
        var that = $(this);

        // Set the last item as active when scrolled past the second last item
        if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
          selectors.item.removeClass(selectors.activeClass);
          selectors.id.css("background-image", "url(" + selectors.item.last().find(selectors.img).attr('src') + ")");
          selectors.item.last().addClass(selectors.activeClass);
        } else if (pos <= max - 40 && pos >= min) {
          // Set the active item based on scroll position
          selectors.id.css("background-image", "url(" + $(this).find(selectors.img).attr('src') + ")");
          selectors.item.removeClass(selectors.activeClass);
          $(this).addClass(selectors.activeClass);
        }
      });
    });
  }
})(jQuery);

// Apply the timeline plugin to the timeline wrapper
$("#timeline-wrapper").timeline();
