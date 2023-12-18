//conexão mongoDB
import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/test");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", () => {
  //abrindo a conexão
  console.log("Conectados ao MongoDB");
});

//criando Schema
const pessoaSchema = new mongoose.Schema({
  nome: String,
  idade: Number,
  profissao: String,
});

// criando model
const Pessoa = mongoose.model("Pessoa", pessoaSchema);

const douglas = new Pessoa({
  nome: "Douglas",
  idade: 30,
  profissao: "Programador",
});
