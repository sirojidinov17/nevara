import React, { useEffect, useState } from 'react'
function Hook(url, method) {
    const [data, setData] = useState([])
    const [post, setPost] = useState(null)
    const [del, setDel] = useState(null)
    const [put, setPut] = useState(null)
    const [patch, setPatch] = useState(null)
    const [isPending, setIsPending] = useState(false)

    function postData(postData) {
        setPost({
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                postData
            )
        })
    }

    function delData(delData) {
        setDel(
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    delData
                )
            }
        )
    }
    function putData(putData) {
        setPut(
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    putData
                )
            }
        )
    }
    function patchData(patchData) {
        setPatch(
            {
                method: 'PATCH',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(
                    patchData
                )
            }
        )
    }
    useEffect(() => {
        const FETCHF = async (option) => {
            try {
                setIsPending(true)
                const data = await fetch(url, option)
                const inf = await data.json()
                if (data.statusText == "OK") {
                }
                setIsPending(false)
                setData(inf)
            }
            catch (error) {
                setIsPending(true)
                console.log(error);
            }
        }
        if (method === "GET") {
            FETCHF()
        }
        else if (method === "POST" && post) {
            FETCHF(post)
        }
        else if (method === "DELETE" && del) {
            FETCHF(del)
        }
        else if (method === "PUT" && put) {
            FETCHF(put)
        }
        else if (method === "PATCH" && patch) {
            FETCHF(patch)
        }
    }, [url, post, put, del, patch])
    return { data, isPending, postData, delData, putData, patchData }
}

export default Hook
