'use client'
import React from 'react'
import DeleteIcon from "@mui/icons-material/Delete";
import { useRouter } from 'next/navigation';
const RemoveBtn = ({id}) => {
    const router = useRouter()
    const deleteuser = async () =>{
        try {
            const res = await fetch(`https://nextjs-form-qr9ww5oki-jhoncarter7.vercel.app/api/list?id=${id}`, {
                method: "DELETE"
            })
            if(res.ok){
        router.refresh()
            }
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <button className="px-4" onClick={deleteuser}>
        <DeleteIcon size={24}/>
    </button>
  )
}

export default RemoveBtn