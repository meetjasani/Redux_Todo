
export const addInformation = (form) => {
    return {
        type: "ADD_CONTACT",
        payload: form,
    }
}
export const deleteInformation = (id) => {
    return {
        type: "REMOVE_CONTACT",
        payload: id,
    }
}
export const editInformation = (editData) => {
    return {
        type: "UPDATE_CONTACT",
        payload: editData,
    }
}
// export default addInformation;