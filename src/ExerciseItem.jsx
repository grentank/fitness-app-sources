import React from 'react';
import ExerciseTitle from "./ExerciseTitle";
import SetItem from "./SetItem";

const ExerciseItem = ({exercises, setExercises, exercise, index}) => {
    return (
        <div className='exercises-wrapper'>
            <ExerciseTitle
                exercises={exercises}
                setExercises={setExercises}
                exercise={exercise}
                index={index}
            />
            <div className='exercise-content'>
                {exercise.sets.map((aSet, setInd) =>
                    <SetItem
                        key={setInd}
                        exercises={exercises}
                        setExercises={setExercises}
                        setInd={setInd}
                        aSet={aSet}
                        index={index}
                    />
                )}
                <div className='set-buttons'>
                    <button
                        onClick={e => setExercises(exercises.map((ex, i) =>
                            i === index ? (ex.sets.push({weight: 0, reps: 0}), ex) : ex
                        ))}
                        style={{background: '#2196F3'}}
                    >+</button>
                    <button
                        onClick={e => setExercises(exercises.map((ex, i) =>
                            i === index ? (ex.sets.splice(-1), ex) : ex // splice Сделать
                        ))}
                        style={{background: '#F44336'}}
                    >-</button>
                </div>
            </div>
        </div>
    );
};

export default ExerciseItem;