import Head from 'next/head'

function Home() {
    return (
        <main>
            <Head>
                <title>Robson Pontes</title>
                <link rel="shortcut icon" href="favicon.ico" />
            </Head>
            <div className="principal d-flex text-center text-white bg-primary bg-gradient">

                <div className="cover-container d-grid w-100 h-100 p-3 mx-auto flex-column">
                    <header className="mb-auto">
                        <div>
                            <h3 className="float-md-start mb-0">Robson Pontes</h3>
                            <nav className="nav nav-masthead justify-content-center float-md-end">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                                <a className="nav-link" href="#">Portifolio</a>
                                <a className="nav-link" href="mailer:robson.tecnologia@gmail.com">Contato</a>
                                <a className="nav-link" href="#">Blog</a>
                            </nav>
                        </div>
                    </header>
                    <main className="px-3">
                        <h1>Organização/Motivação</h1><br/>
                        <p className="lead">A arte de motivar e fazer mais com menos.<br/> O dev antes do
                            desenvolvimento.
                        </p>
                    </main>
                    <footer className="mt-auto text-white-50">
                    </footer>
                </div>
            </div>
        </main>
    )
}

export default Home
