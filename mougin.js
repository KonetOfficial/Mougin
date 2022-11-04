const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

async function anime(name) {
  return fetch(`https://konet-anime-db.normioffi.repl.co/result?search=${name}`,{
    headers: {
        Accept: 'application/json'
    }
}).then(r => {
        if (r.ok) {
            return r.json()
        } else {
            throw new Error('Erreur du serveur: ', {cause: r})
        }
    }).catch(e => {
        console.error('Une erreur est survenue', e)
    }); 
}
async function list() {
  return fetch(`https://konet-anime-db.normioffi.repl.co/all`,{
    headers: {
        Accept: 'application/json'
    }
}).then(r => {
        if (r.ok) {
            return r.json()
        } else {
            throw new Error('Erreur du serveur: ', {cause: r})
        }
    }).catch(e => {
        console.error('Une erreur est survenue', e)
    }); 
}
module.exports = {anime, list};
