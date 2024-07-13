import axios from 'axios';

export const registerUser = async (formData: any, setIsSuccess: any, setErrors: any, router: any, errors: any, setIsLoading: any) => {
  try {
    const response = await axios.post('https://pm4-ecommerce-ficticio-frontend.onrender.com/users/register', formData);
    setIsSuccess(true);
    setErrors({});
    setTimeout(() => {
      alert("redirigiendo a login")
      router.push("/login")
    }, 3000)
  } catch (error: any) {
    setErrors({ ...errors, submit: `Error al registrar al usuario: ${error.response.data.message}` });
  } finally {
    setIsLoading(false);
  }
};

export default registerUser;