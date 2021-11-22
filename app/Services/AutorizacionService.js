
const AccesoProhibidoException = use('App/Exceptions/AccesoProhibidoException');

const RecursoNoEncontradoException = use('App/Exceptions/RecursoNoEncontradoException');

class AutorizacionServices{
    verificarPermiso(rescurso, user){
        if(!rescurso){
            throw new RecursoNoEncontradoException();
        }
        if(rescurso.user_id !== user.id){
           throw new AccesoProhibidoException();
        }
    }

}

module.exports =  new AutorizacionServices();