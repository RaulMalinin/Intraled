 function showSubcatalog1() {
    document.querySelector('.subcatalog1__wrap').style.display = 'block';
};

function hiddenSubcatalog1() {
  document.querySelector('.subcatalog1__wrap').style.display = 'none';
};

let sliderLink = document.querySelectorAll('.slider-link');
//let sliderLinkItems = Array.from(sliderLink);

let triangleSlider = document.querySelectorAll('.triangle');
//let triangleSliderItems = Array.from(triangleSlider);

for (let i = 0; i < sliderLink.length; i = i + 1) {
  sliderLink[i].addEventListener('mouseover', function (){
    triangleSlider[i].style.display = 'block';
});
  sliderLink[i].addEventListener('mouseout', function (){
    triangleSlider[i].style.display = 'none';
});     
};

function showDetails3() {
  document.querySelector('.subcatalog1__wrap').style.display = 'block';
  document.querySelector('.details__wrap').style.display = 'block';
  document.querySelector('.subcatalog-double').style.display = 'block';  
};

function hiddenDetails3() {
  document.querySelector('.subcatalog1__wrap').style.display = 'none';
  document.querySelector('.details__wrap').style.display = 'none';
  document.querySelector('.subcatalog-double').style.display = 'none';
};

let subcatalog1Link = document.querySelectorAll('.subcatalog1-link');

let triangle = document.querySelectorAll('.item-bottom-triangle');

let detailsWrap = document.querySelectorAll('.details__wrap');

for (let i = 0; i < subcatalog1Link.length; i = i + 1) {
    subcatalog1Link[i].addEventListener('mouseover', function (){
      triangle[i].style.display = 'block';
      detailsWrap[i].style.display = 'block';
  });
    subcatalog1Link[i].addEventListener('mouseout', function (){
      triangle[i].style.display = 'none';
  }); 
    detailsWrap[i].addEventListener('mouseout', function (){
      triangle[i].style.display = 'block';
  }); 
};



