// Capturando os elementos do menu

const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const menuList = document.querySelector('.menu-list');

mobileMenuBtn.addEventListener('click', () => {
    menuList.classList.toggle('show');
});


const menuItems = document.querySelectorAll('.menu a');

// Adicionando evento de clique em cada item do menu
menuItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault(); // Evita o comportamento padrão do clique

    const target = item.getAttribute('href'); // Obtém o valor do atributo href

    // Removendo a classe "active" de todos os itens do menu
    menuItems.forEach(item => {
      item.classList.remove('active');
    });

    // Adicionando a classe "active" ao item do menu clicado
    item.classList.add('active');

    // Exibindo o conteúdo relacionado ao item do menu clicado
    const content = document.querySelector(target);
    content.style.display = 'block';

    // Ocultando os outros conteúdos
    const otherContents = document.querySelectorAll('.content div:not(' + target + ')');
    otherContents.forEach(content => {
      content.style.display = 'none';
    });
  });
});
