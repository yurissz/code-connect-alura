import { AvatarI } from "@/interface/Avatar";
import styles from './avatar.module.css'
import Image from 'next/image';

export const Avatar: React.FC<AvatarI> = ({ name, imageSrc }) => {
    return (
        <ul className={styles.avatar} >
            <li>
                <Image src={imageSrc} alt={`Avatar de ${name}`} width={32} height={32} />
            </li>
            <li>
                @{name}
            </li>
        </ul>
    );
};