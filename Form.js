import React, { useState } from 'react'

const Form = ({ feilds, button, next }, e) => {
    const [nextField, setNextFeild] = useState(0);
    const [submitButton, setSubmitButton] = useState(false);
    const [nextButton, setNextButton] = useState(next)
    const [apendState, setApendState] = useState([])
    const [newData, setNewData] = useState([])
    function Data(e) {
        if (feilds[nextField].type === "file") {
            setApendState(e.target.files[0].name)
        } else {
            setApendState(e.target.value)
        }

    }

    function Handle() {
        const Next2 = (nextField + 1)
        var obj = { [feilds[nextField].name]: apendState }
        setNewData(newData => [...newData, obj])
        setNextFeild(Next2)
        if ((nextField) === feilds.length - 1) {
            setSubmitButton(true)
            setNextButton(false)
            setNextFeild(0)
        }
    }
    function DataSend() {
        console.log(newData)

    }

    return (
        <>
            <p>{(feilds[nextField].label)}</p>

            <input type={feilds[nextField].type} onChange={Data} placeholder={feilds[nextField].placeholder} />

            {nextButton && <><button onClick={Handle}>next</button></>}
            {submitButton && <button onClick={DataSend}>{button}</button>}
        </>
    )
}

export default Form