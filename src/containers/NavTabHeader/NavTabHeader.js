//styles;
import styles from './NavTabHeader.module.css';
//components
import NavTabItem from 'components/NavTabItem/NavTabItem';
//navigation
import { getActiveNavHeaderList } from 'utilities/navigation';

const NavTabHeader = ({ currentPage }) => {
  const activeNavList = getActiveNavHeaderList(currentPage);

  return (
    <div className={styles.navTabContainer}>
      {activeNavList.map((navItem) => (
        <NavTabItem key={navItem.id} {...navItem} />
      ))}
    </div>
  );
};

export default NavTabHeader;
