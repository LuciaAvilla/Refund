# 💸 Refund — Controle de Despesas

![HTML](https://img.shields.io/badge/HTML-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-brightgreen?style=for-the-badge)

> Projeto desenvolvido durante o curso **Fullstack da Rocketseat**, com foco intensivo no uso de **JavaScript** para gerenciamento de interface, cálculos dinâmicos e manipulação avançada do **DOM**.

---

## ✨ Funcionalidades

- **Cadastro de Despesas:** Adição de nome, categoria e valor.
- **Formatação em Tempo Real:** Máscara de moeda que transforma centavos no padrão BRL enquanto o usuário digita.
- **Cálculo de Totais:** Soma automática de todas as despesas listadas, atualizando o total e a contagem de itens dinamicamente.
- **Remoção de Itens:** Exclusão de despesas da lista com atualização imediata dos cálculos e contadores.
- **Limpeza Inteligente:** Limpa os campos do formulário e redefine o foco automaticamente após cada inserção.

---

## 💻 Tecnologias utilizadas

- **HTML5** — Estrutura semântica do formulário e lista.
- **CSS3** — Estilização moderna e layout responsivo.
- **JavaScript (ES6+)** — Lógica de negócio, cálculos e manipulação do DOM.

---

## 🌐 Veja o projeto online
Acesse o projeto publicado no **GitHub Pages**:  
🔗 [Clique aqui para ver o Refund](https://luciaavilla.github.io/Refund/)

---

## 📂 Estrutura do projeto
```
/Refund-main
├─ index.html
├─ styles.css
├─ script.js
├─ img/
└─ README.md
```
---

## 🧠 Aprendizados em JavaScript

Neste projeto, o foco principal foi a aplicação de conceitos fundamentais e avançados de JavaScript Puro (Vanilla):

- **Manipulação do DOM:** Uso de `querySelector`, `getElementById`, `createElement` e `append` para gerenciar a interface.
- **Eventos e Delegação:** Implementação de `onsubmit`, `oninput` e `addEventListener` com delegação de eventos para remover itens criados dinamicamente.
- **Tratamento de Dados:** Uso de **Regex** para limpeza de inputs e conversão de tipos com `parseFloat` e `Number`.
- **Internacionalização (Intl):** Formatação de valores monetários utilizando o objeto `toLocaleString`.
- **Lógica de Acumulação:** Percorrimento de listas de elementos (HTMLCollection) para realizar cálculos de soma total.

---

👩‍💻 Desenvolvido com 💛 por **Lucia Avilla**, durante os estudos na [Rocketseat](https://www.rocketseat.com.br/).
