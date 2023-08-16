const searchBar = document.querySelector('#search-bar')
const searchBtn = document.querySelector('#search-btn')

let searchResults = []

function searchClick (e) {
    e.preventDefault()
    const query = searchBar.value
    console.log(query)
    
    searchBar.value = ''

    fetch(`https://api.petfinder.com/v2/` + query, {
        method: 'GET',
        headers: {
            "Authorization" : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJBTnVkMnlRM3N3dlJSdWpSMDBURElvMjdnbWZzeVlQZXRmQk50eHZ3TGNKbnF5MW5tZSIsImp0aSI6IjM5MTcxZjE4ZjhmNTQ5YzFjNmE2NmJlNTQ1YWUxNDI2NzE2N2Q0NjBiMTAxYzA1NTBmM2YwNTVjMjA2ODc5MDU0MjhlNGU0ZmRhYTBmMTA0IiwiaWF0IjoxNjkyMTIzODc4LCJuYmYiOjE2OTIxMjM4NzgsImV4cCI6MTY5MjEyNzQ3OCwic3ViIjoiIiwic2NvcGVzIjpbXX0.PmUgXbC_-xrEKFPP2QmuwtF8_ql0mxEypNpQ1VlLEaC6BBKoDhsQZSKbcF1thCqVJVsDWCLJs6yAOnpByc83fvr8mR2WodNMQX4TipC_2iE2Ldq6Cej7G7Hk6YmfN82HZmjTiqK4wq6BFXaxyGiM6BmwibkSP2rmITnJaDf1fOfNsl3tGRCr2199xbnSwftXdBfy2WpDBZf4xCwIQJiow-oDMz8oEms61uEr3jVAzwrGuG1GqSPaxe8SRW8TqgD8HFYk0u3pQ-Ur6aWmu3hBOxe23XVHjFDFBkI2VomvpRm8_-1b1M6QxznRs06QDiQekPzkYGL-Xi8ScpjRfd8CdA"
        }
    })
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