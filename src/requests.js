// headers --> use these at your own discretion
// const headers = {'Content-Type': 'application/json', 'Accepts': 'application/json'}
// urls
const kaijusURL = 'http://localhost:4000/kaijus/'
const sightingsURL = 'http://localhost:4000/sightings'
// parse incoming data
const parseData = response => response.json()
// error handler
const catchError = error => console.log(`%c${error}`, 'color: red;')

//////////////////////////////////////////////////////

// Fetches for kaijus, will return a promise
// GET /kaijus
export const fetchKaijus = () => fetch(kaijusURL)
.then(parseData)
.catch(catchError)

// TODO: define a few more kaiju fetches

//////////////////////////////////////////////////////

// Fetches for sightings, will return a promise
// GET /sightings
export const fetchSightings = () => fetch(sightingsURL)
.then(parseData)
.catch(catchError)

// TODO: define a few more sighting fetches
export const updateKaiju=(id, editedKaiju)=> fetch(`http://localhost:4000/kaijus/${id}`,{
        method: "PATCH",
        headers:{ 'content-type': 'application/json',
                  'accept': 'application/json'},
        body: JSON.stringify(editedKaiju)
    })
    .then(parseData)
    .catch(catchError)

export const createKaiju=newKaiju=> fetch(kaijusURL,{
        method: "POST",
        headers: {
            accept: 'application/json',
            'content-type': 'application/json'
        },
        body: JSON.stringify(newKaiju)
    })
        .then(parseData)
        .catch(catchError)

export const deleteKaiju=id=>{
    fetch(`http://localhost:4000/kaijus/${id}`,{ method: 'DELETE',})
}
   
