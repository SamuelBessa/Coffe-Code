import imgAbout from "../assets/img/about-img.jpg"; 

function About() {
    return (
        <section id='about' className='text-[var(--white)] main-font'>
            <h2 className='text-[4rem] text-center uppercase text-[var(--main-color)] mb-[2rem]'>Sobre <span className='text-[var(--white)] uppercase'>Nós</span></h2>
            <div className='flex items-center gap-[1.5rem] bg-[var(--black)]'>
                <div>
                    <img src={imgAbout} alt="sobre-nos" />
                </div>
                <div className='p-[2rem] text-[1.8rem]'>
                    <h3 className='text-[3rem]'>O Que Faz Nosso Café Especial</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum praesentium eaque illum molestiae cupiditate, exercitationem porro repudiandae unde iste ex est tempora nesciunt veniam! Qui porro mollitia placeat neque ullam.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum praesentium eaque illum molestiae cupiditate, exercitationem porro repudiandae unde iste ex est tempora nesciunt veniam! Qui porro mollitia placeat neque ullam.</p>
                    <a href="#" className='btn'>Saiba mais</a>
                </div>
            </div>
        </section>
    )
}

export default About;