import { TypeAnimation } from 'react-type-animation';
export const Type = ({input}) => {
    return (
        <TypeAnimation sequence={[
            `${input}`
        ]} style={{ fontSize: '2em', display: 'inline-block' }}/>
    )
}