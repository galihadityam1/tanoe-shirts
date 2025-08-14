"use client"
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LogoutIcon from '@mui/icons-material/Logout';
import { useRouter } from 'next/navigation';
import Cookies from 'universal-cookie';
import Swal from 'sweetalert2';
import { useState } from 'react';

const Navbar = () => {
    const router = useRouter();
    const cookies = new Cookies();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    async function Login() {
        let token = cookies.get('Authorization');

        if (token) {
            return Swal.fire({
                title: 'You are already logged in',
                showConfirmButton: false,
                timer: 1500,
                icon: 'warning'
            });
        }
        router.push('/login');
    }

    async function logout() {
        let token = cookies.get("Authorization");
        if (!token) {
            return Swal.fire({
                title: 'You are not logged in yet',
                showConfirmButton: false,
                timer: 1500,
                icon: 'warning'
            });
        }
        cookies.remove("Authorization");
        router.push("/login");
    }

    async function wishlist() {
        let token = cookies.get("Authorization");
        if (!token) {
            router.push("/login");
            return Swal.fire({
                title: 'Login First',
                showConfirmButton: false,
                timer: 1500,
                icon: 'warning'
            });
        }

        router.push('/wishlist');
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="bg-blue-800 text-center border-b sticky top-0 z-50">
            <div className="text-white text-xs flex justify-center items-center h-8">
                <a>Buy More and Make Us Rich{"   "}<FavoriteIcon sx={{ fontSize: 10 }} /></a>
            </div>
            <div className="navbar bg-base-100 px-4 sm:px-8">
                <div className="navbar-start">
                    {/* Responsive Logo */}
                    <div className="font-mono">
                        <a href='/' className="btn btn-ghost text-xl">Tanoe de Attire</a>
                    </div>
                </div>
                <div className="navbar-center hidden md:flex lg:flex">
                    {/* Navigation Links */}
                    <div className='flex gap-4 text-xs font-light'>
                        <a href="/collections">Collections</a>
                        <p className='text-gray-400'>New Arrivals</p>
                        <p className='text-gray-400'>Best Sellers</p>
                    </div>
                </div>
                <div className="navbar-end flex gap-4 items-center">
                    {/* Shopping Bag */}
                    <button className="btn btn-ghost btn-circle hidden sm:block md:block" onClick={() => wishlist()}>
                        <ShoppingBagIcon />
                    </button>
                    {/* Login */}
                    <button className="btn btn-ghost btn-circle hidden sm:block md:block" onClick={() => Login()}>
                        <PersonIcon />
                    </button>
                    {/* Logout */}
                    <button className="btn btn-ghost btn-circle hidden sm:block md:block" onClick={() => logout()}>
                        <LogoutIcon />
                    </button>


                    {/* Hamburger Menu for Small Screens */}
                    <div className="lg:hidden md:hidden">
                        <button className="btn btn-ghost btn-circle" onClick={toggleMenu}>
                            <span className="text-black text-3xl">☰</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Hamburger Dropdown Menu */}
            {isMenuOpen && (
                <div className="lg:hidden flex flex-col items-center gap-4 p-4 bg-blue-800 text-white">
                    <ul className="flex flex-col items-center w-full space-y-4">
                        <li>
                            <a href="/collections" className="btn btn-ghost w-full text-white">Collections</a>
                        </li>
                        <li>
                            <button onClick={() => wishlist()} className="btn btn-ghost w-full text-white">Wishlist</button>
                        </li>
                        <li>
                            <button onClick={() => Login()} className="btn btn-ghost w-full text-white">Login</button>
                        </li>
                        <li>
                            <button onClick={() => logout()} className="btn btn-ghost w-full text-white">Logout</button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Navbar;
