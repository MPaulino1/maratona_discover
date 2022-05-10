const Modal = {
    open(){
        //open modal
        //Add a class active ao modal
        document
            .querySelector('.modal-overlay')
            .classList
            .add('active')
    },
    close(){
        //close modal
        //remove class active modal
        document
            .querySelector('.modal-overlay')
            .classList
            .remove('active')
    }
}

const transactions = [
    {
        id: 1,
        description: 'Energia',
        amount: -50000,
        date: '12/04/2022',
    },
    {
        id: 2,
        description: 'Criação de Website',
        amount: 30000,
        date: '23/04/2022',
    },
    {
        id: 3,
        description: 'Internet',
        amount: -1000,
        date: '10/04/2022',
    },
]

const Transaction = {
    incomes() {

    },
    expenses() {

    },
    total() {

    }
}

const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),

    addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)

        DOM.transactionsContainer.appendChild(tr)
    },
    innerHTMLTransaction(transaction) {
        const html = `
        
        <td class="description">${transaction.description}</td>
        <td class="expense">${transaction.amount}</td>
        <td class="date">${transaction.date}</td>
        <td>
        <img src="./assets/minus.svg" alt="Remover Transação">
        </td>
        `
        return html
    }
}

DOM.addTransaction(transactions[0])
DOM.addTransaction(transactions[1])