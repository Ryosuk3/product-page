$(document).ready(function() {
  $('.color-choose input').on('click', function() {
    var headphonesColor = $(this).attr('data-image');
  
    $('.left-column img').removeClass('active');
    
    $('.left-column img[data-image=' + headphonesColor + ']').addClass('active');
  });
});

function showContent(contentType) {
  var descriptionBtn = document.getElementById('descriptionBtn');
  var specsBtn = document.getElementById('specsBtn');
  
  var descriptionContent = document.getElementById('descriptionContent');
  var specificationsContent = document.getElementById('specificationsContent');
  
  if (contentType === 'description') {
    descriptionBtn.classList.add('active');
    specsBtn.classList.remove('active');
    
    descriptionContent.classList.add('visible');
    specificationsContent.classList.remove('visible');
  } else if (contentType === 'specifications') {
    descriptionBtn.classList.remove('active');
    specsBtn.classList.add('active');
    
    descriptionContent.classList.remove('visible');
    specificationsContent.classList.add('visible');
  }
}


document.addEventListener("DOMContentLoaded", function() {
  showContent('description');
});

$(document).ready(function() {
  const images = {
    copper: [
      'images/sennheiser_mtw4_copper_1.png',
      'images/sennheiser_mtw4_copper_2.png',
      'images/sennheiser_mtw4_copper_3.png',
      'images/sennheiser_mtw4_copper_4.png',
      'images/sennheiser_mtw4_copper_5.png'
    ],
    white: [
      'images/sennheiser_mtw4_white_1.jpg',
      'images/sennheiser_mtw4_white_2.jpg',
      'images/sennheiser_mtw4_white_3.jpg',
      'images/sennheiser_mtw4_white_4.jpg',
      'images/sennheiser_mtw4_white_5.jpg'
    ]
  };

  let currentColor = 'copper'; 
  let currentIndex = 0;

  
  function updateImage() {
    $('.left-column img[data-image="' + currentColor + '"]').attr('src', images[currentColor][currentIndex]);
  }

  $('.color-choose input').on('click', function() {
    currentColor = $(this).attr('data-image');
    currentIndex = 0; 
    updateImage();
  });

  $('.previous-btn').on('click', function() {
    currentIndex = (currentIndex === 0) ? images[currentColor].length - 1 : currentIndex - 1;
    updateImage();
  });

  $('.next-btn').on('click', function() {
    currentIndex = (currentIndex === images[currentColor].length - 1) ? 0 : currentIndex + 1;
    updateImage();
  });
});

