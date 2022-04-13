import React from 'react';

const ExerciseTitle = ({exercises, setExercises, exercise, index}) => {
    return (
        <div className='exercise-title'>
            <div>
                {index+1}
            </div>
            <input
                placeholder='Exercise'
                type="text"
                value={exercise.name}
                onChange={e => setExercises(exercises.map((ex, i) =>
                    i === index
                        ? (ex.name = e.target.value, ex)
                        : ex
                ))}
            />
            <button
                style={{background: '#F44336'}}
                onClick={() =>
                    window.confirm('Delete exercise?')
                    ? setExercises(exercises.filter((e,i) => i !== index))
                    : console.log('Canceled deletion')}
            >&times;</button>
        </div>
    );
};

export default ExerciseTitle;