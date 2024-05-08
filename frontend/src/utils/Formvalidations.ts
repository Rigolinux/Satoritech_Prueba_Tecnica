export const isRequired = (value: string) => {
    if (value) return true;
    return 'el campo es Requerido.';
  };


export const  isEmail = (value: string) => {
     if (!/\S+@\S+\.\S+/.test(value)) {
        return 'El campo debe ser un email';
    }
    return true;
};


export const  isPhone = (value: string) => {
    if (!/^\d{8}$/.test(value)) {
        return 'El campo debe ser un número de teléfono';
    }
    return true;
};


export const minLenght = (value: string) => {
    if (value.length < 6) {
        return 'El campo debe tener al menos 6 caracteres';
    }
    return true;
};


