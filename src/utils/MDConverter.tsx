import { marked } from 'marked'
import { FC } from 'react'

interface IMDConverter {
  md?: string
}

export const MDConverter: FC<IMDConverter> = ({ md = '' }) => {
  const getMarkdownText = (mdText: string) => {
    const rawMarkup = marked(mdText)
    return { __html: rawMarkup }
  }

  return <div dangerouslySetInnerHTML={getMarkdownText(md)} />
}
