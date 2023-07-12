import styles from './About.module.scss';
import stylesTheme from 'styles/Theme.module.scss';
import home from 'assets/about/home.png';
import pasta1 from 'assets/about/pasta1.png';
import pasta2 from 'assets/about/pasta2.png';

export default function About() {

    const images = [pasta1, pasta2];

    return(
        <section>
            <h3 className={stylesTheme.title}>About</h3>
            <div className={styles.about}>
                <img src={home} alt="Aluroni's Restaurant" />
                <div className={styles.about__text}>
                    <p>
                        Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa Italiana Caseira mais saborosa e sofisticada de São Paulo! Prezamos pelos ingredientes tradicionais da culinária Italiana, frescos e de excelente qualidade para que sua experiência seja ainda mais intensa!
                    </p>
                    <p>
                        Também possuímos uma cardápio de carnes com muitas opções de acordo com o seu gosto!
                    </p>
                    <p>
                        Para acompanhar as massas italianas, Aluroni possui uma reserva de vinhos especiais, que harmonizam perfeitamente com o seu parto, seja carne ou massa!
                    </p>
                </div>
            </div>
            <div className={styles.images}>
                {images.map((image, index) => (
                    <div key={index} className={styles.images__image}>
                        <img src={image} alt="Pasta image" />
                    </div>    
                ))}
            </div>
        </section>
    );
}