/**
 * Maestrostop App Logic
 * Handles budgeting, dashboard metrics, and contract generation.
 */

// --- Configuration ---
const CONFIG = {
    baseIncomeTarget: 45000,
    currency: 'CLP',
    locale: 'es-CL',
    ratios: {
        materials: 0.40,
        tools: 0.10,
        taxes: 0.20,
        profit: 0.30
    },
    user: "Colega"
};

// --- Localization Database ---
window.handleCredentialResponse = async (response) => {
    try {
        const API_BASE_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
            ? 'http://localhost:5000/api'
            : '/api';
        const res = await fetch(`${API_BASE_URL}/auth/google`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token: response.credential })
        });

        const data = await res.json();

        if (res.ok) {
            localStorage.setItem('token', data.token);
            if (data.user) {
                const userProfile = {
                    name: data.user.name,
                    email: data.user.email, // or data.user.email
                    role: data.user.role,
                    ...data.user.profile
                };
                localStorage.setItem('perfil_tecnico', JSON.stringify(userProfile));
            }
            window.location.href = 'dashboard.html';
        } else {
            alert(data.msg || 'Error en el inicio de sesión con Google');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error conectando con Google Login');
    }
};

const LOCATIONS = {
    "CL": {
        name: "Chile",
        currency: "CLP",
        locale: "es-CL",
        regions: {
            "arica": {
                name: "Arica y Parinacota",
                communes: ["Arica", "Camarones", "Putre", "General Lagos"]
            },
            "tarapaca": {
                name: "Tarapacá",
                communes: ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"]
            },
            "antofagasta": {
                name: "Antofagasta",
                communes: ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena"]
            },
            "atacama": {
                name: "Atacama",
                communes: ["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"]
            },
            "coquimbo": {
                name: "Coquimbo",
                communes: ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paiguano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"]
            },
            "valparaiso": {
                name: "Valparaíso",
                communes: ["Valparaíso", "Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Viña del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo", "San Felipe", "Catemu", "Llaillay", "Panquehue", "Putaendo", "Santa María", "Quilpué", "Limache", "Olmué", "Villa Alemana"]
            },
            "metropolitana": {
                name: "Metropolitana",
                communes: ["Santiago", "Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Joaquín", "San Miguel", "San Ramón", "Vitacura", "Puente Alto", "Pirque", "San José de Maipo", "Colina", "Lampa", "Tiltil", "San Bernardo", "Buin", "Calera de Tango", "Paine", "Melipilla", "Alhué", "Curacaví", "María Pinto", "San Pedro", "Talagante", "El Monte", "Isla de Maipo", "Padre Hurtado", "Peñaflor"]
            },
            "ohiggins": {
                name: "O'Higgins",
                communes: ["Rancagua", "Codegua", "Coinco", "Colatauco", "Doñihue", "Graneros", "Las Cabras", "Machalí", "Malloa", "Mostazal", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requínoa", "San Vicente", "Pichilemu", "La Estrella", "Litueche", "Marchigüe", "Navidad", "Paredones", "San Fernando", "Chépica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "Santa Cruz"]
            },
            "maule": {
                name: "Maule",
                communes: ["Talca", "Constitución", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Cauquenes", "Chanco", "Pelluhue", "Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén", "Linares", "Colbún", "Longaví", "Parral", "Retiro", "San Javier", "Villa Alegre", "Yerbas Buenas"]
            },
            "nuble": {
                name: "Ñuble",
                communes: ["Chillán", "Bulnes", "Chillán Viejo", "El Carmen", "Pemuco", "Pinto", "Quillón", "San Ignacio", "Yungay", "Quirihue", "Cobquecura", "Coelemu", "Ninhue", "Portezuelo", "Ránquil", "Trehuaco", "San Carlos", "Coihueco", "Ñiquén", "San Fabián", "San Nicolás"]
            },
            "biobio": {
                name: "Biobío",
                communes: ["Concepción", "Coronel", "Chiguayante", "Florida", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tomé", "Hualpén", "Lebu", "Arauco", "Cañete", "Contulmo", "Curanilahue", "Los Álamos", "Tirúa", "Los Ángeles", "Antuco", "Cabrero", "Laja", "Mulchén", "Nacimiento", "Negrete", "Quilleco", "San Rosendo", "Santa Bárbara", "Tucapel", "Yumbel", "Alto Biobío"]
            },
            "araucania": {
                name: "La Araucanía",
                communes: ["Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre Las Casas", "Perquenco", "Pitrufquén", "Pucón", "Saavedra", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica", "Cholchol", "Angol", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Purén", "Renaico", "Traiguén", "Victoria"]
            },
            "losrios": {
                name: "Los Ríos",
                communes: ["Valdivia", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "La Unión", "Futrono", "Lago Ranco", "Río Bueno"]
            },
            "loslagos": {
                name: "Los Lagos",
                communes: ["Puerto Montt", "Calbuco", "Cochamó", "Fresia", "Frutillar", "Los Muermos", "Llanquihue", "Maullín", "Puerto Varas", "Castro", "Ancud", "Chonchi", "Curaco de Vélez", "Dalcahue", "Puqueldón", "Queilén", "Quellón", "Quemchi", "Quinchao", "Osorno", "Puerto Octay", "Purranque", "Puyehue", "Río Negro", "San Juan de la Costa", "San Pablo", "Chaitén", "Futaleufú", "Hualaihué", "Palena"]
            },
            "aysen": {
                name: "Aysén",
                communes: ["Coyhaique", "Lago Verde", "Aysén", "Cisnes", "Guaitecas", "Cochrane", "O'Higgins", "Tortel", "Chile Chico", "Río Ibáñez"]
            },
            "magallanes": {
                name: "Magallanes",
                communes: ["Punta Arenas", "Laguna Blanca", "Río Verde", "San Gregorio", "Cabo de Hornos", "Antártica", "Porvenir", "Primavera", "Timaukel", "Natales", "Torres del Paine"]
            }
        }
    },
    "CO": {
        name: "Colombia",
        currency: "COP",
        locale: "es-CO",
        regions: {
            "antioquia": {
                name: "Antioquia",
                communes: ["Medellín", "Bello", "Itagüí", "Envigado"]
            },
            "cundinamarca": {
                name: "Cundinamarca",
                communes: ["Bogotá", "Soacha", "Zipaquirá", "Chía"]
            }
        }
    },
    "MX": {
        name: "México",
        currency: "MXN",
        locale: "es-MX",
        regions: {
            "cdmx": {
                name: "Ciudad de México",
                communes: ["Cuauhtémoc", "Benito Juárez", "Miguel Hidalgo", "Iztapalapa"]
            },
            "jalisco": {
                name: "Jalisco",
                communes: ["Guadalajara", "Zapopan", "Tlaquepaque", "Tonalá"]
            }
        }
    },
    "AR": {
        name: "Argentina",
        currency: "ARS",
        locale: "es-AR",
        regions: {
            "caba": {
                name: "CABA",
                communes: ["Palermo", "Retiro", "Recoleta", "Belgrano"]
            },
            "gba": {
                name: "Gran Buenos Aires",
                communes: ["Avellaneda", "Lanús", "San Isidro", "Vicente López"]
            }
        }
    }
};

// --- State Management ---
// --- State Management ---
const State = {
    api: async (url, method = 'GET', data = null) => {
        const token = localStorage.getItem('token');
        if (!token) return null;
        const opts = {
            method,
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': token
            }
        };
        if (data) opts.body = JSON.stringify(data);
        try {
            const API_BASE_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
                ? 'http://localhost:5000/api'
                : '/api';
            const res = await fetch(`${API_BASE_URL}${url}`, opts);
            if (!res.ok) throw new Error(`API Error: ${res.statusText}`);
            return await res.json();
        } catch (err) {
            console.error(err);
            return null;
        }
    },
    getBudgets: async () => await State.api('/budgets') || [],
    saveBudget: async (budget) => {
        // Handle ID mismatch: Backend uses _id, frontend used id (timestamp)
        // If budget has _id, it's an update. If not, it's new.
        if (budget._id) {
            return await State.api(`/budgets/${budget._id}`, 'PUT', budget);
        } else {
            return await State.api('/budgets', 'POST', budget);
        }
    },
    getBudgetById: async (id) => await State.api(`/budgets/${id}`),
    getLastBudget: async () => {
        const budgets = await State.getBudgets();
        // Backend sorts by date desc, so the first one is the latest
        return budgets.length > 0 ? budgets[0] : null;
    },
    getTools: async () => await State.api('/tools') || [],
    addTool: async (tool) => await State.api('/tools', 'POST', tool),
    getInventory: async () => await State.api('/inventory') || [],
    updateInventoryId: async (id, qty) => await State.api(`/inventory/${id}`, 'PUT', { qty }),
    addInventoryItem: async (item) => await State.api('/inventory', 'POST', item)
};

// --- Utilities ---
const getUserProfile = () => JSON.parse(localStorage.getItem('perfil_tecnico')) || null;
const getReviews = () => JSON.parse(localStorage.getItem('maestro_reviews_full')) || [];


const formatCurrency = (amount) => {
    const profile = getUserProfile();
    const currency = profile ? LOCATIONS[profile.country].currency : CONFIG.currency;
    const locale = profile ? LOCATIONS[profile.country].locale : CONFIG.locale;

    // Strict integer rounding
    const roundedAmount = Math.round(amount);

    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(roundedAmount);
};

// --- Modules ---

const RegistrationModule = {
    init: () => {
        const form = document.getElementById('registrationForm');
        if (!form) return;

        const countrySelect = document.getElementById('regCountry');
        // Region/Commune removed from Registration per new streamlined flow

        // Form Submit
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const password = document.getElementById('regPassword').value;
            const profileData = {
                name: document.getElementById('regName').value,
                email: document.getElementById('regEmail').value,
                password: password,
                role: document.getElementById('regRole')?.value || 'maestro', // Default to maestro
                trade: document.getElementById('regTrade').value
            };

            try {
                const API_BASE_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
                    ? 'http://localhost:5000/api'
                    : '/api';
                const response = await fetch(`${API_BASE_URL}/auth/register`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(profileData)
                });

                const data = await response.json();

                if (response.ok) {
                    // Save Token
                    localStorage.setItem('token', data.token);
                    // Save Profile Data for other modules (temporarily keep this for compatibility)
                    // In a full refactor, we would fetch profile on dashboard load
                    const userProfile = {
                        name: profileData.name,
                        email: profileData.email,
                        trade: profileData.trade,
                        country: countrySelect.value,
                        // Add other fields as needed
                    };
                    localStorage.setItem('perfil_tecnico', JSON.stringify(userProfile));

                    alert('¡Registro Completado!');
                    window.location.href = 'dashboard.html';
                } else {
                    alert(data.msg || 'Error en el registro');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Error de conexión con el servidor');
            }
        });
    }
};

const LoginModule = {
    init: () => {
        const form = document.getElementById('loginForm');
        if (!form) return;

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            try {
                const API_BASE_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
                    ? 'http://localhost:5000/api'
                    : '/api';
                const response = await fetch(`${API_BASE_URL}/auth/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, password })
                });

                const data = await response.json();

                if (response.ok) {
                    localStorage.setItem('token', data.token);

                    // Update Local Profile from Server Data
                    if (data.user) {
                        const userProfile = {
                            name: data.user.name,
                            email: email, // or data.user.email
                            role: data.user.role,
                            ...data.user.profile
                        };
                        localStorage.setItem('perfil_tecnico', JSON.stringify(userProfile));
                    }

                    window.location.href = 'dashboard.html';
                } else {
                    alert(data.msg || 'Credenciales inválidas');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Error de conexión con el servidor');
            }
        });
    }
};

const BudgetModule = {
    init: () => {
        const addItemBtn = document.getElementById('addItemBtn');
        const budgetTableBody = document.querySelector('#budgetTable tbody');
        const saveBtn = document.getElementById('btnGenerate');
        const countryInput = document.getElementById('projectCountry');
        const regionSelect = document.getElementById('projectRegion');
        const communeSelect = document.getElementById('projectCommune');
        const formInputs = document.querySelectorAll('.required-field, #projectCommune, #projectRegion');

        // Populate Location Selectors
        const profile = getUserProfile();
        if (profile) {

            // Set Country
            if (countryInput) {
                const cName = LOCATIONS[profile.country] ? LOCATIONS[profile.country].name : profile.country;
                countryInput.value = cName;
            }

            if (regionSelect && communeSelect && LOCATIONS[profile.country]) {
                const countryCode = profile.country;
                const regions = LOCATIONS[countryCode].regions;

                regionSelect.innerHTML = '<option value="">Seleccione...</option>';
                regionSelect.disabled = false;

                for (const [key, region] of Object.entries(regions)) {
                    const option = document.createElement('option');
                    option.value = key;
                    option.textContent = region.name;
                    regionSelect.appendChild(option);

                    // Pre-select if matches profile
                    if (region.name === profile.region) {
                        option.selected = true;
                    }
                }

                const loadCommunes = (regKey) => {
                    communeSelect.innerHTML = '<option value="">Seleccione...</option>';
                    communeSelect.disabled = true;
                    if (regKey && LOCATIONS[countryCode].regions[regKey]) {
                        const communes = LOCATIONS[countryCode].regions[regKey].communes;
                        communes.forEach(c => {
                            const option = document.createElement('option');
                            option.value = c;
                            option.textContent = c;
                            communeSelect.appendChild(option);
                            if (c === profile.commune && regionSelect.options[regionSelect.selectedIndex].text === profile.region) {
                                option.selected = true;
                            }
                        });
                        communeSelect.disabled = false;
                    }
                }

                regionSelect.addEventListener('change', (e) => {
                    loadCommunes(e.target.value);
                    BudgetModule.validateForm();
                });

                // Initial load
                if (regionSelect.value) loadCommunes(regionSelect.value);
            }
        }

        // Cache tools for depreciation calculation
        BudgetModule.tools = [];
        State.getTools().then(t => {
            BudgetModule.tools = t || [];
            BudgetModule.calculateTotals();
        });

        // Check for pending converted lead
        const pendingLead = JSON.parse(localStorage.getItem('pending_budget'));

        if (pendingLead) {
            // Fill Client Info
            const clientNameInput = document.getElementById('clientName');
            const clientPhoneInput = document.getElementById('clientPhone'); // Does budget have phone? Maybe add later

            if (clientNameInput) clientNameInput.value = pendingLead.clientName;

            if (pendingLead.desc) {
                // Wait for rows to be initialized
                setTimeout(() => {
                    const firstRowDesc = document.querySelector('#budgetTable tbody tr .item-desc');
                    if (firstRowDesc) firstRowDesc.value = pendingLead.desc;
                }, 500);
            }

            localStorage.removeItem('pending_budget');
        }

        if (!addItemBtn || !budgetTableBody) return;

        // Add initial row
        if (budgetTableBody.children.length === 0) {
            BudgetModule.addRow();
        }

        addItemBtn.addEventListener('click', () => BudgetModule.addRow());

        const printBtn = document.getElementById('btnPrintBudget');
        if (printBtn) {
            printBtn.addEventListener('click', () => {
                BudgetModule.printBudget();
            });
        }

        // Event delegation
        budgetTableBody.addEventListener('input', (e) => {
            if (e.target.matches('input') || e.target.matches('select')) {
                BudgetModule.calculateTotals();
            }
        });

        budgetTableBody.addEventListener('click', (e) => {
            if (e.target.closest('.delete-btn')) {
                e.target.closest('tr').remove();
                BudgetModule.calculateTotals();
            }
        });

        if (saveBtn) {
            saveBtn.addEventListener('click', BudgetModule.saveBudget);
            // Validation Listener
            formInputs.forEach(input => {
                input.addEventListener('input', BudgetModule.validateForm);
                input.addEventListener('change', BudgetModule.validateForm);
            });
            // Initial Validation
            BudgetModule.validateForm();
        }

        // Check for Load Parameter (Edit Mode)
        const urlParams = new URLSearchParams(window.location.search);
        const budgetId = urlParams.get('id');

        // Annex Logic
        const addAnnexBtn = document.getElementById('btnAddAnnex');
        const annexSection = document.getElementById('annexSection');

        if (addAnnexBtn) {
            addAnnexBtn.addEventListener('click', () => {
                BudgetModule.addAnnexRow();
            });
        }

        if (budgetId) {
            BudgetModule.loadBudget(budgetId);
            if (annexSection) annexSection.style.display = 'block';
        } else {
            if (annexSection) annexSection.style.display = 'none';
        }
    },

    validateForm: () => {
        const clientName = document.getElementById('clientName').value.trim();
        const clientRut = document.getElementById('clientRut').value.trim();
        const clientEmail = document.getElementById('clientEmail').value.trim();
        const region = document.getElementById('projectRegion').value;
        const commune = document.getElementById('projectCommune').value;
        const btn = document.getElementById('btnGenerate');

        if (btn) {
            if (clientName && clientRut && clientEmail && region && commune) {
                btn.disabled = false;
            } else {
                btn.disabled = true;
            }
        }
    },

    addRow: (data = null) => {
        const tbody = document.querySelector('#budgetTable tbody');
        const tr = document.createElement('tr');

        const desc = data ? data.desc : '';
        const qty = data ? data.qty : 1;
        const price = data ? data.price : 0;
        const type = data ? data.type : 'material_tech';

        tr.innerHTML = `
            <td><input type="text" class="form-input item-desc" placeholder="Descripción" value="${desc}"></td>
            <td>
                <select class="form-input item-type">
                    <option value="material_tech" ${type === 'material_tech' ? 'selected' : ''}>Material (Yo lo pongo)</option>
                    <option value="labor" ${type === 'labor' ? 'selected' : ''}>Mano de Obra</option>
                    <option value="material_client" ${type === 'material_client' ? 'selected' : ''}>Material (Cliente lo pone)</option>
                </select>
            </td>
            <td><input type="number" class="form-input item-qty" value="${qty}" min="1"></td>
            <td><input type="number" class="form-input item-price" value="${price}" min="0"></td>
            <td class="item-total">$0</td>
            <td><button class="delete-btn text-red-500">🗑️</button></td>
        `;
        tbody.appendChild(tr);
        BudgetModule.calculateTotals();
    },

    addAnnexRow: (data = null) => {
        const tbody = document.querySelector('#annexTable tbody');
        if (!tbody) return;

        const tr = document.createElement('tr');
        const desc = data ? data.desc : '';
        const price = data ? data.price : 0;

        tr.innerHTML = `
            <td><input type="text" class="form-input annex-desc" placeholder="Descripción Anexo" value="${desc}"></td>
            <td><input type="number" class="form-input annex-price" value="${price}" min="0"></td>
            <td><button class="delete-annex-btn text-red-500">🗑️</button></td>
        `;

        tr.querySelector('.delete-annex-btn').addEventListener('click', () => {
            tr.remove();
            BudgetModule.calculateTotals();
        });

        tr.querySelectorAll('input').forEach(input => {
            input.addEventListener('input', BudgetModule.calculateTotals);
        });

        tbody.appendChild(tr);
        BudgetModule.calculateTotals();
    },

    calculateTotals: () => {
        const rows = document.querySelectorAll('#budgetTable tbody tr');
        let subtotal = 0;
        let startBox = 0;
        let laborTotal = 0;

        rows.forEach(row => {
            const typeSelector = row.querySelector('.item-type');
            const type = typeSelector ? typeSelector.value : 'material_tech';
            const qty = Math.round(parseFloat(row.querySelector('.item-qty').value) || 0);
            const price = Math.round(parseFloat(row.querySelector('.item-price').value) || 0);
            const total = qty * price;

            // Integer Math only
            const effectiveTotal = (type === 'material_client') ? 0 : total;

            row.querySelector('.item-total').textContent = formatCurrency(effectiveTotal);
            subtotal += effectiveTotal;

            if (type === 'material_tech') startBox += total;
            if (type === 'labor') laborTotal += total;
        });

        // Add Depreciation Cost (Invisible to user in table, but added to subtotal?)
        // Requirement: "añadir este costo prorrateado".
        // Let's add it as a visible row if it exists, or just sum it?
        // Better: Just add to the displayed Total.

        // Pass cached tools
        const hourlyDepreciation = ToolsModule.calculateHourlyDepreciation(BudgetModule.tools);
        // Assume 20h per project avg if no time tracking yet
        const depreciationCost = hourlyDepreciation; // One month's worth? Or 1 hour?
        // Logic: "Depreciación Mensual".
        // If I have $10k monthly depreciation.
        // And I do this budget. I should charge a fraction.
        // Let's charge 10% of monthly depreciation per job as a rule of thumb.
        const appliedDepreciation = Math.round(hourlyDepreciation * 0.10);

        // We will store this but maybe not show it in the item list to avoid confusion, 
        // or add a specific row "Aporte Renovación Herramientas".
        // For MVP, let's just add it to the final calculation logic if we were creating a new item.
        // But here we are just calculating totals of EXISTING rows.
        // So we won't hack the total here unless we insert a row.


        // Annex Totals
        let annexTotal = 0;
        const annexRows = document.querySelectorAll('#annexTable tbody tr');
        if (annexRows) {
            annexRows.forEach(row => {
                const price = Math.round(parseFloat(row.querySelector('.annex-price').value) || 0);
                annexTotal += price;
            });
        }

        // Add annex to subtotal? The requirement says "sumándolos al total original".
        // Assuming Annex is mostly Labor+Material mixed, or just extra cost.
        // We add it to the final view.
        const totalProject = subtotal + annexTotal;

        // Update Totals
        const displaySubtotal = document.getElementById('displaySubtotal');
        const displayTotal = document.getElementById('displayTotal');

        if (displaySubtotal) displaySubtotal.textContent = formatCurrency(subtotal);
        // Display Annex Total?
        // displayTotal already declared above
        if (displayTotal) displayTotal.textContent = formatCurrency(totalProject);

        const displayAnnexTotal = document.getElementById('displayAnnexTotal');
        if (displayAnnexTotal) displayAnnexTotal.textContent = formatCurrency(annexTotal);

        // Security / Advance Logic
        const laborAdvance = Math.round(laborTotal * 0.30);
        const suggestedAdvance = startBox + laborAdvance;

        const displayStartBox = document.getElementById('displayStartBox');
        const displayLaborAdvance = document.getElementById('displayLaborAdvance');
        const displayAdvance = document.getElementById('displayAdvance');

        if (displayStartBox) displayStartBox.textContent = formatCurrency(startBox);
        if (displayLaborAdvance) displayLaborAdvance.textContent = formatCurrency(laborAdvance);
        if (displayAdvance) displayAdvance.textContent = formatCurrency(suggestedAdvance);
    },

    saveBudget: async () => {
        const rows = document.querySelectorAll('#budgetTable tbody tr');
        const items = [];
        let total = 0;
        let startBox = 0;
        let laborTotal = 0;

        rows.forEach(row => {
            const desc = row.querySelector('.item-desc').value;
            const typeSelector = row.querySelector('.item-type');
            const type = typeSelector ? typeSelector.value : 'material_tech';
            const qty = Math.round(parseFloat(row.querySelector('.item-qty').value) || 0);
            const price = Math.round(parseFloat(row.querySelector('.item-price').value) || 0);
            const rowTotal = qty * price;
            const effectiveTotal = (type === 'material_client') ? 0 : rowTotal;

            if (desc) {
                items.push({ desc, type, qty, price, total: effectiveTotal });
                total += effectiveTotal;

                if (type === 'material_tech') startBox += rowTotal;
                if (type === 'labor') laborTotal += rowTotal;
            }
        });

        // Save Annexes
        const annexItems = [];
        let annexTotal = 0;
        const annexRows = document.querySelectorAll('#annexTable tbody tr');
        if (annexRows) {
            annexRows.forEach(row => {
                const desc = row.querySelector('.annex-desc').value;
                const price = Math.round(parseFloat(row.querySelector('.annex-price').value) || 0);
                if (desc) {
                    annexItems.push({ desc, price });
                    annexTotal += price;
                }
            });
        }

        const advance = startBox + Math.round(laborTotal * 0.30);

        // Final Total includes Annexes
        total += annexTotal;

        const projectType = document.getElementById('projectType')?.value || 'Servicio General';
        const regionSelect = document.getElementById('projectRegion');
        const communeSelect = document.getElementById('projectCommune');
        const projectAddress = document.getElementById('projectAddress')?.value || '';

        const region = regionSelect ? regionSelect.options[regionSelect.selectedIndex].text : '';
        const commune = communeSelect ? communeSelect.value : '';

        const trade = document.getElementById('tradeSelector')?.value || 'general';
        const clientName = document.getElementById('clientName')?.value || 'Cliente sin nombre';
        const clientRut = document.getElementById('clientRut')?.value || '';
        const clientEmail = document.getElementById('clientEmail')?.value || '';

        const urlParams = new URLSearchParams(window.location.search);
        const existingId = urlParams.get('id');

        const budget = {
            id: existingId ? Number(existingId) : Date.now(),
            date: new Date().toISOString(),
            trade,
            projectType,
            location: {
                region,
                commune,
                address: projectAddress
            },
            client: clientName,
            clientRut: clientRut,
            clientEmail: clientEmail,
            items: items,
            annexes: annexItems, // New Field
            total: total,
            advance: advance,
            status: 'pending'
        };

        await State.saveBudget(budget);

        // --- Inventory Logic ---
        // If "Obra Vendida" (implies we used inventory) or just check items
        // For this MVP, we deduct if type is 'material_tech' and matches an inventory item name?
        // Or better: We assume budget items mapped to inventory if names match.
        // Let's simpler: Just alert for now or basic deduction.
        // Let's simpler: Just alert for now or basic deduction.
        const inventory = await State.getInventory();
        for (const item of items) {
            if (item.type === 'material_tech') {
                const invItem = inventory.find(i => i.name.toLowerCase() === item.desc.toLowerCase());
                if (invItem && invItem.qty >= item.qty) {
                    await State.updateInventoryId(invItem.id, invItem.qty - item.qty);
                }
            }
        }

        alert(`Presupuesto guardado.\nAnticipo Requerido: ${formatCurrency(advance)}`);
        window.location.href = 'dashboard.html';
    },

    // New Method: Update Status & Timer
    updateStatus: async (id, newStatus) => {
        const budget = await State.getBudgetById(id);
        if (!budget) return;

        budget.status = newStatus;

        if (newStatus === 'accepted' && !budget.startTime) {
            budget.startTime = new Date().toISOString();
        }

        if (newStatus === 'delivered' && !budget.endTime) {
            budget.endTime = new Date().toISOString();

            // Calculate Efficiency
            if (budget.startTime) {
                const start = new Date(budget.startTime);
                const end = new Date(budget.endTime);
                const hours = (end - start) / (1000 * 60 * 60);
                budget.actualHours = hours.toFixed(2);

                // Net Profit (30%) / Hours
                const netProfit = budget.total * CONFIG.ratios.profit;
                budget.hourlyRate = Math.round(netProfit / hours);
            }

            // Generate Survey Link
            const surveyLink = `${window.location.origin}/survey.html?id=${budget.id}`;
            alert(`¡Trabajo Finalizado!\n\nComparte este link con tu cliente para recibir tu calificación:\n${surveyLink}`);
            // In a real app, send via Email/WhatsApp API here
        }

        await State.saveBudget(budget);
        location.reload(); // Refresh to show changes
    },

    loadBudget: async (id) => {
        const budget = await State.getBudgetById(id);
        // Fix for MongoDB _id vs id
        if (!budget) {
            alert('Presupuesto no encontrado');
            return;
        }

        document.getElementById('tradeSelector').value = budget.trade || 'general';
        document.getElementById('clientName').value = budget.client || '';
        document.getElementById('clientRut').value = budget.clientRut || '';
        document.getElementById('clientEmail').value = budget.clientEmail || '';
        document.getElementById('projectType').value = budget.projectType || 'Instalación';
        document.getElementById('projectAddress').value = budget.location.address || '';

        const tbody = document.querySelector('#budgetTable tbody');
        tbody.innerHTML = '';
        budget.items.forEach(item => BudgetModule.addRow(item));

        // Load Annexes
        const annexBody = document.querySelector('#annexTable tbody');
        if (annexBody) {
            annexBody.innerHTML = '';
            if (budget.annexes && Array.isArray(budget.annexes)) {
                budget.annexes.forEach(annex => BudgetModule.addAnnexRow(annex));
            }
        }

        const headerTitle = document.querySelector('.dash-title-mobile');
        if (headerTitle) headerTitle.textContent = `Editar Presupuesto #${id}`;

        BudgetModule.validateForm();
    },

    printBudget: () => {
        const items = [];
        const rows = document.querySelectorAll('#budgetTable tbody tr');
        let laborTotal = 0;
        let startBox = 0;
        let subtotal = 0;

        rows.forEach(row => {
            const desc = row.querySelector('.item-desc').value;
            const typeSelector = row.querySelector('.item-type');
            const type = typeSelector ? typeSelector.value : 'material_tech';
            const qty = Math.round(parseFloat(row.querySelector('.item-qty').value) || 0);
            const price = Math.round(parseFloat(row.querySelector('.item-price').value) || 0);
            const total = qty * price;
            const effectiveTotal = (type === 'material_client') ? 0 : total;

            if (desc) {
                items.push({ desc, qty, price, total: effectiveTotal, type });
                subtotal += effectiveTotal;
                if (type === 'material_tech') startBox += total;
                if (type === 'labor') laborTotal += total;
            }
        });

        // Add Annexes
        const annexRows = document.querySelectorAll('#annexTable tbody tr');
        let annexTotal = 0;
        annexRows.forEach(row => {
            const desc = row.querySelector('.annex-desc').value;
            const price = Math.round(parseFloat(row.querySelector('.annex-price').value) || 0);
            if (desc) {
                items.push({ desc: `[Anexo] ${desc}`, qty: 1, price: price, total: price, type: 'annex' });
                annexTotal += price;
            }
        });

        const totalProject = subtotal + annexTotal;
        const laborAdvance = Math.round(laborTotal * 0.30);
        const advance = startBox + laborAdvance;

        const clientName = document.getElementById('clientName').value || 'Cliente';
        const projectType = document.getElementById('projectType').value;
        const layout = `
            <html>
            <head>
                <title>Presupuesto - [PROJECT_NAME]</title>
                <style>
                    body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 40px; color: #333; }
                    .header { display: flex; justify-content: space-between; border-bottom: 2px solid #eee; padding-bottom: 20px; margin-bottom: 30px; }
                    .logo { font-size: 24px; font-weight: bold; color: #2563EB; }
                    .meta { text-align: right; }
                    .client-info { margin-bottom: 40px; background: #f9fafb; padding: 20px; border-radius: 8px; }
                    table { width: 100%; border-collapse: collapse; margin-bottom: 30px; }
                    th { text-align: left; padding: 12px; border-bottom: 2px solid #ddd; color: #666; font-size: 14px; text-transform: uppercase; }
                    td { padding: 12px; border-bottom: 1px solid #eee; }
                    .totals { width: 300px; margin-left: auto; text-align: right; }
                    .totals .row { display: flex; justify-content: space-between; margin-bottom: 10px; }
                    .totals .row.final { font-size: 18px; font-weight: bold; border-top: 2px solid #333; padding-top: 10px; }
                    .advance-box { margin-top: 40px; border: 2px dashed #F59E0B; padding: 20px; background: #FFFBEB; border-radius: 8px; }
                    .advance-title { color: #D97706; font-weight: bold; margin-bottom: 10px; }
                    .advance-detail { display: flex; justify-content: space-between; margin-bottom: 5px; font-size: 14px; }
                    .advance-total { border-top: 1px solid #D97706; padding-top: 10px; margin-top: 10px; font-weight: bold; font-size: 16px; color: #B45309; display: flex; justify-content: space-between; }
                </style>
            </head>
            <body>
                <div class="header">
                    <div class="logo">[PROJECT_NAME]</div>
                    <div class="meta">
                        <div>Fecha: ${new Date().toLocaleDateString()}</div>
                        <div>Validez: 15 días</div>
                    </div>
                </div>
                
                <div class="client-info">
                    <strong>Cliente:</strong> ${clientName}<br>
                    <strong>Proyecto:</strong> ${projectType}<br>
                    <strong>Ubicación:</strong> ${document.getElementById('projectRegion').options[document.getElementById('projectRegion').selectedIndex]?.text || ''}, ${document.getElementById('projectCommune').value || ''}
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>Descripción</th>
                            <th>Cant.</th>
                            <th>Precio Unit.</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${items.map(item => `
                        <tr>
                            <td>${item.desc}</td>
                            <td>${item.qty}</td>
                            <td>${formatCurrency(item.price)}</td>
                            <td>${formatCurrency(item.total)}</td>
                        </tr>`).join('')}
                    </tbody>
                </table>

                <div class="totals">
                    <div class="row final">
                        <span>Total Proyecto</span>
                        <span>${formatCurrency(totalProject)}</span>
                    </div>
                </div>

                <div class="advance-box">
                    <div class="advance-title">Condiciones de Inicio (Anticipo Requerido)</div>
                    <div class="advance-detail">
                        <span>Materiales (100%):</span>
                        <span>${formatCurrency(startBox)}</span>
                    </div>
                    <div class="advance-detail">
                        <span>Mano de Obra (30%):</span>
                        <span>${formatCurrency(laborAdvance)}</span>
                    </div>
                     <div class="advance-detail" style="font-size: 12px; color: #666; margin-top: 5px;">
                        * El 70% restante de la mano de obra se paga contra entrega.
                    </div>
                    <div class="advance-total">
                        <span>Total a Pagar para Iniciar:</span>
                        <span>${formatCurrency(advance)}</span>
                    </div>
                </div>
                
                <div style="margin-top: 50px; text-align: center; font-size: 12px; color: #999;">
                    Generado automáticamente por [PROJECT_NAME]
                </div>
                <script>window.print();</script>
            </body>
            </html>
        `;

        const win = window.open('', '_blank');
        win.document.write(layout);
        win.document.close();
    }
}

const ToolsModule = {
    calculateHourlyDepreciation: (toolsList) => {
        // toolsList can be passed from cache
        const tools = toolsList || [];
        let totalMonthlyDepreciation = 0;

        tools.forEach(tool => {
            const lifespanMonths = (tool.lifespanYears || 1) * 12;
            totalMonthlyDepreciation += (tool.price / lifespanMonths);
        });

        return Math.round(totalMonthlyDepreciation);
    },
    getRenewalFund: async () => {
        // Virtual accumulation based on completed budgets
        // In a real app, we'd sum up the "Depreciation" line items from paid budgets.
        const budgets = await State.getBudgets();
        let fund = 0;
        budgets.forEach(b => {
            // Look for hidden depreciation item
            if (b.items) {
                const depItem = b.items.find(i => i.type === 'depreciation');
                if (depItem) fund += depItem.total;
            }
        });
        return fund;
    }
};

const InventoryModule = {
    init: () => {
        // UI logic for Inventory management to be added in Dashboard
    }
};

const ReputationModule = {
    calculateTrustIndex: (techId) => {
        // Since we are single-user demo, we ignore techId for localStorage fetching but logic remains
        const reviews = getReviews();
        if (reviews.length === 0) return { score: 0, level: 'Nuevo', stars: 0, count: 0 };

        let totalPoints = 0;
        let count = 0;

        reviews.forEach(r => {
            // Calculate points per review based on average score
            // Level 4 (Avg 3.5-4.0) = 10 pts
            // Level 3 (Avg 2.5-3.4) = 7 pts
            // Level 2 (Avg 1.5-2.4) = 3 pts
            // Level 1 (Avg < 1.5) = 0 pts

            const avg = parseFloat(r.average);
            if (avg >= 3.5) totalPoints += 10;
            else if (avg >= 2.5) totalPoints += 7;
            else if (avg >= 1.5) totalPoints += 3;
            else totalPoints += 0;

            count++;
        });

        // 5 Star Scale for UI
        const totalStars = reviews.reduce((acc, r) => acc + parseFloat(r.average), 0);
        const averageStars = (totalStars / count).toFixed(1);

        // Master Recommended Badge Logic
        const isMaster = averageStars >= 3.5 && count >= 5; // Require at least 5 jobs for badge

        return {
            points: totalPoints,
            stars: averageStars,
            count: count,
            isMaster: isMaster
        };
    },

    saveClientRating: (contractId, ratings) => {
        const clientRatings = JSON.parse(localStorage.getItem('client_ratings')) || [];
        clientRatings.push({
            contractId,
            ...ratings,
            date: new Date().toISOString()
        });
        localStorage.setItem('client_ratings', JSON.stringify(clientRatings));
    }
};

const DashboardModule = {
    init: async () => {
        if (!document.querySelector('.financial-module')) return;

        const budgets = await State.getBudgets();
        const profile = getUserProfile();

        // 1. Calculate Real Income (30% of Total, assuming all 'paid' or just estimated for now)
        // For accurate 'Real Income', we strictly take 30% (Profit) of the TOTAL budget.
        // In a real app, we filter by status === 'paid'.

        let totalIncome = 0; // Total Project Value
        let realProfit = 0;  // 30% Net
        let taxes = 0;       // 20%
        let expenses = 0;    // 50% (Materials + Tools)

        const serviceStats = {};

        budgets.forEach(b => {
            // Treat all as 'potential' or 'active' for this demo, or filter by status if implemented
            const amount = isNaN(b.total) ? 0 : b.total;
            totalIncome += amount;

            // Ratios
            const p = Math.round(amount * CONFIG.ratios.profit);
            const t = Math.round(amount * CONFIG.ratios.taxes);
            const e = amount - p - t; // Remaining is expenses

            realProfit += p;
            taxes += t;
            expenses += e;

            // Service Star Logic
            const trade = b.trade || 'General';
            if (!serviceStats[trade]) serviceStats[trade] = 0;
            serviceStats[trade] += p; // Rank by profit
        });

        const activeJobs = budgets.length;

        // Metrics DOM
        const incomeEl = document.querySelector('.metric-card-dash:nth-child(1) .value-large');
        const jobsEl = document.querySelector('.metric-card-dash:nth-child(2) .value-large');

        if (incomeEl) incomeEl.textContent = formatCurrency(totalIncome);
        if (jobsEl) jobsEl.textContent = activeJobs;

        // 2. Goal Progress
        if (profile && profile.incomeGoal > 0) {
            const goal = parseInt(profile.incomeGoal);
            const percent = Math.min(100, Math.round((realProfit / goal) * 100));
            const remaining = Math.max(0, goal - realProfit);

            document.getElementById('goalTarget').textContent = `Meta: ${formatCurrency(goal)}`;
            document.getElementById('goalProgress').style.width = `${percent}%`;

            const goalText = document.getElementById('goalText');
            if (remaining > 0) {
                goalText.innerHTML = `Te faltan <strong>${formatCurrency(remaining)}</strong> de ganancia neta para tu meta.`;
            } else {
                goalText.innerHTML = `<strong style="color: #10B981;">¡Felicidades! Has superado tu meta del mes.</strong>`;
            }
        }

        // 3. Accounting & Star Service
        const starServiceText = document.getElementById('starServiceText');
        if (starServiceText) {
            const sortedServices = Object.entries(serviceStats).sort((a, b) => b[1] - a[1]);
            if (sortedServices.length > 0) {
                const topService = sortedServices[0];
                starServiceText.innerHTML = `Tu actividad más rentable es <strong>${topService[0]}</strong> con ${formatCurrency(topService[1])} de ganancia.`;
            } else {
                starServiceText.textContent = "Sin datos suficientes aún.";
            }
        }

        // Export Button
        const btnExport = document.getElementById('btnExport');
        if (btnExport) {
            btnExport.addEventListener('click', () => {
                const report = `REPORTE CONTABLE [PROJECT_NAME]\n\n` +
                    `Técnico: ${profile ? profile.name : 'N/A'}\n` +
                    `Ingresos Totales: ${formatCurrency(totalIncome)}\n` +
                    `--------------------------------\n` +
                    `IMPUESTOS (20%): ${formatCurrency(taxes)}\n` +
                    `GASTOS (Materiales/Herr): ${formatCurrency(expenses)}\n` +
                    `GANANCIA NETA (30%): ${formatCurrency(realProfit)}\n` +
                    `--------------------------------\n` +
                    `Generado el: ${new Date().toLocaleDateString()}`;
                alert(report);
                console.log(report);
            });
        }

        // 4. Activity Table & Reviews
        const tableBody = document.getElementById('activityTableBody');
        const reviews = JSON.parse(localStorage.getItem('maestro_reviews')) || [];

        if (tableBody && budgets.length > 0) {
            tableBody.innerHTML = '';
            // Show last 10
            budgets.slice(-10).reverse().forEach(b => {
                const date = new Date(b.date).toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' });
                const tr = document.createElement('tr');

                // Determine Status Display
                let statusHtml = '<span class="status-badge pending">Pendiente</span>'; // Request/Pending
                const status = (b.status || '').toLowerCase();

                if (status === 'accepted') statusHtml = '<span class="status-badge process">En Proceso</span>';
                if (status === 'delivered' || status === 'finished') statusHtml = '<span class="status-badge paid">Entregado</span>'; // Paid/Delivered

                // Review Logic
                let actionHtml = '';
                if (status === 'delivered' || status === 'finished') {
                    const existingReview = reviews.find(r => r.contractId == b.id);
                    if (existingReview) {
                        actionHtml = `<span title="${existingReview.comment}">⭐ ${existingReview.stars}</span>`;
                    } else {
                        // Changed to Survey Link
                        actionHtml = `<button class="btn-small" onclick="window.sendSurvey(${b.id})">📧 Enviar Encuesta</button>`;
                    }

                    // Client Rating Button
                    const clientRatings = JSON.parse(localStorage.getItem('client_ratings')) || [];
                    const rated = clientRatings.find(cr => cr.contractId == b.id);
                    if (!rated) {
                        actionHtml += ` <button class="btn-small" style="background:var(--color-secondary);" onclick="window.rateClient(${b.id})">👤 Calificar Cliente</button>`;
                    }
                }

                tr.innerHTML = `
                    <td>${b.client}</td>
                    <td>${b.projectType || 'Servicio'}</td>
                    <td>${date}</td>
                    <td>${statusHtml}</td>
                    <td>${formatCurrency(b.total)}</td>
                    <td style="text-align: center;">${actionHtml}</td>
                `;
                tableBody.appendChild(tr);
            });
        }

        // Send Survey Handler
        window.sendSurvey = (id) => {
            const surveyLink = `${window.location.origin}/survey.html?id=${id}`;
            // Copy to clipboard mock
            navigator.clipboard.writeText(surveyLink).then(() => {
                alert(`Enlace copiado al portapapeles:\n${surveyLink}\n\nEnvíalo a tu cliente.`);
            });
        };

        // Rate Client Modal Logic
        window.rateClient = (id) => {
            const rating = prompt("Califica al cliente (1-5) en:\nPuntualidad, Respeto, Claridad.\n\nIngresa promedio (ej: 5):");
            if (rating) {
                ReputationModule.saveClientRating(id, { average: rating });
                alert("Calificación de cliente guardada.");
                DashboardModule.init();
            }
        };


        // 5. Arsenal Health (Renovation Fund)
        const fund = await ToolsModule.getRenewalFund();
        const arsenalEl = document.getElementById('arsenalValue');
        if (arsenalEl) arsenalEl.textContent = formatCurrency(fund);

        // 6. Efficiency
        const lastBudget = await State.getLastBudget();
        const efficiencyEl = document.getElementById('efficiencyValue');
        const efficiencyText = document.getElementById('efficiencyText');

        if (efficiencyEl && lastBudget && lastBudget.hourlyRate) {
            efficiencyEl.textContent = formatCurrency(lastBudget.hourlyRate) + '/hr';
            const targetHourly = (profile ? (profile.incomeGoal || 0) : CONFIG.baseIncomeTarget) / 160;

            if (lastBudget.hourlyRate < targetHourly) {
                const increase = Math.round(((targetHourly - lastBudget.hourlyRate) / lastBudget.hourlyRate) * 100);
                if (efficiencyText) efficiencyText.innerHTML = `⚠️ Estás cobrando poco. Sube tus precios un <strong>${increase}%</strong>.`;
            } else {
                if (efficiencyText) efficiencyText.innerHTML = `✅ ¡Excelente! Estás ganando bien por tu tiempo.`;
            }
        }


        // 7. Tools & Inventory Modal Logic
        const toolModal = document.getElementById('toolModal');
        const btnAddTool = document.getElementById('btnAddTool');
        const btnCloseTool = document.getElementById('btnCloseTool');
        const toolForm = document.getElementById('toolForm');

        if (btnAddTool && toolModal) {
            btnAddTool.addEventListener('click', () => toolModal.style.display = 'flex');
        }
        if (btnCloseTool && toolModal) {
            btnCloseTool.addEventListener('click', () => toolModal.style.display = 'none');
        }
        if (toolForm) {
            toolForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const name = document.getElementById('toolName').value;
                const price = Number(document.getElementById('toolPrice').value);
                const lifespan = Number(document.getElementById('toolLifespan').value);

                if (name && price && lifespan) {
                    State.addTool({ name, price, lifespanYears: lifespan, purchaseDate: new Date().toISOString() })
                        .then(() => {
                            alert('Herramienta agregada. El fondo de renovación se actualizará.');
                            toolModal.style.display = 'none';
                            location.reload();
                        });
                }
            });
        }

        btnAddInventory.addEventListener('click', () => {
            alert('Módulo de Inventario: Próximamente (Gestiona tus materiales aquí)');
        });


        // 8. Accounting Card Toggle
        const accCard = document.getElementById('accountingCard');
        const accDetails = document.getElementById('accountingDetails');
        if (accCard && accDetails) {
            accCard.addEventListener('click', (e) => {
                // Prevent toggle if clicking export button
                if (e.target.id === 'btnExport') return;

                const isHidden = accDetails.style.display === 'none';
                accDetails.style.display = isHidden ? 'block' : 'none';

                // Rotate arrow if we had one, or just simple toggle for now
                const arrow = accCard.querySelector('span[style*="font-size: 1.2rem"]');
                if (arrow) arrow.textContent = isHidden ? '▲' : '▼';
            });
        }
    }
};

const ContractModule = {
    init: async () => {
        const contractContent = document.getElementById('contractContent');
        if (!contractContent) return;

        const lastBudget = await State.getLastBudget();
        if (!lastBudget) {
            contractContent.innerHTML = '<p class="text-gray-500 italic">No hay presupuestos recientes. Crea uno primero.</p>';
            return;
        }

        const profile = getUserProfile();
        const techName = profile ? profile.name : CONFIG.user;
        const techId = profile ? `${profile.id}` : '______________';
        const clientName = lastBudget.client || '______________';
        const clientRut = lastBudget.clientRut || '______________';
        const clientEmail = lastBudget.clientEmail || '______________';

        // Date Formatting
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const today = new Date().toLocaleDateString('es-CL', options);

        // Items List for "Object" clause
        const itemsList = lastBudget.items.map(item => `<li>${item.desc} (x${item.qty})</li>`).join('');

        const html = `
            <div class="a4-paper">
                <div class="contract-header" style="text-align: center; margin-bottom: 2rem;">
                    <h2 style="text-transform: uppercase; margin-bottom: 0.5rem; color: #000;">Contrato de Prestación de Servicios Técnicos</h2>
                    <p style="font-size: 0.9rem; color: #555;">Folio Presupuesto: #${lastBudget.id}</p>
                </div>

                <div class="contract-body" style="font-family: 'Times New Roman', serif; font-size: 11pt; line-height: 1.4; color: #000;">
                    <p style="text-align: justify;">
                        En <strong>${lastBudget.location.commune || 'Santiago'}</strong>, a <strong>${today}</strong>, entre:
                    </p>
                    <p style="text-align: justify;">
                        Por una parte, <strong>${techName}</strong>, Cédula de Identidad N° <strong>${techId}</strong>, 
                        en adelante "EL PRESTADOR"; y por la otra, <strong>${clientName}</strong>, 
                        Cédula de Identidad/RUT N° <strong>${clientRut}</strong>, en adelante "EL CLIENTE", 
                        se ha convenido el siguiente contrato de prestación de servicios:
                    </p>

                    <h4 style="margin: 1rem 0 0.5rem; text-transform: uppercase; font-size: 10pt;">Primero: Objeto del Contrato.</h4>
                    <p style="text-align: justify;">
                        EL PRESTADOR se obliga a ejecutar para EL CLIENTE los servicios de <strong>${lastBudget.projectType || 'Servicio Técnico'}</strong> 
                        en el domicilio ubicado en <strong>${lastBudget.location.address}, ${lastBudget.location.commune}</strong>.
                        Los trabajos específicos a realizar son los detallados en el Presupuesto #${lastBudget.id}, que forma parte integral de este contrato:
                    </p>
                    <ul style="margin: 0.5rem 0 1rem 1.5rem;">${itemsList}</ul>

                    <h4 style="margin: 1rem 0 0.5rem; text-transform: uppercase; font-size: 10pt;">Segundo: Honorarios y Forma de Pago.</h4>
                    <p style="text-align: justify;">
                        El costo total de los servicios asciende a la suma de <strong>${formatCurrency(lastBudget.total)}</strong>. 
                        Las partes acuerdan la siguiente forma de pago:
                    </p>
                    <ul style="margin: 0.5rem 0 1rem 1.5rem;">
                        <li>Un anticipo de <strong>${formatCurrency(lastBudget.advance)}</strong> (correspondiente al 100% de materiales y 30% de mano de obra), pagadero a la firma del presente contrato.</li>
                        <li>El saldo restante de <strong>${formatCurrency(lastBudget.total - lastBudget.advance)}</strong>, pagadero contra la entrega conforme de los trabajos.</li>
                    </ul>

                    <h4 style="margin: 1rem 0 0.5rem; text-transform: uppercase; font-size: 10pt;">Tercero: Independencia Laboral.</h4>
                    <p style="text-align: justify;">
                        Las partes declaran expresamente que el presente contrato es de naturaleza civil y no crea vínculo de subordinación 
                        o dependencia entre EL CLIENTE y EL PRESTADOR, ni relación laboral alguna. EL PRESTADOR ejecutará los servicios 
                        de manera independiente, con sus propios medios y bajo su propia dirección técnica.
                    </p>

                    <h4 style="margin: 1rem 0 0.5rem; text-transform: uppercase; font-size: 10pt;">Cuarto: Obligaciones.</h4>
                    <p style="text-align: justify;">
                        EL PRESTADOR se compromete a realizar los trabajos con la debida diligencia y conforme a las reglas del arte. 
                        Por su parte, EL CLIENTE se obliga a facilitar el acceso al lugar de trabajo y a proporcionar los materiales 
                        acordados oportunamente (si corresponde).
                    </p>

                    <h4 style="margin: 1rem 0 0.5rem; text-transform: uppercase; font-size: 10pt;">Quinto: Domicilio y Jurisdicción.</h4>
                    <p style="text-align: justify;">
                        Para todos los efectos legales derivados del presente contrato, las partes fijan su domicilio en la ciudad 
                        y comuna de <strong>${lastBudget.location.commune}</strong> y se someten a la competencia de sus Tribunales de Justicia.
                    </p>
                </div>

                <div class="signatures-section" style="margin-top: 3rem; display: flex; justify-content: space-between; gap: 2rem;">
                    <div class="signature-box" style="flex: 1; text-align: center;">
                        <canvas id="sig-provider" class="signature-canvas" width="250" height="120" style="border-bottom: 1px solid #000; margin-bottom: 0.5rem;"></canvas>
                        <div class="signature-label" style="font-weight: bold; font-size: 0.9rem;">EL PRESTADOR</div>
                        <div style="font-size: 0.8rem;">${techName}</div>
                        <button class="btn-small-clear text-xs text-red-500 mt-2" data-target="sig-provider">(Borrar)</button>
                    </div>
                    <div class="signature-box" style="flex: 1; text-align: center;">
                        <canvas id="sig-client" class="signature-canvas" width="250" height="120" style="border-bottom: 1px solid #000; margin-bottom: 0.5rem;"></canvas>
                        <div class="signature-label" style="font-weight: bold; font-size: 0.9rem;">EL CLIENTE</div>
                        <div style="font-size: 0.8rem;">${clientName}</div>
                        <button class="btn-small-clear text-xs text-red-500 mt-2" data-target="sig-client">(Borrar)</button>
                    </div>
                </div>

                <div class="contract-actions" style="margin-top: 3rem; padding-top: 2rem; border-top: 2px dashed var(--border-color);">
                    <div style="background: #eff6ff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
                        <p style="font-size: 0.9rem; color: #1e40af; margin-bottom: 0.5rem;">
                            <strong>Envío Digital:</strong> El contrato firmado se enviará automáticamente a:
                        </p>
                        <ul style="font-size: 0.9rem; color: #1e3a8a; list-style: disc; padding-left: 1.5rem;">
                            <li>Cliente: <strong>${clientEmail}</strong></li>
                            <li>Técnico: <strong>${profile ? profile.email : 'tu correo'}</strong></li>
                        </ul>
                    </div>
                    <button id="btnSaveContract" class="btn-primary" style="width: 100%; justify-content: center;">
                        💾 Firmar y Finalizar Contrato
                    </button>
                </div>
            </div>
        `;

        contractContent.innerHTML = html;

        // Signature Logic (Reusable)
        const initCanvas = (canvasId) => {
            const canvas = document.getElementById(canvasId);
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            let drawing = false;

            // Handle Theme Changes for Ink Color
            const getInkColor = () => document.body.classList.contains('dark-mode') ? '#FFFFFF' : '#000000';

            const startDraw = (x, y) => {
                drawing = true;
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.strokeStyle = getInkColor();
                ctx.lineWidth = 2;
            };

            const draw = (x, y) => {
                if (!drawing) return;
                ctx.lineTo(x, y);
                ctx.stroke();
            };

            canvas.addEventListener('mousedown', (e) => startDraw(e.offsetX, e.offsetY));
            canvas.addEventListener('mousemove', (e) => draw(e.offsetX, e.offsetY));
            canvas.addEventListener('mouseup', () => drawing = false);
            canvas.addEventListener('mouseout', () => drawing = false);

            canvas.addEventListener('touchstart', (e) => {
                e.preventDefault();
                const rect = canvas.getBoundingClientRect();
                startDraw(e.touches[0].clientX - rect.left, e.touches[0].clientY - rect.top);
            });
            canvas.addEventListener('touchmove', (e) => {
                e.preventDefault();
                const rect = canvas.getBoundingClientRect();
                draw(e.touches[0].clientX - rect.left, e.touches[0].clientY - rect.top);
            });
            canvas.addEventListener('touchend', () => drawing = false);
        };

        initCanvas('sig-provider');
        initCanvas('sig-client');

        document.querySelectorAll('.btn-small-clear').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const canvasId = e.target.dataset.target;
                const canvas = document.getElementById(canvasId);
                const ctx = canvas.getContext('2d');
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            });
        });

        // Save & Send Logic
        const btnSave = document.getElementById('btnSaveContract');
        if (btnSave) {
            btnSave.addEventListener('click', () => {
                // Check if signed (simple check)
                // In real app, check canvas data

                // Mock Saving
                alert(`✅ Contrato Firmado y Guardado.\n\n📧 Copias enviadas a:\n- ${clientName} (${clientEmail})\n- ${techName}\n\nEl documento legal es ahora válido.`);
            });
        }

        // --- Annex Logic ---
        const btnOpenAnnex = document.getElementById('btnOpenAnnexModal');
        const modal = document.getElementById('annexModal');
        const btnCloseAnnex = document.getElementById('btnCloseAnnex');
        const btnSaveAnnex = document.getElementById('btnSaveAnnex');

        if (btnOpenAnnex && modal) {
            btnOpenAnnex.addEventListener('click', () => {
                modal.style.display = 'flex';
            });
        }

        if (btnCloseAnnex) {
            btnCloseAnnex.addEventListener('click', () => {
                modal.style.display = 'none';
            });
        }

        if (btnSaveAnnex) {
            btnSaveAnnex.addEventListener('click', async () => {
                const desc = document.getElementById('annexDesc').value;
                const price = Math.round(parseFloat(document.getElementById('annexPrice').value) || 0);

                if (!desc || price <= 0) {
                    alert('Por favor, ingresa una descripción y un precio válido.');
                    return;
                }

                // Add Annex to Budget
                if (!lastBudget.annexes) lastBudget.annexes = [];
                lastBudget.annexes.push({ desc, price });

                // Update Total (Logic: Original Total + All Annexes)
                // We don't overwrite the original 'total' field if we want to keep track of base vs extra.
                // But for simplicity in this version, we will update the display in the contract re-render.
                // However, to persist, we should save the modified budget.

                await State.saveBudget(lastBudget); // Updates the existing ID

                alert('✅ Anexo agregado correctamente.');
                modal.style.display = 'none';

                // Reload to reflect changes
                // Simple reload:
                ContractModule.init();
            });
        }
    }
};

const ProfileModule = {
    init: () => {
        const profile = getUserProfile();
        if (!profile) return;

        // --- DOM Elements ---
        const viewMode = document.getElementById('viewMode');
        const editMode = document.getElementById('editMode');
        const btnEdit = document.getElementById('btnEditProfile');
        const btnCancel = document.getElementById('btnCancelEdit');
        const formEdit = document.getElementById('editMode');
        const badgeContainer = document.getElementById('badgeContainer');
        const uploadInput = document.getElementById('uploadCertInput');

        // --- Render View ---
        const render = async () => {
            // Basic Info
            document.getElementById('viewName').textContent = profile.name || 'Usuario';
            document.getElementById('viewTrade').textContent = profile.trade || 'General';
            if (LOCATIONS[profile.country]) {
                const locEl = document.getElementById('viewLocation');
                if (locEl) locEl.textContent = `📍 ${LOCATIONS[profile.country].name}`;
            }
            const goalEl = document.getElementById('viewGoal');
            if (goalEl) goalEl.textContent = `Meta: ${formatCurrency(profile.incomeGoal || 0)} / mes`;

            // Certification Badge
            if (profile.certified) {
                badgeContainer.className = 'metric-card verified';
                badgeContainer.style.backgroundColor = '#FEF3C7';
                badgeContainer.style.borderColor = '#F59E0B';
                badgeContainer.innerHTML = `
                    <div class="metric-icon">✅</div>
                    <div class="metric-value" style="color: #D97706;">Verificado</div>
                    <div class="metric-label">Certificación Oficial</div>
                 `;
                badgeContainer.onclick = null;
            } else {
                badgeContainer.className = 'metric-card unverified';
                badgeContainer.style.backgroundColor = 'var(--card-bg)'; // Use var
                badgeContainer.style.borderColor = 'var(--border-color)';
                badgeContainer.innerHTML = `
                    <div class="metric-icon">⚠️</div>
                    <div class="metric-value">No Verificado</div>
                    <div class="metric-label" style="text-decoration: underline; color: blue;">Subir Título</div>
                 `;
                badgeContainer.onclick = () => uploadInput.click();
            }

            // Profitability Ranking
            const budgets = await State.getBudgets();
            const stat = {};
            budgets.forEach(b => {
                const t = b.trade || 'General';
                if (!stat[t]) stat[t] = 0;
                stat[t] += (b.total || 0);
            });

            const sorted = Object.entries(stat).sort((a, b) => b[1] - a[1]);
            const rankEl = document.getElementById('profitRankValue');

            if (sorted.length > 0) {
                rankEl.innerHTML = `<span style="font-size: 0.9em">${sorted[0][0]}</span>`;
            } else {
                rankEl.textContent = "Sin datos";
            }

            // Tabs Content
            // About
            const aboutTab = document.querySelector('#about');
            if (aboutTab) {
                const bioText = profile.bio || 'Sin biografía aún. Edita tu perfil para añadir una descripción profesional.';
                aboutTab.innerHTML = `
                    <div class="card" style="padding: 2rem;">
                        <h3>Biografía Profesional</h3>
                        <p style="white-space: pre-wrap;">${bioText}</p>
                    </div>
                 `;
            }

            // Skills Tab (Formerly Tools)
            const skillsTab = document.querySelector('#skills');
            if (skillsTab) {
                const skillsList = profile.skills ? profile.skills.split(',').map(t => t.trim()).filter(t => t) : [];
                let skillsHtml = '<p class="text-xs text-gray-500 mb-4">No has registrado habilidades.</p>';

                if (skillsList.length > 0) {
                    skillsHtml = `<div class="card-badges">` +
                        skillsList.map(t => `<span class="badge" style="font-size: 1rem; padding: 8px 12px;">${t}</span>`).join('') +
                        `</div>`;
                }

                skillsTab.innerHTML = `
                    <div class="card" style="padding: 2rem;">
                        <h3>Habilidades y Competencias</h3>
                        <p class="text-sm text-gray-500 mb-4">Competencias técnicas validadas por experiencia.</p>
                        ${skillsHtml}
                    </div>
                 `;
            }
        };

        render();

        // --- Edit Logic ---
        btnEdit.addEventListener('click', () => {
            viewMode.style.display = 'none';
            editMode.style.display = 'grid';
            btnEdit.style.display = 'none';

            // Pre-fill
            document.getElementById('editName').value = profile.name || '';
            document.getElementById('editId').value = profile.id || '';
            document.getElementById('editTrade').value = profile.trade || '';
            document.getElementById('editCountry').value = profile.country || '';
            document.getElementById('editGoal').value = profile.incomeGoal || 0;
            document.getElementById('editBio').value = profile.bio || '';
            document.getElementById('editSkills').value = profile.skills || '';
        });

        btnCancel.addEventListener('click', () => {
            viewMode.style.display = 'block';
            editMode.style.display = 'none';
            btnEdit.style.display = 'block';
        });

        formEdit.addEventListener('submit', (e) => {
            e.preventDefault();

            // Update Profile Object
            profile.name = document.getElementById('editName').value;
            profile.id = document.getElementById('editId').value;
            profile.trade = document.getElementById('editTrade').value;
            profile.country = document.getElementById('editCountry').value;
            profile.incomeGoal = document.getElementById('editGoal').value;
            profile.bio = document.getElementById('editBio').value;
            profile.skills = document.getElementById('editSkills').value;

            localStorage.setItem('perfil_tecnico', JSON.stringify(profile));

            // Re-render and toggle back
            render();
            viewMode.style.display = 'block';
            editMode.style.display = 'none';
            btnEdit.style.display = 'block';
        });

        // --- Tab Logic ---
        const tabs = document.querySelectorAll('.tab-btn');
        const contents = document.querySelectorAll('.tab-pane');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all
                tabs.forEach(t => t.classList.remove('active'));
                contents.forEach(c => c.classList.remove('active'));

                // Add active to current
                tab.classList.add('active');
                const targetId = tab.dataset.tab;
                const targetContent = document.getElementById(targetId);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });

        // --- Upload Logic ---
        uploadInput.addEventListener('change', () => {
            if (uploadInput.files.length > 0) {
                // Mock Upload
                if (confirm('¿Confirmas que este documento es tu certificación oficial?')) {
                    profile.certified = true;
                    localStorage.setItem('perfil_tecnico', JSON.stringify(profile));
                    render();
                    alert('¡Documento subido! Tu perfil ahora está verificado.');
                }
            }
        });
    }
};

const MessagesModule = {
    init: () => {
        const leadsList = document.getElementById('leadsList');
        const chatHeader = document.getElementById('chatHeader');
        const chatHistory = document.getElementById('chatHistory');
        const btnConvert = document.getElementById('btnConvertBudget');

        if (!leadsList) return;

        const requests = JSON.parse(localStorage.getItem('maestro_requests')) || [];

        if (requests.length === 0) {
            leadsList.innerHTML = '<p style="padding: 1rem; color: #64748B; text-align: center;">No hay mensajes nuevos.</p>';
        } else {
            leadsList.innerHTML = '';
            // Sort by date desc
            requests.reverse().forEach((req, index) => {
                const div = document.createElement('div');
                div.style.padding = '1rem';
                div.style.borderBottom = '1px solid #E2E8F0';
                div.style.cursor = 'pointer';
                div.style.transition = 'background 0.2s';
                div.onmouseover = () => div.style.background = '#F8FAFC';
                div.onmouseout = () => div.style.background = 'white';

                // Format date
                const time = new Date(req.date).toLocaleDateString();
                const urgency = req.urgency || 'Normal';
                const urgencyColor = urgency === 'Emergencia' ? '#EF4444' : (urgency === 'Alta' ? '#F59E0B' : '#10B981');

                div.innerHTML = `
                    <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                        <span style="font-weight: bold; color: var(--color-oscuro);">${req.clientName}</span>
                        <span style="font-size: 0.8rem; color: #94A3B8;">${time}</span>
                    </div>
                    <div style="font-size: 0.85rem; color: #64748B; margin-bottom: 4px;">${req.desc.substring(0, 40)}...</div>
                    <div style="display: flex; gap: 5px;">
                        <span style="font-size: 0.7rem; padding: 2px 6px; border-radius: 4px; background: #E2E8F0; color: #475569;">${req.commune || 'Santiago'}</span>
                        <span style="font-size: 0.7rem; padding: 2px 6px; border-radius: 4px; background: ${urgencyColor}; color: white;">${urgency}</span>
                    </div>
                `;

                div.onclick = () => {
                    // Open Chat
                    if (chatHeader) chatHeader.querySelector('span').textContent = req.clientName;
                    if (btnConvert) {
                        btnConvert.style.display = 'block';
                        btnConvert.onclick = () => {
                            localStorage.setItem('pending_budget', JSON.stringify(req));
                            window.location.href = 'budget.html';
                        };
                    }

                    if (chatHistory) {
                        chatHistory.innerHTML = `
                            <div style="text-align: center; color: #94A3B8; margin-bottom: 1rem; font-size: 0.8rem;">${new Date(req.date).toLocaleString()}</div>
                            <div style="background: #E2E8F0; padding: 0.5rem 1rem; border-radius: 12px 12px 12px 0; max-width: 80%; margin-bottom: 0.5rem; align-self: flex-start;">
                                <strong>${req.clientName}:</strong> ${req.desc}
                                ${req.photo ? '<br><br><i>[📷 Foto del Problema Adjunta]</i>' : ''}
                            </div>
                            <div style="text-align: right; color: #94A3B8; font-size: 0.8rem; margin-top: 1rem;">En espera de respuesta del técnico...</div>
                        `;
                    }
                };
                leadsList.appendChild(div);
            });
        }

        // Update Badge
        const badge = document.getElementById('msgBadge');
        if (badge && requests.length > 0) {
            badge.textContent = requests.length;
            badge.style.display = 'inline-block';
        }
    }
};

window.showSection = (id) => {
    const main = document.getElementById('dashboardMain');
    const msgSec = document.getElementById('messagesSection');

    if (main && msgSec) {
        if (id === 'messages') {
            main.style.display = 'none';
            msgSec.style.display = 'block';
            MessagesModule.init();
        } else {
            main.style.display = 'block';
            msgSec.style.display = 'none';
        }
    }
};

const MarketplaceModule = {
    init: () => {
        const feed = document.getElementById('solutionsFeed');
        const filters = document.getElementById('categoryFilters');
        const searchInput = document.getElementById('marketSearch');
        const modal = document.getElementById('requestModal');
        const closeModal = document.getElementById('closeModal');
        const requestForm = document.getElementById('requestForm');

        if (!feed) return;

        // Helper to get stats
        const getStarsHtml = (techId) => {
            // For demo, we randomize stats for others, but use real for us if we were listed
            // Let's just generate a random high score for the "Marketplace Experience"

            // Deterministic pseudo-random based on ID
            const stars = (4.0 + (techId % 10) / 10).toFixed(1);
            const reviews = 10 + (techId * 2);

            // Check for Master Recommended (Stars > 4.5)
            const medal = stars >= 4.5 ? '<span title="Maestro Recomendado" style="margin-left:5px;">🏅</span>' : '';

            return `⭐ ${stars} (${reviews} trabajos) ${medal}`;
        };

        // Mock Data - Enhanced with 20 more examples
        const solutions = [
            // Original 6
            { id: 1, name: 'Juan Pérez', avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png', badge: true, category: 'electricidad', title: 'Instalación Eléctrica Domiciliaria', desc: 'Renovación completa de cableado, tableros y certificación TE1.', price: 150000, img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=600' },
            { id: 2, name: 'María González', avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135789.png', badge: true, category: 'gasfiteria', title: 'Fugas y Destapes Express', desc: 'Atención de emergencias 24/7. Detección de fugas con ultrasonido.', price: 45000, img: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=600' },
            { id: 3, name: 'Carlos Ruiz', avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png', badge: false, category: 'clima', title: 'Aire Acondicionado Split', desc: 'Instalación y mantención de equipos de aire acondicionado inverter.', price: 90000, img: 'https://images.unsplash.com/photo-1616763355603-9755a640a287?auto=format&fit=crop&q=80&w=600' },
            { id: 4, name: 'Pedro Sánchez', avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135823.png', badge: true, category: 'solar', title: 'Kit Solar Fotovoltaico 3kW', desc: 'Ahorra en tu cuenta de luz. Incluye paneles, inversor y trámites.', price: 2500000, img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=600' },
            { id: 5, name: 'Ana López', avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135755.png', badge: false, category: 'construccion', title: 'Remodelación de Baños', desc: 'Cambio de cerámica, grifería y sanitarios. Acabados de lujo.', price: 500000, img: 'https://images.unsplash.com/photo-1552321907-50b33b76435c?auto=format&fit=crop&q=80&w=600' },
            { id: 6, name: 'Luis Torres', avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135728.png', badge: true, category: 'seguridad', title: 'Cámaras de Seguridad HD', desc: 'Sistema de videovigilancia con acceso remoto desde el celular.', price: 180000, img: 'https://images.unsplash.com/photo-1557063673-0493e8bd87ce?auto=format&fit=crop&q=80&w=600' },

            // New 20 Examples
            // Electricidad
            { id: 7, name: 'Roberto Díaz', avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png', badge: true, category: 'electricidad', title: 'Certificación TE1 SEC', desc: 'Regularización de instalaciones eléctricas ante la SEC. Planos y trámites.', price: 80000, img: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=600' },
            { id: 8, name: 'Felipe Muñoz', avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png', badge: false, category: 'electricidad', title: 'Instalación de Lámparas', desc: 'Montaje de lámparas colgantes, apliqués y focos embutidos.', price: 25000, img: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&q=80&w=600' },
            { id: 9, name: 'Jorge Silva', avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135823.png', badge: true, category: 'electricidad', title: 'Tableros Eléctricos', desc: 'Armado y normalización de tableros eléctricos domiciliarios e industriales.', price: 120000, img: 'https://images.unsplash.com/photo-1558402529-d2638a7023e9?auto=format&fit=crop&q=80&w=600' },

            // Gasfitería
            { id: 10, name: 'Manuel Rojas', avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135728.png', badge: true, category: 'gasfiteria', title: 'Instalación de Calefont', desc: 'Instalación certificada de calefont ionizado y tiro forzado.', price: 45000, img: 'https://images.unsplash.com/photo-1507646227500-4d389b0012be?auto=format&fit=crop&q=80&w=600' },
            { id: 11, name: 'Diego Soto', avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135755.png', badge: false, category: 'gasfiteria', title: 'Cambio de Grifería', desc: 'Reemplazo de llaves de lavamanos, lavaplatos y duchas.', price: 30000, img: 'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&fit=crop&q=80&w=600' },
            { id: 12, name: 'Camila Paz', avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135789.png', badge: true, category: 'gasfiteria', title: 'Destape de Alcantarillado', desc: 'Servicio con máquina eléctrica para destape de cámaras y desagües.', price: 60000, img: 'https://images.unsplash.com/photo-1621905252507-b35a830099fc?auto=format&fit=crop&q=80&w=600' },

            // Climatización
            { id: 13, name: 'Esteban Cruz', avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png', badge: true, category: 'clima', title: 'Mantención Aire Acondicionado', desc: 'Limpieza profunda, carga de gas y revisión técnica.', price: 40000, img: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=600' },
            { id: 14, name: 'Patricia Leal', avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135789.png', badge: true, category: 'clima', title: 'Calefacción Central', desc: 'Instalación y purgado de radiadores y calderas.', price: 80000, img: 'https://images.unsplash.com/photo-1585934444222-67727195c65a?auto=format&fit=crop&q=80&w=600' },
            { id: 15, name: 'Ricardo Vega', avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135728.png', badge: false, category: 'clima', title: 'Ventilación Industrial', desc: 'Extractores de aire para cocinas y baños comerciales.', price: 150000, img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=600' },

            // Construcción Ligera (Drywall/Pintura)
            { id: 16, name: 'Sergio M.', avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135823.png', badge: false, category: 'construccion', title: 'Tabiquería Metalcom', desc: 'Muros divisorios, cielos falsos y ampliaciones en volcanita.', price: 18000, img: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&q=80&w=600' },
            { id: 17, name: 'Carmen Gloria', avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135789.png', badge: true, category: 'construccion', title: 'Pintura Interior/Exterior', desc: 'Pintura de fachadas, muros y rejas con terminaciones prolijas.', price: 5000, img: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80&w=600' },
            { id: 18, name: 'Héctor L.', avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png', badge: false, category: 'construccion', title: 'Radieres y Pisos', desc: 'Construcción de radieres, veredas y postura de pastelones.', price: 25000, img: 'https://images.unsplash.com/photo-1621905252472-943af68a029c?auto=format&fit=crop&q=80&w=600' },

            // Seguridad
            { id: 19, name: 'Tecnos Systems', avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135728.png', badge: true, category: 'seguridad', title: 'Cerco Eléctrico', desc: 'Instalación y certificación de cercos eléctricos perimetrales.', price: 350000, img: 'https://images.unsplash.com/photo-1558494949-efdeb6bf80c1?auto=format&fit=crop&q=80&w=600' },
            { id: 20, name: 'David Bravo', avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135755.png', badge: true, category: 'seguridad', title: 'Citofonía Digital', desc: 'Instalación de citófonos y videoporteros para edificios y casas.', price: 60000, img: 'https://images.unsplash.com/photo-1558002038-1091a1661116?auto=format&fit=crop&q=80&w=600' },
            { id: 21, name: 'Alarmas Pro', avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135823.png', badge: true, category: 'seguridad', title: 'Alarmas Comunitarias', desc: 'Sistemas de alerta vecinal con control remoto y baliza.', price: 120000, img: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80&w=600' },

            // Energías Renovables (Solar)
            { id: 22, name: 'EcoSolar Chile', avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135789.png', badge: true, category: 'solar', title: 'Termosifón Solar', desc: 'Agua caliente gratis con energía solar. Equipos de 150L y 200L.', price: 650000, img: 'https://images.unsplash.com/photo-1592833159057-65a284572bce?auto=format&fit=crop&q=80&w=600' },
            { id: 23, name: 'Javier Solar', avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png', badge: false, category: 'solar', title: 'Bombas Solares', desc: 'Bombeo de agua para riego con energía fotovoltaica.', price: 1200000, img: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=600' },

            // Carpintería
            { id: 24, name: 'Muebles A Medida', avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135755.png', badge: true, category: 'carpinteria', title: 'Cocinas Empotradas', desc: 'Diseño y fabricación de muebles de cocina en melamina.', price: 850000, img: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=600' },
            { id: 25, name: 'Raúl Maderas', avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135728.png', badge: false, category: 'carpinteria', title: 'Puertas y Ventanas', desc: 'Instalación y ajuste de puertas de madera solida y placarol.', price: 35000, img: 'https://images.unsplash.com/photo-1506377950269-63eef2507850?auto=format&fit=crop&q=80&w=600' },
            { id: 26, name: 'Closet Express', avatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135823.png', badge: true, category: 'carpinteria', title: 'Closets y Walk-in', desc: 'Organización de espacios con repisas y cajoneras a medida.', price: 450000, img: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&q=80&w=600' }
        ];

        const render = (filter = 'all') => {
            feed.innerHTML = '';
            const filtered = solutions.filter(s => filter === 'all' || s.category === filter);

            filtered.forEach(s => {
                const card = document.createElement('div');
                card.className = 'solution-card-market';
                card.innerHTML = `
                    <div class="market-img-container">
                        <img src="${s.img}" class="market-img" alt="${s.title}">
                        <div class="tech-badge-overlay">
                            <img src="${s.avatar}" alt="${s.name}">
                        </div>
                    </div>
                    <div class="market-body">
                        <div class="market-category">
                            ${s.name} ${s.badge ? '<span title="Certificado">✅</span>' : ''}
                        </div>
                        <h3 class="market-title">${s.title}</h3>
                        <p class="market-desc">${s.desc}</p>
                        <div class="market-price">
                            ${formatCurrency(s.price)} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-secondary);">(Ref.)</span>
                        </div>
                        <div style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--accent-color);">
                           ${getStarsHtml(s.id)}
                        </div>
                        <button class="btn-primary" style="width: 100%; margin-top: 1rem;" onclick="window.requestService(${s.id})">
                            Solicitar Presupuesto
                        </button>
                    </div>
                `;
                feed.appendChild(card);
            });
        };

        render();

        // Filters
        if (filters) {
            filters.addEventListener('click', (e) => {
                if (e.target.classList.contains('cat-chip')) {
                    document.querySelectorAll('.cat-chip').forEach(c => c.classList.remove('active'));
                    e.target.classList.add('active');
                    render(e.target.dataset.cat);
                }
            });
        }

        // Search
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const term = e.target.value.toLowerCase();
                // Simple client-side search refilter logic for demo purpose
                // In real app, call API
                feed.innerHTML = '';
                const filtered = solutions.filter(s => s.title.toLowerCase().includes(term) || s.desc.toLowerCase().includes(term));
                filtered.forEach(s => { /* Reuse render logic or extract it */
                    const card = document.createElement('div');
                    card.className = 'solution-card-market';
                    card.innerHTML = `
                        <div class="market-img-container">
                            <img src="${s.img}" class="market-img" alt="${s.title}">
                            <div class="tech-badge-overlay">
                                <img src="${s.avatar}" alt="${s.name}">
                            </div>
                        </div>
                        <div class="market-body">
                            <div class="market-category">
                                ${s.name} ${s.badge ? '<span title="Certificado">✅</span>' : ''}
                            </div>
                            <h3 class="market-title">${s.title}</h3>
                            <p class="market-desc">${s.desc}</p>
                            <div class="market-price">
                                ${formatCurrency(s.price)} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-secondary);">(Ref.)</span>
                            </div>
                        <button class="btn-primary" style="width: 100%; margin-top: 1rem;" onclick="window.requestService(${s.id})">
                                Solicitar Presupuesto
                            </button>
                        </div>
                    `;
                    feed.appendChild(card);
                });
            });
        }

        // Modal Logic
        window.requestService = (id) => {
            document.getElementById('techIdField').value = id;
            modal.style.display = 'flex';
        };

        closeModal.addEventListener('click', () => modal.style.display = 'none');
        window.onclick = (e) => { if (e.target === modal) modal.style.display = 'none'; };



        requestForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const techId = document.getElementById('techIdField').value;
            const data = {
                clientName: document.getElementById('clientName').value,
                clientPhone: document.getElementById('clientPhone').value,
                desc: document.getElementById('clientDesc').value,
                urgency: document.getElementById('clientUrgency').value,
                commune: document.getElementById('clientCommune').value,
                photo: document.getElementById('clientPhoto').files[0] ? 'photo_mock.jpg' : null,
                date: new Date().toISOString()
            };

            // Backend Simulation
            enviarAlertaTecnico(techId, data);

            alert('✅ Solicitud enviada exitosamente.\nEl técnico se pondrá en contacto contigo a la brevedad.');
            modal.style.display = 'none';
            requestForm.reset();
        });

        function enviarAlertaTecnico(techId, data) {
            // Retrieve existing requests or init empty array
            const requests = JSON.parse(localStorage.getItem('maestro_requests')) || [];
            requests.push({ techId, ...data, status: 'pending' });
            localStorage.setItem('maestro_requests', JSON.stringify(requests));
            console.log(`[Notification] Alert sent to Technician ID ${techId}:`, data);
        }
    }
};

// --- Initialization ---
export const initApp = () => {
    const path = window.location.pathname;

    // Auth Check (Simple)
    if (!path.includes('login.html') && !path.includes('registration.html') && !path.includes('index.html') && !path.includes('features') && !path.includes('plans')) {
        const profile = getUserProfile();
        if (!profile) {
            // window.location.href = 'login.html'; // Uncomment to enforce auth
        }
    }

    if (path.includes('registration.html')) {
        RegistrationModule.init();
    } else if (path.includes('login.html')) {
        LoginModule.init();
    } else if (path.includes('marketplace.html')) {
        MarketplaceModule.init();
    } else if (path.includes('budget.html')) {
        BudgetModule.init();
    } else if (path.includes('dashboard.html')) {
        DashboardModule.init();
    } else if (path.includes('contract.html')) {
        ContractModule.init();
    } else if (path.includes('profile.html')) {
        ProfileModule.init();
    }
};
