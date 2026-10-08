import filmesModel from '../model/filmesModel.js';

class ServiceFilmes {

    Buscar() {
        return filmesModel.Buscar();
    }

    BuscarPorId(id) {
        return filmesModel.BuscarPorId(id);
    }

    Criar(marca) {
        return filmesModel.Criar(marca);
    }

    Atualizar(id, marca) {
        return filmesModel.Atualizar(id, marca);
    }

    Deletar(id) {
        return filmesModel.Deletar(id);
    }
}

export default new ServiceFilmes();