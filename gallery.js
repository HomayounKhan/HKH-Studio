const carouselIndicators = document.querySelector('.carousel-indicators');
const carouselInner = document.querySelector('.carousel-inner');

// Replace 'path/to/imageX.jpg' with the actual paths to your images
const images = [
  'album/HKH1.JPG',
  'album/HKH2.JPG',
  'album/HKH3.JPG',
  'album/HKH4.JPG',
  'album/HKH5.JPG',
  'album/HKH6.JPG',
  'album/HKH7.JPG',
  'album/HKH8.JPG',
  'album/HKH9.JPG',
  'album/HKH10.JPG',
  'album/HKH11.JPG',
  'album/HKH12.JPG',
  'album/HKH13.JPG',

];

images.forEach((image, index) => {
  // Create carousel indicators
  const indicator = document.createElement('li');
  indicator.setAttribute('data-bs-target', '#carouselExampleIndicators');
  indicator.setAttribute('data-bs-slide-to', index);
  if (index === 0) indicator.classList.add('active');
  carouselIndicators.appendChild(indicator);

  // Create carousel items
  const carouselItem = document.createElement('div');
  carouselItem.classList.add('carousel-item');
  if (index === 0) carouselItem.classList.add('active');

  const img = document.createElement('img');
  img.src = image;
  img.classList.add('d-block', 'w-100');
  img.alt = `Slide ${index + 1}`;

  carouselItem.appendChild(img);
  carouselInner.appendChild(carouselItem);
});