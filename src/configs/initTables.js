const pool = require("../services/db");

const SQLSTATEMENT = `
DROP TABLE IF EXISTS UserAnswer;
DROP TABLE IF EXISTS User;
DROP TABLE IF EXISTS SurveyQuestion;

CREATE TABLE User (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username TEXT,
    points INT
);

CREATE TABLE UserAnswer (
    answer_id INT AUTO_INCREMENT PRIMARY KEY,
    answered_question_id INT NOT NULL,
    participant_id INT NOT NULL,
    answer BOOL NOT NULL,
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    additional_notes TEXT
);

CREATE TABLE SurveyQuestion (
    question_id INT AUTO_INCREMENT PRIMARY KEY,
    creator_id INT NOT NULL,
    question TEXT NOT NULL
);

INSERT INTO SurveyQuestion (question_id, creator_id, question) VALUES
(1, 1, 'Do you buy fruits from FC6?'),
(2, 1, 'Is the fried chicken at FC5 salty?'),
(3, 2, 'Did you recycled any e-waste?'),
(4, 2, 'Do you turn off lights and appliances when not in use?'),
(5, 2, 'Have you visit the cafe at Moberly?');

`;



pool.query(SQLSTATEMENT, (error, results, fields) => {
    if (error) {
      console.error("Error creating tables:", error);
    } else {
      console.log("Tables created successfully");
    }
    process.exit();
  });