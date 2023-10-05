import Link from "next/link"

export default function Header() {
    return (
        <>
            <div className='bg-white'>
                <div className="container">
                    <div className='flex items-center justify-between p-6'>
                        <div>
                            <Link href={'/'}>
                                <h1 className='text-2xl font-extrabold text-black'>VAL-101</h1>
                            </Link>
                        </div>
                        <div className='flex gap-8'>
                            <Link href={'/'}>
                                <span className='text-base font-semibold text-darkGreen hover:text-black'>Home</span>
                            </Link>
                            <Link href={'/map'}>
                                <span className='text-base font-semibold text-darkGreen hover:text-black'>Map</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}