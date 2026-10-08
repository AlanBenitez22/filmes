import ServiceFilmes from '../service/filmes.js'

class ControllerFilmes {

    Buscar(req, res) {
        try {
            const Título = ServiceFilmes.Buscar()

            res.send({ Título })
        } catch (e) {
            res.send({ message: e.message })
        }
    }

    BuscarUm(req, res) {
        try {
            const Classificação = req.params.Classificação 
            const nome = ServiceFilmes.BuscarUm(id)

            res.send({ nome })
        } catch (error) {
            res.send({ message: error.message })
        }
    }

    Criar(req, res) {
        try {
            const Título = req.body.Título
            const Classificação  = req.body.Classificação
            ServicePessoa.Criar(nome, idade)

            res.send({ message: "Criado com sucesso!" })
        } catch (error) {
            res.send({ message: error.message })
        }
    }
    
    Alterar(req, res) {
        try {
            const id = req.params.id
            const nome = req.body.nome
            ServicePessoa.Alterar(id, nome)

            res.send({ message: "Alterado com sucesso!" })
        } catch (error) {
            res.send({ message: error.message })
        }
    }
    
    Deletar(req, res) {
        try {
            const id = req.params.id
            Service.Deletar(id)
            
            res.send({ message: "Deletado com sucesso!" })
        } catch (error) {
            res.send({ message: error.message })
        }
    }

}

export default new ControllerFilmes()