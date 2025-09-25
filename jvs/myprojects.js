document.addEventListener('DOMContentLoaded', () => {


  const animatedElements = document.querySelectorAll('h1, h3, p, ul, img, video');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        entry.target.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      }
    });
  }, { threshold: 0.2 });

  animatedElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(50px)';
    observer.observe(el);
  });

  
  const media = document.querySelectorAll('img, video');
  media.forEach(item => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', () => {
      const overlay = document.createElement('div');
      overlay.style.position = 'fixed';
      overlay.style.top = 0;
      overlay.style.left = 0;
      overlay.style.width = '100%';
      overlay.style.height = '100%';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.85)';
      overlay.style.display = 'flex';
      overlay.style.alignItems = 'center';
      overlay.style.justifyContent = 'center';
      overlay.style.opacity = 0;
      overlay.style.transition = 'opacity 0.5s ease';
      overlay.style.zIndex = 1000;

      const clone = item.cloneNode(true);
      clone.style.width = '80%';
      clone.style.height = 'auto';
      clone.style.border = '4px solid #2563eb';
      clone.style.borderRadius = '12px';
      clone.style.boxShadow = '0 10px 20px rgba(0,0,0,0.5)';
      overlay.appendChild(clone);

      document.body.appendChild(overlay);
      requestAnimationFrame(() => overlay.style.opacity = 1);

      overlay.addEventListener('click', () => {
        overlay.style.opacity = 0;
        setTimeout(() => document.body.removeChild(overlay), 500);
      });
    });
  });

  
  const listItems = document.querySelectorAll('ul li');
  listItems.forEach(item => {
    item.style.transition = 'transform 0.3s, background 0.3s, box-shadow 0.3s';
    item.addEventListener('mouseover', () => {
      item.style.backgroundColor = '#d0f2fe';
      item.style.transform = 'scale(1.05)';
      item.style.boxShadow = '0 6px 15px rgba(0,0,0,0.2)';
    });
    item.addEventListener('mouseout', () => {
      item.style.backgroundColor = '#fff';
      item.style.transform = 'scale(1)';
      item.style.boxShadow = '0 3px 8px rgba(0,0,0,0.1)';
    });
  });


  const links = document.querySelectorAll('a[href^="https://instagram.com"], a[href^="tel:"]');
  links.forEach(link => {
    link.title = "اضغط للتواصل معي";
    link.style.transition = 'transform 0.2s';
    link.addEventListener('mouseover', () => link.style.transform = 'scale(1.1)');
    link.addEventListener('mouseout', () => link.style.transform = 'scale(1)');
  });

  
  const homeLink = document.querySelector('a[href="Home.html"]');
  if(homeLink){
    homeLink.addEventListener('click', (e) => {
      e.preventDefault();
      const msgBox = document.createElement('div');
      msgBox.textContent = '🔙 سيتم الانتقال إلى الصفحة الرئيسية...';
      msgBox.style.position = 'fixed';
      msgBox.style.top = '20px';
      msgBox.style.left = '50%';
      msgBox.style.transform = 'translateX(-50%)';
      msgBox.style.backgroundColor = '#2563eb';
      msgBox.style.color = '#fff';
      msgBox.style.padding = '15px 25px';
      msgBox.style.borderRadius = '10px';
      msgBox.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
      msgBox.style.opacity = 0;
      msgBox.style.transition = 'opacity 0.5s ease';
      document.body.appendChild(msgBox);
      requestAnimationFrame(() => msgBox.style.opacity = 1);

      setTimeout(() => {
        msgBox.style.opacity = 0;
        setTimeout(() => {
          document.body.removeChild(msgBox);
          window.location.href = 'Home.html';
        }, 500);
      }, 1500);
    });
  }

});