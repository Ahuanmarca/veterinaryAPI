import { Schema, model } from "mongoose";

const usersSchema = new Schema({
  name: {
    type: String,
    required: false,
  },
  surName: { // TODO: FIX THIS SHIT!
    type: String,
    required: false,
  },
  secondSurname: {
    type: String,
    required: false,
  },
  licenceNumber: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    default: "staff",
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
});

// OJO, SUPER IMPORTANTE!! ES 'Client' LO QUE MONGOOSE
// UTILIZA PARA ENCONTRAR LA COLECCIÓN 'clients' EN ATLAS
const userModel = model("User", usersSchema);
//    MODEL ........... NAME .... RULES.......
export default userModel;
