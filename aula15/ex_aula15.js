const numero = Number(prompt('Digite um numero:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML += `<p> Seu numero + 2 é = <strong>${numero + 2}</strong>.`;
texto.innerHTML += `<p>Raiz quadrada é <strong>${numero ** 0.5}</strong></p>`;
texto.innerHTML += `<p> <strong>${numero}</strong> é inteiro <strong>${Number.isInteger(numero)}</strong></p>`;
texto.innerHTML += `<p>NaN: <strong>${Number.isNaN(numero)}</strong>.</p>`;
texto.innerHTML += `<p>Arredondado para baixo <strong>${Math.floor(numero)}</strong>.`;
texto.innerHTML += `<p>Arredondado para cima <strong>${Math.ceil(numero)}</strong>.`;
texto.innerHTML += `<p>Com duas casas decimais <strong>${numero.toFixed(2)}</strong>.`;
