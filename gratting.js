// grading system in javascript
// Function to calculate the letter grade
function calculateGrade(score) {
      if (score >= 90) {
        return "A";
      } else if (score >= 80) {
        return "B";
      } else if (score >= 70) {
        return "C";
      } else if (score >= 60) {
        return "D";
      } else {
        return "F";
      }
    }
    
    // Example usage:
    const testScore = 85;
    const grade = calculateGrade(testScore);
    console.log(`Your grade is ${grade}`);
    