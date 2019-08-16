import CrushRepository from './repository';

class CrushController {
    constructor() {

    }

    getAll() {
        return CrushRepository.find({

        });
    }

    getByID(id) {
        return CrushRepository.findById(id);
    }

    create(crush) {
        return CrushRepository.create(crush);
    }

    update(id, crush) {
        const updateCrush = {
            nome: crush.nome,
            apelido: crush.apelido,
            whatsapp: crush.whatsapp,
            observacoes: crush.observacoes,
            foto: crush.foto,
            nota: crush.nota
          }

          return CrushRepository.findByIdAndUpdate(id, crush);
    }

    delete (id) {
        return CrushRepository.remove(id);
    }

    teste(req, res) {
        return "Hi, baby, hi!!!";
    }
}

export default new CrushController();