

const bord = document.querySelector('.border-color');
const body = document.body;

 $('#img').click(function(){
  if(body.classList.toggle('black-color')){
      $('#img').css('transition','all .5s');
      img.src = '/Portifolio/imagens/icones/moon.png';
      $('#img').css('transform', 'translate(0%)');
      $('.mut').css('border','2px solid #ffff');
      $('.mut').css('background-color','black');
      $('.mut').css('boxShadow', '#ffff 3px 2px 2px');
    }else{
      $('#img').css('transform','translate(142%)');
  
      img.src = '/Portifolio/imagens/icones/sun.png'; 
      $('.mut').css('border','2px solid #FF0B53');
      $('#img').css('transition','all .5s')
      $('.mut').css('boxShadow','#FF0B53 3px 2px 2px');
      $('.mut').css('background','white');
      
    }
});
const btnp = document.querySelector('#proj');
const btnk = document.querySelector('#skil');




$('#proj').click(function(){

$('.container-projetos').css('display','flex');
$('.container-skills').css('display','none');
  
  
});
$('#skil').click(function(){
$('.container-projetos').css('display','none');
$('.container-skills').css('display','flex');
});

const Onbserve = new IntersectionObserver((ob)=>{
  ob.forEach((element)=>{
    if(element.isIntersecting){
      element.target.classList.add('delone');
    }else{
      element.target.classList.remove('delone');
    }
  });
});
const del = document.querySelectorAll('.del');
del.forEach((element =>{
  Onbserve.observe(element);
}))

