export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <>
            <div className='bg-white'>
                <div className="container">
                    <div className='flex flex-col items-center p-5'>
                        <span className='text-sm font-medium text-lightGreen'>
                            &copy; {currentYear} Copyright by Rifqi Maulana
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}