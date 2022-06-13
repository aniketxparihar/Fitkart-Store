import toast from "react-hot-toast";
export const notify = (text, type) => {
    if (type === "success") toast.success(text);
    else toast.error(text);
};
