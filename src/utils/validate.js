export const validateData = (email , password) =>{
   
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    // const isNameValid = /^[a-zA-Zà-žÀ-Ž'’-]+(?: [a-zA-Zà-žÀ-Ž'’-]+)*$/.test(name);
    // const isPhoneValid = /^\+?(\d{1,3})?[-.\s]?(\(?\d{1,4}\)?)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(phone)
   
    if(!isEmailValid) return "Email is Invalid"
    if(!isPasswordValid) return "Password is Invalid"
    // if(!isNameValid) return "Name is Invalid"
    // if(!isPhoneValid) return "Phone is Invalid"

    return null;
    
}