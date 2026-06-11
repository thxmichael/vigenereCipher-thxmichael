function start() {
    document.getElementById("encrypt").addEventListener("click", () => {
    const p = document.getElementById("p").value;
    const k = document.getElementById("k").value;
    const valuesOfP = getValuesOf(p);
    const valuesOfk = getValuesOf(k);
    const valuesOfC = encryption(valuesOfP, valuesOfk);
    const encryptedText = getStringOf(valuesOfC);
    
    document.getElementById("encryptedText").textContent = encryptedText;
    
  });

      document.getElementById("decrypt").addEventListener("click", () => {
    const c = document.getElementById("c").value;
    const k = document.getElementById("k1").value;
    const valuesOfC = getValuesOf(c);
    const valuesOfk = getValuesOf(k);
    const valuesOfP = decryption(valuesOfC, valuesOfk);
    const decryptedText = getStringOf(valuesOfP);
    
    document.getElementById("decryptedText").textContent = decryptedText;
    
  });
}

function getValuesOf(word) {
  const x = word.toUpperCase();
  let valuesX = [];
  for (let i = 0; i < word.length; i++) {
    let valueX = x.charCodeAt(i) - 65;
    valuesX.push(valueX);
  }
  return valuesX;
}

function getStringOf(values) {
  let text = String.fromCharCode(...values);
  return text;
}

function encryption(p, k) {
  let c = [];
  for (let i = 0; i < p.length; i++) {
    c[i] = ((p[i] + k[i % k.length]) % 26) + 65;
  }
  return c;
}

function decryption(c, k) {
  let p = [];
  for (let i = 0; i < c.length; i++) {
    p[i] = ((c[i] - k[i % k.length] + 26) % 26) + 65;
  }
  return p;
}

start();
