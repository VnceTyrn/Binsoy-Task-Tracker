const sample = [
  {date:'May 20 (Wed)', phase:'Phase 1: Dual', entries:[
    {time:'6:30 AM - 7:00 AM', med:'Cytriboost Syrup', instr:'3 ml (Give after or with a meal)', status:'clear'},
    {time:'9:00 AM', med:'Prednisone Derpson Tablet', instr:'1 tablet (Morning Dose)', status:'clear'},
    {time:'12:30 PM - 1:00 PM', med:'Papi Bion Syrup', instr:'2 ml (Once daily supplement)', status:'clear'},
    {time:'1:30 PM - 2:00 PM', med:'ImmunoCare Syrup', instr:'3 ml (Once daily supplement)', status:'clear'},
    {time:'6:30 PM - 7:30 PM', med:'Prednisone Derpson Tablet', instr:'1 tablet (Evening Dose)', status:'clear'},
    {time:'9:00 PM', med:'Cytriboost Syrup', instr:'3 ml (2nd dose; Give after or with a meal)', status:'clear'},
  ]},
  {date:'May 21 (Thu)', phase:'Phase 1: Dual', entries:[
    {time:'6:30 AM - 7:00 AM', med:'Cytriboost Syrup', instr:'3 ml (Give after or with a meal)', status:'clear'},
    {time:'9:00 AM', med:'Prednisone Derpson Tablet', instr:'1 tablet (Morning Dose)', status:'clear'},
    {time:'12:30 PM - 1:00 PM', med:'Papi Bion Syrup', instr:'2 ml (Once daily supplement)', status:'clear'},
    {time:'1:30 PM - 2:00 PM', med:'ImmunoCare Syrup', instr:'3 ml (Once daily supplement)', status:'clear'},
    {time:'6:30 PM - 7:30 PM', med:'Prednisone Derpson Tablet', instr:'1 tablet (Evening Dose)', status:'clear'},
    {time:'9:00 PM', med:'Cytriboost Syrup', instr:'3 ml (2nd dose; Give after or with a meal)', status:'clear'},
  ]},
  {date:'May 22 (Fri)', phase:'Phase 1: Dual', entries:[
    {time:'6:30 AM - 7:00 AM', med:'Cytriboost Syrup', instr:'3 ml (Give after or with a meal)', status:'clear'},
    {time:'9:00 AM', med:'Prednisone Derpson Tablet', instr:'1 tablet (Morning Dose)', status:'clear'},
    {time:'12:30 PM - 1:00 PM', med:'Papi Bion Syrup', instr:'2 ml (Once daily supplement)', status:'clear'},
    {time:'1:30 PM - 2:00 PM', med:'ImmunoCare Syrup', instr:'3 ml (Once daily supplement)', status:'clear'},
    {time:'6:30 PM - 7:30 PM', med:'Prednisone Derpson Tablet', instr:'1 tablet (Evening Dose)', status:'clear'},
    {time:'9:00 PM', med:'Cytriboost Syrup', instr:'3 ml (2nd dose; Give after or with a meal)', status:'clear'},
  ]},
  {date:'May 23 (Sat)', phase:'Phase 1: Dual', entries:[
    {time:'6:30 AM - 7:00 AM', med:'Cytriboost Syrup', instr:'3 ml (Give after or with a meal)', status:'clear'},
    {time:'9:00 AM', med:'Prednisone Derpson Tablet', instr:'1 tablet (Morning Dose)', status:'clear'},
    {time:'12:30 PM - 1:00 PM', med:'Papi Bion Syrup', instr:'2 ml (Once daily supplement)', status:'clear'},
    {time:'1:30 PM - 2:00 PM', med:'ImmunoCare Syrup', instr:'3 ml (Once daily supplement)', status:'clear'},
    {time:'6:30 PM - 7:30 PM', med:'Prednisone Derpson Tablet', instr:'1 tablet (Evening Dose)', status:'clear'},
    {time:'9:00 PM', med:'Cytriboost Syrup', instr:'3 ml (2nd dose; Give after or with a meal)', status:'clear'},
  ]},
  {date:'May 24 (Sun)', phase:'Phase 2: Single', entries:[
    {time:'6:30 AM - 7:00 AM', med:'Cytriboost Syrup', instr:'3 ml (Give after or with a meal)', status:'clear'},
    {time:'9:00 AM', med:'Prednisone Derpson Tablet', instr:'1 TABLET ONLY FOR THE DAY (Phase Change: Once Daily)', status:'clear'},
    {time:'12:30 PM - 1:00 PM', med:'Papi Bion Syrup', instr:'2 ml (Once daily supplement)', status:'clear'},
    {time:'1:30 PM - 2:00 PM', med:'ImmunoCare Syrup', instr:'3 ml (Once daily supplement)', status:'clear'},
    {time:'6:30 PM - 7:30 PM', med:'Cytriboost Syrup', instr:'3 ml (Evening dose; evening Prednisone discontinued)', status:'clear'},
    {time:'9:00 PM', med:'Cytriboost Syrup', instr:'3 ml (2nd dose; Give after or with a meal)', status:'clear'},
  ]},
  {date:'May 25 (Mon)', phase:'Phase 2: Single', entries:[
    {time:'6:30 AM - 7:00 AM', med:'Cytriboost Syrup', instr:'3 ml (Give after or with a meal)', status:'clear'},
    {time:'9:00 AM', med:'Prednisone Derpson Tablet', instr:'1 TABLET ONLY FOR THE DAY (Once Daily Phase)', status:'clear'},
    {time:'12:30 PM - 1:00 PM', med:'Papi Bion Syrup', instr:'2 ml (Once daily supplement)', status:'clear'},
    {time:'1:30 PM - 2:00 PM', med:'ImmunoCare Syrup', instr:'3 ml (Once daily supplement)', status:'clear'},
    {time:'6:30 PM - 7:30 PM', med:'Cytriboost Syrup', instr:'3 ml (Evening dose; evening Prednisone discontinued)', status:'clear'},
    {time:'9:00 PM', med:'Cytriboost Syrup', instr:'3 ml (2nd dose; Give after or with a meal)', status:'clear'},
  ]},
  {date:'May 26 (Tue)', phase:'Phase 2: Single', entries:[
    {time:'6:30 AM - 7:00 AM', med:'Cytriboost Syrup', instr:'3 ml (Give after or with a meal)', status:'clear'},
    {time:'9:00 AM', med:'Prednisone Derpson Tablet', instr:'1 TABLET ONLY FOR THE DAY (Once Daily Phase)', status:'clear'},
    {time:'12:30 PM - 1:00 PM', med:'Papi Bion Syrup', instr:'2 ml (Once daily supplement)', status:'clear'},
    {time:'1:30 PM - 2:00 PM', med:'ImmunoCare Syrup', instr:'3 ml (Once daily supplement)', status:'clear'},
    {time:'6:30 PM - 7:30 PM', med:'Cytriboost Syrup', instr:'3 ml (Evening dose; evening Prednisone discontinued)', status:'clear'},
    {time:'9:00 PM', med:'Cytriboost Syrup', instr:'3 ml (2nd dose; Give after or with a meal)', status:'clear'},
  ]},
  {date:'May 27 (Wed)', phase:'Phase 2: Single', entries:[
    {time:'6:30 AM - 7:00 AM', med:'Cytriboost Syrup', instr:'3 ml (Give after or with a meal)', status:'clear'},
    {time:'9:00 AM', med:'Prednisone Derpson Tablet', instr:'1 TABLET ONLY FOR THE DAY (Once Daily Phase)', status:'clear'},
    {time:'12:30 PM - 1:00 PM', med:'Papi Bion Syrup', instr:'2 ml (Once daily supplement)', status:'clear'},
    {time:'1:30 PM - 2:00 PM', med:'ImmunoCare Syrup', instr:'3 ml (Once daily supplement)', status:'clear'},
    {time:'6:30 PM - 7:30 PM', med:'Cytriboost Syrup', instr:'3 ml (Evening dose; evening Prednisone discontinued)', status:'clear'},
    {time:'9:00 PM', med:'Cytriboost Syrup', instr:'3 ml (2nd dose; Give after or with a meal)', status:'clear'},
  ]},
  {date:'May 28 (Thu)', phase:'Phase 2: Single', entries:[
    {time:'6:30 AM - 7:00 AM', med:'Cytriboost Syrup', instr:'3 ml (Give after or with a meal)', status:'clear'},
    {time:'9:00 AM', med:'Prednisone Derpson Tablet', instr:'1 TABLET ONLY FOR THE DAY (Once Daily Phase)', status:'clear'},
    {time:'12:30 PM - 1:00 PM', med:'Papi Bion Syrup', instr:'2 ml (Once daily supplement)', status:'clear'},
    {time:'1:30 PM - 2:00 PM', med:'ImmunoCare Syrup', instr:'3 ml (Once daily supplement)', status:'clear'},
    {time:'6:30 PM - 7:30 PM', med:'Cytriboost Syrup', instr:'3 ml (Evening dose; evening Prednisone discontinued)', status:'clear'},
    {time:'9:00 PM', med:'Cytriboost Syrup', instr:'3 ml (2nd dose; Give after or with a meal)', status:'clear'},
  ]},
  {date:'May 29 (Fri)', phase:'Phase 2: Single', entries:[
    {time:'6:30 AM - 7:00 AM', med:'Cytriboost Syrup', instr:'FINAL MORNING DOSE: 3 ml (Give after or with a meal)', status:'clear'},
    {time:'9:00 AM', med:'Prednisone Derpson Tablet', instr:'1 TABLET ONLY FOR THE DAY (Once Daily Phase)', status:'clear'},
    {time:'12:30 PM - 1:00 PM', med:'Papi Bion Syrup', instr:'2 ml (Once daily supplement)', status:'clear'},
    {time:'1:30 PM - 2:00 PM', med:'ImmunoCare Syrup', instr:'3 ml (Once daily supplement)', status:'clear'},
    {time:'6:30 PM - 7:30 PM', med:'Cytriboost Syrup', instr:'FINAL EVENING DOSE: 3 ml (Regimen Completed)', status:'clear'},
  ]},
  {date:'May 30 (Sat)', phase:'Phase 2: Single', entries:[
    {time:'9:00 AM', med:'Prednisone Derpson Tablet', instr:'1 TABLET ONLY FOR THE DAY (Once Daily Phase)', status:'clear'},
    {time:'12:30 PM - 1:00 PM', med:'Papi Bion Syrup', instr:'2 ml (Once daily supplement)', status:'clear'},
    {time:'1:30 PM - 2:00 PM', med:'ImmunoCare Syrup', instr:'3 ml (Once daily supplement)', status:'clear'},
  ]},
];
const STORAGE_KEY='binsoy_tasks_v1';
const SETTINGS_KEY='binsoy_settings_v1';
const REMINDER_HISTORY_KEY='binsoy_reminder_history_v1';
const DEFAULT_SETTINGS={token:'',repo:'',path:'tasks.json',theme:'light',reminders:false};
function loadState(){
  const raw=localStorage.getItem(STORAGE_KEY);
  if(raw){
    try{
      const parsed=JSON.parse(raw);
      if(Array.isArray(parsed)&&parsed.length===sample.length&&parsed.every((day,i)=>day.date===sample[i].date)){
        return parsed;
      }
    }catch(e){}
  }
  const state=sample.map(day=>({date:day.date,phase:day.phase||'',entries:day.entries.map(e=>({time:e.time,med:e.med,instr:e.instr,status:e.status,done:false,na:e.status==='N/A'}))}));
  localStorage.setItem(STORAGE_KEY,JSON.stringify(state));
  return state;
}
function loadSavedSettings(){
  const raw=localStorage.getItem(SETTINGS_KEY);
  if(!raw) return {...DEFAULT_SETTINGS};
  try{return {...DEFAULT_SETTINGS,...JSON.parse(raw)};}catch(e){return {...DEFAULT_SETTINGS};}
}
let state=loadState();
let settings=loadSavedSettings();
const list=document.getElementById('list');
function render(){
  list.innerHTML='';
  state.forEach(day=>{
    const card=document.createElement('div');card.className='card';
    const header=document.createElement('div');header.className='day-header';
    const left=document.createElement('div');
    left.innerHTML=`<div class="date-title">${day.date}</div>${day.phase?`<div class="phase-pill">${day.phase}</div>`:''}`;
    const right=document.createElement('div');
    const toggle=document.createElement('button');toggle.className='ghost';toggle.textContent='Toggle';
    toggle.addEventListener('click',()=>{items.style.display=items.style.display==='none'?'grid':'none';});
    right.appendChild(toggle);
    header.appendChild(left);header.appendChild(right);
    card.appendChild(header);
    const items=document.createElement('div');items.className='items';
    day.entries.forEach(entry=>{
      const item=document.createElement('div');item.className='item';
      const cb=document.createElement('input');cb.type='checkbox';cb.className='checkbox';cb.checked=!!entry.done;cb.disabled=!!entry.na;
      cb.addEventListener('change',()=>{entry.done=cb.checked; saveLocal(false); renderSummary();});
      const meta=document.createElement('div');meta.className='meta';
      meta.innerHTML=`<div class="time">${entry.time}</div><div class="med">${entry.med}</div><div class="instr">${entry.instr}</div>`;
      const status=document.createElement('div');status.className='status';
      const badge=document.createElement('div');badge.className='badge '+(entry.na?'badge-na':entry.done?'badge-done':'badge-clear');
      badge.textContent=entry.na?'N/A':entry.done?'Done':'Clear';
      status.appendChild(cb);status.appendChild(badge);
      item.appendChild(meta);item.appendChild(status);
      items.appendChild(item);
    });
    card.appendChild(items);
    list.appendChild(card);
  });
  renderSummary();
}
function renderSummary(){
  const total=state.reduce((sum,day)=>sum+day.entries.filter(e=>!e.na).length,0);
  const done=state.reduce((sum,day)=>sum+day.entries.filter(e=>e.done).length,0);
  document.getElementById('completedCount').textContent=`${done} / ${total} complete`;
  document.getElementById('lastSaved').textContent=localStorage.getItem('binsoy_lastsave')||'never';
  document.getElementById('reminderStatus').textContent=(settings&&settings.reminders)?'On':'Off';
}
function saveLocal(markTime=true){
  localStorage.setItem(STORAGE_KEY,JSON.stringify(state));
  if(markTime) localStorage.setItem('binsoy_lastsave',new Date().toLocaleString());
  renderSummary();
}
function applyTheme(theme){
  document.body.dataset.theme=theme;
  document.getElementById('toggleTheme').textContent=theme==='dark'?'☀️':'🌙';
  document.getElementById('enableDarkMode').checked=theme==='dark';
}
function saveSettings(){
  const token=document.getElementById('token').value.trim();
  const repo=document.getElementById('repo').value.trim();
  const path=document.getElementById('path').value.trim()||'tasks.json';
  const reminders=document.getElementById('enableNotifications').checked;
  const theme=document.getElementById('enableDarkMode').checked?'dark':'light';
  settings={token,repo,path,theme,reminders};
  localStorage.setItem(SETTINGS_KEY,JSON.stringify(settings));
  applyTheme(theme);
  renderSummary();
  showAlert('Settings saved locally.',4000);
}
function initSettingsPanel(){
  settings=loadSavedSettings();
  document.getElementById('token').value=settings.token||'';
  document.getElementById('repo').value=settings.repo||'';
  document.getElementById('path').value=settings.path||'tasks.json';
  document.getElementById('enableNotifications').checked=!!settings.reminders;
  document.getElementById('enableDarkMode').checked=settings.theme==='dark';
  applyTheme(settings.theme||'light');
}
function toggleSettingsPanel(open){
  document.getElementById('settingsPanel').style.display=open?'block':'none';
}
function showAlert(message,duration=5000){
  const banner=document.getElementById('alertBanner');
  banner.textContent=message;
  banner.style.display='block';
  window.clearTimeout(showAlert.timeoutId);
  showAlert.timeoutId=window.setTimeout(()=>{banner.style.display='none';},duration);
}
function parseEntryDate(dayDate,entryTime){
  const dateText=dayDate.replace(/\s*\(.*\)/,'');
  const timeText=entryTime.split(' - ')[0].trim();
  if(!/\d/.test(timeText)) return null;
  const year=new Date().getFullYear();
  const dateString=`${dateText} ${year} ${timeText}`;
  const parsed=new Date(dateString);
  return isNaN(parsed)?null:parsed;
}
function requestNotificationPermission(){
  if(!('Notification' in window)) return;
  if(Notification.permission==='default'){
    Notification.requestPermission().then(permission=>{
      if(permission==='granted') showAlert('Notifications enabled.'); else showAlert('Notifications disabled or blocked.',4000);
    });
  }
}
function playBeep(){
  if(!window.AudioContext && !window.webkitAudioContext) return;
  const AudioCtx=window.AudioContext||window.webkitAudioContext;
  const ctx=new AudioCtx();
  const osc=ctx.createOscillator();
  const gain=ctx.createGain();
  osc.type='sine';
  osc.frequency.value=520;
  gain.gain.setValueAtTime(0.22,ctx.currentTime);
  osc.connect(gain);gain.connect(ctx.destination);osc.start();osc.stop(ctx.currentTime+0.16);
}
function showReminder(entry,day){
  const message=`Time for ${entry.med} (${entry.time}) on ${day.date}`;
  if(Notification.permission==='granted') new Notification('Dosage reminder',{body:message});
  playBeep();
  showAlert(message,7000);
}
function checkReminders(){
  settings=loadSavedSettings();
  if(!settings.reminders) return;
  const now=new Date();
  const history=JSON.parse(localStorage.getItem(REMINDER_HISTORY_KEY)||'{}');
  state.forEach(day=>{
    day.entries.forEach(entry=>{
      if(entry.na||entry.done) return;
      const scheduled=parseEntryDate(day.date,entry.time);
      if(!scheduled) return;
      const key=scheduled.toISOString();
      if(history[key]) return;
      const diff=scheduled-now;
      if(diff>=0 && diff<60000){
        history[key]=true;
        localStorage.setItem(REMINDER_HISTORY_KEY,JSON.stringify(history));
        showReminder(entry,day);
      }
    });
  });
}
function githubSave(){
  if(!settings||!settings.token||!settings.repo) throw new Error('Missing settings');
  const [owner,repo]=settings.repo.split('/');
  if(!owner||!repo) throw new Error('Repo must be owner/repo');
  const path=settings.path||'tasks.json';
  const apiBase='https://api.github.com';
  const content=btoa(unescape(encodeURIComponent(JSON.stringify({state,savedAt:new Date().toISOString()},null,2))));
  const headers={Authorization:'token '+settings.token,'Content-Type':'application/json'};
  return fetch(`${apiBase}/repos/${owner}/${repo}/contents/${encodeURIComponent(path)}`,{headers})
    .then(res=>res.status===200?res.json():null)
    .then(data=>{
      const sha=data?.sha;
      const body={message:'Update task tracker progress',content,committer:{name:'Binsoy Tracker',email:'noreply@example.com'}};
      if(sha) body.sha=sha;
      return fetch(`${apiBase}/repos/${owner}/${repo}/contents/${encodeURIComponent(path)}`,{method:'PUT',headers,body:JSON.stringify(body)});
    })
    .then(res=>res.ok?res.json():res.text().then(txt=>{throw new Error('GitHub save failed: '+txt);}));
}
document.getElementById('save').addEventListener('click',async()=>{
  saveLocal(true);
  try{
    document.getElementById('save').textContent='Saving...';
    await githubSave();
    localStorage.setItem('binsoy_lastsave',new Date().toLocaleString());
    renderSummary();
    showAlert('Saved locally and to GitHub.',4000);
  }catch(e){
    console.warn(e);
    showAlert('Saved locally. Cloud save failed: '+e.message,7000);
  }finally{document.getElementById('save').textContent='Save progress';}
});
document.getElementById('reset').addEventListener('click',()=>{
  if(!confirm('Reset all progress to unchecked?')) return;
  state.forEach(day=>day.entries.forEach(entry=>{entry.done=false;}));
  saveLocal(true);render();
});
document.getElementById('toggleSettings').addEventListener('click',()=>{initSettingsPanel();toggleSettingsPanel(true);});
document.getElementById('closeSettings').addEventListener('click',()=>toggleSettingsPanel(false));
document.getElementById('saveSettings').addEventListener('click',()=>{saveSettings();toggleSettingsPanel(false);});
document.getElementById('clearSettings').addEventListener('click',()=>{
  if(!confirm('Clear stored GitHub token and repo?')) return;
  localStorage.removeItem(SETTINGS_KEY);
  localStorage.removeItem(REMINDER_HISTORY_KEY);
  initSettingsPanel();
  showAlert('Saved settings cleared.',4000);
});
document.getElementById('expandAll').addEventListener('click',()=>document.querySelectorAll('.items').forEach(n=>n.style.display='grid'));
document.getElementById('collapseAll').addEventListener('click',()=>document.querySelectorAll('.items').forEach(n=>n.style.display='none'));
document.getElementById('toggleTheme').addEventListener('click',()=>{
  const current=document.body.dataset.theme==='dark'?'light':'dark';
  document.getElementById('enableDarkMode').checked=current==='dark';
  applyTheme(current);
  saveSettings();
});
document.getElementById('enableNotifications').addEventListener('change',()=>{if(document.getElementById('enableNotifications').checked) requestNotificationPermission();});
document.getElementById('enableDarkMode').addEventListener('change',()=>{applyTheme(document.getElementById('enableDarkMode').checked?'dark':'light');saveSettings();});
initSettingsPanel();
render();
setInterval(checkReminders,30000);
checkReminders();
