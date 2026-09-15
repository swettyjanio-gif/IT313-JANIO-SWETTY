  // Named Export: Calculates the average grade from prelim, midterm, and final scores
    export const computeAverage = (prelim, midterm, final) => {
        return (prelim + midterm + final) / 3;
    };

    // Default Export: Checks if the Calculated average meets or exceeds 75
    const isPassing = (average) => {
        return average >= 75;
    };

    export default isPassing;