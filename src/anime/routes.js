const { Router } = require("express")

const animeRouter = Router()

const Anime = require("./model")

const {getAllAnime, addAnime, updateAnime, deleteAnime} = require("./controllers")



animeRouter.get("/anime/getallanime", getAllAnime)
animeRouter.post("/anime/addanime", addAnime);
animeRouter.put("/anime/updateanime", updateAnime);
animeRouter.delete("/anime/deleteanime", deleteAnime);

module.exports = animeRouter