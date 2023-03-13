import { Schema, model } from "mongoose";

const celularEsquema = new Schema(
    {


        clave: {
            type: String,
            required: true,
        },

        marca: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        precio: {
            type: String,
            required: true,
        },
        fechaLanzamiento: {
            type: String,
            required: true,
        },
        ram: {
            type: String,
            required: true,
        },
        almacenamiento: {
            type: String,
            required: true,
        },
        cantCamaras: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
);

//Se crea el modelo de datos como quiero que se llame la collection
export default model("Celulares", celularEsquema);