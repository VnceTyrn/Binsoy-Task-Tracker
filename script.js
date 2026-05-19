const sample = [
  {date:'May 20 (Wed)', phase:'Phase 1: Dual', entries:[
    {time:'6:30 AM - 7:00 AM', med:'Cytriboost Syrup', instr:'3 ml (Give with a snack/treat)', status:'clear'},
    {time:'9:00 AM', med:'Prednisone Derpson Tablet', instr:'1 tablet (Morning Dose; with a full meal)', status:'clear'},
    {time:'12:30 PM - 1:00 PM', med:'Papi Bion Syrup', instr:'2 ml (Once daily supplement)', status:'clear'},
    {time:'1:30 PM - 2:00 PM', med:'ImmunoCare Syrup', instr:'3 ml (Once daily supplement)', status:'clear'},
    {time:'6:30 PM - 7:30 PM', med:'Prednisone Derpson Tablet', instr:'1 tablet (Evening Dose; with a full meal)', status:'clear'},
    {time:'9:00 PM', med:'Cytriboost Syrup', instr:'3 ml (2nd dose; Give with a snack/treat)', status:'clear'},
  ]},
  {date:'May 21 (Thu)', phase:'Phase 1: Dual', entries:[
    {time:'6:30 AM - 7:00 AM', med:'Cytriboost Syrup', instr:'3 ml (Give with a snack/treat)', status:'clear'},
    {time:'9:00 AM', med:'Prednisone Derpson Tablet', instr:'1 tablet (Morning Dose; with a full meal)', status:'clear'},
    {time:'12:30 PM - 1:00 PM', med:'Papi Bion Syrup', instr:'2 ml (Once daily supplement)', status:'clear'},
    {time:'1:30 PM - 2:00 PM', med:'ImmunoCare Syrup', instr:'3 ml (Once daily supplement)', status:'clear'},
    {time:'6:30 PM - 7:30 PM', med:'Prednisone Derpson Tablet', instr:'1 tablet (Evening Dose; with a full meal)', status:'clear'},
    {time:'9:00 PM', med:'Cytriboost Syrup', instr:'3 ml (2nd dose; Give with a snack/treat)', status:'clear'},
  ]},
  {date:'May 22 (Fri)', phase:'Phase 1: Dual', entries:[
    {time:'6:30 AM - 7:00 AM', med:'Cytriboost Syrup', instr:'3 ml (Give with a snack/treat)', status:'clear'},
    {time:'9:00 AM', med:'Prednisone Derpson Tablet', instr:'1 tablet (Morning Dose; with a full meal)', status:'clear'},
    {time:'12:30 PM - 1:00 PM', med:'Papi Bion Syrup', instr:'2 ml (Once daily supplement)', status:'clear'},
    {time:'1:30 PM - 2:00 PM', med:'ImmunoCare Syrup', instr:'3 ml (Once daily supplement)', status:'clear'},
    {time:'6:30 PM - 7:30 PM', med:'Prednisone Derpson Tablet', instr:'1 tablet (Evening Dose; with a full meal)', status:'clear'},
    {time:'9:00 PM', med:'Cytriboost Syrup', instr:'3 ml (2nd dose; Give with a snack/treat)', status:'clear'},
  ]},
  {date:'May 23 (Sat)', phase:'Phase 1: Dual', entries:[
    {time:'6:30 AM - 7:00 AM', med:'Cytriboost Syrup', instr:'3 ml (Give with a snack/treat)', status:'clear'},
    {time:'9:00 AM', med:'Prednisone Derpson Tablet', instr:'1 tablet (Morning Dose; with a full meal)', status:'clear'},
    {time:'12:30 PM - 1:00 PM', med:'Papi Bion Syrup', instr:'2 ml (Once daily supplement)', status:'clear'},
    {time:'1:30 PM - 2:00 PM', med:'ImmunoCare Syrup', instr:'3 ml (Once daily supplement)', status:'clear'},
    {time:'6:30 PM - 7:30 PM', med:'Prednisone Derpson Tablet', instr:'1 tablet (Evening Dose; with a full meal)', status:'clear'},
    {time:'9:00 PM', med:'Cytriboost Syrup', instr:'3 ml (2nd dose; Give with a snack/treat)', status:'clear'},
  ]},
  {date:'May 24 (Sun)', phase:'Phase 2: Single', entries:[
    {time:'6:30 AM - 7:00 AM', med:'Cytriboost Syrup', instr:'3 ml (Give with a snack/treat)', status:'clear'},
    {time:'9:00 AM', med:'Prednisone Derpson Tablet', instr:'1 TABLET ONLY FOR THE DAY (Phase Change: Once Daily; with a full meal)', status:'clear'},
    {time:'12:30 PM - 1:00 PM', med:'Papi Bion Syrup', instr:'2 ml (Once daily supplement)', status:'clear'},
    {time:'1:30 PM - 2:00 PM', med:'ImmunoCare Syrup', instr:'3 ml (Once daily supplement)', status:'clear'},
    {time:'6:00 PM - 8:00 PM', med:'Cytriboost Syrup', instr:'3 ml (Extended evening dose; evening Prednisone discontinued)', status:'clear'},
  ]}, 
  {date:'May 25 (Mon)', phase:'Phase 2: Single', entries:[
    {time:'6:30 AM - 7:00 AM', med:'Cytriboost Syrup', instr:'3 ml (Give with a snack/treat)', status:'clear'},
    {time:'9:00 AM', med:'Prednisone Derpson Tablet', instr:'1 TABLET ONLY FOR THE DAY (Once Daily Phase; with a full meal)', status:'clear'},
    {time:'12:30 PM - 1:00 PM', med:'Papi Bion Syrup', instr:'2 ml (Once daily supplement)', status:'clear'},
    {time:'1:30 PM - 2:00 PM', med:'ImmunoCare Syrup', instr:'3 ml (Once daily supplement)', status:'clear'},
    {time:'6:00 PM - 8:00 PM', med:'Cytriboost Syrup', instr:'3 ml (Extended evening dose; evening Prednisone discontinued)', status:'clear'},
  ]},
  {date:'May 26 (Tue)', phase:'Phase 2: Single', entries:[
    {time:'6:30 AM - 7:00 AM', med:'Cytriboost Syrup', instr:'3 ml (Give with a snack/treat)', status:'clear'},
    {time:'9:00 AM', med:'Prednisone Derpson Tablet', instr:'1 TABLET ONLY FOR THE DAY (Once Daily Phase; with a full meal)', status:'clear'},
    {time:'12:30 PM - 1:00 PM', med:'Papi Bion Syrup', instr:'2 ml (Once daily supplement)', status:'clear'},
    {time:'1:30 PM - 2:00 PM', med:'ImmunoCare Syrup', instr:'3 ml (Once daily supplement)', status:'clear'},
    {time:'6:00 PM - 8:00 PM', med:'Cytriboost Syrup', instr:'3 ml (Extended evening dose; evening Prednisone discontinued)', status:'clear'},
  ]},
  {date:'May 27 (Wed)', phase:'Phase 2: Single', entries:[
    {time:'6:30 AM - 7:00 AM', med:'Cytriboost Syrup', instr:'3 ml (Give with a snack/treat)', status:'clear'},
    {time:'9:00 AM', med:'Prednisone Derpson Tablet', instr:'1 TABLET ONLY FOR THE DAY (Once Daily Phase; with a full meal)', status:'clear'},
    {time:'12:30 PM - 1:00 PM', med:'Papi Bion Syrup', instr:'2 ml (Once daily supplement)', status:'clear'},
    {time:'1:30 PM - 2:00 PM', med:'ImmunoCare Syrup', instr:'3 ml (Once daily supplement)', status:'clear'},
    {time:'6:00 PM - 8:00 PM', med:'Cytriboost Syrup', instr:'3 ml (Extended evening dose; evening Prednisone discontinued)', status:'clear'},
  ]},
  {date:'May 28 (Thu)', phase:'Phase 2: Single', entries:[
    {time:'6:30 AM - 7:00 AM', med:'Cytriboost Syrup', instr:'3 ml (Give with a snack/treat)', status:'clear'},
    {time:'9:00 AM', med:'Prednisone Derpson Tablet', instr:'1 TABLET ONLY FOR THE DAY (Once Daily Phase; with a full meal)', status:'clear'},
    {time:'12:30 PM - 1:00 PM', med:'Papi Bion Syrup', instr:'2 ml (Once daily supplement)', status:'clear'},
    {time:'1:30 PM - 2:00 PM', med:'ImmunoCare Syrup', instr:'3 ml (Once daily supplement)', status:'clear'},
    {time:'6:00 PM - 8:00 PM', med:'Cytriboost Syrup', instr:'3 ml (Extended evening dose; evening Prednisone discontinued)', status:'clear'},
  ]},
  {date:'May 29 (Fri)', phase:'Phase 2: Single', entries:[
    {time:'6:30 AM - 7:00 AM', med:'Cytriboost Syrup', instr:'FINAL MORNING DOSE: 3 ml (Give with a snack/treat)', status:'clear'},
    {time:'9:00 AM', med:'Prednisone Derpson Tablet', instr:'1 TABLET ONLY FOR THE DAY (Once Daily Phase; with a full meal)', status:'clear'},
    {time:'12:30 PM - 1:00 PM', med:'Papi Bion Syrup', instr:'2 ml (Once daily supplement)', status:'clear'},
    {time:'1:30 PM - 2:00 PM', med:'ImmunoCare Syrup', instr:'3 ml (Once daily supplement)', status:'clear'},
    {time:'6:00 PM - 8:00 PM', med:'Cytriboost Syrup', instr:'FINAL EVENING DOSE: 3 ml (Regimen Completed)', status:'clear'},
  ]},
  {date:'May 30 (Sat)', phase:'Phase 2: Single', entries:[
    {time:'9:00 AM', med:'Prednisone Derpson Tablet', instr:'1 TABLET ONLY FOR THE DAY (Once Daily Phase; with a full meal)', status:'clear'},
    {time:'12:30 PM - 1:00 PM', med:'Papi Bion Syrup', instr:'2 ml (Once daily supplement)', status:'clear'},
    {time:'1:30 PM - 2:00 PM', med:'ImmunoCare Syrup', instr:'3 ml (Once daily supplement)', status:'clear'},
  ]},
];
const STORAGE_KEY='binsoy_tasks_v1';
const STATE_VERSION_KEY='binsoy_state_version_v1';
const STATE_VERSION='2';
const REMINDER_HISTORY_KEY='binsoy_reminder_history_v1';
const THEME_KEY='binsoy_theme_v1';
const DEFAULT_SETTINGS={theme:'dark',reminders:false};
function loadState(){
  const raw=localStorage.getItem(STORAGE_KEY);
  if(raw){
    try{
      const parsed=JSON.parse(raw);
      if(Array.isArray(parsed)&&parsed.length===sample.length&&parsed.every((day,i)=>day.date===sample[i].date)){
        const savedVersion=localStorage.getItem(STATE_VERSION_KEY);
        if(savedVersion===STATE_VERSION){
          return parsed;
        }
        const merged=sample.map(day=>({
          date:day.date,
          phase:day.phase||'',
          entries:day.entries.map(entry=>{
            const previousDay=parsed.find(d=>d.date===day.date);
            const previousEntry=previousDay?.entries.find(e=>e.time===entry.time&&e.med===entry.med);
            return {
              time:entry.time,
              med:entry.med,
              instr:entry.instr,
              status:entry.status,
              done:previousEntry?.done||false,
              na:previousEntry?.na||entry.status==='N/A'
            };
          })
        }));
        localStorage.setItem(STORAGE_KEY,JSON.stringify(merged));
        localStorage.setItem(STATE_VERSION_KEY,STATE_VERSION);
        return merged;
      }
    }catch(e){}
  }
  const state=sample.map(day=>({date:day.date,phase:day.phase||'',entries:day.entries.map(e=>({time:e.time,med:e.med,instr:e.instr,status:e.status,done:false,na:e.status==='N/A'}))}));
  localStorage.setItem(STORAGE_KEY,JSON.stringify(state));
  localStorage.setItem(STATE_VERSION_KEY,STATE_VERSION);
  return state;
}
function loadTheme(){
  return localStorage.getItem(THEME_KEY)||DEFAULT_SETTINGS.theme;
}
let state=loadState();
let settings={theme:loadTheme(),reminders:false};
const list=document.getElementById('list');
function render(){
  list.innerHTML='';
  state.forEach(day=>{
    const card=document.createElement('div');card.className='card';
    const header=document.createElement('div');header.className='day-header';
    const left=document.createElement('div');
    left.innerHTML=`<div class="date-title">${day.date}</div>${day.phase?`<div class="phase-pill">${day.phase}</div>`:''}`;
    const right=document.createElement('div');
    const toggle=document.createElement('button');toggle.className='ghost toggle-day';
    toggle.setAttribute('aria-expanded','true');
    toggle.innerHTML='▾';
    toggle.addEventListener('click',()=>{
      const collapsed = items.style.display==='none';
      items.style.display = collapsed ? 'grid' : 'none';
      toggle.setAttribute('aria-expanded', String(!collapsed));
      if(!collapsed) toggle.classList.add('collapsed'); else toggle.classList.remove('collapsed');
    });
    right.appendChild(toggle);
    header.appendChild(left);header.appendChild(right);
    card.appendChild(header);
    const items=document.createElement('div');items.className='items';
    day.entries.forEach(entry=>{
      const item=document.createElement('div');item.className='item';
      const meta=document.createElement('div');meta.className='meta';
      meta.innerHTML=`<div class="time">${entry.time}</div><div class="med">${entry.med}</div><div class="instr">${entry.instr}</div>`;
      const status=document.createElement('div');status.className='status';
      const checkboxVis=document.createElement('span');
      checkboxVis.className='checkbox-visual '+(entry.done?'checked':'');
      checkboxVis.setAttribute('role','button');
      checkboxVis.tabIndex=0;
      checkboxVis.addEventListener('click',()=>{ entry.done = !entry.done; saveLocal(false); render(); });
      checkboxVis.addEventListener('keydown',(e)=>{ if(e.key==='Enter' || e.key===' '){ e.preventDefault(); checkboxVis.click(); }});
      const badge=document.createElement('div');badge.className='badge '+(entry.na?'badge-na':entry.done?'badge-done':'badge-pending');
      badge.textContent=entry.na?'N/A':entry.done?'Done':'Pending';
      if(!entry.na){
        badge.classList.add('clickable');
        badge.setAttribute('role','button');
        badge.tabIndex=0;
        badge.addEventListener('click',()=>{ entry.done = !entry.done; saveLocal(false); render(); });
        badge.addEventListener('keydown',(e)=>{ if(e.key==='Enter' || e.key===' '){ e.preventDefault(); badge.click(); }});
      }
      status.appendChild(checkboxVis);
      status.appendChild(badge);
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
  localStorage.setItem(THEME_KEY,theme);
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
document.getElementById('save').addEventListener('click',()=>{
  saveLocal(true);
  showAlert('Saved locally.',4000);
});
document.getElementById('reset').addEventListener('click',()=>{
  if(!confirm('Reset all progress to unchecked?')) return;
  state.forEach(day=>day.entries.forEach(entry=>{entry.done=false;}));
  saveLocal(true);render();
});
document.getElementById('expandAll').addEventListener('click',()=>document.querySelectorAll('.items').forEach(n=>n.style.display='grid'));
document.getElementById('collapseAll').addEventListener('click',()=>document.querySelectorAll('.items').forEach(n=>n.style.display='none'));
document.getElementById('toggleTheme').addEventListener('click',()=>{
  const current=document.body.dataset.theme==='dark'?'light':'dark';
  applyTheme(current);
});
applyTheme(settings.theme);
render();
setInterval(checkReminders,30000);
checkReminders();

