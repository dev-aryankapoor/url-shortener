import Link from 'next/link'
import DarkMode from '@/components/DarkMode'

const Navbar = () => {
  return (
    <nav className='w-full px-6 py-4 flex items-center justify-between border-b'>
        <Link href="/" className='text-xl font-semibold'>URLSH</Link>
        <div className='flex items-center gap-4'>
            <Link href="/login" className="button-success">
                Login
            </Link>
            <Link href="/signup" className="button-success">
                Signup
            </Link>
            <DarkMode />
        </div>
    </nav>
  )
}

export default Navbar