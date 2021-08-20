//styles
import styles from './NavTabItem.module.css';

const NavTabItem = ({ title, isActive, Icon }) => {
  return (
    <div className={styles.navItemContainer}>
      <div className={styles.strokeLine} data-active={isActive}></div>
      <div className={styles.roundContainer}>
        <div className={styles.roundIcon} data-active={isActive}>
            <Icon className={styles.icon}/>
        </div>
        <p className={styles.title}>{title}</p>
      </div>
    </div>
  );
};

export default NavTabItem;
