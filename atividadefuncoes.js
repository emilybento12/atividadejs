function solicitarItens() {
    var itens = [];
    var continuar = true;

    while (continuar) {
        var nomeItem = prompt("Digite o nome do item:");
        var precoItem = prompt("Digite o preço do item:");
        precoItem = parseFloat(precoItem);

        if (nomeItem !== "" && !isNaN(precoItem)) {
            itens.push({ nome: nomeItem, preco: precoItem });
        } else {
            alert("Nome ou preço inválido! Tente novamente.");
        }

        continuar = confirm("Adicionar mais itens?");
    }

    return itens;
}

function calcularTotal(itens) {
    var total = 0;
    for (var i = 0; i < itens.length; i++) {
        total += itens[i].preco;
    }
    return total.toFixed(2);
}

function gerarFatura(itens, total) {
    var fatura = "Fatura:\n";
    for (var i = 0; i < itens.length; i++) {
        fatura += itens[i].nome + ": R$ " + itens[i].preco.toFixed(2) + "\n";
    }
    fatura += "Total: R$ " + total;
    alert(fatura);
}

function processarPedido() {
    var itens = solicitarItens();
    if (itens.length > 0) {
        var total = calcularTotal(itens);
        gerarFatura(itens, total);
    } else {
        alert("Nenhum item foi adicionado.");
    }
}

processarPedido();
