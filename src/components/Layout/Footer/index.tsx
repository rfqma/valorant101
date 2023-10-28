export const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <>
            <div className='bg-white'>
                <div className="container flex flex-col items-center p-5 mt-10">
                    <span className='text-sm font-medium text-black/30'>
                        &copy; {currentYear} Copyright by Rifqi Maulana
                    </span>
                </div>
            </div>
        </>
    )
}