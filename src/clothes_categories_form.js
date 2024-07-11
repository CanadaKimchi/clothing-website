// src/ClothingForm.js
import React, { useState, useEffect } from 'react';
import { categories, attributes } from './clothes_categories';

const ClothingForm = ({ onSubmit }) => {
  const [formState, setFormState] = useState({
    category: '',
    subcategory: '',
    color: '',
    pattern: '',
    fabric: '',
    season: '',
    occasion: ''
  });

  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    const selectedCategory = categories.find(cat => cat.name === formState.category);
    if (selectedCategory) {
      setSubcategories(selectedCategory.subcategories);
    } else {
      setSubcategories([]);
    }
  }, [formState.category]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formState);
    setFormState({
      category: '',
      subcategory: '',
      color: '',
      pattern: '',
      fabric: '',
      season: '',
      occasion: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Category:</label>
        <select name="category" value={formState.category} onChange={handleChange}>
          <option value="">Select Category</option>
          {categories.map(category => (
            <option key={category.name} value={category.name}>{category.name}</option>
          ))}
        </select>
      </div>
      {subcategories.length > 0 && (
        <div>
          <label>Subcategory:</label>
          <select name="subcategory" value={formState.subcategory} onChange={handleChange}>
            <option value="">Select Subcategory</option>
            {subcategories.map(subcategory => (
              <option key={subcategory} value={subcategory}>{subcategory}</option>
            ))}
          </select>
        </div>
      )}
      <div>
        <label>Color:</label>
        <select name="color" value={formState.color} onChange={handleChange}>
          <option value="">Select Color</option>
          {attributes.color.map(color => (
            <option key={color} value={color}>{color}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Pattern:</label>
        <select name="pattern" value={formState.pattern} onChange={handleChange}>
          <option value="">Select Pattern</option>
          {attributes.pattern.map(pattern => (
            <option key={pattern} value={pattern}>{pattern}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Fabric:</label>
        <select name="fabric" value={formState.fabric} onChange={handleChange}>
          <option value="">Select Fabric</option>
          {attributes.fabric.map(fabric => (
            <option key={fabric} value={fabric}>{fabric}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Season:</label>
        <select name="season" value={formState.season} onChange={handleChange}>
          <option value="">Select Season</option>
          {attributes.season.map(season => (
            <option key={season} value={season}>{season}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Occasion:</label>
        <select name="occasion" value={formState.occasion} onChange={handleChange}>
          <option value="">Select Occasion</option>
          {attributes.occasion.map(occasion => (
            <option key={occasion} value={occasion}>{occasion}</option>
          ))}
        </select>
      </div>
      <button type="submit">Add Clothing</button>
    </form>
  );
};

export default ClothingForm;
