const searchBar = document.querySelector('#search-bar')
const searchBtn = document.querySelector('#search-btn')
const headers = `Authorization: Bearer ${accessToken}`

let searchResults = []

function searchClick (e) {
    e.preventDefault()
    const query = searchBar.value
    console.log(query)

    const searchAddress = apiURL + query
    
    searchBar.value = ''

    fetch(searchAddress)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error fetching data: ", error);
    });
}

function searchKey (e) {
    if(e.keyCode === 13) {
        searchClick()
    }
}

searchBtn.addEventListener('click', searchClick)