import { Layer } from '../dom/layers/Layer'
import { Document } from '../dom'

export function globalSettingForKey<T>(key: string): T
export function setGlobalSettingForKey<T>(key: string, value: T): void

export function settingForKey<T>(key: string): T
export function setSettingForKey<T>(key: string, value: T): void

export function layerSettingForKey<T>(layer: Layer, key: string): T
export function setLayerSettingForKey<T>(
  layer: Layer,
  key: string,
  value: T
): void

export function documentSettingForKey<T>(document: Document, key: string): T
export function setDocumentSettingForKey<T>(
  document: Document,
  key: string,
  value: T
): void

export function sessionVariable<T>(key: string): T
export function setSessionVariable<T>(key: string, value: T): void
