import './style.css'

const COLOR_PALETTE = {
  '#F7B267': 'Mellow Apricot',
  '#F79D65': 'Atomic Tangerine',
  '#F4845F': 'Coral',
  '#F27059': 'BitterSweet',
  '#F25C54': 'Orange Red Crayola'
};

// const colorOptions = Object.keys(COLOR_PALETTE).map((color) => {
//   const option = document.createElement('option');
//   option.value = color;
//   option.innerText = COLOR_PALETTE[color];
// })

// const colorPickerSelect = document.querySelector('#color-picker');
// colorPickerSelect.append(...colorOptions);

//Otra forma de hacerlo, sería:

const addOptionsToColorPicker = () => {
  const colorPickerSelect = document.querySelector('#color-picker');

  Object.keys(COLOR_PALETTE).forEach((color) => {
    const option = document.createElement('option');
    option.value = color;
    option.innerText = COLOR_PALETTE[color];

    colorPickerSelect.append(option);
})
};

const addEvenListenerToColorPicker = () => {
  const colorPickerSelect = document.querySelector('#color-picker');
  const colorName = document.querySelector('#color-name');
  const inputColor = document.querySelector('#input-color');

  colorPickerSelect.addEventListener('change', (event) => {
    const newColor = event.target.value;

    document.body.style.backgroundColor = newColor;
    const colorNameText = `${COLOR_PALETTE[newColor]} | ${newColor}`;
    colorName.innerText = COLOR_PALETTE[newColor] ? colorNameText : '-';
  })

  inputColor.addEventListener('change', (event) => {
    
    const newColor = event.target.value;
    document.body.style.backgroundColor = newColor;
    colorName.innerText = newColor;
  })
}

addOptionsToColorPicker();
addEvenListenerToColorPicker();



