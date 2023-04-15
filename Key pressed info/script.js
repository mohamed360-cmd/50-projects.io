window.addEventListener('keypress', (event) => {
    let displayValue = document.getElementById('display-value');
    let displayKey = document.getElementById('display-key');
    let key = event.key;
    let keycode = event.which;
    if (key)
    displayKey.textContent = `Key :(${key})`;
    displayValue.textContent = ` ${keycode}`;
  });
  