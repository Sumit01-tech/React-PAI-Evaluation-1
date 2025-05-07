import { useRef, useState } from "react"

const GroceryList = () => {
    const [items, setItems] = useState(["Apple", "Banana", "Cherry", "Date"]);
    const [searchTerm, setSearchTerm] = useState("");
    const newItemRef = useRef(null);
    const searchInputRef = useRef(null);

    //Add functionality
    const handleAddItem = () => {
        const newItem = newItemRef.current.value.trim();
        if (newItem && !items.includes(newItem)) {
            setItems([...items, newItem]);
            newItemRef.current.value = "";
        }
    };

    //Remove functionality
    const handleRemoveItem = (itemToRemove) => {
        setItems(items.filter(item => item !== itemToRemove));
    };

    //Reset functionality
    const handleResetSearch = () => {
        setSearchTerm("");
        searchInputRef.current.value = "";
        searchInputRef.current.focus();
    };

    return (
        <div>
            <h1>Grocery List Manager</h1>
            <div>
                <input type="text" ref={searchInputRef} placeholder="Search fruits" onChange={(e) => setSearchTerm(e.target.value)} />
                <button onClick={handleResetSearch}>Reset</button>
            </div>
            <div>
                <input type="text" ref={newItemRef} placeholder="Add new fruits" />
                <button onClick={handleAddItem}>Add</button>
            </div>
            <ul>
                <li>
                    <button onClick={() => handleRemoveItem(item)}>X</button>
                </li>
            </ul>
        </div>
    )
}

export default GroceryList;