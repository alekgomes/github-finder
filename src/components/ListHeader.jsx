import { useUserContext } from "../contexts/userContext"
import Arrow from "./icons/Arrow"
import Stars from "./icons/Stars"
import styles from "./ListHeader.module.scss"
import clsx from "clsx"

const ListHeader = () => {
  const { listHeader, sortButton, star, upArrow, downArrow, active } = styles
  const { toggleSorting, sortState } = useUserContext()

  return (
    <div className={listHeader}>
      <h2>Lista de repositórios</h2>
      <div type="button" className={sortButton}>
        <span>
          <Stars className={star} />
        </span>
        <span
          onClick={toggleSorting}
          className={clsx({ [active]: sortState === "ASC" })}
        >
          <Arrow className={upArrow} />
        </span>
        <span
          onClick={toggleSorting}
          className={clsx({ [active]: sortState === "DESC" })}
        >
          <Arrow className={downArrow} />
        </span>
      </div>
    </div>
  )
}

export default ListHeader
