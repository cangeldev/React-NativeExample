import React, { useEffect, useState } from 'react'

export default function useCustomHooks() {
    const [message, setMessage] = useState()
    function change() {
        setMessage("Deneme Metin")
        console.log("CustomHooks useEffect Çalıştı. ")
    }
    useEffect(() => {
        change()
    }, [])

    return { message }
}