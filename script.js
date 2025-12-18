// Seleciona os elementos do form
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const expense = document.getElementById("expense")
const category = document.getElementById("category")

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
    // Formata o valor para o padrão brasileiro
    return value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}

// Captura o evento de submit do form para obter os valores
form.onsubmit = (event) => {
    // Previne o comportamento padrão de fazer o reload da página
    event.preventDefault()
    // cria um objeto com os detalhes da nova despesa
    const newExpense = {
        id: new Date().getTime(),
        expense: expense.value,
        category_id: category.value,
        category_name: category.options[category.selectedIndex].text,
        amount: amount.value,
        created_at: new Date(),
    }
}