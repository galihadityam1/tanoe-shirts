"use server"
import { addWishlist } from '@/actions/product';
import { BASE_URL } from '@/db/config/constant';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Page = async ({ params }: { params: { slug: string } }) => {
    let { slug } = params;
    let res = await fetch(`${BASE_URL}/api/products/${slug}`, {
        cache: 'no-cache'
    });

    const result = await res.json();
    const { data } = result;

    let currency = new Intl.NumberFormat("id-ID", {
        currency: "IDR",
        style: "currency",
    }).format(data.price);

    let currentDisc = new Intl.NumberFormat("id-ID", {
        currency: "IDR",
        style: "currency",
    }).format(data.disc);

    return (
        <>
            <div className="w-full py-6 bg-gray-50">
                <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10 p-4">
                    
                    {/* Product Image Section */}
                    <div className="flex-1 p-4 md:w-1/2">
                        <img src={data.image} alt={data.name} className="w-full h-auto object-cover rounded-lg shadow-lg" />
                    </div>

                    {/* Product Details Section */}
                    <div className="flex-1 bg-white p-6 rounded-lg shadow-lg border border-gray-300">
                        <div className="text-3xl font-bold text-gray-800 mb-4">
                            {data.name}
                        </div>
                        <div className="text-blue-500 text-lg mb-4">
                            {data.tags}
                        </div>

                        {/* Price Section */}
                        <div className="flex justify-between items-center mb-6">
                            <div className="text-2xl font-semibold text-red-600">
                                {currentDisc}
                            </div>
                            <div className="line-through text-gray-500 text-xl">
                                {currency}
                            </div>
                        </div>

                        {/* Size Selection */}
                        <div className="mb-6">
                            <span className="font-semibold text-lg">Size:</span>
                            <div className="flex gap-3 mt-2">
                                {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                                    <button key={size} className="btn btn-outline border rounded-md hover:bg-blue-500 hover:text-white transition duration-200 p-2 text-sm">{size}</button>
                                ))}
                            </div>
                        </div>

                        {/* Stock Information */}
                        <div className="text-gray-600 mb-6">
                            <span className="font-semibold">Stock:</span> {data.stok}
                        </div>

                        {/* Add to Wishlist Button */}
                        <div className="flex justify-center mb-6">
                            <form action={addWishlist} className="w-full">
                                <input type="text" className="hidden" name="id" value={data._id} />
                                <button type="submit" className="bg-blue-600 text-white rounded-xl w-full py-3 flex justify-center items-center gap-2 hover:bg-blue-800 transition-all duration-200">
                                    <span>Add to Wishlist</span>
                                    <AddShoppingCartIcon sx={{ fontSize: 30 }} />
                                </button>
                            </form>
                        </div>

                        {/* Promotional Image */}
                        <div className="py-6">
                            <img src="https://cdn.shopify.com/s/files/1/0019/2105/6881/files/abd.png?v=1618815626" alt="Promotional Banner" className="w-full h-auto object-cover rounded-lg" />
                        </div>

                        {/* Product Description */}
                        <div>
                            <span className="font-semibold">Description:</span>
                            <p className="text-sm text-gray-700 mt-2">{data.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page;