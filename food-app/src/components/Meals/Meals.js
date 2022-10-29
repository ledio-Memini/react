import MealsSummary from './MealsSummary';
import AvailebleMeals from './AvailableMeals';
import { Fragment } from 'react';

const Meals = () => {
    return (
        <Fragment>
            <MealsSummary />
            <AvailebleMeals />
        </Fragment>
    )
};

export default Meals;