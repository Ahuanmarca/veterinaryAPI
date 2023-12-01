import { Schema, model } from 'mongoose';

const clientsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  secondSurname: {
    type: String,
    required: false,
  },
  document: {
    type: {
      type: String,
      required: true,
      default: 'dni',
      enum: ['dni', 'nie', 'passport'],
    },
    number: {
      type: String,
      required: true,
    },
  },
  phone: {
    code: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
  },
  mail: {
    type: String,
    required: false,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
  },
  address: {
    type: { type: String, required: true, enum: ['street', 'avenue', 'road'] },
    name: { type: String, required: true },
    number: { type: String, required: true },
    level: { type: String, required: false },
    door: { type: String, required: false },
    cp: { type: String, required: true },
    city: { type: String, required: true },
    province: { type: String, required: false },
    country: { type: String, required: true },
  },
});

// OJO, SUPER IMPORTANTE!! ES 'Client' LO QUE MONGOOSE
// UTILIZA PARA ENCONTRAR LA COLECCIÓN 'clients' EN ATLAS
const clientModel = model('Client', clientsSchema);
export default clientModel;
