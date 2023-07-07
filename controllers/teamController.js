const { Team: TeamModel, Team } = require("../models/Team")

const teamController = {
    create: async (req, res) => {
        try {
            const team = {
                name: req.body.name,
                password: req.body.password,
                game: req.body.game,
                image: req.body.image,
                owner: req.body.owner //PEGAR NO TOKEN DO USER
            };
            const response = await TeamModel.create(team);
            res.status(201).json({ response, msg: "Team criado com sucesso" });
        } catch (error) {
            console.log(error);
        }
    },
    getAll: async (req, res) => {
        try {
            const teams = await TeamModel.find().populate(["game", "players", "owner"]);
            res.json(teams);
        } catch (error) {
            console.log(error);
        }
    },
    get: async (req, res) => {
        try {
            const id = req.params.id;
            const team = await TeamModel.findById(id).populate(["game", "players", "owner"]);
            if (!team) {
                res.status(404).json({ msg: "Time não encontrado" })
                return
            }
            res.json(team);
        } catch (error) {
            console.log(error);
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id;
            const team = await TeamModel.findById(id)

            if (!team) {
                res.status(404).json({ msg: "Time não encontrado" })
                return
            }
            const deletedTeam = await TeamModel.findByIdAndDelete(id);
            res.status(200).json({ deletedTeam, msg: "Time escluído com sucesso!" });
        } catch (error) {
            console.log(error);
        }
    },
    update: async (req, res) => {
        try {
            const id = req.params.id;
            const team = {
                name: req.body.name,
                password: req.body.password,
                image: req.body.image,
            };

            const updatedTeam = await TeamModel.findByIdAndUpdate(id, team)

            if (!updatedTeam) {
                res.status(404).json({ msg: "Time não encontrado" })
                return
            }

            res.status(200).json({ updatedTeam, msg: "Time atualizado com sucesso!" });

        } catch (error) {
            console.log(error);
        }
    },
    addTagToTutorial: async (req, res) => {
        try {
            const owner = req.body.owner; //PEGAR NO TOKEN DO USER
            const user = req.body.user;
            const team = req.body.team;

            const updatedTeam = await TeamModel.findByIdAndUpdate(team._id, 
                { $push: { players: user._id } },
                { new: false, useFindAndModify: false }
              );

            if (!updatedTeam) {
                res.status(404).json({ msg: "Time não encontrado" })
                return
            }

            res.status(200).json({ updatedTeam, msg: "Usuario adicionado ao time com sucesso!" });
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = teamController;