import React, { useState } from "react";

function NewCarForm({ setListings }) {
    const [formData, setFormData] = useState({})

    function handleInputChange(e) {
        const { name, value } = e.target
        setFormData((prevData) => ({ ...prevData, [name]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        setListings((prevListings) => [...prevListings, formData])
        setFormData({})
    }

    return (
        <div className="new-car-form">
            <form onSubmit={handleSubmit}>
                <h2>Sell Your Car Here! 🚗</h2>
                <input type="text" name="type" placeholder="Type" value={formData.type} onChange={handleInputChange} />
                <input type="text" name="year" placeholder="Year" value={formData.year} onChange={handleInputChange} />
                <input type="text" name="make" placeholder="Make" value={formData.make} onChange={handleInputChange} />
                <input type="text" name="model" placeholder="Model" value={formData.model} onChange={handleInputChange} />
                <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleInputChange} />
                <input type="text" name="price" placeholder="Price" value={formData.price} onChange={handleInputChange} />
                <button type="submit">Sell!</button>
            </form>
        </div>
    )
}

export default NewCarForm;


