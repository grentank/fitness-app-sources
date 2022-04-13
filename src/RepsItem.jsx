import React from 'react';

const RepsItem = ({exercises, setExercises, aSet, setInd, index}) => {
    return (
        <div className='set-reps'>
            <p>Reps</p>
            <input
                type="number"
                value={aSet.reps}
                onChange={e => setExercises(exercises.map((ex, i) =>
                    i === index
                        ? (ex.sets[setInd].reps = parseInt(e.target.value), ex)
                        : ex
                ))}
            />
        </div>
    );
};

export default RepsItem;