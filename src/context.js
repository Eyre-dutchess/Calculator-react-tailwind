import React, { useContext, useReducer } from "react"
import { reducer } from "./reducer"


const AppContext = React.createContext()

export const ACTION = {
    APPEND_NUM:"append-num",
    CHOOSE_OPERATION: "choose-operation",
    COMPUTE: "compute",
    CLEAR:"clear",
    DELETE:"delete"
}
const initialState = {
    curOperand:"12",
    prevOperand: "35",
    operation: "x"
}
const AppProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, initialState)
    const appendNum = (value)=>{
        dispatch({type: ACTION.APPEND_NUM , payload: value})
    }

    const clear=()=>{
        dispatch({type:ACTION.CLEAR})
    }
    
    const delDigit=()=>{
        dispatch({type:ACTION.DELETE})
    }
    
    const chooseOperation=(value)=>{
        dispatch({type:ACTION.CHOOSE_OPERATION, payload:value})
    }
    
    const compute=()=>{
        dispatch({type:ACTION.COMPUTE})
    }
    
    const INTER_FORMATTER = new Intl.NumberFormat("en-us", {
        maximumFractionDigits: 0
    })
    const formatInt = (value)=>{
        if(value == null) return;
        const [integer, decimal] = value.split(".")
        if(decimal == null){
            return INTER_FORMATTER.format(integer)
        }
        return `${INTER_FORMATTER.format(integer)}.${decimal}`
    }
    return (
        <AppContext.Provider
            value={{
                ...state,
                appendNum,
                clear, 
                delDigit, 
                chooseOperation, 
                compute,
                formatInt,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(AppContext)
}
export  {AppContext, AppProvider}