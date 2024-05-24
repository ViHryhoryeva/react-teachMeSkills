
import {BaseSyntheticEvent} from 'react';

interface Props {
    label: string,
    value: string,
    onChange: (newString: string) => void,
    disabled?: boolean
}

const Input = (props: Props) => {
    const {label, value, onChange} = props;
    const handleChange = (e: BaseSyntheticEvent) => {
        onChange(e.target.value);
    }
    return  <div>
                <div> {label} </div>
                <input onChange={handleChange} value={value} className='input' />
            </div>
}

export default Input;