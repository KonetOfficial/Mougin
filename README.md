Un pack NPM pour obtenir des informations sur un anime
# Installation
```npm
npm i mougin
```
# Fonctions

Obtenir les informations d'un anime (Soyez précis lors de votre recherche, certains possède des aliases, par exemple SB69 ou SAO, si il y a plusieurs données avec les mêmes aliases, tentez une recherche plus précise avec le vrai titre, surtout si il y a plusieurs saisons)

```javascript
const mougin = require("mougin");

mougin.anime("nom").then(anime => {
  console.log(anime[0])
});
```

Obtenir la liste entière des animes sur la base de données
```javascript
const mougin = require("mougin");

mougin.list().then(animes => {
  console.log(animes)
});
```

# Les informations
|Propriétés|Description|Type| 
|---|---|---|
|`title`|Le titre normal|String|
|`title_jp`|Le titre en caractère japonais|String|
|`title_url`|Le titre mais plus utilisé pour les url (https://example.com/showbyrock)|String|
|`synopsis`|Le synopsis (la description)|String|
|`image`|L'image correspondante avec l'anime|String|
|`poster`|Le poster, optionel pour les fonds|String|
|`keywords`|Les mots clés|Array|
|`studio`|Le studio d'animation|String|
|`last`|Si l'anime est récent ou non|Boolean|
|`start`|La date de début|Number|
|`end`|La date de fin|Number|
|`genre`|Le/Les genre(s) de l'anime|Array|
|`theme`|Le/Les thème(s) de l'anime|Array|



# Les défauts
Ce pack est encore en développement et ne comporte pas toute les fonctions.
La base de donnée est encore incomplète

# Nous aidez
Pour toute suggestion de fonction, d'anime qui peuvent etre ajouté(e)s, veuillez faire une pull request sur [Github](https://github.com/KonetOffical/Mougin/pulls)
