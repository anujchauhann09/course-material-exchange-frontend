export default function Section2() {
    return (
        <section className="section2 w-full sm:h-[340px] bg-green-200">
            <div className="heading-box p-4 w-full">
                <h2 className="heading m-auto">How It Works</h2>
            </div>
            <div className="content-box flex flex-col p-4 w-full">
                <div className="content-box1 w-1/3 p-4">
                    <p><img src="" alt="logo" /></p>
                    <p>Join our vibrant online community where you can connect with buyers and sellers.</p>
                </div>
                <div className="content-box2 w-1/3 p-4">
                    <p><img src="" alt="logo" /></p>
                    <p>Register for free and start exploring the wide range of course materials available.</p>
                </div>
                <div className="content-box3 w-1/3 p-4">
                    <p><img src="" alt="logo" /></p>
                    <p>Create your offers and search for course materials that meet your needs.</p>
                </div>
            </div>
        </section>
    )
}