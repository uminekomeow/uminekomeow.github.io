const slider = document.querySelector('.slider');
const output = document.querySelector('.output');

output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}