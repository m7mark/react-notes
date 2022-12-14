import { FC } from 'react'

import { WorkspaceContent } from './WorkspaceContent/WorkspaceContent'
import { WorkspaceFooter } from './WorkspaceFooter/WorkspaceFooter'
import { WorkspaceHeader } from './WorkspaceHeader/WorkspaceHeader'
import { useEditSwitch } from './useEditSwitch'

export const Workspace: FC = () => {
  const { isEdit, changeEditStatus } = useEditSwitch()

  return (
    <>
      <WorkspaceHeader isEdit={isEdit} changeEditStatus={changeEditStatus} />
      <WorkspaceContent isEdit={isEdit} />
      <WorkspaceFooter />
    </>
  )
}
