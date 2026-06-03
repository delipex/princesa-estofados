// Navbar Scroll Background Transition
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle (Basic Placeholder)
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        // Toggle feature if extended to a full drawer
        alert('Menu móvel pode ser expandido adicionando classes utilitárias no CSS.');
    });
}

// Form Submission to WhatsApp API
document.getElementById('whatsappForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Form variables
    const name = document.getElementById('name').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;
    
    // CONFIGURAÇÃO DO WHATSAPP
    // Substitua pelo número real da Princesa Estofados com o código do país e DDD
    const phoneNumber = "5575999999999"; 
    
    // Formatting message
    let textMessage = `Olá, Princesa Estofados! Gostaria de um orçamento.%0A%0A`;
    textMessage += `*Nome:* ${name}%0A`;
    textMessage += `*Serviço:* ${service}%0A`;
    if(message.trim() !== "") {
        textMessage += `*Detalhes:* ${message}`;
    }
    
    // Generating URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${textMessage}`;
    
    // Opening WhatsApp API in a new window
    window.open(whatsappUrl, '_blank');
});
