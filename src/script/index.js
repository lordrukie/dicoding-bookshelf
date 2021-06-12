const inputForm = document.getElementById('inputBook')

document.addEventListener('DOMContentLoaded', () => {
    inputForm.addEventListener('submit', (e) => {
        addBooks()
        e.preventDefault()
    })

    if(isStorageExist()){
        loadData()
    }
})