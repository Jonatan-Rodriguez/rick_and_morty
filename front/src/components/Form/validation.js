const validation = (userData) => {
    const errors = {};

    if(!/\S+@\S+\.\S+/.test(userData.email)){
        errors.email= 'El email ingresado no es valido';
    }
    if(!userData.email){
        errors.email= 'El email no puede estar vacio';
    }
    if(userData.email.length > 35){
        errors.email= 'El email no debe superar los 35 caracteres' 
    }
    if(!/.*\d+.*/.test(userData.password)){
        errors.password= 'La contraseña debe tener al menos un numero'
    }
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password= 'La contraseña debe tener un tamaño entre 6 y 10 caracteres'
    }

    return errors;
}

export default validation;