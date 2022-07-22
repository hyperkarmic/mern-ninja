const WorkoutDetails = ({ workout }) => {
  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg):{workout.load}</strong>
      </p>
      <p>
        <strong>Number of reps:</strong>
        {workout.reps}
      </p>
      <p>{workout.createdAt}</p>
    </div>
  );
};
export default WorkoutDetails;
