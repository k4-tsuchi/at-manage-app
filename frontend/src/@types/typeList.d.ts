type AtState = {
  name: string;
  color: string;
  disabled: boolean;
}

type AtAction = {
  local: string;
  global: string;
}

export interface Mode {
  mode: string
}

export interface Date {
  day: string;
  time: string
}