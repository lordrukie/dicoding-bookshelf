function searching() {
    var input, filter
    input = document.getElementById('search');
    filter = input.value

    const unreadedBookContainer = document.getElementsByClassName("list-item")[0].getElementsByClassName('bookContainer');
    const readedBookContainer = document.getElementsByClassName("list-item")[1].getElementsByClassName('bookContainer');

    showSearch(unreadedBookContainer, filter)
    showSearch(readedBookContainer, filter)
  }

function showSearch(container, filter) {
    for (i = 0; i < container.length; i++) {
        const txtValue = container[i].textContent || container[i].innerText;
          if (txtValue.indexOf(filter) > -1) {
              container[i].style.display = "";
            } else {
              container[i].style.display = "none";
            }
      }
}