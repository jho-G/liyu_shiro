const buttons=document.querySelectorAll('.filter-btn');
const cards=document.querySelectorAll('.menu-card');
const sections=document.querySelectorAll('.menu-section');
buttons.forEach(button=>button.addEventListener('click',()=>{
  const filter=button.dataset.filter;
  buttons.forEach(b=>b.classList.remove('active'));
  button.classList.add('active');
  cards.forEach(card=>card.classList.toggle('is-hidden',filter!=='all'&&card.dataset.category!==filter));
  sections.forEach(section=>section.classList.toggle('is-hidden',filter!=='all'&&section.dataset.section!==filter));
}));
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(!entry.isIntersecting)return;
    entry.target.animate([{opacity:0,transform:'translateY(22px)'},{opacity:1,transform:'translateY(0)'}],{duration:500,easing:'cubic-bezier(.2,.7,.2,1)',fill:'both'});
    observer.unobserve(entry.target);
  });
},{threshold:.08});
cards.forEach(card=>observer.observe(card));
