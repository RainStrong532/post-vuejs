import { DOMAIN } from "../../constants"

export const getData = () => {
    return new Promise((resolve, reject) => {
        const url = DOMAIN+'posts';
        fetch(
            url,
            {
                method: 'GET'
            }
        )
        .then((res) => res.json())
        .then(res=>resolve(res))
        .catch(err=>reject(err))
    })
}

export const createData = (data) => {
    return new Promise((resolve, reject) => {
        const url = DOMAIN+'posts';
        fetch(
            url,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }
        )
        .then((res) => res.json())
        .then(res=>resolve(res))
        .catch(err=>reject(err))
    })
}


export const updateData = (data) => {
    return new Promise((resolve, reject) => {
        const url = DOMAIN+'posts/' +data.id;
        fetch(
            url,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }
        )
        .then((res) => res.json())
        .then(res=>resolve(res))
        .catch(err=>reject(err))
    })
}

export const deleteData = (id) => {
    return new Promise((resolve, reject) => {
        const url = DOMAIN+'posts/' +id;
        fetch(
            url,
            {
                method: 'DELETE'
            }
        )
        .then((res) => res.json())
        .then(res=>resolve(res))
        .catch(err=>reject(err))
    })
}