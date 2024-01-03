import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import {
  PlaylistTrackDetails,
  PlaylistsType,
} from '../../types/playlists.interface';
import styles from './SideBar.module.scss';

const SideBar = ({ playlists }: { playlists: PlaylistsType }) => (
  <div className={styles.SideBar}>
    <Link
      style={{ textDecoration: 'none', color: 'white' }}
      to="/"
      aria-label="Homepage"
      className={styles.Logo}
    >
      <Logo />
    </Link>
    <h1 className={styles.Title}>Playlists</h1>
    <hr className={styles.Separator} />
    <nav className={styles.List}>
      {playlists.items?.map((item) => (
        <ListItem playlist={item} key={item.id} />
      ))}
    </nav>
  </div>
);

const ListItem = ({ playlist }: { playlist: PlaylistTrackDetails }) => (
  <Link to={`/playlist/${playlist.id}`} className={styles.ListItem}>
    <span className={styles.ItemTitle}>{playlist.name}</span>
  </Link>
);

export default SideBar;
