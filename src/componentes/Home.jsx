import '../styled/home.css';

function Home() {
    return (
        <div className="bg-[url(./assets/img/home-img.jpg)] bg-center bg-cover text-[var(--white)]">
            <section id="#home" className="text-[var(--white)] flex items-center min-h-screen">
                <div className="max-w-[60rem] main-font">
                    <h3 className="text-[8rem] font-bold">Code com o melhor café da região</h3>
                    <p className="text-[2rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel facilis reprehenderit sapiente veritatis quibusdam nesciunt, neque aperiam est quaerat nihil odio corrupti et nam, officiis temporibus assumenda fugit ad. Nihil.</p>
                    <a href="#" className="btn">Pegue o seu Agora</a>
                </div>
            </section>
        </div>
    )
}

export default Home;