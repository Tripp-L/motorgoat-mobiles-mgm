import React from "react";
import CarCard from "./CarCard";

function CarList({ listings, searchTerm }) {
    const filteredListings = listings?.filter(car =>
        (car.type && car.type.toLowerCase().includes(searchTerm?.toLowerCase())) ||
        (car.make && car.make.toLowerCase().includes(searchTerm?.toLowerCase())) ||
        (car.model && car.model.toLowerCase().includes(searchTerm?.toLowerCase())) ||
        (car.price && car.price.toLowerCase().includes(searchTerm?.toLowerCase()))
    );

    return (
        <ul className="car-list">
            {filteredListings.map(car => (
                <CarCard key={car.id} {...car} />
            ))}
        </ul>
    )
}

export default CarList;

