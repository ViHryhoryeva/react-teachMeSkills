
import { useState, useEffect } from 'react';
import '/PostCard.css';

interface Props {
    id: number,
    publishedAt: number,
    title: string,
    content: string,
    imgSrc: string
}

const [users, setUsers] = useState([]);

// Функция для сохранения данных
const getApiData = async (props: Props) => {
    const {id, title, content, imgSrc} = props;

    const response = await fetch(
      "https://jsonplaceholder.org/posts"
    ).then((response) => response.json());
  
    // Обновим состояние
    setUsers(response);

    useEffect(() => {
        getApiData;
      }, []);

}

export default getApiData;