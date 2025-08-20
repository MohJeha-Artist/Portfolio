document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);
  
    document.addEventListener('mousemove', e => {
      cursor.style.top = e.clientY + 'px';
      cursor.style.left = e.clientX + 'px';
    });
  
    const interactiveElements = ['a', 'button', '[onclick]', 'input', 'textarea'];
    document.querySelectorAll(interactiveElements.join(',')).forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('scale'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('scale'));
    });
  });
  