
const TIMELINE_DATA = [
  {
    year: "1974",
    location: "HYDERABAD, TELANGANA",
    image: "./hyderabad_baby.jpg",
    hover_image: "./san_diego.jpg",
    description: "Within the four walls of this ancestral home located in the heart of the bustling city of Hyderabad, India, my grandmother delivered my mother on August 10, 1974 at 11:22 pm. Here, she was raised as the youngest of three sisters to a Colonel father and a mother involved in community leadership. This beautiful, yet humble home saw its fair share of mischief and fun: a large and grassy front garden made for some exciting activities including catching dragonflies and fostering stray kittens, while a terrace allowed for wonderful views, morning picnics, and picking pink bougainvillea flowers from nearby trees."
  },
  {
    year: "1975",
    location: "KANPUR, UTTAR PRADESH",
    image: "./kanpur.jpg",
    hover_image: "./san_diego.jpg",
    description: "As a commanding officer in the Indian Army, my grandfather was given the unique opportunity to accompany a traveling troop of men through the mountains surrounding the nearby Tista River. My mother and her sisters accompanied him on this excursion. Along the way, they saw tucans, baboons, deer, and most memorable of all, an Indian leopard. My mother fondly remembers jumping into the pool below the Chitrey waterfall as well as lazing around in the sun afterwards and eating a batch of momos, or local street dumplings."
  },
  {
    year: "1979",
    location: "WELLINGTON, TAMIL NADU",
    image: "./wellington.jpg",
    hover_image: "./san_diego.jpg",
    description: "Prior to my mother's 5th birthday, my grandfather was deployed to the small, rural town of Wellington in Tamil Nadu, India. With idyllic mountain landscapes and rich vegetation all year round, it was here that my mother discovered her passion for the outdoors. This is in part because my grandfather encouraged independence and self-sufficiency, teaching all of his daughters how to ride bicycles and navigate the windy town roads on their own."
  },
  {
    year: "1982",
    location: "SILIGURI, WEST BENGAL",
    image: "./west_bengal.jpg",
    hover_image: "./san_diego.jpg",
    description: "In the quaint rural landscape of West Bengal, my mother with her school friends and sisters would frequently ride down to Ooty Lake (about 14 km from home), feed the monkeys and geese, climb the indigenous Jamun trees, and eat the fruit they bore. If the weather cooperated and the opportunity presented itself, she would even wade into the lake, swim, and play water games."
  },
  {
    year: "1984",
    location: "NEW DELHI, INDIA",
    image: "./delhi.jpg",
    hover_image: "./san_diego.jpg",
    description: "A drastic change from the slow-paced life of Siliguri, my mother and her sisters were hesitant to return to the crowded, busy cityscape. Little did she know that living in New Delhi would turn out to be much more terrible than she anticipated. Specifically, my mother witnessed the assassination of Prime Minister Indira Gandhi at Safdarjung Road, 22 km from the Army Residence in which she lived. This incident left India in a state of political unrest and instability, resulting in mass upheaval and violent rioting. And she was right in the middle of it."
  },
  {
    year: "1988",
    location: "BARODA, GUJARAT",
    image: "./baroda_dance.jpg",
    hover_image: "./san_diego.jpg",
    description: "Following two years in New Delhi, my grandfather was stationed in the quiet city of Baroda, Gujarat. Here, my mother took interest in many school activities, participating in the school's annual dance competition, swim competition, poem recitation competition, and debate competition."
  },
  {
    year: "1989",
    location: "BARODA, GUJARAT",
    image: "./baroda_award.jpg",
    hover_image: "./ooty.jpg",
    description: "Under the mentorship of her English teacher, my mother became an avid reader, going through 3 or 4 books every week and winning multiple English. It was my mother's education in Baroda that prompted her to later pursue Literature Studies at a university level. Although moving schools so frequently could be rather intimidating and daunting, my mother was a social magnet, attracting friends wherever she went. Some of her dearest friends, Sarita and Gautmi, she made at Kendriya Vidyalaya EME."
  },
  {
    year: "1990",
    location: "UDHAMPUR, JAMMU & KASHMIR",
    image: "./udhampur.jpg",
    hover_image: "./san_diego.jpg",
    description: "My grandfather's subsequent posting came when my mother was entering the eighth grade, and it was in Udhampur, a small district in the Indian Union territory of Jammu and Kashmir. Because of ambiguity during land allocation following the Indian Independence Movement, Jammu and Kashmir was and continues to be a widely disputed over area between Pakistan and India. And yet, the political unrest did little to mar my mother's experience. She lived in the Army Cantonment, a private military residence, which boasted its own set of gardens and livestock. Here, she adopted her first stray Dachshund puppy named Willie."
  },
  {
    year: "1990",
    location: "MANALI, HIMACHAL PRADESH",
    image: "./manali_camp.jpg",
    hover_image: "./san_diego.jpg",
    description: "During summer vacation, my mother went on a scenic roadtrip with her friends throughout Himachal Pradesh. With large botanical gardens, mountains overflowing with greenery in the spring and snow-capped in the winter, clear blue rivers, and abundant wildlife, my mother had the time of her life hiking nature trails, camping, biking, swimming, and boating."
  },
  {
    year: "1992",
    location: "HYDERABAD, TELANGANA",
    image: "./womens_college.jpg",
    hover_image: "./san_diego.jpg",
    description: "After completing her secondary schooling in Udhampur, my mother returned to Hyderabad to pursue higher education. Enrolling in the Women's College, my mother studied English with an emphasis in Literature and Linguistics. She worked alongside her advisor to develop a thesis about variations in phonetic vocalizations between bilingual Marathi-English speaking individuals and monolingual English speaking individuals."
  },
  {
    year: "1996",
    location: "HYDERABAD, TELANGANA",
    image: "./university_of_hyderabad.jpg",
    hover_image: "./san_diego.jpg",
    description: "Following the completion of her Bachelor's degree, my mom began her Master's degree in the University of Hyderabad. It was here that my mom made some of her closest friends, including Prashanti, Rashmi, Arjun, and Ryan. After 3 years of hard work and diligence, my mother graduated with highest honors."
  },
  {
    year: "1998",
    location: "MUMBAI, MAHARASHTRA",
    image: "./teaching.jpg",
    hover_image: "./san_diego.jpg",
    description: "Post-graduation, my mother met my father, who worked overseas in the United States, through a mutual friend. Although my mother did not own a computer at the time, she opened a line of email communication between them, traveling to the local coffee shop to gain access to a computer. After months of back-and-forth (his interest and her doubt), my mother slowly fell in love, and they both married in December 1999."
  },
  {
    year: "2001",
    location: "PITTSBURGH, PENNSYLVANIA",
    image: "./pittsburgh.jpg",
    hover_image: "./san_diego.jpg",
    description: "After living with her in-laws for approximately 2 months, my mother moved with my father to Pittsburg, Pennsylvania. Here, my father held a job in IT Management for Alcoa, while my mother began pursuing further education in English. One year post-marriage, my mother became pregnant with me, and I was born 10 months thereafter in October 2001."
  },
  {
    year: "2005",
    location: "SANTA CLARITA, CALIFORNIA",
    image: "./santa_clarita.jpg",
    hover_image: "./san_diego.jpg",
    description: "After my father received a job offer at Fox Corporation based in Century City, my parents decided that it was time to make the move to California and settle down into quiet suburban life. On the outskirts of Los Angeles, 23238 Barnacle Lane has been my family's home for the past 18 years. This is where I have been raised alongside my little brother, Mihir, and my sweet pup, Mylo, and where I have made all my best and worst memories."
  }
]

function populateTimeline() {

  for (const t of TIMELINE_DATA) {
    const template = document.querySelector('.timeline-item-wrapper');
    const clone = template.content.cloneNode(true);

    updateTimelineCard(clone, t);

    const timelineCard = document.querySelector('.timeline');
    timelineCard.appendChild(clone);

  }
}

function updateTimelineCard(timelineCard, t) {
  const timelineYear = timelineCard.querySelector('.timeline__content-title');
  timelineYear.innerText = t.year;

  const timelineLocation = timelineCard.querySelector('.timeline-item');
  timelineLocation.setAttribute('data', t.location);

  const timelineImage = timelineCard.querySelector('.timeline__img');
  timelineImage.src = t.image;

  timelineImage.onmouseover = (e) => {
    const timelineHoverImage = e.target;
    timelineHoverImage.src = t.hover_image;
  }

  timelineImage.onmouseout = (e) => {
    const timelineHoverImage = e.target;
    timelineHoverImage.src = t.image;
  }

  const timelineDescription = timelineCard.querySelector('.timeline__content-desc');
  timelineDescription.innerText = t.description;
}

populateTimeline();
(function ($) {
  $.fn.timeline = function () {
    var selectors = {
      id: $(this),
      item: $(this).find(".timeline-item"),
      activeClass: "timeline-item--active",
      img: ".timeline__img"
    };
    selectors.item.eq(0).addClass(selectors.activeClass);
    selectors.id.css("background-image", "url(" + selectors.item.first().find(selectors.img).attr("src") + ")");

    var itemLength = selectors.item.length;
    $(window).scroll(function () {
      var max, min;
      var pos = $(this).scrollTop();
      selectors.item.each(function (i) {
        min = $(this).offset().top;
        max = ($(this).height() + $(this).offset().top);
        var that = $(this)
        if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
          selectors.item.removeClass(selectors.activeClass);
          selectors.id.css("background-image", "url(" + selectors.item.last().find(selectors.img).attr('src') + ")");
          selectors.item.last().addClass(selectors.activeClass)
        } else if (pos <= max - 40 && pos >= min) {
          selectors.id.css("background-image", "url(" + $(this).find(selectors.img).attr('src') + ")");
          selectors.item.removeClass(selectors.activeClass);
          $(this).addClass(selectors.activeClass);
        }
      });
    });
  }
})(jQuery);
$("#timeline-1").timeline();