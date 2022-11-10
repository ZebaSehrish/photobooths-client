import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notify = () => toast.success('Update Recorded Successfully', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",

})
export const deleteNotify = () => toast.success('Review Deleted Successfully', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",

})