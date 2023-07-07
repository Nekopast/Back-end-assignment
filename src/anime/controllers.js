const Anime = require("./model")

const getAllAnime = async (req, res) => {
    try {
        const anime = await Anime.find({});
    const successResponse = {
        message: "Response sent successfully",
        anime: anime
    };
    res.status(200).json(successResponse);
    } catch (error) {
        console.log(error);
    }
};

const addAnime = async (req, res) => {
    try {
    const newAnime = await Anime.create({
        id: Math.floor(Math.random()*50),  
        title: request.body.title,
        author: request.body.author,
        genre: request.body.genre
    })
    const successResponse = {
        message: "New anime successfully added.",
        newAnime: newAnime
    }
    res.send(successResponse);
    } catch (error) {
        console.log(error);
    } 
};


const updateAnime = async (req, res) => {
    try {
        const updatedAnime = await Anime.updateOne(
            { name: req.body.name },
            { $set :{ author: req.body.author }
        })
        const successResponse = {
            message: "${req.body.name} successfully updated.",
            newAnime: updatedAnime
        }
        res.send(successResponse);
    } catch (error) {
        console.log(error);
    } 
};

const deleteAnime = async (req, res) => {
    try {
        const deletedAnime = await Anime.deleteOne({
            name: req.body.name,
        })
        const successResponse = {
            message: `${req.body.name} successfully deleted.`,
            newAnime: deletedAnime
        }
        res.send(successResponse);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getAllAnime,
    addAnime,
    updateAnime,
    deleteAnime
};