import styles from './skill.module.scss';
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from 'next/image';

type Props = {
  stack: string,
  skills: {name: string, icon: StaticImport}[]
}

export default function Skill(props: Props) {
  const {stack, skills} = props;

  return (
    <div className={styles.skill__wrap}>
      <h3 className={styles.skill__stack}>{stack}</h3>
      <ul className={styles["skill__skill-box"]}>
        {skills.map((skill, index) => (
          <li key={skill.name + index}>
            <Image src={skill.icon} alt={skill.name} width={60} height={60} />
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}