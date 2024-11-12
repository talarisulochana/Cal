let z = document.getElementById("result")

    function validate(value) {
      z.textContent = z.textContent === "0" ? value : z.textContent + value;
    }

    function clearResult() {
      z.textContent = '0'
      console.log(z.textContent);
    }

    function calculate() {
      z.textContent = eval(z.textContent)
      console.log(z.textContent);

    }