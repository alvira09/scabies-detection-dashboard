import { useMutation} from "@tanstack/react-query";
import axios from "axios";

function usePredict() {
    const mutation = useMutation({
        mutationFn: (data) => {
            const formData = new FormData();
            formData.append("file", data);

            console.log(formData);
            
            return axios.post('http://143.198.196.18:5000/predict', formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
        },
        onSuccess: (res) => {
            alert(`hasil prediksi : ${res.data.message}`)
        },
        onError: () => {
            alert("ERORRR");
        }
    });

    const predict = (data) => mutation.mutateAsync(data);

    return {
        ...mutation,
        predict
    }
};

export default usePredict;