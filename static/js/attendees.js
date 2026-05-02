// Webinar attendees data
const attendees = [
  {
    id: 1,
    name: "Oyebram",
    email: "oyelereibrahimabiodun1@gmail.com",
    intro: "I am geospatia analyst as well as a graduate Surveyor who is interested in upgrading my digital footprint.",
    image: "https://drive.google.com/u/0/open?usp=forms_web&id=1Q8zIMCUYRm7CJF4xZKgQS3fe56vFmH8n"
  },
  {
    id: 2,
    name: "JUSTICE NZOKUBA",
    email: "nzokubajbozz42@gmail.com",
    intro: "SIMPLE AND MULTI TALENTED",
    image: "https://drive.google.com/u/0/open?usp=forms_web&id=1wPPc1Akt1qCwBpmDNGf4EwiYrUzawoqv"
  },
  {
    id: 3,
    name: "Owolabi Muhammad jamiu",
    email: "owolabijamiu121@gmail.com",
    intro: "Cool and nice guy",
    image: "https://drive.google.com/u/0/open?usp=forms_web&id=1W2x7S41kQYgVosTAAO297-NvWHH3odgf"
  },
  {
    id: 4,
    name: "Emmanuel Ezonfade",
    email: "emmanuelezonfade07@gmail.com",
    intro: "I am a 200 level Mechatronics Engineering student in Nile University of Nigeria",
    image: "https://drive.google.com/u/0/open?usp=forms_web&id=1Z7NmfZAWIqdNt99x2256bLXo_CxxFQbv"
  },
  {
    id: 5,
    name: "ISARAEL OJO",
    email: "citechris.ng@gmail.com",
    intro: "Hi, I'm Oluwatimilehin, A Software Developer | Specialized in Application Security & Secure Coding | B.Sc. Software Engineering (Candidate) | Open to Internship Opportunities",
    image: "https://drive.google.com/u/0/open?usp=forms_web&id=1QTqfNj7fJIkutYB-berwzUbb7NKKRxk4"
  },
  {
    id: 6,
    name: "Amaechi Confidence",
    email: "aconfidence26@gmail.com",
    intro: "I'm a an Electrical Engineer by profession but I'm tilting towards AI as it's making waves currently",
    image: "https://drive.google.com/u/0/open?usp=forms_web&id=1wBZ9n_i-Iu9-CIQjFqebr_W5GhkZWwPW"
  },
  {
    id: 7,
    name: "Pearl",
    email: "zaynapine@gmail.com",
    intro: "",
    image: "https://drive.google.com/u/0/open?usp=forms_web&id=1Sh6JheGJC4KuRK2_i-UHaSUIVFveC3z3"
  },
  {
    id: 8,
    name: "Sherifdeen Bilal Olamilekan",
    email: "bilalsherifdeen1@gmail.com",
    intro: "An aspiring Pharmaceutical Biochemist and AI Expert",
    image: "https://drive.google.com/u/0/open?usp=forms_web&id=1Ck251Q5YP8Pr32lnxGZaE8N3at4m9Q8J"
  },
  {
    id: 9,
    name: "Damisile Ayoola",
    email: "damisileayoola@gmail.com",
    intro: "I'm a fullstack developer",
    image: "https://drive.google.com/u/0/open?usp=forms_web&id=1XPMGQ1Rb_GnNypu5E2ilO1QDGzMvRzlJ"
  },
  {
    id: 10,
    name: "Ayodele Faith",
    email: "ayodelefaith207@gmail.com",
    intro: "My name is Faith and I am a student at the University of Lagos (UNILAG), Nigeria. I enjoy gaining new knowledge, meeting people, and exploring opportunities that will help me grow academically and build a successful future.",
    image: "https://drive.google.com/u/0/open?usp=forms_web&id=1DpHovh1JoAEzHJQVRpuEXn0cqfRLnbaJ"
  },
  {
    id: 11,
    name: "Raheem Rasheedat Oluwapelumi",
    email: "rasheedatpel@gmail.com",
    intro: "My name is Raheem Rasheedat. I am a pharmacology student with a growing interest in AI and machine learning. I enjoy working with data and using it to solve real-world problems, especially in healthcare.",
    image: "https://drive.google.com/u/0/open?usp=forms_web&id=1vicJdwCNAQjzcJpGZ1CYX-f92KWhZdMf"
  },
  {
    id: 12,
    name: "Huzaifa Ahmad",
    email: "generalhuzaifa7@gmail.com",
    intro: "I am a silent person that want to know more about science and technology.",
    image: "https://drive.google.com/u/0/open?usp=forms_web&id=1Vu1JopcpAXq0NXXgo4mIHklGs3vRlfqQ"
  }
];

function renderAttendeeCarousel() {
  const container = document.getElementById('attendeeCarousel');
  if (!container) return;

  const carouselHTML = `
    <div class="section-header">
      <h2 class="section-title">👥 Meet Our Webinar Attendees</h2>
      <a href="attendees.html" class="section-link">View all →</a>
    </div>
    <div class="attendees-carousel">
      <div class="carousel-container">
        <button class="carousel-btn prev" onclick="moveCarousel(-1)">‹</button>
        <div class="carousel-track" id="carouselTrack">
          ${attendees.map(attendee => `
            <div class="attendee-card" onclick="window.location.href='attendees.html'">
              <div class="attendee-avatar">
                <img src="${attendee.image}" alt="${attendee.name}" onerror="this.src='data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><text y=\".9em\" font-size=\"90\">👤</text></svg>'">
              </div>
              <div class="attendee-info">
                <div class="attendee-name">${attendee.name}</div>
                <div class="attendee-role">${attendee.intro ? attendee.intro.substring(0, 60) + '...' : 'Attendee'}</div>
              </div>
            </div>
          `).join('')}
        </div>
        <button class="carousel-btn next" onclick="moveCarousel(1)">›</button>
      </div>
    </div>
  `;

  container.innerHTML = carouselHTML;
}

function moveCarousel(direction) {
  const track = document.getElementById('carouselTrack');
  if (!track) return;
  
  const cards = track.querySelectorAll('.attendee-card');
  const cardWidth = 280; // card width + gap
  const visibleCards = Math.floor(track.parentElement.offsetWidth / cardWidth);
  const maxScroll = Math.max(0, (cards.length - visibleCards) * cardWidth);
  
  let currentScroll = parseInt(track.style.transform.replace('translateX(-', '').replace('px)', '') || '0');
  currentScroll = Math.max(0, Math.min(maxScroll, currentScroll + (direction * cardWidth * visibleCards)));
  
  track.style.transform = `translateX(-${currentScroll}px)`;
}

function renderAttendeesList() {
  const container = document.getElementById('attendeesList');
  if (!container) return;

  container.innerHTML = `
    <div class="attendees-grid">
      ${attendees.map(attendee => `
        <div class="attendee-card-full">
          <div class="attendee-avatar-large">
            <img src="${attendee.image}" alt="${attendee.name}" onerror="this.src='data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><text y=\".9em\" font-size=\"90\">👤</text></svg>'">
          </div>
          <div class="attendee-details">
            <h3 class="attendee-name-full">${attendee.name}</h3>
            <p class="attendee-email">📧 ${attendee.email}</p>
            <p class="attendee-intro">${attendee.intro || 'No introduction provided'}</p>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}
