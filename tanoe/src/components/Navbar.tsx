"use client"
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LogoutIcon from '@mui/icons-material/Logout';
import { useRouter } from 'next/navigation';
import Cookies from 'universal-cookie';
import Swal from 'sweetalert2';

const Navbar = () => {
    const router = useRouter()
    const cookies = new Cookies();

    async function Login() {
        let token = cookies.get('Authorization');

        if (token) {
            return Swal.fire({
                title: 'You are already logged in',
                showConfirmButton: false,
                timer: 1500,
                icon: 'warning'
            })
        }
        router.push('/login')
    }

    async function logout() {
        let token = cookies.get("Authorization")
        if (!token) {
            return Swal.fire({
                title: 'You are not logged in yet',
                showConfirmButton: false,
                timer: 1500,
                icon: 'warning'
            })
        }
        cookies.remove("Authorization");
        router.push("/login")
    }

    async function wishlist() {
        let token = cookies.get("Authorization")
        if (!token) {
            router.push("/login")
            return Swal.fire({
                title: 'Login First',
                showConfirmButton: false,
                timer: 1500,
                icon: 'warning'
            })
        }

        router.push('/wishlist')
    }

    return (
        <div className='bg-blue-800 text-center border-b sticky top-0 z-50'>
            <div className='text-white text-xs flex justify-center items-center h-8'>
                <a>Buy More and Make Us Rich{"   "}<FavoriteIcon sx={{ fontSize: 10 }} /></a>
            </div>
            <div className="navbar bg-base-100 px-4 sm:px-8">
                <div className="navbar-start">
                    {/* Responsive Logo */}
                    <div className="font-mono">
                        <a href='/' className="btn btn-ghost text-xl">Tanoe de Attire</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    {/* Navigation Links */}
                    <div className='flex gap-4 text-xs font-light'>
                        <a href="/collections">Collections</a>
                        <p className='text-gray-400'>New Arrivals</p>
                        <p className='text-gray-400'>Best Sellers</p>
                    </div>
                </div>
                <div className="navbar-end flex gap-4 items-center">
                    {/* Shopping Bag */}
                    <button className="btn btn-ghost btn-circle" onClick={() => wishlist()}>
                        <ShoppingBagIcon />
                    </button>
                    {/* Login */}
                    <button className="btn btn-ghost btn-circle" onClick={() => Login()}>
                        <PersonIcon />
                    </button>
                    {/* Logout */}
                    <button className="btn btn-ghost btn-circle" onClick={() => logout()}>
                        <LogoutIcon />
                    </button>
                    {/* Hamburger Menu for Small Screens */}
                    <div className="lg:hidden">
                        <button className="btn btn-ghost btn-circle" onClick={() => router.push('/menu')}>
                            <span className="text-white">☰</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar