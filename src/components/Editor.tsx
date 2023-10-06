'use client'

import { Editor as BaseEditor, EditorProps } from '@monaco-editor/react'
import { useTheme } from 'next-themes'
import { FC } from 'react'
import { options, themeDark, themeLight } from '~/editor/options'

const Editor: FC<EditorProps> = (props) => {
  const { resolvedTheme } = useTheme()

  return <BaseEditor theme={resolvedTheme === 'dark' ? themeDark : themeLight} options={options} {...props} />
}
Editor.displayName = 'Editor'

export { Editor }
