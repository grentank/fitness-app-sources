import React from 'react';
import WeightItem from "./WeightItem";
import RepsItem from "./RepsItem";

const SetItem = ({exercises, setExercises, setInd, aSet, index}) => {
    return (
        <div className='set'>
            <WeightItem
                exercises={exercises}
                setExercises={setExercises}
                setInd={setInd}
                aSet={aSet}
                index={index}
            />
            <RepsItem
                exercises={exercises}
                setExercises={setExercises}
                setInd={setInd}
                aSet={aSet}
                index={index}
            />
        </div>
    );
};

export default SetItem;