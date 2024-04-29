const img = document.getElementById('img');
const mut = document.querySelector('.mut')
const bord =document.querySelector('.border-color')
const body = document.body;
img.addEventListener('click', function clicar(){
 
  if(body.classList.toggle('black-color')){
      
      img.style.transition ="all .5s";
      img.src = './imagens/icones/moon.png'
      img.style.transform = 'translate(0%)';
      mut.style.border = '2px solid #ffff';
      mut.style.background = '#0c151d';
      mut.style.boxShadow = '#ffff 3px 2px 2px'
    }else{
      img.style.transform = ' translate(142%)'
      img.src = './imagens/icones/sun.png'; 
      mut.style.border = '2px solid #FF0B53';
      img.style.transition ="all .5s";
      mut.style.boxShadow = '#FF0B53 3px 2px 2px'
      mut.style.background = 'white';
    }
});
const btnp = document.querySelector('#proj');
const btnk = document.querySelector('#skil')



btnp.addEventListener('click', function clica(){
  const proj = document.querySelector('.container-projetos');
  const skil = document.querySelector('.container-skills');
  
  skil.style.display = 'none';
  proj.style.display = 'flex';
  
});
btnk.addEventListener('click', function click(){
  const proj = document.querySelector('.container-projetos');
  const skil = document.querySelector('.container-skills');
  proj.style.display = 'none';
  skil.style.display = 'flex';

})