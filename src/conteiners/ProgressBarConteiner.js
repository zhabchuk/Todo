import React from 'react';
import { useSelector } from 'react-redux';
import ProgressBar from '../components/ProgressBar';
import { getCategory } from '../store/category/selectors';

export default function ProgressBarContainer() {
    const { category } = useSelector((state) => getCategory(state));
    const filterCategory = category.filter((item) => item.checked);
    const complitedCategory = (100 * filterCategory.length) / category.length;

    return <ProgressBar complitedCategory={complitedCategory}/>
};
    
