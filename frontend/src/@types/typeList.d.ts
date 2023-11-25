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

export type Create = {
  month: String,
  day: String;
  start_at: String;
}

export type Rest = {
  time: String;
}

export type End = {
  end_at: String
}