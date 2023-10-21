const URL = "https://rickandmortyapi.com/api/character"
const axios = require('axios');

const getCharById = async (req, res) =>{
    
    try {
        const id = req.params.id;
        const {data} = await axios(`${URL}/${id}`);

        if(data.id){
            /* const character ={
                id,
                name: data?.name,
                status: data?.status,
                species: data?.species,
                origin: data?.origin,
                image: data?.image,
                gender: data?.gender
            } */

            return res.status(200).json(data);
        }
        return res.status(404).send('not found');
        
    } catch (error) {
        return res.status(500).send(error.message())
    }
}

module.exports = {
    getCharById
};