
interface Props {
    names: string[],
    onTabSelected: (tabName: string) => void
}


const TabArea = ({names, onTabSelected}: Props) => {
    
    return <div>
            {names.map((name: string, index: number) => <div onClick= {() => onTabSelected(name)} key= {index}> {name} </div>)}
        </div>
}

export default TabArea;