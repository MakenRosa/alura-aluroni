import menu from 'data/menu.json';
import styles from './Home.module.scss';
import stylesTheme from 'styles/Theme.module.scss';
import ourHome from 'assets/our-home.png';

export default function Home() {

    let chefRecommendations = [...menu];
    chefRecommendations = chefRecommendations.sort(() => 0.5 - Math.random()).slice(0, 3);
    
    return(
        <section>
            <h3 className={stylesTheme.title}>
                Chef&apos;s Recommendation
            </h3>
            <div className={styles.recommendations}>
                {chefRecommendations.map((item) => (
                    <div key={item.id} className={styles.recommendation}>
                        <div className={styles.recommendation__image}>
                            <img src={item.photo} alt={item.title} />
                        </div>
                        <button className={styles.recommendation__button}>
                            Ver mais
                        </button>
                    </div>
                ))}
            </div>
            <h3 className={stylesTheme.title}>Our Home</h3>
            <div className={styles.ourHome}>
                <img src={ourHome} alt="Aluroni's Restaurant" />
                <div className={styles.ourHome__address}>
                    Rua Vergueiro, 3185 <br /> <br /> Vila Mariana - SP
                </div>                
            </div>
        </section>
    );
}