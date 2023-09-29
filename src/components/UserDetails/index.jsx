import PropTypes from "prop-types"
import styles from "./UserDetails.module.scss"
import { Follow, Twitter, Link, Email } from "@icons"

function UserDetails({ info }) {
  const {
    userDetails,
    userDetails__avatarImg,
    userDetails__name,
    userDetails__login,
  } = styles

  return (
    <div className={userDetails}>
      <div>
        <a href={info.html_url}>
          <img
            src={info.avatar_url}
            alt="User avatar"
            className={userDetails__avatarImg}
          />
        </a>
      </div>
      <div>
        <div>
          <p className={userDetails__name}>{info.name}</p>
          <p className={userDetails__login}>{info.login}</p>
        </div>
        <div>
          <p>
            <Follow />
            <span>
              {info.followers} - Seguidores . {info.following} seguindo
            </span>
          </p>
        </div>
        <div>
          <p>{info.bio}</p>
        </div>
        <div>
          <div>
            {info.email && (
              <p>
                <Email />
                {info.email}
              </p>
            )}
            {info.blog && (
              <p>
                <Link />
                {info.blog}
              </p>
            )}
            {info.twitter_username && (
              <p>
                <Twitter />@{info.twitter_username}
              </p>
            )}
          </div>
          <p>
            <small>
              <span>
                No GitHub desde:{" "}
                {new Intl.DateTimeFormat(new Date(info.created_at)).format()}
              </span>
            </small>
          </p>
        </div>
      </div>
    </div>
  )
}

export default UserDetails

UserDetails.propTypes = {
  info: PropTypes.object,
}
