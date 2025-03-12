import { ACTION} from "./context";

export const calculate = ({curOperand, prevOperand, operation}) =>{
    const prev = parseFloat(prevOperand)
    const cur = parseFloat(curOperand)
    if(isNaN(prev) || isNaN(cur))return"";
    let computation = ""
    switch(operation){
        case "+":
            computation = prev + cur
            break
        case "-":
            computation = prev - cur
            break
        case "x":
            computation = prev * cur
            break
        case "÷":
            computation = prev / cur
            break
        default:
            return computation
    }
    return computation.toString()
}
export const reducer = (state, action) =>{
    switch(action.type){
        case ACTION.APPEND_NUM:
            if(state.overwrite){
                return {
                    ...state,
                    curOperand: action.payload,
                    overwrite: false
                }
            }
            if(action.payload ==="0" && state.curOperand === "0"){
                return state
            }
            if(action.payload === "." && state.curOperand.includes(".")){
                return state
            }
            return {
                ...state, 
                curOperand: `${state.curOperand || ""}${action.payload}`
            }
        
        case ACTION.CLEAR:
            return {}

        case ACTION.DELETE:
            if(state.overwrite){
                return {
                    ...state,
                    overwrite: false,
                    curOperand: null
                }
            }
            if(state.curOperand == null) return state;
            if(state.curOperand.length === 1){
                return {
                    ...state,
                    curOperand: null
                }
            }
            return {
                ...state, 
                curOperand: state.curOperand.slice(0, -1)
            }
        
        case ACTION.CHOOSE_OPERATION:
            if(state.curOperand == null && state.prevOperand == null ){
                return state
            }
            if(state.curOperand == null){
                return {
                    ...state,
                    operation: action.payload
                }
            }
            if(state.prevOperand == null){
                return {
                    ...state,
                    prevOperand : state.curOperand,
                    operation: action.payload,
                    curOperand: null
                }
            }
            return {
                ...state,
                prevOperand : calculate(state), 
                operation: action.payload,
                curOperand: null,
            }

        case ACTION.COMPUTE:
            return {
               ...state, 
                curOperand:calculate(state),
                prevOperand: null,
                operation: null,
                overwrite: true
            }
   
        default:
            return state
    }
}