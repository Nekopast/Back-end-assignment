// //To import express
// const {response} = require ("express")
const express = require("express");
const app = express();
const Anime = require("./anime/model");
const animeRouter = require("./anime/routes")

require("dotenv").config();
require("./db/connection");

app.use(express.json())

app.use(animeRouter)

app.get("/anime", (request, response) => {
    const anime = {
        title: "No Game No Life",
        author: "Forgot",
        genre: "Isekai"
    } 
    const successResponse = {
        message: "Response sent successfully",
        anime: anime
    }
    response.send(successResponse);
})

app.post("/anime/addanime", async (request, response) => {
    console.log(request.body)
    const newAnime = await Anime.create({
        id: Math.floor(Math.random()*50),  //
        title: request.body.title,
        author: request.body.author,
        genre: request.body.genre
    })
    const successResponse = {
        message: "New anime successfully added.",
        newAnime: newAnime
    }
    response.send(successResponse)
})

app.put("/anime/updateauthor", async (request, response) => {
    const updatedAnime = await Anime.updateOne(
        { title: request.body.title },
        { $set :{ author: request.body.author }
    })
    const successResponse = {
        message: "Anime List successfully updated.",
        newAnime: updatedAnime
    }
    response.send(successResponse)
})


app.delete("/anime/deleteanime", async (request, response) => {
    const deletedanime = await Anime.deleteOne({
        title: request.body.title,
    })
    const successResponse = {
        message: `Anime called ${request.body.title} successfully deleted.`,
        newAnime: deletedanime
    }
    response.send(successResponse)
})

app.listen(5004, () => console.log("Server is listening"))