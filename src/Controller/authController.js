class authController {
    
    static emailValidateFormat(email){
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(emailRegex.test(email)) return {emailFormat: true}
    }

    static passwordStrength(password){

    }

    static passwordMatch(password, confirmPassword){

    }


    static validateData(data) {
      // Recebe username, email, senha, confirmSenha
    const { username, email, password, confirmPassword } = data;

    // Valida email
    const emailValidation = "";

    // Valida força da senha
    const passwordStrength = "";

    // Valida match entre as senhas
    const matchPassword = "";
  }
}

export default authController;
