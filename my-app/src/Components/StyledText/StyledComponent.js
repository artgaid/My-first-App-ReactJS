import styled from 'styled-components'
import { useState } from 'react'

const GreenStyled = styled.p`
    background-color: green;
    width: 100px;
`;
const RedText = styled.p`
    background-color: red;
    width: 100px;
`;

const StyledText = ({text, test}) => {
    const [visibleFlg, setVisibleFlg] = useState(false)
    test();
    const changeFlagHandler = () =>{
        setVisibleFlg((prevState) => !prevState)
        console.log('click');
    }
    return (
        <>
            { visibleFlg ? <RedText>{text}</RedText> :
            <GreenStyled>{text}</GreenStyled>}
            <button onClick={changeFlagHandler} >click Color </button>
        </>
    )

};

export default StyledText