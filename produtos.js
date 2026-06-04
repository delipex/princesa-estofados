/* ═══════════════════════════════════════════════════════
   PRINCESA ESTOFADOS — produtos.js
   ► Dados dos produtos e lógica da página
   ► Para adicionar produtos: basta incluir um novo objeto
     no array PRODUTOS abaixo, seguindo o mesmo padrão.
═══════════════════════════════════════════════════════ */

const WPP = '557588415297';

/* ─────────────────────────────────────────────────────
   📦 CATÁLOGO DE PRODUTOS
   Campos:
    id        → número único
    nome      → nome do produto
    categoria → 'sofas' | 'poltronas' | 'cabeceiras' | 'cadeiras' | 'automotivo'
    preco     → número (ex: 1800) ou null para "Sob consulta"
    descricao → texto descritivo
    img       → URL da imagem
    specs     → objeto com características (opcional)
───────────────────────────────────────────────────── */
const PRODUTOS = [
  {
    id: 1,
    nome: 'Sofá Retrátil 3 Lugares',
    categoria: 'sofas',
    preco: 2800,
    descricao: 'Sofá retrátil e reclinável com estrutura reforçada, espuma D33 e tecido suede de alta resistência. Perfeito para salas de estar.',
    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800',
    specs: { Material: 'Suede', Espuma: 'D33 — Alta densidade', Lugares: '3', Garantia: '12 meses' }
  },
  {
    id: 2,
    nome: 'Sofá Chaise Elegance',
    categoria: 'sofas',
    preco: 3500,
    descricao: 'Design sofisticado com chaise longue integrada. Tecido veludo italiano com acabamento premium e pés em madeira maciça escura.',
    img: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=800',
    specs: { Material: 'Veludo italiano', Espuma: 'D45 — Extra alta densidade', Lugares: '4', Garantia: '18 meses' }
  },
  {
    id: 3,
    nome: 'Sofá Retrátil 2 Lugares',
    categoria: 'sofas',
    preco: 1900,
    descricao: 'Compacto e confortável, ideal para ambientes menores. Tecido chenille macio com mecanismo de reclinação suave.',
    img: 'https://images.unsplash.com/photo-1600210491892-03d54b0baf53?q=80&w=800',
    specs: { Material: 'Chenille', Espuma: 'D28 — Média densidade', Lugares: '2', Garantia: '12 meses' }
  },
  {
    id: 4,
    nome: 'Poltrona Lounge Clássica',
    categoria: 'poltronas',
    preco: 1200,
    descricao: 'Poltrona estilo clássico com encosto alto e braços estofados. Ideal para leitura e ambientes sofisticados.',
    img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800',
    specs: { Material: 'Couro sintético', Espuma: 'D33 — Alta densidade', Tipo: 'Fixa', Garantia: '12 meses' }
  },
  {
    id: 5,
    nome: 'Poltrona Giratória Executiva',
    categoria: 'poltronas',
    preco: 980,
    descricao: 'Poltrona giratória com base em alumínio cromado, revestimento em couro PU premium e ajuste de altura. Perfeita para escritório.',
    img: 'https://images.unsplash.com/photo-1589599591479-1610028a3a28?q=80&w=800',
    specs: { Material: 'Couro PU', Base: 'Alumínio cromado', Tipo: 'Giratória', Garantia: '12 meses' }
  },
  {
    id: 6,
    nome: 'Poltrona Relax Reclinável',
    categoria: 'poltronas',
    preco: 1450,
    descricao: 'Máximo conforto com inclinação regulável e apoio de pés retrátil. Espuma de alta resiliência e tecido antialérgico.',
    img: 'https://images.unsplash.com/photo-1550226891-ef816aed4a98?q=80&w=800',
    specs: { Material: 'Suede antialérgico', Espuma: 'D40 — Alta resiliência', Tipo: 'Reclinável', Garantia: '18 meses' }
  },
  {
    id: 7,
    nome: 'Cabeceira King Capitonê',
    categoria: 'cabeceiras',
    preco: 890,
    descricao: 'Cabeceira capitonê com botões para cama King Size. Acabamento em couro sintético premium, disponível em diversas cores.',
    img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=800',
    specs: { Tamanho: 'King (193 cm)', Material: 'Couro sintético', Estilo: 'Capitonê', Garantia: '6 meses' }
  },
  {
    id: 8,
    nome: 'Cabeceira Queen Lisa',
    categoria: 'cabeceiras',
    preco: 650,
    descricao: 'Design clean e moderno para cama Queen Size. Bordas arredondadas e tecido linho premium. Fácil instalação.',
    img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800',
    specs: { Tamanho: 'Queen (158 cm)', Material: 'Linho premium', Estilo: 'Lisa', Garantia: '6 meses' }
  },
  {
    id: 9,
    nome: 'Cadeira de Jantar Luxo',
    categoria: 'cadeiras',
    preco: 420,
    descricao: 'Cadeira para mesa de jantar com assento e encosto estofados. Pés em madeira nobre, revestimento em veludo.',
    img: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=800',
    specs: { Material: 'Veludo', Pés: 'Madeira maciça', Capacidade: 'Até 120 kg', Garantia: '6 meses' }
  },
  {
    id: 10,
    nome: 'Cadeira Escritório Premium',
    categoria: 'cadeiras',
    preco: 750,
    descricao: 'Cadeira ergonômica para escritório com lombar ajustável, braços reguláveis e base giratória. Suporte para longas horas de trabalho.',
    img: 'https://images.unsplash.com/photo-1541558869434-2840d308329a?q=80&w=800',
    specs: { Material: 'Mesh + couro PU', Lombar: 'Ajustável', Braços: 'Reguláveis', Garantia: '12 meses' }
  },
  {
    id: 11,
    nome: 'Reforma de Bancos Automotivos',
    categoria: 'automotivo',
    preco: null,
    descricao: 'Renovação completa dos bancos do seu veículo com materiais de alta durabilidade. Couro, courvin ou tecido — à sua escolha.',
    img: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800',
    specs: { Materiais: 'Couro, courvin, tecido', Serviço: 'Reforma completa', Prazo: 'A combinar', Garantia: '6 meses' }
  },
  {
    id: 12,
    nome: 'Revestimento de Teto e Portas',
    categoria: 'automotivo',
    preco: null,
    descricao: 'Restauração do teto e forração de portas internas. Material antifúngico e resistente à umidade.',
    img: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=800',
    specs: { Materiais: 'Courvin, tecido especial', Serviço: 'Teto + portas', Prazo: 'A combinar', Garantia: '6 meses' }
  },
];

/* ─── Labels das categorias ─── */
const CAT_LABELS = {
  sofas:      'Sofás',
  poltronas:  'Poltronas',
  cabeceiras: 'Cabeceiras',
  cadeiras:   'Cadeiras',
  automotivo: 'Automotivo',
};

/* ─── Formata preço ─── */
const formatPreco = (p) =>
  p == null
    ? 'Sob consulta'
    : p.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

/* ─── Mensagem WhatsApp ─── */
const wppLink = (nome, preco) => {
  const msg = preco
    ? `Olá! Tenho interesse no produto *${nome}* (R$ ${preco.toLocaleString('pt-BR')}). Poderia me dar mais informações?`
    : `Olá! Tenho interesse em *${nome}*. Poderia me enviar um orçamento?`;
  return `https://wa.me/${WPP}?text=${encodeURIComponent(msg)}`;
};

/* ─── Estado ─── */
let categoriaAtiva = 'todos';
let termoBusca    = '';
let ordenacao     = 'default';

/* ─── Filtra + ordena ─── */
function getProdutosFiltrados() {
  let lista = PRODUTOS.filter(p => {
    const matchCat  = categoriaAtiva === 'todos' || p.categoria === categoriaAtiva;
    const matchBusca = p.nome.toLowerCase().includes(termoBusca) ||
                       p.descricao.toLowerCase().includes(termoBusca);
    return matchCat && matchBusca;
  });

  if (ordenacao === 'price-asc')
    lista.sort((a, b) => (a.preco ?? Infinity) - (b.preco ?? Infinity));
  else if (ordenacao === 'price-desc')
    lista.sort((a, b) => (b.preco ?? -1) - (a.preco ?? -1));
  else if (ordenacao === 'name')
    lista.sort((a, b) => a.nome.localeCompare(b.nome, 'pt'));

  return lista;
}

/* ─── Renderiza grid ─── */
function renderProdutos() {
  const grid    = document.getElementById('produtosGrid');
  const empty   = document.getElementById('emptyState');
  const counter = document.getElementById('resultsCount');
  const lista   = getProdutosFiltrados();

  grid.innerHTML = '';

  if (lista.length === 0) {
    empty.style.display = 'flex';
    counter.textContent = '';
    return;
  }

  empty.style.display = 'none';
  counter.textContent = `${lista.length} produto${lista.length !== 1 ? 's' : ''} encontrado${lista.length !== 1 ? 's' : ''}`;

  lista.forEach((p, i) => {
    const isSobConsulta = p.preco == null;

    const card = document.createElement('article');
    card.className = 'produto-card';
    card.style.animationDelay = `${i * 60}ms`;
    card.setAttribute('data-id', p.id);
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Ver detalhes de ${p.nome}`);
    card.tabIndex = 0;

    card.innerHTML = `
      <div class="card-img-wrap">
        <img src="${p.img}" alt="${p.nome}" loading="lazy">
        <span class="card-categoria cat-${p.categoria}">${CAT_LABELS[p.categoria]}</span>
        <div class="card-quickview"><span>Ver detalhes</span></div>
      </div>
      <div class="card-body">
        <h3 class="card-nome">${p.nome}</h3>
        <p class="card-desc">${p.descricao.substring(0, 90)}${p.descricao.length > 90 ? '…' : ''}</p>
      </div>
      <div class="card-footer">
        <div class="card-preco">
          <span class="card-preco-label">Preço</span>
          <span class="card-preco-valor ${isSobConsulta ? 'sob-consulta' : ''}">${formatPreco(p.preco)}</span>
        </div>
        <a class="card-btn-wpp" href="${wppLink(p.nome, p.preco)}" target="_blank"
           aria-label="Pedir ${p.nome} via WhatsApp" onclick="event.stopPropagation()">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.556 4.115 1.529 5.845L.057 23.028a.75.75 0 0 0 .916.916l5.183-1.472A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.663-.518-5.18-1.42l-.371-.22-3.847 1.094 1.094-3.847-.22-.371A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
        </a>
      </div>
    `;

    card.addEventListener('click', () => abrirModal(p));
    card.addEventListener('keydown', e => { if (e.key === 'Enter') abrirModal(p); });
    grid.appendChild(card);
  });
}

/* ─── Modal ─── */
function abrirModal(p) {
  const overlay = document.getElementById('modalOverlay');
  document.getElementById('modalImg').src       = p.img;
  document.getElementById('modalImg').alt       = p.nome;
  document.getElementById('modalCat').textContent = CAT_LABELS[p.categoria];
  document.getElementById('modalNome').textContent = p.nome;
  document.getElementById('modalDesc').textContent = p.descricao;
  document.getElementById('modalPreco').textContent = formatPreco(p.preco);
  document.getElementById('modalPreco').className =
    'modal-price' + (p.preco == null ? ' sob-consulta' : '');
  document.getElementById('modalWhatsapp').href = wppLink(p.nome, p.preco);

  // Specs
  const specsEl = document.getElementById('modalSpecs');
  specsEl.innerHTML = '';
  if (p.specs) {
    Object.entries(p.specs).forEach(([k, v]) => {
      specsEl.innerHTML += `
        <div class="modal-spec-item">
          <span class="modal-spec-key">${k}</span>
          <span class="modal-spec-val">${v}</span>
        </div>`;
    });
  }

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function fecharModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ─── Eventos ─── */
document.addEventListener('DOMContentLoaded', () => {
  renderProdutos();

  // Filtros
  document.querySelectorAll('.filtro-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      categoriaAtiva = btn.dataset.cat;
      renderProdutos();
    });
  });

  // Busca
  document.getElementById('searchInput').addEventListener('input', e => {
    termoBusca = e.target.value.toLowerCase().trim();
    renderProdutos();
  });

  // Ordenação
  document.getElementById('sortSelect').addEventListener('change', e => {
    ordenacao = e.target.value;
    renderProdutos();
  });

  // Fechar modal
  document.getElementById('modalClose').addEventListener('click', fecharModal);
  document.getElementById('modalOverlay').addEventListener('click', e => {
    if (e.target === document.getElementById('modalOverlay')) fecharModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') fecharModal();
  });
});
