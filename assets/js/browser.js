const searchBar = document.querySelector('#search-bar')
const searchBtn = document.querySelector('#search-btn')

let searchResults = []

function searchClick (e) {
    e.preventDefault()
    const query = searchBar.value
    console.log(query)
    
    searchBar.value = ''

    fetch(apiURL + query, header)
    .then((res) => res.json())
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.error(err)
    })
        
}

function searchKey (e) {
    if(e.keyCode === 13) {
        searchClick()
    }
}

searchBtn.addEventListener('click', searchClick)