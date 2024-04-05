"use client"
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LogoutIcon from '@mui/icons-material/Logout';
import { logout } from '@/actions/user';

const Navbar = () => {
    return (
        <div className='bg-blue-800 text-center border-b sticky top-0 z-50'>
            <div className='text-white text-xs flex justify-center items-center h-8'>
                <a>Buy More and Make Us Rich{"   "}<FavoriteIcon sx={{ fontSize: 10 }} /></a>
            </div>
            <div className="navbar bg-base-100 ">
                <div className="navbar-start">
                </div>
                <div className='flex flex-col justify-center'>
                    <div className="font-mono">
                        <a href='/' className="btn btn-ghost text-xl">Tanoe de Attire</a>
                    </div>
                    <div className='flex flex-row justify-center w-80 gap-4 text-xs font-light p-3'>
                        <a href="/collections">Collections</a>
                        <a className='' href=''>New Arrivals</a>
                        <a className='' href=''>Best Sellers</a>
                    </div>
                </div>
                <div className="navbar-end">
                    <a href="/wishlist">
                        <button className="btn btn-ghost btn-circle">
                            <ShoppingBagIcon />
                        </button>
                    </a>
                    <a href="/login">
                        <button className="btn btn-ghost btn-circle">
                            <PersonIcon />
                        </button>
                    </a>
                    <button className="btn btn-ghost btn-circle" onClick={() => logout()}>
                        <LogoutIcon />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Navbar