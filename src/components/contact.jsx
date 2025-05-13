

import { Link } from 'react-router-dom'

export default function Project({ title, descript, img, link }) {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.projectCard}>
                <div className={styles.cardImage}>
                    <img src={img} />
                    <Link to={link} className={styles.customBtn}>→</Link>
                </div>
                <div className={styles.cardText}>
                    <span>{title}</span>
                    <p>{descript}</p>
                </div>
            </div>
        </div>


    )
}