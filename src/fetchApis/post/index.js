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