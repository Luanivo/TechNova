document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Impede o comportamento padrão do link

        // Navegar para a seção apropriada ou página
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            // Se o link é uma âncora
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            // Se o link leva a outra página
            window.location.href = targetId;
        }
    });
});
