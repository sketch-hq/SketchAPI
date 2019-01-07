import { Document } from '../dom'

export function message(text: string, document?: Document): void
export function alert(title: string, text: string): void

export type INPUT_TYPE = {
  string: 'string'
  slider: 'slider'
  selection: 'selection'
}
type commonOptions = {
  description?: string
  okButton?: string
  cancelButton?: string
}
export function getInputFromUser(
  messageText: string,
  options?: commonOptions & {
    type?: INPUT_TYPE['string']
    initialValue?: string
  },
  callback?: (err: Error | null, result?: string) => void
): void
export function getInputFromUser(
  messageText: string,
  options?: commonOptions & {
    type?: INPUT_TYPE['slider']
    initialValue?: number
    maxValue?: number
    minValue?: number
    increment?: number
  },
  callback?: (err: Error | null, result?: number) => void
): void
export function getInputFromUser(
  messageText: string,
  options?: commonOptions & {
    type?: INPUT_TYPE['selection']
    initialValue?: string
    possibleValues: string[]
  },
  callback?: (err: Error | null, result?: string) => void
): void

export function getTheme(): 'dark' | 'light'
