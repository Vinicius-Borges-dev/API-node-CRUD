import userModel from "../Models/userModel.js";

class userController {
   async createUser(req, res) {
    try {
      const data = req.body;
      const response = await new userModel().createUser(data);
      console.log(`Resultado se existe: `, response);
    } catch (error) {
      console.log(error);
    }
  }
}

export default userController;
