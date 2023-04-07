const form = document.querySelector('form');
const photo = document.querySelector('#photo');
const result = document.querySelector('#result');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const file = photo.files[0];
  // TODO: Add face aging logic here
  result.innerHTML = '<img src="path/to/result.jpg">';
});
