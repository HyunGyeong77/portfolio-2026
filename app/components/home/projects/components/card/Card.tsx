import styles from './card.module.scss';
import Image from 'next/image';
import {CardType} from '../../type/card-type';
import Links from './components/links/Links';

export default function Card(props: CardType) {
  const {title, describe, skills, tags, githubUrl, visitUrl, bg} = props;

  return (
    <div className={styles.card__wrap}>
      <Image 
        className={styles.card__bg} 
        src={bg} 
        alt={`${title} image`} 
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        loading="eager"
      />
      <div className={styles.card__screen}></div>
      <div className={styles["card__inner"]}>
        <div className={styles["card__title-box"]}>
          <h2 className={styles.card__title}>{title}</h2>
        </div>
        <div className={styles["card__content-box"]}>
          <div className={styles["card__content-inner"]}>
            <div className={styles["card__describe-box"]}>
              <p className={styles.card__describe}>{describe}</p>
            </div>
            <ul className={styles["card__skills-box"]}>
              {skills.map((skill, index) => (
                <li key={skill + index}><p>{skill}</p></li>
              ))}
            </ul>
            <ul className={styles["card__tags-box"]}>
              {tags.map((tag, index) => (
                <li key={tag + index}><p># {tag}</p></li>
              ))}
            </ul>
          </div>
          <div className={styles["card__links-box"]}>
            <Links url={githubUrl} alt="github repository link image" content="Github" />
            <Links url={visitUrl} alt="site link image" content="Visit" />
          </div>
        </div>
      </div>
    </div>
  );
}