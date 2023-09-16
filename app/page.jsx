
import UserList from '@/component/userList'
import Link from 'next/link'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <div className='bg-red-400 px-4 py-4 w-3/4 text-center mb-2 flex justify-between'>
      <h1 >User List</h1>
      <Link href={'/userform'}>Create User</Link>
      </div>
       
     <UserList/>
    </main>
  )
}
