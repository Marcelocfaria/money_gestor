// ─────────────────────────────────────────────
// ÍCONES DISPONÍVEIS
// ─────────────────────────────────────────────
const ALL_ICONS = [
  {e:'🛒',t:'mercado compras supermercado'},
  {e:'🚗',t:'carro transporte uber dirigir'},
  {e:'🏥',t:'saude hospital medico clinica'},
  {e:'🎮',t:'jogo lazer games videogame'},
  {e:'🏠',t:'casa moradia aluguel imovel'},
  {e:'📚',t:'livro educacao estudo escola'},
  {e:'👕',t:'roupa vestuario moda'},
  {e:'📱',t:'celular assinatura streaming app'},
  {e:'🐾',t:'pet animal cachorro gato'},
  {e:'💄',t:'beleza maquiagem cosmetico'},
  {e:'📦',t:'outros diversos geral'},
  {e:'✈️',t:'viagem aviao passagem turismo'},
  {e:'🍔',t:'comida lanche hamburguer restaurante'},
  {e:'☕',t:'cafe padaria cafeteria'},
  {e:'🍕',t:'pizza comida delivery ifood'},
  {e:'🎬',t:'cinema filme entretenimento'},
  {e:'🏋️',t:'academia ginastica esporte musculacao'},
  {e:'💊',t:'farmacia remedio medicamento'},
  {e:'⚡',t:'energia luz eletricidade conta'},
  {e:'💧',t:'agua conta saneamento'},
  {e:'📡',t:'internet wifi tv banda larga'},
  {e:'🎵',t:'musica spotify show concert'},
  {e:'🚌',t:'onibus metro transporte publico'},
  {e:'⛽',t:'gasolina combustivel posto'},
  {e:'🅿️',t:'estacionamento parking'},
  {e:'🔧',t:'manutencao conserto reparo'},
  {e:'💈',t:'barbearia cabelo cabeleireiro'},
  {e:'🧴',t:'higiene produtos banheiro'},
  {e:'🏦',t:'banco financeiro investimento'},
  {e:'💳',t:'cartao credito debito'},
  {e:'🎁',t:'presente gift aniversario'},
  {e:'🧸',t:'crianca brinquedo infantil'},
  {e:'🖥️',t:'computador tecnologia notebook'},
  {e:'🎓',t:'faculdade curso universidade'},
  {e:'🌿',t:'garden planta horta natureza'},
  {e:'🐶',t:'veterinario pet cachorro'},
  {e:'🍺',t:'bar bebida cerveja balada'},
  {e:'🧺',t:'lavanderia roupa limpeza'},
  {e:'🏖️',t:'praia ferias viagem'},
  {e:'🎪',t:'evento festa show'},
  {e:'💰',t:'poupanca investimento dinheiro'},
  {e:'🛵',t:'moto delivery motoboy'},
  {e:'🚕',t:'taxi transporte corrida'},
  {e:'🏪',t:'loja comercio varejo'},
  {e:'🎯',t:'meta objetivo planejamento'},
  {e:'🌮',t:'comida mexicana refeicao'},
  {e:'🎨',t:'arte hobby pintura criativo'},
  {e:'🌡️',t:'saude clinica consulta'},
  {e:'👓',t:'oculos otica saude visao'},
  {e:'🦷',t:'dentista odontologia'},
  {e:'🧘',t:'yoga bem-estar meditacao'},
  {e:'🏡',t:'condominio casa imovel'},
  {e:'🔑',t:'chave imovel aluguel'},
  {e:'📰',t:'jornal revista assinatura'},
  {e:'⚽',t:'esporte futebol bola'},
  {e:'🏊',t:'natacao piscina esporte'},
  {e:'🎻',t:'instrumento musica aula'},
  {e:'🧹',t:'limpeza faxina diarista'},
  {e:'🍣',t:'sushi japones comida'},
  {e:'🚲',t:'bike bicicleta transporte'},
  {e:'📸',t:'foto camera fotografia'},
  {e:'🧃',t:'bebida suco mercado'},
  {e:'🌍',t:'internacional exterior cambio'},
  {e:'💻',t:'notebook computador trabalho'},
  {e:'🎤',t:'karaoke show apresentacao'},
  {e:'🏈',t:'esporte americano time'},
];

const PALETTE = [
  '#2c5f2e','#8b5e3c','#3b82f6','#ec4899',
  '#8b5cf6','#0891b2','#d97706','#16a34a',
  '#dc2626','#9333ea','#0ea5e9','#ca8a04',
  '#059669','#db2777','#7c3aed','#0284c7',
  '#ea580c','#15803d','#b91c1c','#6d28d9',
];

// ─────────────────────────────────────────────
// CATEGORIAS PADRÃO
// ─────────────────────────────────────────────
const DEFAULT_CATS = [
  { id:'alimentacao', label:'Alimentação', icon:'🛒', color:'#ea580c', budget:0, fixedValue:0 },
  { id:'transporte',  label:'Transporte',  icon:'🚗', color:'#3b82f6', budget:0, fixedValue:0 },
  { id:'saude',       label:'Saúde',       icon:'🏥', color:'#ec4899', budget:0, fixedValue:0 },
  { id:'lazer',       label:'Lazer',       icon:'🎮', color:'#8b5cf6', budget:0, fixedValue:0 },
  { id:'moradia',     label:'Moradia',     icon:'🏠', color:'#0891b2', budget:0, fixedValue:0 },
  { id:'educacao',    label:'Educação',    icon:'📚', color:'#d97706', budget:0, fixedValue:0 },
  { id:'assinaturas', label:'Assinaturas', icon:'📱', color:'#0ea5e9', budget:0, fixedValue:0 },
  { id:'outros',      label:'Outros',      icon:'📦', color:'#8b5e3c', budget:0, fixedValue:0 },
];

// ─────────────────────────────────────────────
// STATE
// ─────────────────────────────────────────────
let state = {
  expenses: [],
  categories: [],
  scriptUrl: '',
  income: 0,        // renda mensal fixa
  month: new Date().getMonth(),
  year: new Date().getFullYear(),
  editingExpId: null,
  filterCat: null,
};

let pickerIcon   = '📦';
let pickerColor  = '#8b5e3c';
let editingCatId = null;
let selectedCat  = null;

function getCat(id) {
  return state.categories.find(c => c.id === id)
    || { id:'?', label:'Outros', icon:'📦', color:'#8b5e3c', budget:0, fixedValue:0 };
}

const MONTHS_FULL = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho',
                     'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];

// ─────────────────────────────────────────────
// USERS
// ─────────────────────────────────────────────
const USER_COLORS = [
  { bg:'#2c5f2e', text:'#fff' },
  { bg:'#ea580c', text:'#fff' },
  { bg:'#3b82f6', text:'#fff' },
  { bg:'#ec4899', text:'#fff' },
  { bg:'#8b5cf6', text:'#fff' },
  { bg:'#0891b2', text:'#fff' },
  { bg:'#d97706', text:'#fff' },
  { bg:'#dc2626', text:'#fff' },
];

let currentUser = null;

function getUsers() {
  try { return JSON.parse(localStorage.getItem('despesas_users') || '[]'); } catch(e) { return []; }
}

function saveUsers(users) {
  localStorage.setItem('despesas_users', JSON.stringify(users));
}

function userInitial(name) {
  return name.trim().charAt(0).toUpperCase();
}

function renderLoginScreen() {
  const users = getUsers();
  const list  = document.getElementById('userCardsList');
  if (users.length === 0) {
    list.innerHTML = `<div style="color:var(--muted);font-size:13px;text-align:center;padding:24px 0;font-weight:500">
      Nenhum usuário ainda.<br>Crie o primeiro abaixo ↓</div>`;
    return;
  }
  list.innerHTML = users.map(u => {
    const col = USER_COLORS[u.colorIdx % USER_COLORS.length];
    return `<div class="user-card" onclick="loginAs('${u.id}')">
      <div class="user-avatar" style="background:${col.bg};color:${col.text}">${userInitial(u.name)}</div>
      <div class="user-card-info">
        <div class="user-card-name">${u.name}</div>
        <div class="user-card-sub">Toque para entrar</div>
      </div>
      <span class="user-card-arrow">›</span>
    </div>`;
  }).join('');
}

function addUser() {
  const input = document.getElementById('newUserName');
  const name  = input.value.trim();
  if (!name) { showStatus('Informe um nome', 'err'); return; }

  const users = getUsers();
  if (users.find(u => u.name.toLowerCase() === name.toLowerCase())) {
    showStatus('Esse nome já existe', 'err'); return;
  }

  const newUser = { id: 'u_'+Date.now(), name, colorIdx: users.length };
  users.push(newUser);
  saveUsers(users);
  input.value = '';
  renderLoginScreen();
  showStatus(`Usuário "${name}" criado ✓`, 'ok');
}

function loginAs(userId) {
  const users = getUsers();
  const user  = users.find(u => u.id === userId);
  if (!user) return;

  currentUser = user;
  localStorage.setItem('despesas_currentUser', userId);

  const col = USER_COLORS[user.colorIdx % USER_COLORS.length];
  document.getElementById('ubAvatar').textContent = userInitial(user.name);
  document.getElementById('ubAvatar').style.background = col.bg;
  document.getElementById('ubAvatar').style.color = col.text;
  document.getElementById('ubName').textContent = user.name;

  document.getElementById('loginScreen').classList.add('hidden');

  load();
  document.getElementById('currentMonth').textContent = `${MONTHS_FULL[state.month]} ${state.year}`;
  checkScriptWarning();
  if (state.scriptUrl) fetchFromSheets().then(() => render());
  else render();
}

function logout() {
  if (!confirm(`Sair da conta de ${currentUser?.name}?`)) return;
  currentUser = null;
  localStorage.removeItem('despesas_currentUser');
  state.expenses   = [];
  state.categories = JSON.parse(JSON.stringify(DEFAULT_CATS));
  state.scriptUrl  = '';
  state.income     = 0;
  state.filterCat  = null;
  document.getElementById('loginScreen').classList.remove('hidden');
  renderLoginScreen();
}

// ─────────────────────────────────────────────
// PERSISTENCE
// ─────────────────────────────────────────────
function userKey() {
  return currentUser ? `despesas_u_${currentUser.id}` : 'despesas_v3';
}

function save() {
  localStorage.setItem(userKey(), JSON.stringify({
    expenses:   state.expenses,
    categories: state.categories,
    scriptUrl:  state.scriptUrl,
    income:     state.income,
  }));
}

function load() {
  try {
    const raw = localStorage.getItem(userKey());
    if (!raw) { resetCats(); return; }
    const d = JSON.parse(raw);
    state.expenses   = d.expenses   || [];
    state.categories = (d.categories && d.categories.length)
      ? d.categories
      : JSON.parse(JSON.stringify(DEFAULT_CATS));
    state.scriptUrl  = d.scriptUrl  || '';
    state.income     = parseFloat(d.income) || 0;
    state.categories.forEach(c => {
      if (c.fixedValue === undefined) c.fixedValue = 0;
      if (c.budget     === undefined) c.budget     = 0;
    });
  } catch(e) { resetCats(); }
}

function resetCats() {
  state.categories = JSON.parse(JSON.stringify(DEFAULT_CATS));
}

// ─────────────────────────────────────────────
// SHEETS SYNC
// ─────────────────────────────────────────────
async function syncToSheets(action, payload) {
  if (!state.scriptUrl) return null;
  try {
    const res = await fetch(state.scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action, ...payload }),
    });
    return await res.json();
  } catch(e) { return null; }
}

async function fetchFromSheets() {
  if (!state.scriptUrl) return false;
  showLoading(true);
  try {
    const url = `${state.scriptUrl}?action=getAll&month=${state.month+1}&year=${state.year}`;
    const res  = await fetch(url);
    const data = await res.json();
    if (data?.expenses) state.expenses = data.expenses;
    save();
    showLoading(false);
    return true;
  } catch(e) { showLoading(false); return false; }
}

// ─────────────────────────────────────────────
// MÊS
// ─────────────────────────────────────────────
function changeMonth(dir) {
  state.month += dir;
  if (state.month > 11) { state.month = 0; state.year++; }
  if (state.month < 0)  { state.month = 11; state.year--; }
  state.filterCat = null;
  document.getElementById('currentMonth').textContent = `${MONTHS_FULL[state.month]} ${state.year}`;
  if (state.scriptUrl) fetchFromSheets().then(() => render());
  else render();
}

// ─────────────────────────────────────────────
// DADOS
// ─────────────────────────────────────────────
function getMonthExpenses() {
  return state.expenses.filter(e => {
    const d = new Date(e.date + 'T12:00:00');
    return d.getMonth() === state.month && d.getFullYear() === state.year;
  });
}

function getFilteredExpenses() {
  const all = getMonthExpenses();
  return state.filterCat ? all.filter(e => e.category === state.filterCat) : all;
}

function fmt(v) {
  return 'R$ ' + Number(v).toLocaleString('pt-BR', { minimumFractionDigits:2, maximumFractionDigits:2 });
}

// ─────────────────────────────────────────────
// RENDER INCOME BANNER
// ─────────────────────────────────────────────
function renderIncomeBanner(totalSpent) {
  const wrapper = document.getElementById('incomeBannerWrap');
  if (!state.income || state.income <= 0) {
    wrapper.innerHTML = `
      <div class="income-setup" onclick="openIncomeModal()">
        <div class="income-setup-icon">💼</div>
        <div class="income-setup-text">
          <div class="income-setup-title">Definir renda mensal</div>
          <div class="income-setup-sub">Configure sua renda para acompanhar quanto você está gastando</div>
        </div>
        <span class="income-setup-arrow">›</span>
      </div>`;
    return;
  }

  const remaining  = state.income - totalSpent;
  const pct        = Math.min(totalSpent / state.income, 1);
  const pctLabel   = Math.round(pct * 100);
  const isOver     = totalSpent > state.income;
  const isWarning  = pct >= 0.8 && !isOver;
  const barClass   = isOver ? 'danger' : isWarning ? 'warning' : '';
  const remClass   = isOver ? 'danger' : isWarning ? 'warning' : '';

  wrapper.innerHTML = `
    <div class="income-banner">
      <div class="income-left">
        <div class="income-label">Renda mensal</div>
        <div class="income-value">${fmt(state.income)}</div>
        <div class="income-sub">Definida permanentemente · <span style="opacity:0.85;cursor:pointer;text-decoration:underline" onclick="openIncomeModal()">alterar</span></div>
      </div>
      <div class="income-right">
        <div class="income-stat">
          <div class="income-stat-val">${fmt(totalSpent)}</div>
          <div class="income-stat-label">Gasto</div>
        </div>
        <div class="income-stat">
          <div class="income-stat-val ${remClass}">${isOver ? '−'+fmt(Math.abs(remaining)) : fmt(remaining)}</div>
          <div class="income-stat-label">${isOver ? 'Estourado' : 'Restante'}</div>
        </div>
        <div class="income-progress-wrap">
          <div class="income-progress-label">
            <span>${pctLabel}% da renda</span>
            <span>${isOver ? '⚠ Acima do limite' : ''}</span>
          </div>
          <div class="income-progress-track">
            <div class="income-progress-fill ${barClass}" style="width:${pctLabel}%"></div>
          </div>
        </div>
        <button class="income-edit-btn" onclick="openIncomeModal()">✎ Editar renda</button>
      </div>
    </div>`;
}

// ─────────────────────────────────────────────
// RENDER PRINCIPAL
// ─────────────────────────────────────────────
function render() {
  const month    = getMonthExpenses();
  const filtered = getFilteredExpenses();
  const total    = month.reduce((s,e) => s + Number(e.value), 0);
  const totalBudget = state.categories.reduce((s,c) => s + Number(c.budget||0), 0);
  const pct = totalBudget > 0 ? Math.min(total/totalBudget, 1) : 0;

  // Banner de renda
  renderIncomeBanner(total);

  document.getElementById('totalValue').textContent = fmt(total);
  document.getElementById('totalSub').textContent   = `${month.length} transação${month.length!==1?'ões':''} este mês`;

  const ring = document.getElementById('ringFill');
  ring.style.strokeDashoffset = 188 - pct*188;
  ring.className = 'ring-fill' + (pct>=1?' danger':pct>=0.8?' warning':'');
  document.getElementById('ringPct').textContent = Math.round(pct*100)+'%';

  const byCategory = {};
  state.categories.forEach(c => byCategory[c.id] = 0);
  month.forEach(e => { if (byCategory[e.category]!==undefined) byCategory[e.category] += Number(e.value); });

  const bigCat = Object.entries(byCategory).sort((a,b)=>b[1]-a[1])[0];
  if (bigCat && bigCat[1] > 0) {
    document.getElementById('biggestVal').textContent = fmt(bigCat[1]);
    document.getElementById('biggestCat').textContent = getCat(bigCat[0]).label;
  } else {
    document.getElementById('biggestVal').textContent = '—';
    document.getElementById('biggestCat').textContent = '—';
  }

  let over = 0;
  state.categories.forEach(c => {
    if (Number(c.budget)>0 && (byCategory[c.id]||0)>=Number(c.budget)) over++;
  });
  document.getElementById('overBudgetCount').textContent = over;

  const now = new Date();
  const weekAgo = new Date(now - 7*24*3600*1000);
  const weekTotal = state.expenses
    .filter(e => { const d=new Date(e.date+'T12:00:00'); return d>=weekAgo && d<=now; })
    .reduce((s,e) => s+Number(e.value), 0);
  document.getElementById('weekVal').textContent = fmt(weekTotal);

  // Orçamentos
  const bl = document.getElementById('budgetList');
  const budgetCats = state.categories.filter(c => Number(c.budget||0)>0);
  if (budgetCats.length === 0) {
    bl.innerHTML = `<div style="color:var(--muted);font-size:13px;padding:10px 0;font-weight:500">
      Nenhum orçamento definido. <a style="color:var(--accent);cursor:pointer;font-weight:600" onclick="openManageCats()">Editar categorias →</a></div>`;
  } else {
    bl.innerHTML = budgetCats.map((c,i) => {
      const spent = byCategory[c.id]||0;
      const lim   = Number(c.budget);
      const p     = Math.min(spent/lim, 1);
      const pv    = Math.round(p*100);
      const cls   = p>=1?'danger':p>=0.8?'warning':'';
      return `<div class="budget-item" style="animation-delay:${i*0.04}s">
        <div class="budget-header">
          <div class="budget-name">
            <span class="cat-dot" style="background:${c.color}"></span>
            ${c.icon} ${c.label}
          </div>
          <div class="budget-values">
            <strong class="${cls}">${fmt(spent)}</strong> / ${fmt(lim)}
            <span style="color:var(--muted);margin-left:6px">${pv}%</span>
          </div>
        </div>
        <div class="bar-track"><div class="bar-fill ${cls}" style="width:${pv}%"></div></div>
      </div>`;
    }).join('');
  }

  // Filtros
  const usedCats = [...new Set(month.map(e=>e.category))];
  const fb = document.getElementById('filterBar');
  fb.innerHTML = usedCats.length>1
    ? `<button class="filter-chip ${!state.filterCat?'active':''}" onclick="setFilter(null)">Todos</button>`
      + usedCats.map(id => {
          const c = getCat(id);
          return `<button class="filter-chip ${state.filterCat===id?'active':''}" onclick="setFilter('${id}')">${c.icon} ${c.label}</button>`;
        }).join('')
    : '';

  // Transações
  document.getElementById('txCount').textContent = `${filtered.length} registro${filtered.length!==1?'s':''}`;
  const tl = document.getElementById('txList');
  if (filtered.length === 0) {
    tl.innerHTML = `<div class="empty-state"><div class="empty-icon">💸</div>
      <p>Nenhuma despesa registrada.<br>Toque no <strong>+</strong> para começar.</p></div>`;
    return;
  }
  const sorted = [...filtered].sort((a,b) => new Date(b.date)-new Date(a.date));
  tl.innerHTML = sorted.map((e,i) => {
    const c  = getCat(e.category);
    const d  = new Date(e.date+'T12:00:00');
    const ds = d.toLocaleDateString('pt-BR', {day:'2-digit', month:'short'});
    return `<div class="tx-item" style="animation-delay:${i*0.03}s">
      <div class="tx-icon" style="background:${c.color}20;color:${c.color}">${c.icon}</div>
      <div class="tx-info">
        <div class="tx-desc">${e.description || c.label}</div>
        <div class="tx-meta">${ds} · ${c.label}</div>
      </div>
      <div class="tx-amount">${fmt(e.value)}</div>
      <div class="tx-actions">
        <button class="tx-btn edit" onclick="editExpense('${e.id}')" title="Editar">✎</button>
        <button class="tx-btn" onclick="deleteExpense('${e.id}')" title="Excluir">✕</button>
      </div>
    </div>`;
  }).join('');
}

function setFilter(cat) { state.filterCat = cat; render(); }

// ─────────────────────────────────────────────
// MODAL: RENDA
// ─────────────────────────────────────────────
function openIncomeModal() {
  document.getElementById('fIncome').value = state.income || '';
  document.getElementById('overlayIncome').classList.add('open');
  setTimeout(() => document.getElementById('fIncome').focus(), 200);
}

function closeIncomeModal() {
  document.getElementById('overlayIncome').classList.remove('open');
}

function saveIncome() {
  const val = parseFloat(document.getElementById('fIncome').value);
  if (!val || val <= 0) { showStatus('Informe um valor de renda válido', 'err'); return; }
  state.income = val;
  save();
  closeIncomeModal();
  render();
  showStatus('Renda atualizada ✓', 'ok');
}

// ─────────────────────────────────────────────
// MODAL: DESPESA
// ─────────────────────────────────────────────
function openAdd() {
  state.editingExpId = null;
  selectedCat = state.categories[0]?.id || null;
  document.getElementById('modalTitle').textContent = 'Nova Despesa';
  document.getElementById('btnSubmit').textContent  = 'Registrar Despesa';
  document.getElementById('fValor').value = '';
  document.getElementById('fDesc').value  = '';
  document.getElementById('fData').value  = new Date().toISOString().split('T')[0];
  renderCatGrid();
  document.getElementById('overlayAdd').classList.add('open');
  document.getElementById('fab').classList.add('active');
  setTimeout(() => document.getElementById('fValor').focus(), 300);
}

function editExpense(id) {
  const e = state.expenses.find(x => x.id===id);
  if (!e) return;
  state.editingExpId = id;
  selectedCat = e.category;
  document.getElementById('modalTitle').textContent = 'Editar Despesa';
  document.getElementById('btnSubmit').textContent  = 'Salvar Alterações';
  document.getElementById('fValor').value = e.value;
  document.getElementById('fDesc').value  = e.description;
  document.getElementById('fData').value  = e.date;
  renderCatGrid();
  document.getElementById('overlayAdd').classList.add('open');
  document.getElementById('fab').classList.add('active');
}

function renderCatGrid() {
  document.getElementById('catGrid').innerHTML = state.categories.map(c => {
    const hasFixed = Number(c.fixedValue) > 0;
    return `<div class="cat-chip ${selectedCat===c.id?'selected':''}" onclick="selectCat('${c.id}')">
      <span class="chip-icon">${c.icon}</span>
      <span class="chip-name">${c.label}</span>
      ${hasFixed ? `<span class="chip-fixed">💛 ${fmt(c.fixedValue)}</span>` : ''}
    </div>`;
  }).join('');
}

function selectCat(id) {
  selectedCat = id;
  const c = getCat(id);
  if (Number(c.fixedValue) > 0) {
    document.getElementById('fValor').value = c.fixedValue;
  }
  renderCatGrid();
}

function closeAdd() {
  document.getElementById('overlayAdd').classList.remove('open');
  document.getElementById('fab').classList.remove('active');
}

async function submitExpense() {
  const valor = parseFloat(document.getElementById('fValor').value);
  const desc  = document.getElementById('fDesc').value.trim();
  const data  = document.getElementById('fData').value;

  if (!valor || valor<=0) { showStatus('Informe um valor válido', 'err'); return; }
  if (!data)              { showStatus('Informe a data', 'err'); return; }
  if (!selectedCat)       { showStatus('Selecione uma categoria', 'err'); return; }

  const expense = {
    id: state.editingExpId || ('id_'+Date.now()),
    value: valor, description: desc, date: data,
    category: selectedCat, createdAt: new Date().toISOString(),
  };

  if (state.editingExpId) {
    const idx = state.expenses.findIndex(x => x.id===state.editingExpId);
    if (idx>=0) state.expenses[idx] = expense;
  } else {
    state.expenses.push(expense);
  }

  save(); closeAdd(); render();
  showStatus(state.editingExpId ? 'Despesa atualizada ✓' : 'Despesa registrada ✓', 'ok');
  if (state.scriptUrl) syncToSheets(state.editingExpId ? 'update' : 'add', { expense });
}

async function deleteExpense(id) {
  if (!confirm('Excluir esta despesa?')) return;
  state.expenses = state.expenses.filter(e => e.id!==id);
  save(); render();
  showStatus('Despesa excluída', 'ok');
  if (state.scriptUrl) syncToSheets('delete', { id });
}

// ─────────────────────────────────────────────
// MODAL: CATEGORIAS
// ─────────────────────────────────────────────
function openManageCats() {
  renderManageCatList();
  document.getElementById('overlayManage').classList.add('open');
}

function closeManageCats() {
  document.getElementById('overlayManage').classList.remove('open');
}

function renderManageCatList() {
  const el = document.getElementById('manageCatList');
  if (state.categories.length === 0) {
    el.innerHTML = `<div style="color:var(--muted);font-size:13px;text-align:center;padding:24px">Nenhuma categoria. Crie uma!</div>`;
    return;
  }
  el.innerHTML = state.categories.map(c => {
    const parts = [];
    if (Number(c.budget)>0)     parts.push(`Limite: ${fmt(c.budget)}`);
    if (Number(c.fixedValue)>0) parts.push(`Fixo: ${fmt(c.fixedValue)}`);
    const meta = parts.join(' · ') || 'Sem orçamento';
    return `<div class="manage-cat-item">
      <div class="mci-icon" style="background:${c.color}20;color:${c.color}">${c.icon}</div>
      <div class="mci-info">
        <div class="mci-name">${c.label}</div>
        <div class="mci-meta">${meta}</div>
      </div>
      <button class="cat-act-btn" onclick="openCatForm('${c.id}')">✎ Editar</button>
    </div>`;
  }).join('');
}

// ─────────────────────────────────────────────
// MODAL: CRIAR / EDITAR CATEGORIA
// ─────────────────────────────────────────────
function openCatForm(catId) {
  editingCatId = catId;
  if (catId) {
    const c = getCat(catId);
    document.getElementById('catFormTitle').textContent = 'Editar Categoria';
    document.getElementById('cfName').value   = c.label;
    document.getElementById('cfBudget').value = c.budget || '';
    document.getElementById('cfFixed').value  = c.fixedValue || '';
    pickerIcon  = c.icon;
    pickerColor = c.color;
    document.getElementById('cfDeleteBtn').style.display = 'block';
  } else {
    document.getElementById('catFormTitle').textContent = 'Nova Categoria';
    document.getElementById('cfName').value   = '';
    document.getElementById('cfBudget').value = '';
    document.getElementById('cfFixed').value  = '';
    pickerIcon  = '📦';
    pickerColor = PALETTE[Math.floor(Math.random()*PALETTE.length)];
    document.getElementById('cfDeleteBtn').style.display = 'none';
  }
  document.getElementById('cfIconSearch').value = '';
  renderIconGrid('');
  renderColorGrid();
  updateIconPreview();
  document.getElementById('overlayCatForm').classList.add('open');
  setTimeout(() => document.getElementById('cfName').focus(), 200);
}

function closeCatForm() {
  document.getElementById('overlayCatForm').classList.remove('open');
}

function renderIconGrid(search) {
  const term = search.toLowerCase().trim();
  const list = term ? ALL_ICONS.filter(i => i.t.includes(term)||i.e.includes(term)) : ALL_ICONS;
  document.getElementById('iconGrid').innerHTML = list.map(i =>
    `<button class="icon-btn ${pickerIcon===i.e?'sel':''}" onclick="pickIcon('${i.e}')" title="${i.t}">${i.e}</button>`
  ).join('');
}

function filterIcons(val) { renderIconGrid(val); }

function pickIcon(e) {
  pickerIcon = e;
  renderIconGrid(document.getElementById('cfIconSearch').value);
  updateIconPreview();
}

function renderColorGrid() {
  document.getElementById('colorGrid').innerHTML = PALETTE.map(col =>
    `<div class="color-swatch ${pickerColor===col?'sel':''}" style="background:${col}" onclick="pickColor('${col}')"></div>`
  ).join('');
}

function pickColor(col) {
  pickerColor = col;
  renderColorGrid();
}

function updateIconPreview() {
  document.getElementById('iconPreview').textContent = pickerIcon;
}

function saveCatForm() {
  const name = document.getElementById('cfName').value.trim();
  if (!name) { showStatus('Informe o nome da categoria', 'err'); return; }
  const budget     = parseFloat(document.getElementById('cfBudget').value) || 0;
  const fixedValue = parseFloat(document.getElementById('cfFixed').value)  || 0;

  if (editingCatId) {
    const idx = state.categories.findIndex(c => c.id===editingCatId);
    if (idx>=0) {
      state.categories[idx] = { ...state.categories[idx], label:name, icon:pickerIcon, color:pickerColor, budget, fixedValue };
    }
    showStatus('Categoria atualizada ✓', 'ok');
  } else {
    state.categories.push({ id:'cat_'+Date.now(), label:name, icon:pickerIcon, color:pickerColor, budget, fixedValue });
    showStatus('Categoria criada ✓', 'ok');
  }

  save(); closeCatForm(); renderManageCatList(); render();
  if (state.scriptUrl) syncToSheets('saveCategories', { categories: state.categories });
}

function deleteCatForm() {
  if (!editingCatId) return;
  const c = getCat(editingCatId);
  const used = state.expenses.some(e => e.category===editingCatId);
  const msg = used
    ? `A categoria "${c.label}" tem despesas vinculadas. Excluir mesmo assim?`
    : `Excluir a categoria "${c.label}"?`;
  if (!confirm(msg)) return;
  state.categories = state.categories.filter(c => c.id!==editingCatId);
  save(); closeCatForm(); renderManageCatList(); render();
  showStatus('Categoria excluída', 'ok');
  if (state.scriptUrl) syncToSheets('saveCategories', { categories: state.categories });
}

// ─────────────────────────────────────────────
// MODAL: CONFIGURAÇÕES
// ─────────────────────────────────────────────
function openConfig() {
  document.getElementById('scriptUrl').value = state.scriptUrl;
  renderBudgetConfig();
  document.getElementById('overlayConfig').classList.add('open');
}

function closeConfig() {
  document.getElementById('overlayConfig').classList.remove('open');
}

function switchTab(btn) {
  const tabId = btn.dataset.tab;
  document.querySelectorAll('.config-pane').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.config-tab').forEach(b => b.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
  btn.classList.add('active');
}

function renderBudgetConfig() {
  document.getElementById('budgetConfigList').innerHTML = state.categories.map(c =>
    `<div class="bcfg-item">
      <div class="bcfg-label">
        <span class="cat-dot" style="background:${c.color}"></span>
        <span>${c.icon} ${c.label}</span>
      </div>
      <input type="number" id="bcfg_${c.id}" placeholder="Sem limite" min="0" step="10" value="${c.budget||''}">
    </div>`
  ).join('');
}

function saveConfig() {
  state.scriptUrl = document.getElementById('scriptUrl').value.trim();
  state.categories.forEach(c => {
    const v = parseFloat(document.getElementById('bcfg_'+c.id)?.value);
    c.budget = v>0 ? v : 0;
  });
  save(); closeConfig(); render();
  showStatus('Configurações salvas ✓', 'ok');
  checkScriptWarning();
  if (state.scriptUrl) {
    syncToSheets('saveCategories', { categories: state.categories });
    fetchFromSheets().then(() => render());
  }
}

function checkScriptWarning() {
  document.getElementById('noScriptWarn').classList.toggle('show', !state.scriptUrl);
}

// ─────────────────────────────────────────────
// UI HELPERS
// ─────────────────────────────────────────────
let statusTimeout;
function showStatus(msg, type) {
  const bar = document.getElementById('statusBar');
  document.getElementById('statusMsg').textContent = msg;
  bar.className = 'status-bar show '+type;
  clearTimeout(statusTimeout);
  statusTimeout = setTimeout(() => bar.classList.remove('show'), 2600);
}

function showLoading(v) {
  document.getElementById('loadingOverlay').classList.toggle('show', v);
}

// ─────────────────────────────────────────────
// TECLADO
// ─────────────────────────────────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeAdd(); closeConfig(); closeManageCats(); closeCatForm(); closeIncomeModal();
  }
  const anyOpen = document.querySelector('.overlay.open,.center-overlay.open');
  if (e.key === 'n' && !anyOpen) openAdd();
  if (e.key === 'Enter' && document.getElementById('overlayAdd').classList.contains('open')) submitExpense();
  if (e.key === 'Enter' && document.getElementById('overlayIncome').classList.contains('open')) saveIncome();
});

// ─────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────
async function init() {
  renderLoginScreen();

  const lastUserId = localStorage.getItem('despesas_currentUser');
  if (lastUserId) {
    const users = getUsers();
    if (users.find(u => u.id === lastUserId)) {
      loginAs(lastUserId);
      return;
    }
  }
  document.getElementById('loginScreen').classList.remove('hidden');
}

init();
