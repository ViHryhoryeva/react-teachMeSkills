import '../App.css'

export const enum TypesEnum2 {
    button = 'button'
}


interface Props {
    onClick?: () => void,
    title: string,
    type: TypesEnum2
 }

const Hamburger = (props: Props) => {
    const {onClick, title, type} = props;
    const [isOpen, setOpen] = useState(false);
    
    return  <div>
                <button onClick={onClick} value={title} className={type}> 
                    <div className='wrapper_menu'>
                        <div className='menu'></div>
                    </div>
                </button>
            </div>
}

export default Hamburger;