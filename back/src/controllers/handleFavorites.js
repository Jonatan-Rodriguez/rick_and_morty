let myFavorites = [];

const getFav = (req, res) => {
    return res.status(200).json(myFavorites);
}

const postFav = (req, res) =>{
    const character = req.body;
    const characterRepeat = myFavorites.find((favorite) => favorite.id === character.id);

    if(!characterRepeat) myFavorites.push(character);
    

    return res.status(200).json(myFavorites);
}

const deleteFav = (req, res) =>{
    const {id} = req.params;

    myFavorites = myFavorites.filter((favorite)=>{
        return favorite.id != id;
    });
    
    return res.status(200).json(myFavorites);
}

module.exports = {
    postFav,
    deleteFav,
    getFav
}