let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  menuIcon.classList.toggle('bx-menu'); // Optional: to toggle back
  navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  let top = window.scrollY;

  sections.forEach(sec => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
      });
    }
  });

  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  menuIcon.classList.remove('bx-x');
  menuIcon.classList.add('bx-menu');
  navbar.classList.remove('active');
};

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200

});


ScrollReveal().reveal('.heading', { origin: 'top' });
ScrollReveal().reveal('.skills-category, .projects-content, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.about-img', { origin: 'left' });
ScrollReveal().reveal('.about-content', { origin: 'right' });

const typed = new Typed('.multi-text', {
  strings: ['Web Developer', 'Web Developer', 'Web Developer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

// Form submission
document.querySelector('.msg-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  // Create mailto link
  const subject = `Message from ${name} (${email})`;
  const body = encodeURIComponent(message);
  const mailtoLink = `mailto:gopivarshan21@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  
  // Open default email client
  window.location.href = mailtoLink;
  
  // Show confirmation message
  const confirmation = document.createElement('div');
  confirmation.className = 'msg-alert';
  confirmation.innerHTML = `
    <p>> Message queued for transmission...</p>
    <p>> Opening mail client...</p>
  `;
  this.parentNode.insertBefore(confirmation, this.nextSibling);
  
  // Reset form after delay
  setTimeout(() => {
    this.reset();
    confirmation.remove();
  }, 3000);
});