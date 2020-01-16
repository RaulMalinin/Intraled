let sliderWrap = document.querySelector('.title-wrap');

sliderWrap.addEventListener('click', function() {
  alert('sgfdgsdfgfsdg');
});


let sliderLink = document.querySelectorAll('.slider-link');

let triangleSlider = document.querySelectorAll('.triangle');

let subcatalog = document.querySelectorAll('.subcatalog');

for (let i = 0; i < sliderLink.length; i = i + 1) {
  sliderLink[i].addEventListener('mouseover', function (){
    triangleSlider[i].style.display = 'block';
    subcatalog[i].style.display = 'block';
  });
  sliderLink[i].addEventListener('mouseout', function (){
    triangleSlider[i].style.display = 'none';
    subcatalog[i].style.display = 'none';
  });
  
  triangleSlider[i].addEventListener('mouseover', function (){
    triangleSlider[i].style.display = 'block';
    subcatalog[i].style.display = 'block';
  });
  triangleSlider[i].addEventListener('mouseout', function (){
    triangleSlider[i].style.display = 'none';
    subcatalog[i].style.display = 'none';
  });

  subcatalog[i].addEventListener('mouseover', function (){
    triangleSlider[i].style.display = 'block';
    subcatalog[i].style.display = 'block';
  });
  subcatalog[i].addEventListener('mouseout', function (){
    triangleSlider[i].style.display = 'none';
    subcatalog[i].style.display = 'none';
  });
};


// надо уменьшить количество циклов. Убрать subcatalog1-link, subcatalog2-link и т.д. Упростить и сделать один цикл, чтобы охватывал все субкаталоги
let subcatalog1Link = document.querySelectorAll('.subcatalog1-link');

let triangle = document.querySelectorAll('.item-bottom-triangle');

let detailsWrap = document.querySelectorAll('.details__wrap');
  console.log(detailsWrap);

let subcatalogDouble = document.querySelectorAll('.subcatalog-double');

for (let i = 0; i < subcatalog1Link.length; i = i + 1) {
    subcatalog1Link[i].addEventListener('mouseover', function (){
      triangle[i].style.display = 'block';
      detailsWrap[i].style.display = 'block';
      subcatalogDouble[i].style.display = 'block';
  });
    subcatalog1Link[i].addEventListener('mouseout', function (){
      triangle[i].style.display = 'none';
      detailsWrap[i].style.display = 'none';
      subcatalogDouble[i].style.display = 'none';
  }); 

    /*detailsWrap[i].addEventListener('mouseover', function (){
      triangleSlider[i].style.display = 'block';
      subcatalog[i].style.display = 'block';  

      triangle[i].style.display = 'block';
      detailsWrap[i].style.display = 'block';
      subcatalogDouble[i].style.display = 'block';
  }); 
    detailsWrap[i].addEventListener('mouseout', function (){
      triangle[i].style.display = 'none';
      detailsWrap[i].style.display = 'none';
      subcatalogDouble[i].style.display = 'none';
  }); */
  
  subcatalogDouble[i].addEventListener('mouseover', function (){
      triangle[i].style.display = 'block';
      detailsWrap[i].style.display = 'block';
      subcatalogDouble[i].style.display = 'block';
  }); 
  subcatalogDouble[i].addEventListener('mouseout', function (){
      triangle[i].style.display = 'none';
      detailsWrap[i].style.display = 'none';
      subcatalogDouble[i].style.display = 'none';
  });

  triangle[i].addEventListener('mouseover', function (){
    triangle[i].style.display = 'block';
    detailsWrap[i].style.display = 'block';
    subcatalogDouble[i].style.display = 'block';
}); 
  triangle[i].addEventListener('mouseout', function (){
      triangle[i].style.display = 'none';
      detailsWrap[i].style.display = 'none';
      subcatalogDouble[i].style.display = 'none';
  });
};

let subcatalog2Link = document.querySelectorAll('.subcatalog2-link');

for (let i = 0; i < subcatalog2Link.length; i = i + 1) {
  subcatalog2Link[i].addEventListener('mouseover', function (){
    triangle[i].style.display = 'block';
    detailsWrap[i].style.display = 'block';
    subcatalogDouble[i].style.display = 'block';
});
  subcatalog2Link[i].addEventListener('mouseout', function (){
    triangle[i].style.display = 'none';
    detailsWrap[i].style.display = 'none';
    subcatalogDouble[i].style.display = 'none';
}); 

  detailsWrap[i].addEventListener('mouseover', function (){
    triangleSlider[i].style.display = 'block';
    subcatalog[i].style.display = 'block';  

    triangle[i].style.display = 'block';
    detailsWrap[i].style.display = 'block';
    subcatalogDouble[i].style.display = 'block';
}); 
  detailsWrap[i].addEventListener('mouseout', function (){
    triangle[i].style.display = 'none';
    detailsWrap[i].style.display = 'none';
    subcatalogDouble[i].style.display = 'none';
}); 

subcatalogDouble[i].addEventListener('mouseover', function (){
    triangle[i].style.display = 'block';
    detailsWrap[i].style.display = 'block';
    subcatalogDouble[i].style.display = 'block';
}); 
subcatalogDouble[i].addEventListener('mouseout', function (){
    triangle[i].style.display = 'none';
    detailsWrap[i].style.display = 'none';
    subcatalogDouble[i].style.display = 'none';
});

triangle[i].addEventListener('mouseover', function (){
  triangle[i].style.display = 'block';
  detailsWrap[i].style.display = 'block';
  subcatalogDouble[i].style.display = 'block';
}); 
triangle[i].addEventListener('mouseout', function (){
    triangle[i].style.display = 'none';
    detailsWrap[i].style.display = 'none';
    subcatalogDouble[i].style.display = 'none';
});
}


/*
let subcatalog2Link = document.querySelectorAll('.subcatalog2-link');

let triangle2 = document.querySelectorAll('.item-bottom-triangle');

let detailsWrap2 = document.querySelectorAll('.details__wrap');

let subcatalogDouble2 = document.querySelectorAll('.subcatalog-double');

for (let i = 0; i < subcatalog2Link.length; i = i + 1) {
    subcatalog2Link[i].addEventListener('mouseover', function (){
      triangle2[i].style.display = 'block';
      detailsWrap2[i].style.display = 'block';
      subcatalogDouble2[i].style.display = 'block';
  });
    subcatalog2Link[i].addEventListener('mouseout', function (){
      triangle2[i].style.display = 'none';
      detailsWrap2[i].style.display = 'none';
      subcatalogDouble2[i].style.display = 'none';
  }); 

    detailsWrap2[i].addEventListener('mouseover', function (){
      triangleSlider[i].style.display = 'block';
      subcatalog[i].style.display = 'block';  

      triangle2[i].style.display = 'block';
      detailsWrap2[i].style.display = 'block';
      subcatalogDouble2[i].style.display = 'block';
  }); 
    detailsWrap2[i].addEventListener('mouseout', function (){
      triangle2[i].style.display = 'none';
      detailsWrap2[i].style.display = 'none';
      subcatalogDouble2[i].style.display = 'none';
  });
  
  subcatalogDouble2[i].addEventListener('mouseover', function (){
      triangle2[i].style.display = 'block';
      detailsWrap2[i].style.display = 'block';
      subcatalogDouble2[i].style.display = 'block';
  }); 
  subcatalogDouble2[i].addEventListener('mouseout', function (){
      triangle2[i].style.display = 'none';
      detailsWrap2[i].style.display = 'none';
      subcatalogDouble2[i].style.display = 'none';
  });

  triangle2[i].addEventListener('mouseover', function (){
    triangle2[i].style.display = 'block';
    detailsWrap2[i].style.display = 'block';
    subcatalogDouble2[i].style.display = 'block';
}); 
  triangle2[i].addEventListener('mouseout', function (){
      triangle2[i].style.display = 'none';
      detailsWrap2[i].style.display = 'none';
      subcatalogDouble2[i].style.display = 'none';
  });
}
*/

/*let sliderLink1 = document.querySelector('.slider-link1');
sliderLink1.style.color ='#c00d6143';*/




if (sliderWrap.click) {
  console.log('click')
}

if (sliderLink1.click) {
  console.log('click')
  sliderLink1.style.color ='red';
}

