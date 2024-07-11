// src/closet_page.js
import React, { useState, useEffect } from 'react';
import ClothingForm from './clothes_categories_form';

const AddClothingPage = () => {
  const [clothes, setClothes] = useState(JSON.parse(localStorage.getItem('clothes')) || []);
  const [showForm, setShowForm] = useState(false);

  const addClothing = (clothing) => {
    const updatedClothes = [...clothes, clothing];
    setClothes(updatedClothes);
    localStorage.setItem('clothes', JSON.stringify(updatedClothes));
  };

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <h1>My Clothes</h1>
      <ul>
          {clothes.map((clothing, index) => (
            <li key={index}>
              {clothing.category} - {clothing.subcategory} - {clothing.color} - {clothing.pattern} - {clothing.fabric} - {clothing.season} - {clothing.occasion}
            </li>
          ))}
        </ul>
      <button onClick={handleToggleForm}>{showForm ? 'Hide' : 'Add New Clothes'}</button>
      {showForm && (
        <ClothingForm onSubmit={addClothing} />
      )}
    
    </div>
  );
};

export default AddClothingPage;