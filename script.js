const sample = [
  {date:'May 20 (Wed)', entries:[
    {time:'6:30 AM - 7:00 AM', med:'Cytriboost Syrup', instr:'3 ml (Give after or with a meal)', status:'clear'},
    {time:'[Phase 1: Dual] 9:00 AM', med:'Prednisone Derpson Tablet', instr:'1 tablet (Morning Dose)', status:'clear'},
    {time:'12:30 PM - 1:00 PM', med:'Papi Bion Syrup', instr:'2 ml (Once daily supplement)', status:'clear'},
    {time:'1:30 PM - 2:00 PM', med:'ImmunoCare Syrup', instr:'3 ml (Once daily supplement)', status:'clear'},
    {time:'6:30 PM - 7:30 PM', med:'Prednisone Derpson Tablet', instr:'1 tablet (Evening Dose)', status:'clear'},
    {time:'9:00 PM', med:'Cytriboost Syrup', instr:'3 ml (2nd dose; Give after or with a meal)', status:'clear'},
  ]},
  {date:'May 21 (Thu)', entries:[
    {time:'6:30 AM - 7:00 AM', med:'Cytriboost Syrup', instr:'3 ml (Give after or with a meal)', status:'clear'},
    {time:'[Phase 1: Dual] 9:00 AM', med:'Prednisone Derpson Tablet', instr:'1 tablet (Morning Dose)', status:'clear'},
    {time:'12:30 PM - 1:00 PM', med:'Papi Bion Syrup', instr:'2 ml (Once daily supplement)', status:'clear'},
    {time:'1:30 PM - 2:00 PM', med:'ImmunoCare Syrup', instr:'3 ml (Once daily supplement)', status:'clear'},
    {time:'6:30 PM - 7:30 PM', med:'Prednisone Derpson Tablet', instr:'1 tablet (Evening Dose)', status:'clear'},
    {time:'9:00 PM', med:'Cytriboost Syrup', instr:'3 ml (2nd dose; Give after or with a meal)', status:'clear'},
  ]},
  {date:'May 22 (Fri)', entries:[
    {time:'6:30 AM - 7:00 AM', med:'Cytriboost Syrup', instr:'3 ml (Give after or with a meal)', status:'clear'},
    {time:'[Phase 1: Dual] 9:00 AM', med:'Prednisone Derpson Tablet', instr:'1 tablet (Morning Dose)', status:'clear'},
    {time:'12:30 PM - 1:00 PM', med:'Papi Bion Syrup', instr:'2 ml (Once daily supplement)', status:'clear'},
    {time:'1:30 PM - 2:00 PM', med:'ImmunoCare Syrup', instr:'3 ml (Once daily supplement)', status:'clear'},
    {time:'6:30 PM - 7:30 PM', med:'Prednisone Derpson Tablet', instr:'1 tablet (Evening Dose)', status:'clear'},
    {time:'9:00 PM', med:'Cytriboost Syrup', instr:'3 ml (2nd dose; Give after or with a meal)', status:'clear'},
  ]},
  {date:'May 23 (Sat)', entries:[
    {time:'6:30 AM - 7:00 AM', med:'Cytriboost Syrup', instr:'3 ml (Give after or with a meal)', status:'clear'},
    {time:'[Phase 1: Dual] 9:00 AM', med:'Prednisone Derpson Tablet', instr:'1 tablet (Morning Dose)', status:'clear'},
    {time:'12:30 PM - 1:00 PM', med:'Papi Bion Syrup', instr:'2 ml (Once daily supplement)', status:'clear'},
    {time:'1:30 PM - 2:00 PM', med:'ImmunoCare Syrup', instr:'3 ml (Once daily supplement)', status:'clear'},
    {time:'6:30 PM - 7:30 PM', med:'Prednisone Derpson Tablet', instr:'1 tablet (Evening Dose)', status:'clear'},
    {time:'9:00 PM', med:'Cytriboost Syrup', instr:'3 ml (2nd dose; Give after or with a meal)', status:'clear'},
  ]},
  {date:'May 24 (Sun)', entries:[
    {time:'6:30 AM - 7:00 AM', med:'Cytriboost Syrup', instr:'3 ml (Give after or with a meal)', status:'clear'},
    {time:'[Phase 2: Single] 9:00 AM', med:'Prednisone Derpson Tablet', instr:'1 TABLET ONLY FOR THE DAY (Phase Change: Once Daily)', status:'clear'},
    {time:'12:30 PM - 1:00 PM', med:'Papi Bion Syrup', instr:'2 ml (Once daily supplement)', status:'clear'},
    {time:'1:30 PM - 2:00 PM', med:'ImmunoCare Syrup', instr:'3 ml (Once daily supplement)', status:'clear'},
    {time:'6:30 PM - 7:30 PM', med:'Prednisone Derpson Tablet', instr:'DISCONTINUED / OMITTED FROM LOGIC (Once Daily Phase)', status:'N/A'},
    {time:'9:00 PM', med:'Cytriboost Syrup', instr:'3 ml (2nd dose; Give after or with a meal)', status:'clear'},
  ]},
  {date:'May 25 (Mon)', entries:[
    {time:'6:30 AM - 7:00 AM', med:'Cytriboost Syrup', instr:'3 ml (Give after or with a meal)', status:'clear'},
    {time:'[Phase 2: Single] 9:00 AM', med:'Prednisone Derpson Tablet', instr:'1 TABLET ONLY FOR THE DAY (Once Daily Phase)', status:'clear'},
    {time:'12:30 PM - 1:00 PM', med:'Papi Bion Syrup', instr:'2 ml (Once daily supplement)', status:'clear'},
    {time:'1:30 PM - 2:00 PM', med:'ImmunoCare Syrup', instr:'3 ml (Once daily supplement)', status:'clear'},
    {time:'9:00 PM', med:'Cytriboost Syrup', instr:'3 ml (2nd dose; Give after or with a meal)', status:'clear'},
  ]},
  {date:'May 26 (Tue)', entries:[
    {time:'6:30 AM - 7:00 AM', med:'Cytriboost Syrup', instr:'3 ml (Give after or with a meal)', status:'clear'},
    {time:'[Phase 2: Single] 9:00 AM', med:'Prednisone Derpson Tablet', instr:'1 TABLET ONLY FOR THE DAY (Once Daily Phase)', status:'clear'},
    {time:'12:30 PM - 1:00 PM', med:'Papi Bion Syrup', instr:'2 ml (Once daily supplement)', status:'clear'},
    {time:'1:30 PM - 2:00 PM', med:'ImmunoCare Syrup', instr:'3 ml (Once daily supplement)', status:'clear'},
    {time:'9:00 PM', med:'Cytriboost Syrup', instr:'3 ml (2nd dose; Give after or with a meal)', status:'clear'},
  ]},
  {date:'May 27 (Wed)', entries:[
    {time:'6:30 AM - 7:00 AM', med:'Cytriboost Syrup', instr:'3 ml (Give after or with a meal)', status:'clear'},
    {time:'[Phase 2: Single] 9:00 AM', med:'Prednisone Derpson Tablet', instr:'1 TABLET ONLY FOR THE DAY (Once Daily Phase)', status:'clear'},
    {time:'12:30 PM - 1:00 PM', med:'Papi Bion Syrup', instr:'2 ml (Once daily supplement)', status:'clear'},
    {time:'1:30 PM - 2:00 PM', med:'ImmunoCare Syrup', instr:'3 ml (Once daily supplement)', status:'clear'},
    {time:'9:00 PM', med:'Cytriboost Syrup', instr:'3 ml (2nd dose; Give after or with a meal)', status:'clear'},
  ]},
  {date:'May 28 (Thu)', entries:[
    {time:'6:30 AM - 7:00 AM', med:'Cytriboost Syrup', instr:'3 ml (Give after or with a meal)', status:'clear'},
    {time:'[Phase 2: Single] 9:00 AM', med:'Prednisone Derpson Tablet', instr:'1 TABLET ONLY FOR THE DAY (Once Daily Phase)', status:'clear'},
    {time:'12:30 PM - 1:00 PM', med:'Papi Bion Syrup', instr:'2 ml (Once daily supplement)', status:'clear'},
    {time:'1:30 PM - 2:00 PM', med:'ImmunoCare Syrup', instr:'3 ml (Once daily supplement)', status:'clear'},
    {time:'9:00 PM', med:'Cytriboost Syrup', instr:'3 ml (2nd dose; Give after or with a meal)', status:'clear'},
  ]},
  {date:'May 29 (Fri)', entries:[
    {time:'6:30 AM - 7:00 AM', med:'Cytriboost Syrup', instr:'FINAL MORNING DOSE: 3 ml (Give after or with a meal)', status:'clear'},
    {time:'[Phase 2: Single] 9:00 AM', med:'Prednisone Derpson Tablet', instr:'1 TABLET ONLY FOR THE DAY (Once Daily Phase)', status:'clear'},
    {time:'12:30 PM - 1:00 PM', med:'Papi Bion Syrup', instr:'2 ml (Once daily supplement)', status:'clear'},
    {time:'1:30 PM - 2:00 PM', med:'ImmunoCare Syrup', instr:'3 ml (Once daily supplement)', status:'clear'},
    {time:'9:00 PM', med:'Cytriboost Syrup', instr:'FINAL EVENING DOSE: 3 ml (Regimen Completed)', status:'clear'},
  ]},
  {date:'May 30 (Sat)', entries:[
    {time:'9:00 AM', med:'Prednisone Derpson Tablet', instr:'1 TABLET ONLY FOR THE DAY (Once Daily Phase)', status:'clear'},
    {time:'[Phase 2: Single] 12:30 PM - 1:00 PM', med:'Papi Bion Syrup', instr:'2 ml (Once daily supplement)', status:'clear'},
    {time:'1:30 PM - 2:00 PM', med:'ImmunoCare Syrup', instr:'3 ml (Once daily supplement)', status:'clear'},
  ]},
];
const STORAGE_KEY='binsoy_tasks_v1';
const SETTINGS_KEY='binsoy_settings_v1';
function loadState(){
  const raw = localStorage.getItem(STORAGE_KEY);
  if(raw){
    try{
      const parsed = JSON.parse(raw);
      if(Array.isArray(parsed) && parsed.length===sample.length && parsed.every((day,i)=>day.date===sample[i].date)){
        return parsed;
      }
    }catch(e){}
  }
  const state = sample.map(day=>({date:day.date, entries: day.entries.map(e=>({time:e.time, med:e.med, instr:e.instr, status:e.status, done:false, na: e.status==='N/A'}))}));
  localStorage.setItem(STORAGE_KEY,JSON.stringify(state));
  return state;
}
function loadSettings(){
  try{return JSON.parse(localStorage.getItem(SETTINGS_KEY)||'null')||{};}catch(e){return{}}
}
let state = loadState();
const settings = loadSettings();
const list = document.getElementById('list');
function render(){
  list.innerHTML='';
  state.forEach((day,di)=>{
    const card = document.createElement('div');card.className='card';
    const h = document.createElement('div');h.className='day-header';
    const left = document.createElement('div');left.innerHTML=`<div class="date-title">${day.date}</div><div class="small muted">${day.entries.length} items</div>`;
    const right = document.createElement('div');
    const toggle = document.createElement('button');toggle.className='ghost';toggle.textContent='Toggle';
    toggle.onclick=()=>{items.style.display = items.style.display==='none'?'grid':'none'};
    right.appendChild(toggle);
    h.appendChild(left);h.appendChild(right);
    card.appendChild(h);
    const items = document.createElement('div');items.className='items';
    day.entries.forEach((it,ii)=>{
      const item = document.createElement('div');item.className='item';
      const cb = document.createElement('input');cb.type='checkbox';cb.className='checkbox';cb.checked=!!it.done;cb.disabled=!!it.na;
      cb.onchange=()=>{it.done=cb.checked; saveLocal(false);}
      const meta = document.createElement('div');meta.className='meta';meta.innerHTML=`<div class="time">${it.time}</div><div class="med">${it.med}</div><div class="instr">${it.instr}</div>`;
      const status = document.createElement('div');status.className='status';
      const badge = document.createElement('div');badge.className='small muted';badge.textContent=it.na? 'N/A' : (it.done? 'Done':'Clear');
      status.appendChild(cb);status.appendChild(badge);
      item.appendChild(meta);item.appendChild(status);
      items.appendChild(item);
    });
    card.appendChild(items);
    list.appendChild(card);
  });
  document.getElementById('lastSaved').textContent = 'Last saved: ' + (localStorage.getItem('binsoy_lastsave')||'never');
}
function saveLocal(markTime=true){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  if(markTime) localStorage.setItem('binsoy_lastsave', new Date().toLocaleString());
  document.getElementById('lastSaved').textContent = 'Last saved: ' + (localStorage.getItem('binsoy_lastsave')||'never');
}
async function githubSave(){
  const s = JSON.parse(localStorage.getItem(SETTINGS_KEY)||'null');
  if(!s || !s.token || !s.repo){throw new Error('Missing settings')}
  const [owner,repo] = s.repo.split('/');
  if(!owner || !repo) throw new Error('Repo must be owner/repo');
  const path = s.path || 'tasks.json';
  const apiBase = 'https://api.github.com';
  const content = btoa(unescape(encodeURIComponent(JSON.stringify({state, savedAt: new Date().toISOString()}, null, 2))));
  const headers = {Authorization: 'token ' + s.token, 'Content-Type':'application/json'};
  const getUrl = `${apiBase}/repos/${owner}/${repo}/contents/${encodeURIComponent(path)}`;
  let sha = null;
  const getRes = await fetch(getUrl, {headers});
  if(getRes.status===200){const data = await getRes.json();sha = data.sha}
  const putUrl = `${apiBase}/repos/${owner}/${repo}/contents/${encodeURIComponent(path)}`;
  const body = {message:'Update tasks via Binsoy Treatment Tracker', content, committer:{name:'Binsoy Tracker',email:'noreply@example.com'}};
  if(sha) body.sha = sha;
  const putRes = await fetch(putUrl, {method:'PUT', headers, body: JSON.stringify(body)});
  if(!putRes.ok){const txt = await putRes.text(); throw new Error('GitHub save failed: '+putRes.status+' '+txt)}
  return await putRes.json();
}

document.getElementById('save').addEventListener('click', async ()=>{
  saveLocal(true);
  try{
    document.getElementById('save').textContent='Saving...';
    await githubSave();
    localStorage.setItem('binsoy_lastsave', new Date().toLocaleString());
    document.getElementById('lastSaved').textContent='Last saved: ' + localStorage.getItem('binsoy_lastsave');
    alert('Saved locally and to GitHub.');
  }catch(e){
    console.warn(e);
    alert('Saved locally. Cloud save failed: '+e.message);
  }finally{document.getElementById('save').textContent='Save Progress'}
});

document.getElementById('reset').addEventListener('click', ()=>{
  if(!confirm('Reset all progress to unchecked?')) return;
  state.forEach(day=>day.entries.forEach(e=>{e.done=false;}));
  saveLocal(true);render();
});

document.getElementById('toggleSettings').addEventListener('click', ()=>{
  const p = document.getElementById('settingsPanel'); p.style.display = p.style.display==='none'?'block':'none';
  const s = loadSettings(); document.getElementById('token').value = s.token||''; document.getElementById('repo').value = s.repo||''; document.getElementById('path').value = s.path||'tasks.json';
});

document.getElementById('saveSettings').addEventListener('click', ()=>{
  const token = document.getElementById('token').value.trim();
  const repo = document.getElementById('repo').value.trim();
  const path = document.getElementById('path').value.trim()||'tasks.json';
  const obj = {token, repo, path};
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(obj));
  alert('Settings saved locally.');
  document.getElementById('settingsPanel').style.display='none';
});

document.getElementById('clearSettings').addEventListener('click', ()=>{
  if(!confirm('Clear stored GitHub token and repo?')) return;
  localStorage.removeItem(SETTINGS_KEY);
  document.getElementById('token').value='';document.getElementById('repo').value='';
  alert('Cleared.');
});

document.getElementById('expandAll').addEventListener('click', ()=>{document.querySelectorAll('.items').forEach(n=>n.style.display='grid')});
document.getElementById('collapseAll').addEventListener('click', ()=>{document.querySelectorAll('.items').forEach(n=>n.style.display='none')});

render();
