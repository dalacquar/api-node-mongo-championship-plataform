const { Game: GameModel, Game } = require("../models/Game")

const gameController = {
    create: async (req, res) => {
        try {
            const game = {
                name: req.body.name,
                image: req.body.image,
            };
            const response = await GameModel.create(game);
            res.status(201).json({ response, msg: "Game criado com sucesso" });
        } catch (error) {
            console.log(error);
        }
    },
    getAll: async (req, res) => {
        try {
            const games = await GameModel.find();
            res.json(games);
        } catch (error) {
            console.log(error);
        }
    },
    get: async (req, res) => {
        try {
            const id = req.params.id;
            const game = await GameModel.findById(id)
            if (!game) {
                res.status(404).json({ msg: "Game não encontrado" })
                return
            }
            res.json(game);
        } catch (error) {
            console.log(error);
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id;
            const game = await GameModel.findById(id)

            if (!game) {
                res.status(404).json({ msg: "Game não encontrado" })
                return
            }
            const deletedGame = await GameModel.findByIdAndDelete(id);
            res.status(200).json({ deletedGame, msg: "Game escluído com sucesso!" });
        } catch (error) {
            console.log(error);
        }
    },
    update: async (req, res) => {
        try {
            const id = req.params.id;
            const game = {
                name: req.body.name,
                image: req.body.image,
            };

            const updatedGame = await GameModel.findByIdAndUpdate(id, game)

            if (!updatedGame) {
                res.status(404).json({ msg: "Game não encontrado" })
                return
            }

            res.status(200).json({ updatedGame, msg: "Game atualizado com sucesso!" });

        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = gameController