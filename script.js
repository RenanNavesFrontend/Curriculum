document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle'); // Botão de toggle do menu
    const navLinks = document.getElementById('navLinks'); // Links de navegação
    const scrollToTopButton = document.getElementById('scrollToTop'); // Botão de rolagem para o topo

    // Verifica se os elementos existem antes de adicionar eventos
   
        // Adiciona o evento de clique no botão de toggle do menu
        menuToggle.addEventListener('click', function () {
            navLinks.classList.toggle('show'); // Alterna a classe 'show' para mostrar ou ocultar os links de navegação
        });
    

    
        // Mostra ou esconde o botão de rolagem para o topo
        window.addEventListener('scroll', function() {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                scrollToTopButton.style.display = 'block'; // Mostra o botão
            } else {
                scrollToTopButton.style.display = 'none'; // Esconde o botão
            }
        });

        // Adiciona um evento de clique para rolar para o topo
        scrollToTopButton.addEventListener('click', function (e) {
            e.preventDefault(); // Previne o comportamento padrão do link
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Rola suavemente para o topo
        });
    
    });
    // Inicializa o idioma padrão
    let currentLanguage = 'en'; // Idioma padrão

    const texts = {
        en: {
            homeA: "Home",
            aboutA: "About",
            projectsA: "Projects",
            contactA: "Contact",
            title: "Hi, I'm Renan",
            headerRole: "Front-End Developer",
            homeDescription: " I am passionate about technology and web development, with experience in HTML, CSS, JavaScript, and React since May 2024. Currently, I am focused on courses and hands-on projects to become an outstanding Front-end Developer. I am starting my degree in Systems Analysis in 2025, with plans for a postgraduate specialization in Web Development. I have a strong interest in creating intuitive and responsive interfaces, as well as solving challenging problems with creative solutions. My journey is marked by enthusiasm for continuous learning and growth, always exploring new technologies and best practices for developing modern applications. My goal is to contribute to projects that positively impact users while expanding my knowledge and being part of innovative and collaborative teams.",
            btResume: "My resume",
            btContact: "Get in touch",
            aboutHeader: "About me",
            aboutRole: "I'm a passionate software developer looking for my first opportunity!",
            aboutDescription: "Hi! I'm a beginner front-end developer learning to build responsive and interactive websites using HTML5, CSS3, and JavaScript. I'm familiar with tools like Git/GitHub and exploring CSS frameworks and responsive design. Currently, I'm improving my skills in advanced JavaScript and UX/UI design basics. I'm passionate about creating user-friendly interfaces and open to learning and collaboration...",
            summaryText: "My summary",
            projectsTitle: "Projects",
            projectsHeader: "Take a look at my highlighted projects!",
            faq: "FAQ",
            faqP: "A FAQ (Frequently Asked Questions) is a list of common questions and answers about a topic, designed to provide quick and practical clarification.", 
            form: "Form",
            formP: "A form is an HTML element used to collect user input and submit data to a server for processing.",
            ld: "Landing Page",
            ldP: "A landing page is a single web page aimed at capturing leads or driving specific actions.",
            tip: "Tip Calculator",
            tipP: "A tip calculator helps users determine the tip amount based on the bill total and chosen percentage.",
            see: "See all",
            cH: "Contact",
            name: "Name",
            email: "E-mail",
            message: "Your message",
            contactHeader: "Enjoyed my work? Let's work together!",
            contactDescription: "I’m always up for a chat. Pop me an email at renan.naves.frontend@gmail.com or give me a shout on social media.",
            cM: "Your message",
            figma: "Renan Naves 2024 - Layout inspired by Figma templates"
        },
        pt: {
            homeA: "Início",
            aboutA: "Sobre",
            projectsA: "Projetos",
            contactA: "Contato",
            title: "Oi, eu sou o Renan",
            headerRole: "Desenvolvedor Front-End",
            homeDescription: "Sou apaixonado por tecnologia e desenvolvimento web, com experiência em HTML, CSS, JavaScript e React desde maio de 2024. Atualmente, dedico-me a cursos e projetos práticos para me tornar um desenvolvedor Front-end de excelência. Estou começando minha graduação em Análise de Sistemas em 2025, com planos de pós-graduação em Desenvolvimento Web. Tenho grande interesse em criar interfaces intuitivas e responsivas, além de resolver problemas desafiadores com soluções criativas. Minha trajetória é marcada pelo entusiasmo em aprender e evoluir constantemente, sempre buscando novas tecnologias e melhores práticas para o desenvolvimento de aplicações modernas. Meu objetivo é contribuir para projetos que impactem positivamente os usuários e que ampliem meus conhecimentos enquanto faço parte de equipes inovadoras e colaborativas.",
            btResume: "Meu curriculo",
            btContact: "Entre em contato",
            aboutHeader: "Sobre mim",
            aboutRole: "Sou um desenvolvedor de software apaixonado em busca da minha primeira oportunidade!",
            aboutDescription: "Olá! Sou um desenvolvedor front-end iniciante aprendendo a criar sites responsivos e interativos usando HTML5, CSS3 e JavaScript. Tenho familiaridade com ferramentas como Git/GitHub e estou explorando frameworks CSS e design responsivo. Atualmente, estou aprimorando minhas habilidades em JavaScript avançado e fundamentos de UX/UI design. Sou apaixonado por criar interfaces amigáveis para o usuário e estou aberto a aprender e colaborar...",
            summaryText: "Meu resumo",
            projectsTitle: "Projetos",
            projectsHeader: "Dê uma olhada nos meus projetos em destaque!",
            faq: "FAQ",
            faqP: "Uma FAQ (Perguntas Frequentes) é uma lista de perguntas e respostas comuns sobre um determinado assunto, projetada para fornecer esclarecimentos rápidos e práticos.",
            form: "Formulário",
            formP: "Um formulário é um elemento HTML usado para coletar dados do usuário e enviar essas informações para um servidor para processamento.",
            ld: "Página de destino",
            ldP: "Uma página de destino é uma única página da web destinada a capturar leads ou incentivar ações específicas.",
            tip: "Calculadora de gorjetas",
            tipP: "Uma calculadora de gorjetas ajuda os usuários a determinar o valor da gorjeta com base no total da conta e na porcentagem escolhida.",
            see: "Ver todos",
            cH: "Contato",
            name: "Nome",
            email: "E-mail",
            message: "Sua menssagem",
            contactHeader: "Gostou do meu trabalho? Vamos trabalhar juntos!",
            contactDescription: "Estou sempre disponível para uma conversa. Me envie um e-mail para renan.naves.frontend@gmail.com ou me chame nas redes sociais.",
            cM: "Envie uma menssagem",
            figma: "Renan Naves 2024 - Layout inspirado por templates do Figma"
        }
    };

    // Prevenir o comportamento padrão dos links
    document.getElementById('ptLink').addEventListener('click', function(event) {
        event.preventDefault(); // Impede o reload
    });

    document.getElementById('enLink').addEventListener('click', function(event) {
        event.preventDefault(); // Impede o reload
    });
    function toggleLanguage() {
        if (currentLanguage === 'en') {
            currentLanguage = 'pt'; // Muda para português
            document.getElementById('homeA').textContent = texts.pt.homeA
            document.getElementById('aboutA').textContent = texts.pt.aboutA
            document.getElementById('projectsA').textContent = texts.pt.projectsA
            document.getElementById('contactA').textContent = texts.pt.contactA
            document.getElementById('headerName').textContent = texts.pt.title;
            document.getElementById('headerRole').textContent = texts.pt.headerRole;
            document.getElementById('btResume').textContent = texts.pt.btResume;
            document.getElementById('btContact').textContent = texts.pt.btContact;
            document.getElementById('homeDescription').textContent = texts.pt.homeDescription;
            document.getElementById('aboutHeader').textContent = texts.pt.aboutHeader;
            document.getElementById('aboutRole').textContent = texts.pt.aboutRole;
            document.getElementById('aboutDescription').textContent = texts.pt.aboutDescription;
            document.getElementById('summaryText').textContent = texts.pt.summaryText;
            document.getElementById('projectsHeader').textContent = texts.pt.projectsHeader;
            document.getElementById('faq').textContent = texts.pt.faq;
            document.getElementById('faqP').textContent = texts.pt.faqP;
            document.getElementById('form').textContent = texts.pt.form;
            document.getElementById('formP').textContent = texts.pt.formP;
            document.getElementById('ld').textContent = texts.pt.ld;
            document.getElementById('ldP').textContent = texts.pt.ldP;
            document.getElementById('tip').textContent = texts.pt.tip;
            document.getElementById('tipP').textContent = texts.pt.tipP;
            document.getElementById('see').textContent = texts.pt.see;
            document.getElementById('cH').textContent = texts.pt.cH;
            document.getElementById('contactHeader').textContent = texts.pt.contactHeader;
            document.getElementById('contactDescription').textContent = texts.pt.contactDescription;
            document.getElementById('name').placeholder = texts.pt.name; // Exemplo para um campo de nome
            document.getElementById('email').placeholder = texts.pt.email; // Exemplo para um campo de nome
            document.getElementById('message').placeholder = texts.pt.message; // Exemplo para um campo de nome
            document.getElementById('cM').textContent = texts.pt.cM;
            document.getElementById('ptImage').style.display = 'none'; // Esconde a imagem PT
            document.getElementById('enImage').style.display = 'inline'; // Mostra a imagem EN
            document.getElementById('figma').textContent = texts.pt.figma;

        } else {
            currentLanguage = 'en'; // Muda para inglês
            document.getElementById('homeA').textContent = texts.en.homeA
            document.getElementById('aboutA').textContent = texts.en.aboutA
            document.getElementById('projectsA').textContent = texts.en.projectsA
            document.getElementById('contactA').textContent = texts.en.contactA
            document.getElementById('headerName').textContent = texts.en.title;
            document.getElementById('headerRole').textContent = texts.en.headerRole;
            document.getElementById('btResume').textContent = texts.en.btResume;
            document.getElementById('btContact').textContent = texts.en.btContact;
            document.getElementById('homeDescription').textContent = texts.en.homeDescription;
            document.getElementById('aboutHeader').textContent = texts.en.aboutHeader;
            document.getElementById('aboutRole').textContent = texts.en.aboutRole;
            document.getElementById('aboutDescription').textContent = texts.en.aboutDescription;
            document.getElementById('summaryText').textContent = texts.en.summaryText;
            document.getElementById('projectsHeader').textContent = texts.en.projectsHeader;
            document.getElementById('faq').textContent = texts.en.faq;
            document.getElementById('faqP').textContent = texts.en.faqP;
            document.getElementById('form').textContent = texts.en.form;
            document.getElementById('formP').textContent = texts.en.formP;
            document.getElementById('ld').textContent = texts.en.ld;
            document.getElementById('ldP').textContent = texts.en.ldP;
            document.getElementById('tip').textContent = texts.en.tip;
            document.getElementById('tipP').textContent = texts.en.tipP;
            document.getElementById('see').textContent = texts.en.see;
            document.getElementById('cH').textContent = texts.en.cH;
            document.getElementById('contactHeader').textContent = texts.en.contactHeader;
            document.getElementById('contactDescription').textContent = texts.en.contactDescription;
            document.getElementById('name').placeholder = texts.en.name; // Exemplo para um campo de nome
            document.getElementById('email').placeholder = texts.en.email; // Exemplo para um campo de nome
            document.getElementById('message').placeholder = texts.en.message; // Exemplo para um campo de nome
            document.getElementById('cM').textContent = texts.en.cM;
            document.getElementById('ptImage').style.display = 'inline'; // Mostra a imagem PT
            document.getElementById('enImage').style.display = 'none'; // Esconde a imagem EN
            document.getElementById('figma').textContent = texts.pt.figma;
        }
    
};
// Função para abrir o modal e carregar a imagem
function openModal(imageSrc) {
    const modal = document.getElementById('modal');
    const overlay = document.getElementById('modal-overlay');
    const modalImage = document.getElementById('modal-image');
    
    // Atualiza a imagem do modal
    modalImage.src = imageSrc;
    
    // Exibe o modal e a sobreposição
    overlay.style.display = 'flex';
}

// Função para fechar o modal
function closeModal() {
    const overlay = document.getElementById('modal-overlay');
    
    // Oculta o modal e a sobreposição
    overlay.style.display = 'none';
}

// Adicionar esta função
function handleCardClick(element, event) {
    const url = element.getAttribute('data-url');
    if (url) {
        window.location.href = url;
    } else {
        openModal([element.querySelector('img').src]);
    }
}
