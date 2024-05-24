import '../App.css'

export const enum TypesEnum {
    signIn = 'signIn'
}


interface Props {
    onClick?: () => void,
    title: string,
    type: TypesEnum
 }


const Button = (props: Props) => {
    const {onClick, title, type} = props;
    return  <div>
                <button onClick={onClick} value={title} className={type}> Sign In </button>
            </div>
}

export default Button;