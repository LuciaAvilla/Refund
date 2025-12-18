// Seleciona os elementos do form
const amount = document.getElementById("amount")

// Captura o evento de input para formatar o valor.
amount.oninput = () => {

    // Obtém o valor atual do input e remove os caracteres não numéricos.
    let value = amount.value.replace(/\D/g, "")

    // 2. Transforma em centavos 
    value = Number(value) / 100

    // Atualiza o valor do input
    amount.value = formatCurrencyBRL(value)

}

function formatCurrencyBRL(value) {
    return value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}