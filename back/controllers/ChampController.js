import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const getAllChamps = (req, res) => {
    prisma.champ.findMany()
    .then((champs) =>{
        res.json(champs)
    })
    .catch((error) => {
        res.json(error)
    })
}
const getChamp = (req, res) => {
    let id = Number(req.params.id)

    prisma.champ.findUnique({
        where: {
            id: id
        }
    })
    .then((champ) => {
        res.json(champ)
    })
    .catch((error) =>{
        res.json(error)
    })
}
const createChamp = (req, res) => {
    let champ = req.body;
    prisma.champ.create({
        data: {
            name: champ.name,
            type: champ.type
        }
    })
    .then((champ) => {
        res.json(champ)
    })
    .catch((error) =>{
        res.json(error)
    })
}
const updateChamp = (req, res) => {
    let id = Number(req.params.id)
    let champ = req.body
    prisma.champ.update({
        where: {
            id: id
        },
        data: {
            name: champ.name,
            type: champ.type
        }
    })
    .then((champ) => {
        res.json(champ)
    })
    .catch((error) =>{
        res.json(error)
    })
}
const deleteChamp = (req, res) => {
    let id = Number(req.params.id)
    prisma.champ.delete({
        where: {
            id: id
        }
    })
    .then((champ)=>{
        res.json(champ)
    })
    .catch((error) =>{
        res.json(error)
    })
}

export { getAllChamps, getChamp, createChamp, updateChamp, deleteChamp}