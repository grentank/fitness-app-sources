import React from 'react';

const WeightItem = ({exercises, setExercises, aSet, setInd, index}) => {
    return (
        <div className='set-weight'>
            <p>Weight</p>
            <input
                type="number"
                value={aSet.weight}
                onChange={e => setExercises(exercises.map((ex, i) =>
                    i === index
                        ? (ex.sets[setInd].weight = parseFloat(e.target.value), ex)
                        : ex
                ))}
            />
        </div>
    );
};

export default WeightItem;