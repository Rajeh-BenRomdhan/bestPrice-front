import toast from "react-simple-toasts"

export const alertError = (message) =>{
    toast(message, { className: "toast-error"})
}
export const alertSucces = (message) => {
    toast(message, { className: "toast-succes"})
}
export const extractErrorMessage =(err) => {
    let errorMessage = err.message || "request failed"
    const errorWithData = err?.response?.data?.errorMessage
    if (typeof errorWithData === "string") {
        errorMessage = errorWithData
    }
    if (errorWithData.details && Array.isArray(errorWithData.details)) {
        errorMessage = errorWithData.details[0].message
    }
    return errorMessage
}