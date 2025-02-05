import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "./models/User.js";


dotenv.config();

const app = express();

// Config JSON middleware
app.use(express.json());

// Open Route - Public
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Bem vindo a nossa API de autenticação!"
    });
});
//Private Route
app.get("/user/:id", async (req, res) => {
    const id = req.params.id;

    //check if user exists
    const user = await User.findById(id, "-password");

    if (!user) {
        return res.status(422).json({
            message: "Usuário nao encontrado!"
        });
    }

    res.status(200).json({
        message: "Usuário encontrado!",
        user: user
    })

})

// Register User
app.post("/auth/register", async (req, res) => {
    const { name, email, password, confirmPassword } = req.body;

    // Validations
    if (!name || !email || !password || !confirmPassword) {
        return res.status(422).json({
            message: "Todos os campos são obrigatórios!"
        });
    }

    if (password !== confirmPassword) {
        return res.status(422).json({
            message: "Senhas não conferem!"
        });
    }

    // Check if user exists
    const userExists = await User.findOne({ email: email });

    if (userExists) {
        return res.status(422).json({
            message: "Por favor, utilize outro e-mail!"
        });
    }

    // Create password hash
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    // Create user
    const user = new User({
        name,
        email,
        password: passwordHash,
    });

    try {
        await user.save();
        res.status(201).json({ message: "Usuário criado com sucesso!" });
    } catch (err) {
        res.status(500).json({ message: "Erro ao criar usuário!" });
    }
});

//Login User
app.post("/auth/login", async (req, res) => {
    const { email, password } = req.body; 

    //validations
    if (!email || !password) {
        return res.status(422).json({
            message: "Todos os campos são obrigatórios!"
        });
    }

    //Check if user exists
    const user = await User.findOne({ email: email });
    
    if (!user) {
        return res.status(422).json({
            message: "Usuario não encontrado! Por favor, utilize outro e-mail!"
        });
    }

    //Check if password is correct
    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
        return res.status(422).json({
            message: "Senha inválida!"
        });
    }

    try {
        const secret = process.env.JWT_SECRET;
        const token = jwt.sign(
            {
                id: user._id,
            },
            secret
        );

        res.status(200).json({
            message: "Usuário logado com sucesso!",
            token: token,
        });
    } catch (err) {
        res.status(500).json({
            message: "Erro ao logar usuário!",
        });
    }   
}); 

// Credentials
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL)
    .then(() => {
        console.log("Conectado ao banco de dados!");
    })
    .catch((err) => {
        console.log(err);
    });

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});