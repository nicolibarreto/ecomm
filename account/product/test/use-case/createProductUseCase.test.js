import { createProductUseCase } from "../../src/use-case/createProductUseCase.js"

const produto =
{
    nome: "bolacha",
    valor: 2,
    quantidade: 1,
    descricao: "bolacha, bolacha2, wafe",
    categoria: "alimentos",
    caracteristicas: [
        {
            nome: "bolacha",
            descricao: " alimentos",
        }
    ],
    imagens: [
        {
            url: "https://img.freepik.com/fotos-premium/bolachas-wafer-quadradas-bolachas-crocantes-com-sabor-a-creme-de-chocolate_583400-3688.jpg?w=900",
            descricao: "bolacha",
        }
    ],
}
const bolacha = await createProductUseCase(produto)
console.log(bolacha)