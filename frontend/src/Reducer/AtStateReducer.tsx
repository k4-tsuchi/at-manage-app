
import { useReducer } from "react";
import { AtState, AtAction } from "../@types/typeList";

type Property = {
  [key: string]: {
    name: string;
    color: string;
    before: string[];
  }
}

const property: Property = {
  at_in: {
    name: '出勤',
    color: "bg-blue-600",
    before: ["start"],
  },
  at_out: {
    name: '退勤',
    color: "bg-red-600",
    before: ["at_in", "rest_out"],
  },
  rest_in: {
    name: '休憩開始',
    color: "bg-green-600",
    before: ["at_in", "rest_out"],
  },
  rest_out: {
    name: '休憩終了',
    color: "bg-green-600",
    before: ["rest_in"] 
  },
}

const AtStateReducer = (state: AtState, action: AtAction): AtState => {
  
  const targetProperty = property[action.local]
  state.name = targetProperty.name
  state.color = 'bg-gray-300';
  state.disabled = true;

  if (targetProperty.before.includes(action.global)) {
    state.color = targetProperty.color;
    state.disabled = false;
  }

  return state
}

export default AtStateReducer;

const useAtStateReducer = () => {
  const [state, dispatch] = useReducer(AtStateReducer, {
    name: '',
    color: '',
    disabled: true
  });

  return {state, dispatch}
}

export const defaultAtState: ReturnType<typeof useAtStateReducer> = {
  state: {
    name: '',
    color: '',
    disabled: true
  },
  dispatch: () => {}
}


