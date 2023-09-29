import { useUserContext } from "@contexts/userContext"
import { Arrow, Stars } from "@icons"
import styles from "./ListHeader.module.scss"
import clsx from "clsx"

const ListHeader = () => {
  const { listHeader, sortButton, star, downArrow, active } = styles
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
          <Arrow />
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
