/* empty css               */import{T as V}from"./theme-9Jz51v2U.js";const _={baseIncomeTarget:45e3,currency:"CLP",locale:"es-CL",ratios:{taxes:.2,profit:.3},user:"Colega"};window.handleCredentialResponse=async e=>{try{const t=await fetch("http://localhost:5000/api/auth/google",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e.credential})}),a=await t.json();if(t.ok){if(localStorage.setItem("token",a.token),a.user){const n={name:a.user.name,email:a.user.email,role:a.user.role,...a.user.profile};localStorage.setItem("perfil_tecnico",JSON.stringify(n))}window.location.href="dashboard.html"}else alert(a.msg||"Error en el inicio de sesión con Google")}catch(t){console.error("Error:",t),alert("Error conectando con Google Login")}};const $={CL:{name:"Chile",currency:"CLP",locale:"es-CL",regions:{arica:{name:"Arica y Parinacota",communes:["Arica","Camarones","Putre","General Lagos"]},tarapaca:{name:"Tarapacá",communes:["Iquique","Alto Hospicio","Pozo Almonte","Camiña","Colchane","Huara","Pica"]},antofagasta:{name:"Antofagasta",communes:["Antofagasta","Mejillones","Sierra Gorda","Taltal","Calama","Ollagüe","San Pedro de Atacama","Tocopilla","María Elena"]},atacama:{name:"Atacama",communes:["Copiapó","Caldera","Tierra Amarilla","Chañaral","Diego de Almagro","Vallenar","Alto del Carmen","Freirina","Huasco"]},coquimbo:{name:"Coquimbo",communes:["La Serena","Coquimbo","Andacollo","La Higuera","Paiguano","Vicuña","Illapel","Canela","Los Vilos","Salamanca","Ovalle","Combarbalá","Monte Patria","Punitaqui","Río Hurtado"]},valparaiso:{name:"Valparaíso",communes:["Valparaíso","Casablanca","Concón","Juan Fernández","Puchuncaví","Quintero","Viña del Mar","Isla de Pascua","Los Andes","Calle Larga","Rinconada","San Esteban","La Ligua","Cabildo","Papudo","Petorca","Zapallar","Quillota","Calera","Hijuelas","La Cruz","Nogales","San Antonio","Algarrobo","Cartagena","El Quisco","El Tabo","Santo Domingo","San Felipe","Catemu","Llaillay","Panquehue","Putaendo","Santa María","Quilpué","Limache","Olmué","Villa Alemana"]},metropolitana:{name:"Metropolitana",communes:["Santiago","Cerrillos","Cerro Navia","Conchalí","El Bosque","Estación Central","Huechuraba","Independencia","La Cisterna","La Florida","La Granja","La Pintana","La Reina","Las Condes","Lo Barnechea","Lo Espejo","Lo Prado","Macul","Maipú","Ñuñoa","Pedro Aguirre Cerda","Peñalolén","Providencia","Pudahuel","Quilicura","Quinta Normal","Recoleta","Renca","San Joaquín","San Miguel","San Ramón","Vitacura","Puente Alto","Pirque","San José de Maipo","Colina","Lampa","Tiltil","San Bernardo","Buin","Calera de Tango","Paine","Melipilla","Alhué","Curacaví","María Pinto","San Pedro","Talagante","El Monte","Isla de Maipo","Padre Hurtado","Peñaflor"]},ohiggins:{name:"O'Higgins",communes:["Rancagua","Codegua","Coinco","Colatauco","Doñihue","Graneros","Las Cabras","Machalí","Malloa","Mostazal","Olivar","Peumo","Pichidegua","Quinta de Tilcoco","Rengo","Requínoa","San Vicente","Pichilemu","La Estrella","Litueche","Marchigüe","Navidad","Paredones","San Fernando","Chépica","Chimbarongo","Lolol","Nancagua","Palmilla","Peralillo","Placilla","Pumanque","Santa Cruz"]},maule:{name:"Maule",communes:["Talca","Constitución","Curepto","Empedrado","Maule","Pelarco","Pencahue","Río Claro","San Clemente","San Rafael","Cauquenes","Chanco","Pelluhue","Curicó","Hualañé","Licantén","Molina","Rauco","Romeral","Sagrada Familia","Teno","Vichuquén","Linares","Colbún","Longaví","Parral","Retiro","San Javier","Villa Alegre","Yerbas Buenas"]},nuble:{name:"Ñuble",communes:["Chillán","Bulnes","Chillán Viejo","El Carmen","Pemuco","Pinto","Quillón","San Ignacio","Yungay","Quirihue","Cobquecura","Coelemu","Ninhue","Portezuelo","Ránquil","Trehuaco","San Carlos","Coihueco","Ñiquén","San Fabián","San Nicolás"]},biobio:{name:"Biobío",communes:["Concepción","Coronel","Chiguayante","Florida","Hualqui","Lota","Penco","San Pedro de la Paz","Santa Juana","Talcahuano","Tomé","Hualpén","Lebu","Arauco","Cañete","Contulmo","Curanilahue","Los Álamos","Tirúa","Los Ángeles","Antuco","Cabrero","Laja","Mulchén","Nacimiento","Negrete","Quilleco","San Rosendo","Santa Bárbara","Tucapel","Yumbel","Alto Biobío"]},araucania:{name:"La Araucanía",communes:["Temuco","Carahue","Cunco","Curarrehue","Freire","Galvarino","Gorbea","Lautaro","Loncoche","Melipeuco","Nueva Imperial","Padre Las Casas","Perquenco","Pitrufquén","Pucón","Saavedra","Teodoro Schmidt","Toltén","Vilcún","Villarrica","Cholchol","Angol","Collipulli","Curacautín","Ercilla","Lonquimay","Los Sauces","Lumaco","Purén","Renaico","Traiguén","Victoria"]},losrios:{name:"Los Ríos",communes:["Valdivia","Corral","Lanco","Los Lagos","Máfil","Mariquina","Paillaco","Panguipulli","La Unión","Futrono","Lago Ranco","Río Bueno"]},loslagos:{name:"Los Lagos",communes:["Puerto Montt","Calbuco","Cochamó","Fresia","Frutillar","Los Muermos","Llanquihue","Maullín","Puerto Varas","Castro","Ancud","Chonchi","Curaco de Vélez","Dalcahue","Puqueldón","Queilén","Quellón","Quemchi","Quinchao","Osorno","Puerto Octay","Purranque","Puyehue","Río Negro","San Juan de la Costa","San Pablo","Chaitén","Futaleufú","Hualaihué","Palena"]},aysen:{name:"Aysén",communes:["Coyhaique","Lago Verde","Aysén","Cisnes","Guaitecas","Cochrane","O'Higgins","Tortel","Chile Chico","Río Ibáñez"]},magallanes:{name:"Magallanes",communes:["Punta Arenas","Laguna Blanca","Río Verde","San Gregorio","Cabo de Hornos","Antártica","Porvenir","Primavera","Timaukel","Natales","Torres del Paine"]}}},CO:{name:"Colombia",currency:"COP",locale:"es-CO",regions:{antioquia:{name:"Antioquia",communes:["Medellín","Bello","Itagüí","Envigado"]},cundinamarca:{name:"Cundinamarca",communes:["Bogotá","Soacha","Zipaquirá","Chía"]}}},MX:{name:"México",currency:"MXN",locale:"es-MX",regions:{cdmx:{name:"Ciudad de México",communes:["Cuauhtémoc","Benito Juárez","Miguel Hidalgo","Iztapalapa"]},jalisco:{name:"Jalisco",communes:["Guadalajara","Zapopan","Tlaquepaque","Tonalá"]}}},AR:{name:"Argentina",currency:"ARS",locale:"es-AR",regions:{caba:{name:"CABA",communes:["Palermo","Retiro","Recoleta","Belgrano"]},gba:{name:"Gran Buenos Aires",communes:["Avellaneda","Lanús","San Isidro","Vicente López"]}}}},w={getBudgets:()=>JSON.parse(localStorage.getItem("maestro_budgets"))||[],saveBudget:e=>{const t=w.getBudgets(),a=t.findIndex(n=>n.id===e.id);a!==-1?t[a]=e:t.push(e),localStorage.setItem("maestro_budgets",JSON.stringify(t))},getBudgetById:e=>w.getBudgets().find(a=>a.id===Number(e)),getLastBudget:()=>{const e=w.getBudgets();return e.length>0?e[e.length-1]:null},getTools:()=>JSON.parse(localStorage.getItem("maestro_tools"))||[],addTool:e=>{const t=w.getTools();t.push(e),localStorage.setItem("maestro_tools",JSON.stringify(t))},getInventory:()=>JSON.parse(localStorage.getItem("maestro_inventory"))||[],updateInventoryId:(e,t)=>{const a=w.getInventory(),n=a.find(o=>o.id===e);n&&(n.qty=t,localStorage.setItem("maestro_inventory",JSON.stringify(a)))},addInventoryItem:e=>{const t=w.getInventory();t.push(e),localStorage.setItem("maestro_inventory",JSON.stringify(t))}},F=()=>JSON.parse(localStorage.getItem("perfil_tecnico"))||null,Q=()=>JSON.parse(localStorage.getItem("maestro_reviews_full"))||[],E=e=>{const t=F(),a=t?$[t.country].currency:_.currency,n=t?$[t.country].locale:_.locale,o=Math.round(e);return new Intl.NumberFormat(n,{style:"currency",currency:a,minimumFractionDigits:0,maximumFractionDigits:0}).format(o)},U={init:()=>{const e=document.getElementById("registrationForm");if(!e)return;const t=document.getElementById("regCountry");e.addEventListener("submit",async a=>{var r;a.preventDefault();const n=document.getElementById("regPassword").value,o={name:document.getElementById("regName").value,email:document.getElementById("regEmail").value,password:n,role:((r=document.getElementById("regRole"))==null?void 0:r.value)||"maestro",trade:document.getElementById("regTrade").value};try{const i=await fetch("http://localhost:5000/api/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}),f=await i.json();if(i.ok){localStorage.setItem("token",f.token);const l={name:o.name,email:o.email,trade:o.trade,country:t.value};localStorage.setItem("perfil_tecnico",JSON.stringify(l)),alert("¡Registro Completado!"),window.location.href="dashboard.html"}else alert(f.msg||"Error en el registro")}catch(i){console.error("Error:",i),alert("Error de conexión con el servidor")}})}},Y={init:()=>{const e=document.getElementById("loginForm");e&&e.addEventListener("submit",async t=>{t.preventDefault();const a=document.getElementById("loginEmail").value,n=document.getElementById("loginPassword").value;try{const o=await fetch("http://localhost:5000/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a,password:n})}),r=await o.json();if(o.ok){if(localStorage.setItem("token",r.token),r.user){const i={name:r.user.name,email:a,role:r.user.role,...r.user.profile};localStorage.setItem("perfil_tecnico",JSON.stringify(i))}window.location.href="dashboard.html"}else alert(r.msg||"Credenciales inválidas")}catch(o){console.error("Error:",o),alert("Error de conexión con el servidor")}})}},T={init:()=>{const e=document.getElementById("addItemBtn"),t=document.querySelector("#budgetTable tbody"),a=document.getElementById("btnGenerate"),n=document.getElementById("projectCountry"),o=document.getElementById("projectRegion"),r=document.getElementById("projectCommune"),i=document.querySelectorAll(".required-field, #projectCommune, #projectRegion"),f=F();if(f){if(n){const p=$[f.country]?$[f.country].name:f.country;n.value=p}if(o&&r&&$[f.country]){const p=f.country,h=$[p].regions;o.innerHTML='<option value="">Seleccione...</option>',o.disabled=!1;for(const[C,g]of Object.entries(h)){const c=document.createElement("option");c.value=C,c.textContent=g.name,o.appendChild(c),g.name===f.region&&(c.selected=!0)}const x=C=>{r.innerHTML='<option value="">Seleccione...</option>',r.disabled=!0,C&&$[p].regions[C]&&($[p].regions[C].communes.forEach(c=>{const b=document.createElement("option");b.value=c,b.textContent=c,r.appendChild(b),c===f.commune&&o.options[o.selectedIndex].text===f.region&&(b.selected=!0)}),r.disabled=!1)};o.addEventListener("change",C=>{x(C.target.value),T.validateForm()}),o.value&&x(o.value)}}const l=JSON.parse(localStorage.getItem("pending_budget"));if(l){const p=document.getElementById("clientName");document.getElementById("clientPhone"),p&&(p.value=l.clientName),l.desc&&setTimeout(()=>{const h=document.querySelector("#budgetTable tbody tr .item-desc");h&&(h.value=l.desc)},500),localStorage.removeItem("pending_budget")}if(!e||!t)return;t.children.length===0&&T.addRow(),e.addEventListener("click",()=>T.addRow());const I=document.getElementById("btnPrintBudget");I&&I.addEventListener("click",()=>{T.printBudget()}),t.addEventListener("input",p=>{(p.target.matches("input")||p.target.matches("select"))&&T.calculateTotals()}),t.addEventListener("click",p=>{p.target.closest(".delete-btn")&&(p.target.closest("tr").remove(),T.calculateTotals())}),a&&(a.addEventListener("click",T.saveBudget),i.forEach(p=>{p.addEventListener("input",T.validateForm),p.addEventListener("change",T.validateForm)}),T.validateForm());const v=new URLSearchParams(window.location.search).get("id"),u=document.getElementById("btnAddAnnex"),d=document.getElementById("annexSection");u&&u.addEventListener("click",()=>{T.addAnnexRow()}),v?(T.loadBudget(v),d&&(d.style.display="block")):d&&(d.style.display="none")},validateForm:()=>{const e=document.getElementById("clientName").value.trim(),t=document.getElementById("clientRut").value.trim(),a=document.getElementById("clientEmail").value.trim(),n=document.getElementById("projectRegion").value,o=document.getElementById("projectCommune").value,r=document.getElementById("btnGenerate");r&&(e&&t&&a&&n&&o?r.disabled=!1:r.disabled=!0)},addRow:(e=null)=>{const t=document.querySelector("#budgetTable tbody"),a=document.createElement("tr"),n=e?e.desc:"",o=e?e.qty:1,r=e?e.price:0,i=e?e.type:"material_tech";a.innerHTML=`
            <td><input type="text" class="form-input item-desc" placeholder="Descripción" value="${n}"></td>
            <td>
                <select class="form-input item-type">
                    <option value="material_tech" ${i==="material_tech"?"selected":""}>Material (Yo lo pongo)</option>
                    <option value="labor" ${i==="labor"?"selected":""}>Mano de Obra</option>
                    <option value="material_client" ${i==="material_client"?"selected":""}>Material (Cliente lo pone)</option>
                </select>
            </td>
            <td><input type="number" class="form-input item-qty" value="${o}" min="1"></td>
            <td><input type="number" class="form-input item-price" value="${r}" min="0"></td>
            <td class="item-total">$0</td>
            <td><button class="delete-btn text-red-500">🗑️</button></td>
        `,t.appendChild(a),T.calculateTotals()},addAnnexRow:(e=null)=>{const t=document.querySelector("#annexTable tbody");if(!t)return;const a=document.createElement("tr"),n=e?e.desc:"",o=e?e.price:0;a.innerHTML=`
            <td><input type="text" class="form-input annex-desc" placeholder="Descripción Anexo" value="${n}"></td>
            <td><input type="number" class="form-input annex-price" value="${o}" min="0"></td>
            <td><button class="delete-annex-btn text-red-500">🗑️</button></td>
        `,a.querySelector(".delete-annex-btn").addEventListener("click",()=>{a.remove(),T.calculateTotals()}),a.querySelectorAll("input").forEach(r=>{r.addEventListener("input",T.calculateTotals)}),t.appendChild(a),T.calculateTotals()},calculateTotals:()=>{const e=document.querySelectorAll("#budgetTable tbody tr");let t=0,a=0,n=0;e.forEach(h=>{const x=h.querySelector(".item-type"),C=x?x.value:"material_tech",g=Math.round(parseFloat(h.querySelector(".item-qty").value)||0),c=Math.round(parseFloat(h.querySelector(".item-price").value)||0),b=g*c,S=C==="material_client"?0:b;h.querySelector(".item-total").textContent=E(S),t+=S,C==="material_tech"&&(a+=b),C==="labor"&&(n+=b)}),H.calculateHourlyDepreciation();let o=0;const r=document.querySelectorAll("#annexTable tbody tr");r&&r.forEach(h=>{const x=Math.round(parseFloat(h.querySelector(".annex-price").value)||0);o+=x});const i=t+o,f=document.getElementById("displaySubtotal"),l=document.getElementById("displayTotal");f&&(f.textContent=E(t)),l&&(l.textContent=E(i));const I=document.getElementById("displayAnnexTotal");I&&(I.textContent=E(o));const m=Math.round(n*.3),v=a+m,u=document.getElementById("displayStartBox"),d=document.getElementById("displayLaborAdvance"),p=document.getElementById("displayAdvance");u&&(u.textContent=E(a)),d&&(d.textContent=E(m)),p&&(p.textContent=E(v))},saveBudget:()=>{var R,k,s,y,B,M;const e=document.querySelectorAll("#budgetTable tbody tr"),t=[];let a=0,n=0,o=0;e.forEach(L=>{const P=L.querySelector(".item-desc").value,q=L.querySelector(".item-type"),j=q?q.value:"material_tech",O=Math.round(parseFloat(L.querySelector(".item-qty").value)||0),N=Math.round(parseFloat(L.querySelector(".item-price").value)||0),D=O*N,z=j==="material_client"?0:D;P&&(t.push({desc:P,type:j,qty:O,price:N,total:z}),a+=z,j==="material_tech"&&(n+=D),j==="labor"&&(o+=D))});const r=[];let i=0;const f=document.querySelectorAll("#annexTable tbody tr");f&&f.forEach(L=>{const P=L.querySelector(".annex-desc").value,q=Math.round(parseFloat(L.querySelector(".annex-price").value)||0);P&&(r.push({desc:P,price:q}),i+=q)});const l=n+Math.round(o*.3);a+=i;const I=((R=document.getElementById("projectType"))==null?void 0:R.value)||"Servicio General",m=document.getElementById("projectRegion"),v=document.getElementById("projectCommune"),u=((k=document.getElementById("projectAddress"))==null?void 0:k.value)||"",d=m?m.options[m.selectedIndex].text:"",p=v?v.value:"",h=((s=document.getElementById("tradeSelector"))==null?void 0:s.value)||"general",x=((y=document.getElementById("clientName"))==null?void 0:y.value)||"Cliente sin nombre",C=((B=document.getElementById("clientRut"))==null?void 0:B.value)||"",g=((M=document.getElementById("clientEmail"))==null?void 0:M.value)||"",b=new URLSearchParams(window.location.search).get("id"),S={id:b?Number(b):Date.now(),date:new Date().toISOString(),trade:h,projectType:I,location:{region:d,commune:p,address:u},client:x,clientRut:C,clientEmail:g,items:t,annexes:r,total:a,advance:l,status:"pending"};w.saveBudget(S);const A=w.getInventory();t.forEach(L=>{if(L.type==="material_tech"){const P=A.find(q=>q.name.toLowerCase()===L.desc.toLowerCase());P&&P.qty>=L.qty&&w.updateInventoryId(P.id,P.qty-L.qty)}}),alert(`Presupuesto guardado.
Anticipo Requerido: ${E(l)}`),window.location.href="dashboard.html"},updateStatus:(e,t)=>{const a=w.getBudgetById(e);if(a){if(a.status=t,t==="accepted"&&!a.startTime&&(a.startTime=new Date().toISOString()),t==="delivered"&&!a.endTime){if(a.endTime=new Date().toISOString(),a.startTime){const o=new Date(a.startTime),i=(new Date(a.endTime)-o)/(1e3*60*60);a.actualHours=i.toFixed(2);const f=a.total*_.ratios.profit;a.hourlyRate=Math.round(f/i)}const n=`${window.location.origin}/survey.html?id=${a.id}`;alert(`¡Trabajo Finalizado!

Comparte este link con tu cliente para recibir tu calificación:
${n}`)}w.saveBudget(a),location.reload()}},loadBudget:e=>{const t=w.getBudgetById(e);if(!t){alert("Presupuesto no encontrado");return}document.getElementById("tradeSelector").value=t.trade||"general",document.getElementById("clientName").value=t.client||"",document.getElementById("clientRut").value=t.clientRut||"",document.getElementById("clientEmail").value=t.clientEmail||"",document.getElementById("projectType").value=t.projectType||"Instalación",document.getElementById("projectAddress").value=t.location.address||"";const a=document.querySelector("#budgetTable tbody");a.innerHTML="",t.items.forEach(r=>T.addRow(r));const n=document.querySelector("#annexTable tbody");n&&(n.innerHTML="",t.annexes&&Array.isArray(t.annexes)&&t.annexes.forEach(r=>T.addAnnexRow(r)));const o=document.querySelector(".dash-title-mobile");o&&(o.textContent=`Editar Presupuesto #${e}`),T.validateForm()},printBudget:()=>{var p;const e=[],t=document.querySelectorAll("#budgetTable tbody tr");let a=0,n=0,o=0;t.forEach(h=>{const x=h.querySelector(".item-desc").value,C=h.querySelector(".item-type"),g=C?C.value:"material_tech",c=Math.round(parseFloat(h.querySelector(".item-qty").value)||0),b=Math.round(parseFloat(h.querySelector(".item-price").value)||0),S=c*b,A=g==="material_client"?0:S;x&&(e.push({desc:x,qty:c,price:b,total:A,type:g}),o+=A,g==="material_tech"&&(n+=S),g==="labor"&&(a+=S))});const r=document.querySelectorAll("#annexTable tbody tr");let i=0;r.forEach(h=>{const x=h.querySelector(".annex-desc").value,C=Math.round(parseFloat(h.querySelector(".annex-price").value)||0);x&&(e.push({desc:`[Anexo] ${x}`,qty:1,price:C,total:C,type:"annex"}),i+=C)});const f=o+i,l=Math.round(a*.3),I=n+l,m=document.getElementById("clientName").value||"Cliente",v=document.getElementById("projectType").value,u=`
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
                    <strong>Cliente:</strong> ${m}<br>
                    <strong>Proyecto:</strong> ${v}<br>
                    <strong>Ubicación:</strong> ${((p=document.getElementById("projectRegion").options[document.getElementById("projectRegion").selectedIndex])==null?void 0:p.text)||""}, ${document.getElementById("projectCommune").value||""}
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
                        ${e.map(h=>`
                        <tr>
                            <td>${h.desc}</td>
                            <td>${h.qty}</td>
                            <td>${E(h.price)}</td>
                            <td>${E(h.total)}</td>
                        </tr>`).join("")}
                    </tbody>
                </table>

                <div class="totals">
                    <div class="row final">
                        <span>Total Proyecto</span>
                        <span>${E(f)}</span>
                    </div>
                </div>

                <div class="advance-box">
                    <div class="advance-title">Condiciones de Inicio (Anticipo Requerido)</div>
                    <div class="advance-detail">
                        <span>Materiales (100%):</span>
                        <span>${E(n)}</span>
                    </div>
                    <div class="advance-detail">
                        <span>Mano de Obra (30%):</span>
                        <span>${E(l)}</span>
                    </div>
                     <div class="advance-detail" style="font-size: 12px; color: #666; margin-top: 5px;">
                        * El 70% restante de la mano de obra se paga contra entrega.
                    </div>
                    <div class="advance-total">
                        <span>Total a Pagar para Iniciar:</span>
                        <span>${E(I)}</span>
                    </div>
                </div>
                
                <div style="margin-top: 50px; text-align: center; font-size: 12px; color: #999;">
                    Generado automáticamente por [PROJECT_NAME]
                </div>
                <script>window.print();<\/script>
            </body>
            </html>
        `,d=window.open("","_blank");d.document.write(u),d.document.close()}},H={calculateHourlyDepreciation:()=>{const e=w.getTools();let t=0;return e.forEach(a=>{const n=(a.lifespanYears||1)*12;t+=a.price/n}),Math.round(t)},getRenewalFund:()=>{const e=w.getBudgets();let t=0;return e.forEach(a=>{if(a.items){const n=a.items.find(o=>o.type==="depreciation");n&&(t+=n.total)}}),t}},X={calculateTrustIndex:e=>{const t=Q();if(t.length===0)return{score:0,level:"Nuevo",stars:0,count:0};let a=0,n=0;t.forEach(f=>{const l=parseFloat(f.average);l>=3.5?a+=10:l>=2.5?a+=7:l>=1.5?a+=3:a+=0,n++});const r=(t.reduce((f,l)=>f+parseFloat(l.average),0)/n).toFixed(1),i=r>=3.5&&n>=5;return{points:a,stars:r,count:n,isMaster:i}},saveClientRating:(e,t)=>{const a=JSON.parse(localStorage.getItem("client_ratings"))||[];a.push({contractId:e,...t,date:new Date().toISOString()}),localStorage.setItem("client_ratings",JSON.stringify(a))}},J={init:()=>{if(!document.querySelector(".financial-module"))return;const e=w.getBudgets(),t=F();let a=0,n=0,o=0,r=0;const i={};e.forEach(s=>{const y=isNaN(s.total)?0:s.total;a+=y;const B=Math.round(y*_.ratios.profit),M=Math.round(y*_.ratios.taxes),L=y-B-M;n+=B,o+=M,r+=L;const P=s.trade||"General";i[P]||(i[P]=0),i[P]+=B});const f=e.length,l=document.querySelector(".metric-card-dash:nth-child(1) .value-large"),I=document.querySelector(".metric-card-dash:nth-child(2) .value-large");if(l&&(l.textContent=E(a)),I&&(I.textContent=f),t&&t.incomeGoal>0){const s=parseInt(t.incomeGoal),y=Math.min(100,Math.round(n/s*100)),B=Math.max(0,s-n);document.getElementById("goalTarget").textContent=`Meta: ${E(s)}`,document.getElementById("goalProgress").style.width=`${y}%`;const M=document.getElementById("goalText");B>0?M.innerHTML=`Te faltan <strong>${E(B)}</strong> de ganancia neta para tu meta.`:M.innerHTML='<strong style="color: #10B981;">¡Felicidades! Has superado tu meta del mes.</strong>'}const m=document.getElementById("starServiceText");if(m){const s=Object.entries(i).sort((y,B)=>B[1]-y[1]);if(s.length>0){const y=s[0];m.innerHTML=`Tu actividad más rentable es <strong>${y[0]}</strong> con ${E(y[1])} de ganancia.`}else m.textContent="Sin datos suficientes aún."}const v=document.getElementById("btnExport");v&&v.addEventListener("click",()=>{const s=`REPORTE CONTABLE [PROJECT_NAME]

Técnico: ${t?t.name:"N/A"}
Ingresos Totales: ${E(a)}
--------------------------------
IMPUESTOS (20%): ${E(o)}
GASTOS (Materiales/Herr): ${E(r)}
GANANCIA NETA (30%): ${E(n)}
--------------------------------
Generado el: ${new Date().toLocaleDateString()}`;alert(s),console.log(s)});const u=document.getElementById("activityTableBody"),d=JSON.parse(localStorage.getItem("maestro_reviews"))||[];u&&e.length>0&&(u.innerHTML="",e.slice(-10).reverse().forEach(s=>{const y=new Date(s.date).toLocaleDateString("es-ES",{day:"2-digit",month:"short",year:"numeric"}),B=document.createElement("tr");let M='<span class="status-badge pending">Pendiente</span>';const L=(s.status||"").toLowerCase();L==="accepted"&&(M='<span class="status-badge process">En Proceso</span>'),(L==="delivered"||L==="finished")&&(M='<span class="status-badge paid">Entregado</span>');let P="";if(L==="delivered"||L==="finished"){const q=d.find(N=>N.contractId==s.id);q?P=`<span title="${q.comment}">⭐ ${q.stars}</span>`:P=`<button class="btn-small" onclick="window.sendSurvey(${s.id})">📧 Enviar Encuesta</button>`,(JSON.parse(localStorage.getItem("client_ratings"))||[]).find(N=>N.contractId==s.id)||(P+=` <button class="btn-small" style="background:var(--color-secondary);" onclick="window.rateClient(${s.id})">👤 Calificar Cliente</button>`)}B.innerHTML=`
                    <td>${s.client}</td>
                    <td>${s.projectType||"Servicio"}</td>
                    <td>${y}</td>
                    <td>${M}</td>
                    <td>${E(s.total)}</td>
                    <td style="text-align: center;">${P}</td>
                `,u.appendChild(B)})),window.sendSurvey=s=>{const y=`${window.location.origin}/survey.html?id=${s}`;navigator.clipboard.writeText(y).then(()=>{alert(`Enlace copiado al portapapeles:
${y}

Envíalo a tu cliente.`)})},window.rateClient=s=>{const y=prompt(`Califica al cliente (1-5) en:
Puntualidad, Respeto, Claridad.

Ingresa promedio (ej: 5):`);y&&(X.saveClientRating(s,{average:y}),alert("Calificación de cliente guardada."),J.init())};const p=H.getRenewalFund(),h=document.getElementById("arsenalValue");h&&(h.textContent=E(p));const x=w.getLastBudget(),C=document.getElementById("efficiencyValue"),g=document.getElementById("efficiencyText");if(C&&x&&x.hourlyRate){C.textContent=E(x.hourlyRate)+"/hr";const s=(t?t.incomeGoal||0:_.baseIncomeTarget)/160;if(x.hourlyRate<s){const y=Math.round((s-x.hourlyRate)/x.hourlyRate*100);g&&(g.innerHTML=`⚠️ Estás cobrando poco. Sube tus precios un <strong>${y}%</strong>.`)}else g&&(g.innerHTML="✅ ¡Excelente! Estás ganando bien por tu tiempo.")}const c=document.getElementById("toolModal"),b=document.getElementById("btnAddTool"),S=document.getElementById("btnCloseTool"),A=document.getElementById("toolForm");b&&c&&b.addEventListener("click",()=>c.style.display="flex"),S&&c&&S.addEventListener("click",()=>c.style.display="none"),A&&A.addEventListener("submit",s=>{s.preventDefault();const y=document.getElementById("toolName").value,B=Number(document.getElementById("toolPrice").value),M=Number(document.getElementById("toolLifespan").value);y&&B&&M&&(w.addTool({id:Date.now(),name:y,price:B,lifespanYears:M,purchaseDate:new Date().toISOString()}),alert("Herramienta agregada. El fondo de renovación se actualizará."),c.style.display="none",location.reload())}),btnAddInventory.addEventListener("click",()=>{alert("Módulo de Inventario: Próximamente (Gestiona tus materiales aquí)")});const R=document.getElementById("accountingCard"),k=document.getElementById("accountingDetails");R&&k&&R.addEventListener("click",s=>{if(s.target.id==="btnExport")return;const y=k.style.display==="none";k.style.display=y?"block":"none";const B=R.querySelector('span[style*="font-size: 1.2rem"]');B&&(B.textContent=y?"▲":"▼")})}},G={init:()=>{const e=document.getElementById("contractContent");if(!e)return;const t=w.getLastBudget();if(!t){e.innerHTML='<p class="text-gray-500 italic">No hay presupuestos recientes. Crea uno primero.</p>';return}const a=F(),n=a?a.name:_.user,o=a?`${a.id}`:"______________",r=t.client||"______________",i=t.clientRut||"______________",f=t.clientEmail||"______________",l={weekday:"long",year:"numeric",month:"long",day:"numeric"},I=new Date().toLocaleDateString("es-CL",l),m=t.items.map(g=>`<li>${g.desc} (x${g.qty})</li>`).join(""),v=`
            <div class="a4-paper">
                <div class="contract-header" style="text-align: center; margin-bottom: 2rem;">
                    <h2 style="text-transform: uppercase; margin-bottom: 0.5rem; color: #000;">Contrato de Prestación de Servicios Técnicos</h2>
                    <p style="font-size: 0.9rem; color: #555;">Folio Presupuesto: #${t.id}</p>
                </div>

                <div class="contract-body" style="font-family: 'Times New Roman', serif; font-size: 11pt; line-height: 1.4; color: #000;">
                    <p style="text-align: justify;">
                        En <strong>${t.location.commune||"Santiago"}</strong>, a <strong>${I}</strong>, entre:
                    </p>
                    <p style="text-align: justify;">
                        Por una parte, <strong>${n}</strong>, Cédula de Identidad N° <strong>${o}</strong>, 
                        en adelante "EL PRESTADOR"; y por la otra, <strong>${r}</strong>, 
                        Cédula de Identidad/RUT N° <strong>${i}</strong>, en adelante "EL CLIENTE", 
                        se ha convenido el siguiente contrato de prestación de servicios:
                    </p>

                    <h4 style="margin: 1rem 0 0.5rem; text-transform: uppercase; font-size: 10pt;">Primero: Objeto del Contrato.</h4>
                    <p style="text-align: justify;">
                        EL PRESTADOR se obliga a ejecutar para EL CLIENTE los servicios de <strong>${t.projectType||"Servicio Técnico"}</strong> 
                        en el domicilio ubicado en <strong>${t.location.address}, ${t.location.commune}</strong>.
                        Los trabajos específicos a realizar son los detallados en el Presupuesto #${t.id}, que forma parte integral de este contrato:
                    </p>
                    <ul style="margin: 0.5rem 0 1rem 1.5rem;">${m}</ul>

                    <h4 style="margin: 1rem 0 0.5rem; text-transform: uppercase; font-size: 10pt;">Segundo: Honorarios y Forma de Pago.</h4>
                    <p style="text-align: justify;">
                        El costo total de los servicios asciende a la suma de <strong>${E(t.total)}</strong>. 
                        Las partes acuerdan la siguiente forma de pago:
                    </p>
                    <ul style="margin: 0.5rem 0 1rem 1.5rem;">
                        <li>Un anticipo de <strong>${E(t.advance)}</strong> (correspondiente al 100% de materiales y 30% de mano de obra), pagadero a la firma del presente contrato.</li>
                        <li>El saldo restante de <strong>${E(t.total-t.advance)}</strong>, pagadero contra la entrega conforme de los trabajos.</li>
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
                        y comuna de <strong>${t.location.commune}</strong> y se someten a la competencia de sus Tribunales de Justicia.
                    </p>
                </div>

                <div class="signatures-section" style="margin-top: 3rem; display: flex; justify-content: space-between; gap: 2rem;">
                    <div class="signature-box" style="flex: 1; text-align: center;">
                        <canvas id="sig-provider" class="signature-canvas" width="250" height="120" style="border-bottom: 1px solid #000; margin-bottom: 0.5rem;"></canvas>
                        <div class="signature-label" style="font-weight: bold; font-size: 0.9rem;">EL PRESTADOR</div>
                        <div style="font-size: 0.8rem;">${n}</div>
                        <button class="btn-small-clear text-xs text-red-500 mt-2" data-target="sig-provider">(Borrar)</button>
                    </div>
                    <div class="signature-box" style="flex: 1; text-align: center;">
                        <canvas id="sig-client" class="signature-canvas" width="250" height="120" style="border-bottom: 1px solid #000; margin-bottom: 0.5rem;"></canvas>
                        <div class="signature-label" style="font-weight: bold; font-size: 0.9rem;">EL CLIENTE</div>
                        <div style="font-size: 0.8rem;">${r}</div>
                        <button class="btn-small-clear text-xs text-red-500 mt-2" data-target="sig-client">(Borrar)</button>
                    </div>
                </div>

                <div class="contract-actions" style="margin-top: 3rem; padding-top: 2rem; border-top: 2px dashed var(--border-color);">
                    <div style="background: #eff6ff; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
                        <p style="font-size: 0.9rem; color: #1e40af; margin-bottom: 0.5rem;">
                            <strong>Envío Digital:</strong> El contrato firmado se enviará automáticamente a:
                        </p>
                        <ul style="font-size: 0.9rem; color: #1e3a8a; list-style: disc; padding-left: 1.5rem;">
                            <li>Cliente: <strong>${f}</strong></li>
                            <li>Técnico: <strong>${a?a.email:"tu correo"}</strong></li>
                        </ul>
                    </div>
                    <button id="btnSaveContract" class="btn-primary" style="width: 100%; justify-content: center;">
                        💾 Firmar y Finalizar Contrato
                    </button>
                </div>
            </div>
        `;e.innerHTML=v;const u=g=>{const c=document.getElementById(g);if(!c)return;const b=c.getContext("2d");let S=!1;const A=()=>document.body.classList.contains("dark-mode")?"#FFFFFF":"#000000",R=(s,y)=>{S=!0,b.beginPath(),b.moveTo(s,y),b.strokeStyle=A(),b.lineWidth=2},k=(s,y)=>{S&&(b.lineTo(s,y),b.stroke())};c.addEventListener("mousedown",s=>R(s.offsetX,s.offsetY)),c.addEventListener("mousemove",s=>k(s.offsetX,s.offsetY)),c.addEventListener("mouseup",()=>S=!1),c.addEventListener("mouseout",()=>S=!1),c.addEventListener("touchstart",s=>{s.preventDefault();const y=c.getBoundingClientRect();R(s.touches[0].clientX-y.left,s.touches[0].clientY-y.top)}),c.addEventListener("touchmove",s=>{s.preventDefault();const y=c.getBoundingClientRect();k(s.touches[0].clientX-y.left,s.touches[0].clientY-y.top)}),c.addEventListener("touchend",()=>S=!1)};u("sig-provider"),u("sig-client"),document.querySelectorAll(".btn-small-clear").forEach(g=>{g.addEventListener("click",c=>{const b=c.target.dataset.target,S=document.getElementById(b);S.getContext("2d").clearRect(0,0,S.width,S.height)})});const d=document.getElementById("btnSaveContract");d&&d.addEventListener("click",()=>{alert(`✅ Contrato Firmado y Guardado.

📧 Copias enviadas a:
- ${r} (${f})
- ${n}

El documento legal es ahora válido.`)});const p=document.getElementById("btnOpenAnnexModal"),h=document.getElementById("annexModal"),x=document.getElementById("btnCloseAnnex"),C=document.getElementById("btnSaveAnnex");p&&h&&p.addEventListener("click",()=>{h.style.display="flex"}),x&&x.addEventListener("click",()=>{h.style.display="none"}),C&&C.addEventListener("click",()=>{const g=document.getElementById("annexDesc").value,c=Math.round(parseFloat(document.getElementById("annexPrice").value)||0);if(!g||c<=0){alert("Por favor, ingresa una descripción y un precio válido.");return}t.annexes||(t.annexes=[]),t.annexes.push({desc:g,price:c}),w.saveBudget(t),alert("✅ Anexo agregado correctamente."),h.style.display="none",G.init()})}},W={init:()=>{const e=F();if(!e)return;const t=document.getElementById("viewMode"),a=document.getElementById("editMode"),n=document.getElementById("btnEditProfile"),o=document.getElementById("btnCancelEdit"),r=document.getElementById("editMode"),i=document.getElementById("badgeContainer"),f=document.getElementById("uploadCertInput"),l=()=>{if(document.getElementById("viewName").textContent=e.name||"Usuario",document.getElementById("viewTrade").textContent=e.trade||"General",$[e.country]){const g=document.getElementById("viewLocation");g&&(g.textContent=`📍 ${$[e.country].name}`)}const v=document.getElementById("viewGoal");v&&(v.textContent=`Meta: ${E(e.incomeGoal||0)} / mes`),e.certified?(i.className="metric-card verified",i.style.backgroundColor="#FEF3C7",i.style.borderColor="#F59E0B",i.innerHTML=`
                    <div class="metric-icon">✅</div>
                    <div class="metric-value" style="color: #D97706;">Verificado</div>
                    <div class="metric-label">Certificación Oficial</div>
                 `,i.onclick=null):(i.className="metric-card unverified",i.style.backgroundColor="var(--card-bg)",i.style.borderColor="var(--border-color)",i.innerHTML=`
                    <div class="metric-icon">⚠️</div>
                    <div class="metric-value">No Verificado</div>
                    <div class="metric-label" style="text-decoration: underline; color: blue;">Subir Título</div>
                 `,i.onclick=()=>f.click());const u=w.getBudgets(),d={};u.forEach(g=>{const c=g.trade||"General";d[c]||(d[c]=0),d[c]+=g.total||0});const p=Object.entries(d).sort((g,c)=>c[1]-g[1]),h=document.getElementById("profitRankValue");p.length>0?h.innerHTML=`<span style="font-size: 0.9em">${p[0][0]}</span>`:h.textContent="Sin datos";const x=document.querySelector("#about");if(x){const g=e.bio||"Sin biografía aún. Edita tu perfil para añadir una descripción profesional.";x.innerHTML=`
                    <div class="card" style="padding: 2rem;">
                        <h3>Biografía Profesional</h3>
                        <p style="white-space: pre-wrap;">${g}</p>
                    </div>
                 `}const C=document.querySelector("#skills");if(C){const g=e.skills?e.skills.split(",").map(b=>b.trim()).filter(b=>b):[];let c='<p class="text-xs text-gray-500 mb-4">No has registrado habilidades.</p>';g.length>0&&(c='<div class="card-badges">'+g.map(b=>`<span class="badge" style="font-size: 1rem; padding: 8px 12px;">${b}</span>`).join("")+"</div>"),C.innerHTML=`
                    <div class="card" style="padding: 2rem;">
                        <h3>Habilidades y Competencias</h3>
                        <p class="text-sm text-gray-500 mb-4">Competencias técnicas validadas por experiencia.</p>
                        ${c}
                    </div>
                 `}};l(),n.addEventListener("click",()=>{t.style.display="none",a.style.display="grid",n.style.display="none",document.getElementById("editName").value=e.name||"",document.getElementById("editId").value=e.id||"",document.getElementById("editTrade").value=e.trade||"",document.getElementById("editCountry").value=e.country||"",document.getElementById("editGoal").value=e.incomeGoal||0,document.getElementById("editBio").value=e.bio||"",document.getElementById("editSkills").value=e.skills||""}),o.addEventListener("click",()=>{t.style.display="block",a.style.display="none",n.style.display="block"}),r.addEventListener("submit",v=>{v.preventDefault(),e.name=document.getElementById("editName").value,e.id=document.getElementById("editId").value,e.trade=document.getElementById("editTrade").value,e.country=document.getElementById("editCountry").value,e.incomeGoal=document.getElementById("editGoal").value,e.bio=document.getElementById("editBio").value,e.skills=document.getElementById("editSkills").value,localStorage.setItem("perfil_tecnico",JSON.stringify(e)),l(),t.style.display="block",a.style.display="none",n.style.display="block"});const I=document.querySelectorAll(".tab-btn"),m=document.querySelectorAll(".tab-pane");I.forEach(v=>{v.addEventListener("click",()=>{I.forEach(p=>p.classList.remove("active")),m.forEach(p=>p.classList.remove("active")),v.classList.add("active");const u=v.dataset.tab,d=document.getElementById(u);d&&d.classList.add("active")})}),f.addEventListener("change",()=>{f.files.length>0&&confirm("¿Confirmas que este documento es tu certificación oficial?")&&(e.certified=!0,localStorage.setItem("perfil_tecnico",JSON.stringify(e)),l(),alert("¡Documento subido! Tu perfil ahora está verificado."))})}},Z={init:()=>{const e=document.getElementById("leadsList"),t=document.getElementById("chatHeader"),a=document.getElementById("chatHistory"),n=document.getElementById("btnConvertBudget");if(!e)return;const o=JSON.parse(localStorage.getItem("maestro_requests"))||[];o.length===0?e.innerHTML='<p style="padding: 1rem; color: #64748B; text-align: center;">No hay mensajes nuevos.</p>':(e.innerHTML="",o.reverse().forEach((i,f)=>{const l=document.createElement("div");l.style.padding="1rem",l.style.borderBottom="1px solid #E2E8F0",l.style.cursor="pointer",l.style.transition="background 0.2s",l.onmouseover=()=>l.style.background="#F8FAFC",l.onmouseout=()=>l.style.background="white";const I=new Date(i.date).toLocaleDateString(),m=i.urgency||"Normal",v=m==="Emergencia"?"#EF4444":m==="Alta"?"#F59E0B":"#10B981";l.innerHTML=`
                    <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                        <span style="font-weight: bold; color: var(--color-oscuro);">${i.clientName}</span>
                        <span style="font-size: 0.8rem; color: #94A3B8;">${I}</span>
                    </div>
                    <div style="font-size: 0.85rem; color: #64748B; margin-bottom: 4px;">${i.desc.substring(0,40)}...</div>
                    <div style="display: flex; gap: 5px;">
                        <span style="font-size: 0.7rem; padding: 2px 6px; border-radius: 4px; background: #E2E8F0; color: #475569;">${i.commune||"Santiago"}</span>
                        <span style="font-size: 0.7rem; padding: 2px 6px; border-radius: 4px; background: ${v}; color: white;">${m}</span>
                    </div>
                `,l.onclick=()=>{t&&(t.querySelector("span").textContent=i.clientName),n&&(n.style.display="block",n.onclick=()=>{localStorage.setItem("pending_budget",JSON.stringify(i)),window.location.href="budget.html"}),a&&(a.innerHTML=`
                            <div style="text-align: center; color: #94A3B8; margin-bottom: 1rem; font-size: 0.8rem;">${new Date(i.date).toLocaleString()}</div>
                            <div style="background: #E2E8F0; padding: 0.5rem 1rem; border-radius: 12px 12px 12px 0; max-width: 80%; margin-bottom: 0.5rem; align-self: flex-start;">
                                <strong>${i.clientName}:</strong> ${i.desc}
                                ${i.photo?"<br><br><i>[📷 Foto del Problema Adjunta]</i>":""}
                            </div>
                            <div style="text-align: right; color: #94A3B8; font-size: 0.8rem; margin-top: 1rem;">En espera de respuesta del técnico...</div>
                        `)},e.appendChild(l)}));const r=document.getElementById("msgBadge");r&&o.length>0&&(r.textContent=o.length,r.style.display="inline-block")}};window.showSection=e=>{const t=document.getElementById("dashboardMain"),a=document.getElementById("messagesSection");t&&a&&(e==="messages"?(t.style.display="none",a.style.display="block",Z.init()):(t.style.display="block",a.style.display="none"))};const K={init:()=>{const e=document.getElementById("solutionsFeed"),t=document.getElementById("categoryFilters"),a=document.getElementById("marketSearch"),n=document.getElementById("requestModal"),o=document.getElementById("closeModal"),r=document.getElementById("requestForm");if(!e)return;const i=m=>{const v=(4+m%10/10).toFixed(1),u=10+m*2,d=v>=4.5?'<span title="Maestro Recomendado" style="margin-left:5px;">🏅</span>':"";return`⭐ ${v} (${u} trabajos) ${d}`},f=[{id:1,name:"Juan Pérez",avatar:"https://cdn-icons-png.flaticon.com/512/3135/3135715.png",badge:!0,category:"electricidad",title:"Instalación Eléctrica Domiciliaria",desc:"Renovación completa de cableado, tableros y certificación TE1.",price:15e4,img:"https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=600"},{id:2,name:"María González",avatar:"https://cdn-icons-png.flaticon.com/512/3135/3135789.png",badge:!0,category:"gasfiteria",title:"Fugas y Destapes Express",desc:"Atención de emergencias 24/7. Detección de fugas con ultrasonido.",price:45e3,img:"https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=600"},{id:3,name:"Carlos Ruiz",avatar:"https://cdn-icons-png.flaticon.com/512/3135/3135768.png",badge:!1,category:"clima",title:"Aire Acondicionado Split",desc:"Instalación y mantención de equipos de aire acondicionado inverter.",price:9e4,img:"https://images.unsplash.com/photo-1616763355603-9755a640a287?auto=format&fit=crop&q=80&w=600"},{id:4,name:"Pedro Sánchez",avatar:"https://cdn-icons-png.flaticon.com/512/3135/3135823.png",badge:!0,category:"solar",title:"Kit Solar Fotovoltaico 3kW",desc:"Ahorra en tu cuenta de luz. Incluye paneles, inversor y trámites.",price:25e5,img:"https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=600"},{id:5,name:"Ana López",avatar:"https://cdn-icons-png.flaticon.com/512/3135/3135755.png",badge:!1,category:"construccion",title:"Remodelación de Baños",desc:"Cambio de cerámica, grifería y sanitarios. Acabados de lujo.",price:5e5,img:"https://images.unsplash.com/photo-1552321907-50b33b76435c?auto=format&fit=crop&q=80&w=600"},{id:6,name:"Luis Torres",avatar:"https://cdn-icons-png.flaticon.com/512/3135/3135728.png",badge:!0,category:"seguridad",title:"Cámaras de Seguridad HD",desc:"Sistema de videovigilancia con acceso remoto desde el celular.",price:18e4,img:"https://images.unsplash.com/photo-1557063673-0493e8bd87ce?auto=format&fit=crop&q=80&w=600"},{id:7,name:"Roberto Díaz",avatar:"https://cdn-icons-png.flaticon.com/512/3135/3135715.png",badge:!0,category:"electricidad",title:"Certificación TE1 SEC",desc:"Regularización de instalaciones eléctricas ante la SEC. Planos y trámites.",price:8e4,img:"https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=600"},{id:8,name:"Felipe Muñoz",avatar:"https://cdn-icons-png.flaticon.com/512/3135/3135768.png",badge:!1,category:"electricidad",title:"Instalación de Lámparas",desc:"Montaje de lámparas colgantes, apliqués y focos embutidos.",price:25e3,img:"https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&q=80&w=600"},{id:9,name:"Jorge Silva",avatar:"https://cdn-icons-png.flaticon.com/512/3135/3135823.png",badge:!0,category:"electricidad",title:"Tableros Eléctricos",desc:"Armado y normalización de tableros eléctricos domiciliarios e industriales.",price:12e4,img:"https://images.unsplash.com/photo-1558402529-d2638a7023e9?auto=format&fit=crop&q=80&w=600"},{id:10,name:"Manuel Rojas",avatar:"https://cdn-icons-png.flaticon.com/512/3135/3135728.png",badge:!0,category:"gasfiteria",title:"Instalación de Calefont",desc:"Instalación certificada de calefont ionizado y tiro forzado.",price:45e3,img:"https://images.unsplash.com/photo-1507646227500-4d389b0012be?auto=format&fit=crop&q=80&w=600"},{id:11,name:"Diego Soto",avatar:"https://cdn-icons-png.flaticon.com/512/3135/3135755.png",badge:!1,category:"gasfiteria",title:"Cambio de Grifería",desc:"Reemplazo de llaves de lavamanos, lavaplatos y duchas.",price:3e4,img:"https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&fit=crop&q=80&w=600"},{id:12,name:"Camila Paz",avatar:"https://cdn-icons-png.flaticon.com/512/3135/3135789.png",badge:!0,category:"gasfiteria",title:"Destape de Alcantarillado",desc:"Servicio con máquina eléctrica para destape de cámaras y desagües.",price:6e4,img:"https://images.unsplash.com/photo-1621905252507-b35a830099fc?auto=format&fit=crop&q=80&w=600"},{id:13,name:"Esteban Cruz",avatar:"https://cdn-icons-png.flaticon.com/512/3135/3135768.png",badge:!0,category:"clima",title:"Mantención Aire Acondicionado",desc:"Limpieza profunda, carga de gas y revisión técnica.",price:4e4,img:"https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=600"},{id:14,name:"Patricia Leal",avatar:"https://cdn-icons-png.flaticon.com/512/3135/3135789.png",badge:!0,category:"clima",title:"Calefacción Central",desc:"Instalación y purgado de radiadores y calderas.",price:8e4,img:"https://images.unsplash.com/photo-1585934444222-67727195c65a?auto=format&fit=crop&q=80&w=600"},{id:15,name:"Ricardo Vega",avatar:"https://cdn-icons-png.flaticon.com/512/3135/3135728.png",badge:!1,category:"clima",title:"Ventilación Industrial",desc:"Extractores de aire para cocinas y baños comerciales.",price:15e4,img:"https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=600"},{id:16,name:"Sergio M.",avatar:"https://cdn-icons-png.flaticon.com/512/3135/3135823.png",badge:!1,category:"construccion",title:"Tabiquería Metalcom",desc:"Muros divisorios, cielos falsos y ampliaciones en volcanita.",price:18e3,img:"https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&q=80&w=600"},{id:17,name:"Carmen Gloria",avatar:"https://cdn-icons-png.flaticon.com/512/3135/3135789.png",badge:!0,category:"construccion",title:"Pintura Interior/Exterior",desc:"Pintura de fachadas, muros y rejas con terminaciones prolijas.",price:5e3,img:"https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80&w=600"},{id:18,name:"Héctor L.",avatar:"https://cdn-icons-png.flaticon.com/512/3135/3135715.png",badge:!1,category:"construccion",title:"Radieres y Pisos",desc:"Construcción de radieres, veredas y postura de pastelones.",price:25e3,img:"https://images.unsplash.com/photo-1621905252472-943af68a029c?auto=format&fit=crop&q=80&w=600"},{id:19,name:"Tecnos Systems",avatar:"https://cdn-icons-png.flaticon.com/512/3135/3135728.png",badge:!0,category:"seguridad",title:"Cerco Eléctrico",desc:"Instalación y certificación de cercos eléctricos perimetrales.",price:35e4,img:"https://images.unsplash.com/photo-1558494949-efdeb6bf80c1?auto=format&fit=crop&q=80&w=600"},{id:20,name:"David Bravo",avatar:"https://cdn-icons-png.flaticon.com/512/3135/3135755.png",badge:!0,category:"seguridad",title:"Citofonía Digital",desc:"Instalación de citófonos y videoporteros para edificios y casas.",price:6e4,img:"https://images.unsplash.com/photo-1558002038-1091a1661116?auto=format&fit=crop&q=80&w=600"},{id:21,name:"Alarmas Pro",avatar:"https://cdn-icons-png.flaticon.com/512/3135/3135823.png",badge:!0,category:"seguridad",title:"Alarmas Comunitarias",desc:"Sistemas de alerta vecinal con control remoto y baliza.",price:12e4,img:"https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80&w=600"},{id:22,name:"EcoSolar Chile",avatar:"https://cdn-icons-png.flaticon.com/512/3135/3135789.png",badge:!0,category:"solar",title:"Termosifón Solar",desc:"Agua caliente gratis con energía solar. Equipos de 150L y 200L.",price:65e4,img:"https://images.unsplash.com/photo-1592833159057-65a284572bce?auto=format&fit=crop&q=80&w=600"},{id:23,name:"Javier Solar",avatar:"https://cdn-icons-png.flaticon.com/512/3135/3135768.png",badge:!1,category:"solar",title:"Bombas Solares",desc:"Bombeo de agua para riego con energía fotovoltaica.",price:12e5,img:"https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=600"},{id:24,name:"Muebles A Medida",avatar:"https://cdn-icons-png.flaticon.com/512/3135/3135755.png",badge:!0,category:"carpinteria",title:"Cocinas Empotradas",desc:"Diseño y fabricación de muebles de cocina en melamina.",price:85e4,img:"https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=600"},{id:25,name:"Raúl Maderas",avatar:"https://cdn-icons-png.flaticon.com/512/3135/3135728.png",badge:!1,category:"carpinteria",title:"Puertas y Ventanas",desc:"Instalación y ajuste de puertas de madera solida y placarol.",price:35e3,img:"https://images.unsplash.com/photo-1506377950269-63eef2507850?auto=format&fit=crop&q=80&w=600"},{id:26,name:"Closet Express",avatar:"https://cdn-icons-png.flaticon.com/512/3135/3135823.png",badge:!0,category:"carpinteria",title:"Closets y Walk-in",desc:"Organización de espacios con repisas y cajoneras a medida.",price:45e4,img:"https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&q=80&w=600"}],l=(m="all")=>{e.innerHTML="",f.filter(u=>m==="all"||u.category===m).forEach(u=>{const d=document.createElement("div");d.className="solution-card-market",d.innerHTML=`
                    <div class="market-img-container">
                        <img src="${u.img}" class="market-img" alt="${u.title}">
                        <div class="tech-badge-overlay">
                            <img src="${u.avatar}" alt="${u.name}">
                        </div>
                    </div>
                    <div class="market-body">
                        <div class="market-category">
                            ${u.name} ${u.badge?'<span title="Certificado">✅</span>':""}
                        </div>
                        <h3 class="market-title">${u.title}</h3>
                        <p class="market-desc">${u.desc}</p>
                        <div class="market-price">
                            ${E(u.price)} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-secondary);">(Ref.)</span>
                        </div>
                        <div style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--accent-color);">
                           ${i(u.id)}
                        </div>
                        <button class="btn-primary" style="width: 100%; margin-top: 1rem;" onclick="window.requestService(${u.id})">
                            Solicitar Presupuesto
                        </button>
                    </div>
                `,e.appendChild(d)})};l(),t&&t.addEventListener("click",m=>{m.target.classList.contains("cat-chip")&&(document.querySelectorAll(".cat-chip").forEach(v=>v.classList.remove("active")),m.target.classList.add("active"),l(m.target.dataset.cat))}),a&&a.addEventListener("input",m=>{const v=m.target.value.toLowerCase();e.innerHTML="",f.filter(d=>d.title.toLowerCase().includes(v)||d.desc.toLowerCase().includes(v)).forEach(d=>{const p=document.createElement("div");p.className="solution-card-market",p.innerHTML=`
                        <div class="market-img-container">
                            <img src="${d.img}" class="market-img" alt="${d.title}">
                            <div class="tech-badge-overlay">
                                <img src="${d.avatar}" alt="${d.name}">
                            </div>
                        </div>
                        <div class="market-body">
                            <div class="market-category">
                                ${d.name} ${d.badge?'<span title="Certificado">✅</span>':""}
                            </div>
                            <h3 class="market-title">${d.title}</h3>
                            <p class="market-desc">${d.desc}</p>
                            <div class="market-price">
                                ${E(d.price)} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-secondary);">(Ref.)</span>
                            </div>
                        <button class="btn-primary" style="width: 100%; margin-top: 1rem;" onclick="window.requestService(${d.id})">
                                Solicitar Presupuesto
                            </button>
                        </div>
                    `,e.appendChild(p)})}),window.requestService=m=>{document.getElementById("techIdField").value=m,n.style.display="flex"},o.addEventListener("click",()=>n.style.display="none"),window.onclick=m=>{m.target===n&&(n.style.display="none")},r.addEventListener("submit",m=>{m.preventDefault();const v=document.getElementById("techIdField").value,u={clientName:document.getElementById("clientName").value,clientPhone:document.getElementById("clientPhone").value,desc:document.getElementById("clientDesc").value,urgency:document.getElementById("clientUrgency").value,commune:document.getElementById("clientCommune").value,photo:document.getElementById("clientPhoto").files[0]?"photo_mock.jpg":null,date:new Date().toISOString()};I(v,u),alert(`✅ Solicitud enviada exitosamente.
El técnico se pondrá en contacto contigo a la brevedad.`),n.style.display="none",r.reset()});function I(m,v){const u=JSON.parse(localStorage.getItem("maestro_requests"))||[];u.push({techId:m,...v,status:"pending"}),localStorage.setItem("maestro_requests",JSON.stringify(u)),console.log(`[Notification] Alert sent to Technician ID ${m}:`,v)}}},ee=()=>{const e=window.location.pathname;!e.includes("login.html")&&!e.includes("registration.html")&&!e.includes("index.html")&&!e.includes("features")&&!e.includes("plans")&&F(),e.includes("registration.html")?U.init():e.includes("login.html")?Y.init():e.includes("marketplace.html")?K.init():e.includes("budget.html")?T.init():e.includes("dashboard.html")?J.init():e.includes("contract.html")?G.init():e.includes("profile.html")&&W.init()};console.log("App initialized");V.init();ee();
