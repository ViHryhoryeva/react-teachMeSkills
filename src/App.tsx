import { useState, useEffect } from 'react';
import './App.css';
import './components/PostCard/PostCard.css';
import Icon1 from './images/1-icon.png';
import Icon2 from './images/2-icon.png';
import Icon3 from './images/3-icon.png';

function App() {
    
    const [users, setUsers] = useState([]);

    const getApiData = async () => {
        const response = await fetch(
        "https://jsonplaceholder.org/posts"
        ).then((response) => response.json());

        setUsers(response);
    };

    useEffect(() => {
        getApiData();
    }, []);

    return (
        <div className="app">
        <h1 className='item-header'>Posts</h1>
        <div className='wrapper'>
        { users.map((user) => (
            
            <div className="item-container">
                
                    {/* {user.id}  */}
                    {user.publishedAt}
                <div className="title">
                    {user.title}
                </div>
                <div className="content">
                    {user.content}
                </div>
                <div className="image">
                    {user.imgSrc}
                </div>
                <div className='wrapper-icon'>
                    <div className='icon-like'>
                        <img src={Icon1}/>
                        <img src={Icon2}/>
                    </div>
                    <div className='icon-info'>
                        <img src={Icon3}/>
                        <p>...</p>
                    </div>
                </div>
            </div> 
             
        )) }
        </div>
    </div>
    )
}

export default App;
