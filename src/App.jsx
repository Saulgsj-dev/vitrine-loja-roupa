// src/App.jsx
import React from 'react';

const App = () => {
  const products = [
    {
      id: 1,
      name: "Camisa Básica Branca",
      price: "R$ 49,90",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      name: "Calça Jeans Slim",
      price: "R$ 129,90",
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 3,
      name: "Camisa",
      price: "R$ 89,90",
      image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 4,
      name: "Ténis Esportivo branco",
      price: "R$ 199,90",
      image: "https://images.unsplash.com/photo-1551489186-cf8726f514f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 5,
      name: "Calça Jeans bege",
      price: "R$ 69,90",
      image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 6,
      name: "Conjunto Amarelo",
      price: "R$ 59,90",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 7,
      name: "Tênis Casual",
      price: "R$ 149,90",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 8,
      name: "Blusa Cinza",
      price: "R$ 79,90",
      image: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg",
    },
  ];

  const testimonials = [
    {
      name: "Juliana M.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "Amei a qualidade! Recebi antes do prazo e o tecido é incrível. Já estou na segunda compra!",
    },
    {
      name: "Ricardo T.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "Atendimento nota 10! Tirei dúvidas pelo WhatsApp e me ajudaram a escolher o tamanho ideal.",
    },
    {
      name: "Fernanda L.",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      text: "Estilo moderno, preços justos e entrega rápida. Minha nova loja favorita!",
    },
  ];

  const advantages = [
    {
      icon: "🚚",
      title: "Entrega Rápida",
      desc: "Receba em até 3 dias úteis em todo o Brasil.",
    },
    {
      icon: "💳",
      title: "Parcelamento",
      desc: "Até 6x sem juros no cartão ou 10% OFF no Pix.",
    },
    {
      icon: "🔄",
      title: "Troca Fácil",
      desc: "7 dias para trocar sem burocracia. Satisfação garantida!",
    },
  ];

  const handleWhatsAppClick = (productName) => {
    const message = `Olá, STYLOU! Gostaria de comprar: ${productName}`;
    const url = `https://wa.me/55SEUNUMERO?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

   return (
    <div className="min-h-screen bg-light font-sans">
      {/* Hero Section */}
      <section 
        className="h-screen bg-cover bg-center flex items-center justify-center text-center text-white relative"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg leading-tight">
            STYLOU
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light drop-shadow-md max-w-2xl mx-auto">
            Moda que te encaixa perfeitamente. Estilo, conforto e preço justo — tudo em um só lugar.
          </p>
          <button 
            onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary hover:bg-red-500 text-white font-bold py-4 px-10 rounded-full transition duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            Descubra a Coleção
          </button>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-6 md:px-12 bg-white">
        <h2 className="text-4xl font-bold text-center text-dark mb-4">Nossos <span className="text-primary">Produtos</span></h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Cada peça foi pensada para você se sentir confiante e estilosa(o) no dia a dia.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg text-dark mb-2">{product.name}</h3>
                <p className="text-primary font-bold text-xl mb-4">{product.price}</p>
                <button
                  onClick={() => handleWhatsAppClick(product.name)}
                  className="w-full bg-secondary hover:bg-teal-500 text-white py-3 px-4 rounded-lg font-medium transition duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                  Comprar via WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-dark mb-4">O que nossos <span className="text-secondary">clientes dizem</span></h2>
          <p className="text-center text-gray-600 mb-16">Confira o que quem já comprou tem a dizer sobre a STYLOU.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="font-bold text-dark mb-2">{testimonial.name}</h4>
                <p className="text-gray-600 italic">“{testimonial.text}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-dark mb-4">Por que escolher a <span className="text-primary">STYLOU?</span></h2>
          <p className="text-gray-600 mb-16">Tudo pensado para sua melhor experiência de compra.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {advantages.map((adv, index) => (
              <div key={index} className="group">
                <div className="text-6xl mb-4 group-hover:scale-110 transition duration-300 inline-block">
                  {adv.icon}
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{adv.title}</h3>
                <p className="text-gray-600">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promoção Relâmpago */}
      <section className="py-20 bg-gradient-to-r from-primary to-red-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">🔥 PROMOÇÃO RELÂMPAGO 🔥</h2>
          <p className="text-xl mb-8">Só hoje: <span className="font-bold text-2xl">15% OFF em toda loja!</span></p>
          <p className="mb-8 opacity-90">Use o cupom: <span className="font-mono bg-white text-red-600 px-3 py-1 rounded font-bold">STYLOU15</span></p>
          <p className="mb-10 text-sm opacity-80">⏰ Oferta válida por tempo limitado. Corra antes que acabe!</p>
          <button
            onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-primary font-bold py-4 px-10 rounded-full hover:bg-gray-100 transform hover:scale-105 transition duration-300 shadow-lg"
          >
            Aproveitar Agora
          </button>
        </div>
      </section>

      {/* Footer com créditos profissionais */}
      <footer className="bg-dark text-light py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-2">STYLOU</h3>
          <p className="mb-6 opacity-80">Moda que te encaixa perfeitamente.</p>
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="hover:text-secondary transition">Instagram</a>
            <a href="#" className="hover:text-secondary transition">Facebook</a>
            <a href="#" className="hover:text-secondary transition">WhatsApp</a>
          </div>

          {/* Créditos profissionais */}
          <div className="border-t border-gray-700 pt-6 mt-8">
            <p className="text-xs opacity-60 mb-2">
              ✨ Modelo de vitrine criado por <strong>Saul Developer</strong> — parte do Catálogo de Sites Prontos.
            </p>
            <a 
              href="https://seucatalogo.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary hover:underline text-sm font-medium"
            >
              → Ver mais modelos no catálogo
            </a>
          </div>

          <p className="text-sm opacity-75 mt-6">
            © {new Date().getFullYear()} STYLOU. Todos os direitos reservados.
          </p>
          <p className="text-xs mt-2 opacity-50">
            Feito com ❤️ para você brilhar com estilo.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;