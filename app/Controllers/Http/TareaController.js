'use strict'
const Proyecto = use('App/Models/Proyecto')
const Tareas = use('App/Models/Tarea')
const AutorizacionServices = use('App/Services/AutorizacionService')

class TareaController {
    async index({auth,request,params}){
        //return params;
        const user = await auth.getUser();
        const {id} = params;
        const proyecto = await Proyecto.find(id);
        
        AutorizacionServices.verificarPermiso(proyecto,user);
        return await proyecto.tareas().fetch();
    }
    async store({auth,request,params}){
        
        const user = await auth.getUser();
        const {description} = request.all();
        const {id} = params;
        const proyecto = await Proyecto.find(id);
        AutorizacionServices.verificarPermiso(proyecto,user);

        const tarea = new Tareas();
        tarea.fill({
            description
        })
        await proyecto.tareas().save(tarea);
        return tarea;
        
    }
    async destroy ({auth, params}){
        const user = await auth.getUser();
        const {id} = params;
        const tarea = await Tareas.find(id);
        const proyecto = await tarea.proyecto().fetch();
        AutorizacionServices.verificarPermiso(proyecto,user);
        await tarea.delete();
        return tarea;
    }
    async update({auth,request, params}) {
        const user = await auth.getUser();
        const {id} = params;
        const tarea = await Tareas.find(id);
        const proyecto = await tarea.proyecto().fetch();
        AutorizacionServices.verificarPermiso(proyecto,user);
        tarea.merge(request.only('description'));
        await tarea.save();
        return tarea;
    }
}

module.exports = TareaController
