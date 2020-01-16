import { Request, Response } from 'express';
import Pregunta,{IPregunta} from '../models/pregunta.model';
import jwt from 'jsonwebtoken';

export async function buscarPreguntas(req:Request,res:Response){
    const preguntas = await Pregunta.find();
    return res.json(preguntas);
}
export async function busquedaEspecifica(req:Request,res:Response){
    let preguntas:string[]=[];
    req.body.calificacion.forEach((element: string)=> {
        preguntas.push(element);
    });
    const result= await Pregunta.find({calificacion:{$in:preguntas}});
    return res.json(result);
}

