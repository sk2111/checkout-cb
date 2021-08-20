//styles;
import styles from './NavTabHeader.module.css';
//components
import NavTabItem from 'components/NavTabItem/NavTabItem';
//navigation
import { navHeaderList } from 'utilities/navigation';

const NavTabHeader = () => {
  return (
    <div className={styles.navTabContainer}>
      {navHeaderList.map((item) => (
        <NavTabItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default NavTabHeader;
