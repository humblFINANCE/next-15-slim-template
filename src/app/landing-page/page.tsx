/**
 * The main landing page component.
 *
 * @returns {JSX.Element} The rendered landing page.
 */
export default function Home() {
    return (
        <main className='min-h-screen'>
            <div className='container mx-auto px-4 py-12'>
                <section className='text-center'>
                    <h1 className='mb-6 text-4xl font-bold'>Welcome to Your Application</h1>
                    <p className='mb-8 text-xl text-gray-600'>
                        This is a placeholder landing page. Add your content here.
                    </p>
                    <div className='rounded-lg bg-gray-100 p-6 shadow-md'>
                        <h2 className='mb-4 text-2xl font-semibold'>Getting Started</h2>
                        <p className='text-gray-700'>
                            Customize this page by editing <code>src/app/page.tsx</code>
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}
