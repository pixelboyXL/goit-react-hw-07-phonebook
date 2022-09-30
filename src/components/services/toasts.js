import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const toastSettings = {
    theme: "colored",
};

export const toastSuccessAdd = () => {
    return toast.success("Hooray! A new contact has been created 🤗", toastSettings);
};
export const toastSuccessDelete = () => {
    return toast.success("Okay, contact has been deleted 👌", toastSettings);
};
export const toastWarn = name => {
    return toast.warn(`Sorry, ${name} is already in contacts, try adding someone else 🙈`, toastSettings);
};
export const toastError = () => {
    return toast.error("Oops, something went wrong, please try again 🙊", toastSettings);
};