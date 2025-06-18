function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

// THEME TOGGLE
const themeToggle = document.getElementById('theme-toggle');
const themeToggleMobile = document.getElementById('theme-toggle-mobile');
const body = document.body;

function setTheme(isDark) {
  if (isDark) {
    body.classList.add('dark-theme');
    if(themeToggle) themeToggle.textContent = '☀️';
    if(themeToggleMobile) themeToggleMobile.textContent = '☀️';
  } else {
    body.classList.remove('dark-theme');
    if(themeToggle) themeToggle.textContent = '🌙';
    if(themeToggleMobile) themeToggleMobile.textContent = '🌙';
  }
}

function toggleTheme() {
  const isDark = !body.classList.contains('dark-theme');
  setTheme(isDark);
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

if(themeToggle) themeToggle.addEventListener('click', toggleTheme);
if(themeToggleMobile) themeToggleMobile.addEventListener('click', toggleTheme);

// On load, set theme from localStorage
const savedTheme = localStorage.getItem('theme');
if(savedTheme === 'dark') setTheme(true);
else setTheme(false);

// PROJECT DETAILS MODAL FUNCTIONALITY
(function() {
  const projectData = [
    {
      title: 'New Year Sales Email Design',
      img: './assets/New yr.jpeg',
      description: 'A truly New Year Sales Email Design.',
      tech: ['Klaviyo', 'Mailchimp', 'Mailerlite'],
      live: 'https://docs.google.com/document/d/19xtgymzl48W4ge5jF3pWPo5X3ThjSOf408q3BW2zG6g/edit?usp=sharing'
    },
    {
      title: 'Pointblank Email Design',
      img: './assets/pointblank.jpeg',
      description: 'A modern Pointblank Email Design.',
      tech: ['Klaviyo', 'Sendinblue', 'Brevo', 'Convertkit', 'Mailerlite', 'Mailchimp', 'Privy', 'Active campaign'],
      live: 'https://docs.google.com/document/d/1Y9MfXPszdqCqMcuArMa9X98ahcGelJGa66dtAumUfgI/edit?usp=sharingS'
    },
    {
      title: 'Nescafe Gold Email Design',
      img: './assets/Nescafe gold.jpeg',
      description: 'An Nescafe Gold Email Design.',
      tech: ['Active campaign', 'Brevo', 'Klaviyo', 'Mailchimp', 'Convertkit', 'Mailerlite'],
      live: 'https://docs.google.com/document/d/1WZJt2HG1Nf50NZ1XAu9Vj4IlpRwsgYSBksZ6_ZUaN3s/edit?usp=sharing'
    },
    {
      title: 'Social Media Management',
      img: './assets/Soc media 1.png',
      description: 'A fun and interactive Social Media Management.',
      tech: ['Active campaign', 'Brevo', 'Mailchimp'],
      live: 'https://eu.docworkspace.com/d/sIBmi2ZXmAa3mxsIG?sa=601.1037'
    },
    {
      title: 'Social Media Content',
      img: './assets/soc media 2.jpg',
      description: 'A browser-based Social Media Content.',
      tech: ['Klaviyo', 'Active campaign', 'Brevo'],
      github: 'https://github.com/SorcererChiragsingh/Web-Development-Projects/tree/main/25-Drawing%20App',
      live: 'https://eu.docworkspace.com/d/sIJmi2ZXmAbbnxsIG?sa=601.1037S'
    },
    {
      title: 'LeadGeneration',
      img: './assets/lead.png',
      description: 'A LeadGeneration for Automobile company.',
      tech: ['Klaviyo', 'Mailchimp', 'Mailerlite'],
      live: 'https://docs.google.com/document/d/1axwZThLCnR0WAgyI5_fNLjlFE06v0J9igCAV2mmN10A/edit?usp=sharing'
    },
    {
      title: 'Skincare Email Design',
      img: './assets/email-1.jpg',
      description: 'A Skincare Email Design for a shopify store owner.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      live: 'https://docs.google.com/document/d/107RAVDtASjxr__nLZCB97zqu0Nqqxv7ko2mtgHC2XTw/edit?usp=sharing'
    },
    {
      title: 'Product Email Design',
      img: './assets/email 3.png',
      description: 'A Product Email Design.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      live: 'https://docs.google.com/document/d/10BNIdKy-mGGN1SybGAwmkhwB15SAheJgeY6-10tVEeQ/edit?usp=sharing'
    },
    {
      title: 'Event Invites Email Design',
      img: './assets/email 2.png',
      description: 'A Event Invites Email Design.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      live: 'https://docs.google.com/document/d/1IK9IXx8MpmbFBQ-MzOUpd7VRbbuaK518j0vBONPqqjQ/edit?usp=sharing'
    },
    // ...add more projects as needed...
  ];

  document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    const closeModal = document.querySelector('.close-modal');
    // Use only visible project cards (not commented out ones)
    const cards = Array.from(document.querySelectorAll('.project-card')).filter(card => card.offsetParent !== null);

    function openProjectModal(index) {
      const project = projectData[index];
      if (!project) return;
      modalBody.innerHTML = `
        <h2>${project.title}</h2>
        <img src="${project.img}" alt="${project.title}" style="width:100%;border-radius:1rem;margin:1rem 0;" />
        <p style="margin-bottom:1rem;">${project.description}</p>
        <strong>Tech Stack:</strong>
        <ul style="margin-bottom:1rem;">${project.tech.map(t => `<li>${t}</li>`).join('')}</ul>
        <div style="display:flex;gap:1rem;flex-wrap:wrap;">
          <a href="${project.github}" target="_blank" class="btn btn-color-2">Github</a>
          <a href="${project.live}" target="_blank" class="btn btn-color-2">Live Demo</a>
        </div>
      `;
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }

    cards.forEach((card, idx) => {
      card.style.cursor = 'pointer';
      card.addEventListener('click', function(e) {
        if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') return;
        openProjectModal(idx);
      });
    });

    if (closeModal) {
      closeModal.onclick = function() {
        modal.style.display = 'none';
        document.body.style.overflow = '';
      };
    }
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
      }
    });
  });
})();
