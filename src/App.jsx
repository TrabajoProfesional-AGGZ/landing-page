import { useState } from 'react';
import { ShieldCheck, Smartphone, TrendingUp, MessageSquare, ChevronRight, CheckCircle2, Loader2, CheckCircle, XCircle } from 'lucide-react';

export default function App() {
  const [formData, setFormData] = useState({ club: '', email: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://formsubmit.co/ajax/sociounido@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `🚨 NUEVA SOLICITUD DE DEMO: ${formData.club}`,
          Club: formData.club,
          Email_Contacto: formData.email,
          Mensaje: `El club "${formData.club}" ha solicitado una demo a través de la Landing Page. Por favor, contactarse al email proporcionado.`,
          _template: 'box'
        }),
      });

      if (!response.ok) throw new Error('Error al enviar el correo');

      setStatus('success');
      setFormData({ club: '', email: '' });

      setTimeout(() => setStatus('idle'), 5000);

    } catch (error) {
      console.error(error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg font-sans selection:bg-brand selection:text-white">
      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 bg-dark-bg/80 backdrop-blur-md border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/pwa-512x512.png" alt="SocioUnido Logo" className="h-8 w-8" />
            <span className="text-xl font-bold tracking-tight">SocioUnido</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            <a href="#caracteristicas" className="hover:text-white transition-colors">Características</a>
            <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="#contacto" className="hidden md:flex items-center justify-center bg-brand hover:bg-brand-dark text-white text-sm font-semibold py-2 px-5 rounded-full transition-all hover:scale-105">
              Solicitar Demo
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand text-sm font-medium mb-8 border border-brand/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
            </span>
            La plataforma definitiva para clubes
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
            Digitalizá tu club, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-brand">
              fidelizá a tus socios.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            SocioUnido unifica el control de accesos, el cobro de cuotas, la reserva de instalaciones y la comunicación en una sola plataforma inteligente.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contacto" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-black text-lg font-semibold py-4 px-8 rounded-full transition-transform hover:scale-105">
              Hablar con un asesor <ChevronRight size={20} />
            </a>
            <a href="#caracteristicas" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-dark-surface border border-dark-border text-white text-lg font-semibold py-4 px-8 rounded-full transition-colors hover:bg-dark-border">
              Descubrir más
            </a>
          </div>
        </div>
      </section>

      {/* CARACTERÍSTICAS */}
      <section id="caracteristicas" className="py-24 bg-dark-surface border-y border-dark-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Todo lo que tu institución necesita</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Módulos diseñados específicamente para resolver los problemas reales del día a día en la gestión deportiva.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={<Smartphone />}
              title="Carnet Digital"
              desc="Acceso mediante QR dinámico offline. Seguro, rápido y siempre en el celular del socio."
            />
            <FeatureCard 
              icon={<TrendingUp />}
              title="Gestión Financiera"
              desc="Cobro automatizado de cuotas, pasarela de pagos integrada e historial de morosidad."
            />
            <FeatureCard 
              icon={<ShieldCheck />}
              title="Reservas y Tienda"
              desc="Autogestión de turnos para canchas, inscripciones a disciplinas y compra de indumentaria."
            />
            <FeatureCard 
              icon={<MessageSquare />}
              title="Bot Conversacional"
              desc="Atención al socio 24/7 vía WhatsApp y Telegram para resolver dudas al instante."
            />
          </div>
        </div>
      </section>

      {/* CALL TO ACTION / CONTACTO */}
      <section id="contacto" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand/5 rounded-[100px] blur-3xl max-w-5xl mx-auto" />
        <div className="max-w-3xl mx-auto relative z-10 text-center bg-dark-surface border border-dark-border p-12 rounded-3xl shadow-2xl">
          <h2 className="text-4xl font-bold mb-6">¿Listo para dar el salto?</h2>
          <p className="text-gray-400 mb-10 text-lg">
            Dejanos tus datos y nos pondremos en contacto para mostrarte cómo SocioUnido puede adaptarse a tu club.
          </p>
          
          <form className="flex flex-col gap-4 max-w-md mx-auto text-left" onSubmit={handleSubmit}>
            <input 
              type="text" 
              required
              placeholder="Nombre de tu Club" 
              value={formData.club}
              onChange={(e) => setFormData({...formData, club: e.target.value})}
              disabled={status === 'loading'}
              className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors disabled:opacity-50" 
            />
            <input 
              type="email" 
              required
              placeholder="Correo electrónico institucional" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              disabled={status === 'loading'}
              className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors disabled:opacity-50" 
            />
            
            <button 
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className={`w-full font-bold text-lg py-4 rounded-lg mt-2 transition-all flex justify-center items-center gap-2
                ${status === 'success' ? 'bg-emerald-600 text-white' : 
                  status === 'error' ? 'bg-red-600 text-white' : 
                  'bg-brand hover:bg-brand-dark text-white hover:scale-[1.02]'}`}
            >
              {status === 'idle' && 'Enviar solicitud'}
              {status === 'loading' && <><Loader2 className="animate-spin" size={24} /> Procesando...</>}
              {status === 'success' && <><CheckCircle size={24} /> ¡Solicitud enviada!</>}
              {status === 'error' && <><XCircle size={24} /> Ocurrió un error</>}
            </button>
          </form>
          
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand"/> Sin costos de instalación</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand"/> Soporte técnico 24/7</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-dark-border py-12 text-center text-gray-500 text-sm">
        <div className="flex items-center justify-center gap-2 mb-4">
          <img src="/pwa-512x512.png" alt="SocioUnido Logo" className="h-8 w-8" />
          <span className="font-bold text-white text-lg">SocioUnido</span>
        </div>
        <p>© 2026 SocioUnido. Plataforma de gestión y fidelización deportiva.</p>
        <p className="mt-2">Buenos Aires, Argentina.</p>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="p-6 rounded-2xl bg-dark-bg border border-dark-border hover:border-brand/50 transition-all hover:-translate-y-1 group">
      <div className="w-12 h-12 rounded-lg bg-dark-surface border border-dark-border flex items-center justify-center text-brand mb-6 group-hover:bg-brand/10 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed text-sm">{desc}</p>
    </div>
  );
}