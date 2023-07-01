import React from 'react';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/filter/selectors';
import { changeFilter } from 'redux/filter/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  return (
    <label>
      Find contacts by name
      <input
        className={css.text}
        type="text"
        value={filter}
        onChange={event => dispatch(changeFilter(event.target.value))}
        name="filter"
      />
    </label>
  );
};
