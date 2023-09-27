import styles from "./UserDetails.module.css"
import { ReactComponent as Follow } from "../assets/follow.svg"

function UserDetails({ info }) {
  return (
    <div className={styles.userDetails}>
      <div className={styles.userDetails__column}>
        <img
          src={info.avatar_url}
          alt="User avatar"
          className={styles.userDetails__avatarImg}
        />
        <p className={styles.userDetails__avatarImg}>{info.name}</p>
        <p className={styles.userDetails__avatarImg}>{info.login}</p>
      </div>
      <div className={styles.userDetails__column}>
        <p>
          <Follow /> {info.followers} - Seguidores . {info.following} seguindo
        </p>
      </div>
      <div className={styles.userDetails__column}>
        <p>{info.bio}</p>
        <p>
          <span>{info.email}</span>
          <span>{info.blog}</span>
          <span>{info.twitter_username}</span>
        </p>
        <p>
          Desde: {new Intl.DateTimeFormat(new Date(info.created_at)).format()}
        </p>
      </div>
    </div>
  )
}

export default UserDetails
