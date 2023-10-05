export interface IContainerConfig {
  settings?: any
  children?: React.ReactNode
}

export interface IDropdownMenu {
  minW?: string
  sideOffset?: number
  align?: "center" | "start" | "end" | undefined
  alignOffset?: number
  items?: any[]
  children?: React.ReactNode
}

export interface IDropdownItem {
  id?: string
  type?: string
  label?: string
  href?: string
  target?: string
  callback?: any
  options?: IDropdownRadioItem[]
  keyCommand?: string
}

export interface IDropdownRadioItem extends IDropdownItem {
  value?: string
  setValue?: any
  selected?: boolean
}

export interface IDropDownWrapper {
  href?: string
  target?: string
  callback?: any
  children: React.ReactNode
}

export interface IMainAreaConfig {
  title?: string
  dropdownItems?: IDropdownItem[]
  children: React.ReactNode
}

export interface ISidebarItem {
  icon?: ISidebarIcon
  label?: string
  isActive?: boolean | null
}

export interface ISidebarIcon {
  icon: any
  viewState?: string
}
