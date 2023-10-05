import React, { useState } from "react";
import "./listitem.css";
import { useNavigate } from "react-router-dom";

const ListItem = ({ item }) => {
    const navigate = useNavigate();
    const [id, setId] = useState(1);
    const clickedId = (e) => {
        setId(e);
        const selectedItem = item.find((ele) => ele.id === e);
        navigate(`/Item/${e}`, {state : {item : selectedItem}});
    };

    return (
        <ul className="itemList">
            {item.map((flower) => (
                <li
                    className="list"
                    onClick={() => clickedId(flower.id)}
                    key={flower.id}
                >
                    <div className="item">{flower.id}</div>
                    <div className="item">{flower.name}</div>
                </li>
            ))}
        </ul>
    );
};

export default ListItem;
