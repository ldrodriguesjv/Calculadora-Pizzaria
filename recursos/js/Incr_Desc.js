function increment() {
    var input = document.getElementById('qtdInput');
    var value = parseInt(input.value, 10);
    input.value = value + 1;
  }

  function decrement() {
    var input = document.getElementById('qtdInput');
    var value = parseInt(input.value, 10);
    if (value > 1) {
      input.value = value - 1;
    }
  }