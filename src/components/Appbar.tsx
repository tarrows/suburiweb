import React from 'react'
import styles from './Appbar.module.css'

export type Props = {}

export const Appbar: React.FC<Props> = () => {
  return (
    <nav>
      <div className={styles.header}>
        <div>
          <div></div>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div></div>
    </nav>
  )
}
