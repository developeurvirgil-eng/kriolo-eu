const WELCOME = {
  CV: "Oiii, xinti komodadu sima na bu kasa, kuzé ki m podi fazi pa bô? 😊",
  PT: "Olá, seja bem-vindo(a) à Kriolo.eu. O que posso fazer por si.",
  DEFAULT: "Olá, seja bem-vindo(a) à Kriolo.eu."
};
async function initWelcome(){
  let country='DEFAULT';
  try{
    const r=await fetch('https://ipapi.co/json/');
    const d=await r.json();
    country=d.country_code;
  }catch(e){}
  let msg=WELCOME.DEFAULT;
  if(country==='CV') msg=WELCOME.CV;
  if(country==='PT') msg=WELCOME.PT;
  const box=document.querySelector('#chat-messages, #chat-dialog, .chat-container, #chat, #dialog');
  if(box){
    const div=document.createElement('div');
    div.className='bot-msg';
    div.innerText=msg;
    box.prepend(div);
  }
  const btn=document.querySelector('#translate-btn, #btn-traduzir');
  if(btn) btn.style.display='block';
}
document.addEventListener('DOMContentLoaded', initWelcome);
