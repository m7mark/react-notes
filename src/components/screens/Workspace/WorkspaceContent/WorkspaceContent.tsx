import { Empty, Layout } from 'antd'
import { FC } from 'react'

import { useNoteIdState } from '../../../../context/noteId-context'

import { TextContainer } from './TextContainer/TextContainer'
import { TitleEdit } from './TitleEdit'
import styles from './WorkspaceContent.module.scss'

const { Content } = Layout
interface IWorkspaceContent {
  isEdit: boolean
}

export const WorkspaceContent: FC<IWorkspaceContent> = ({ isEdit }) => {
  const { currentNoteId } = useNoteIdState()

  return (
    <Content className={styles.content}>
      <div className={styles.contentContainer}>
        {!currentNoteId ? (
          <Empty
            className={styles.empty}
            image={Empty.PRESENTED_IMAGE_SIMPLE}
          />
        ) : (
          <>
            <TitleEdit />
            <TextContainer isEdit={isEdit} />
          </>
        )}
      </div>
    </Content>
  )
}
