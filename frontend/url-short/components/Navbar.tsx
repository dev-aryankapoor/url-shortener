import Link from 'next/link'
import DarkMode from '@/components/DarkMode'

const Navbar = () => {
  const links = [
    {href: '/founders', label: 'Founders'},
    {href: '/guide', label: 'Guide'},
    {href: '/pricing', label: 'Pricing'}
  ]
  return (
    <nav className='w-full px-2 py-4 flex items-center justify-between'>
        <Link href="/" className='text-xl font-bold'>URLSH</Link>
        <div className='flex items-center gap-8 text-sm'>
            {links.map((link) => <Link className="hover:text-[#404040] transition-colors ease-out duration-300 font-semibold" key={link.label} href={link.href}>{link.label}</Link>)}
            <Link href="/login" className="button-success font-semibold">Login</Link>
            <DarkMode />
        </div>
    </nav>
  )
}

export default Navbar