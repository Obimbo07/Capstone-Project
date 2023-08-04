const popup = document.getElementById('navMenu');

function openMenu() {
  popup.style.display = (popup.style.display === 'block') ? 'none' : 'block';
}
openMenu();
function closeMenu() {
  popup.style.display = (popup.style.display === 'none') ? 'block' : 'none';
}
closeMenu();
// speakers
document.addEventListener('DOMContentLoaded', () => {
  const speakers = [
    {
      index: 0,
      nameImg: 'img/speaker_00.png',
      name: 'Yochai Benkler',
      title: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
      Description: 'Austin developed the whole company to support the STEM industry',
    },
    {
      index: 1,
      nameImg: 'img/speaker_01.png',
      name: 'Kilnam Chon',
      title: '',
      Description: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame',
    },
    {
      index: 2,
      nameImg: 'img/speaker_02.png',
      name: 'SohYeong Noh',
      title: 'Director of Art Centre Nabi and a board member of CC Korea',
      Description: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
    },
    {
      index: 3,
      nameImg: 'img/speaker_03.png',
      name: 'Julia Leda',
      title: 'President of Young Pirates of Europe',
      Description: 'European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July',
    },
    {
      index: 4,
      nameImg: 'img/speaker_04.png',
      name: 'Lila tretikov',
      title: 'Executive Director of the Wikimedia Foundation',
      Description: 'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languag-es and used by nearly half a billion people around the world every month.',
    },
    {
      index: 5,
      nameImg: 'img/speaker_05.png',
      name: 'Ryan Merkley',
      title: 'CEO of Creativve Commons, ex COO of the Mozilla Foundation',
      Description: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source move-ment',
    },
  ];

  const speakersSection = document.getElementById('speakers-section');
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < speakers.length; i++) {
    const speaker = speakers[i];
    const speakerHTML = `
      <div class='speaker'>
           <img class="speaker-img" src="${speaker.nameImg}" alt="Speaker-img">
           <div class="speaker-info">
               <h6 class="speaker-name">${speaker.name}</h6>
               <h3 class="speaker-title">${speaker.title}</h3>
               <hr class=name-body>
               <p class="speaker-description">${speaker.Description}</p>
           </div>
           
        </div>
  `;
    speakersSection.innerHTML += speakerHTML;
  }
});