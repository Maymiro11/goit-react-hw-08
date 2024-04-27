import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';
import css from "./UserMenu.module.css";

const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

  return (
    <div className={css.wrapper}>
      <b>Welcome, {user.name || 'User'}</b>
      <button
        className={css.btn}
        type="button"
        onClick={() => dispatch(logout())}
      >
        Log out
      </button>
    </div>
  );
};

export default UserMenu;