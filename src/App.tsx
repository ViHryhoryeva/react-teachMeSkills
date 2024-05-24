import { useState } from 'react';
import './App.css';
import Input from './components/Input';
import TabArea from './components/TabArea/TabArea';

function App() {

    const [value, setValue] = useState<string>('');
    const handleSetValue = (newValue: string) => {
        setValue(newValue);
    }

    const [tab, setTab] = useState('');
    const onTabSelected = (newTab: string) => {
        setTab(newTab);
    }

  return (
    <div>
        <Input label='Input' value={value} onChange={handleSetValue}/>
        <br></br><br></br>
        <TabArea names={['all', 'my favorites', 'popular']} onTabSelected={onTabSelected} selectedTab={tab}></TabArea>
    </div>
  )
}

export default App;
