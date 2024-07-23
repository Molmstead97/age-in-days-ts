import React from "react";
import { useState } from "react";

import styles from "./Calculator.module.css";

const Calculator: React.FC = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState<number | string>();
  const [ageInDays, setAgeInDays] = useState<number | null>(null);

  const isNumber = (num: string): boolean => /^\d+$/.test(num);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (typeof age === "number") {
      setAgeInDays(Number(age) * 365);
    } else {
      alert("Please enter a number");
    }
  };

  const handleAgeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const newAge = event.target.value;
    if (newAge === "") {
      setAge("");
    } else if (isNumber(newAge)) {
      setAge(Number(newAge));
    }
  };

  return (
    <>
      <div className={styles.calculator}>
        <form className={styles.calculatorForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              id="name"
              value={name}
              placeholder="Enter your name"
              onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
                setName(event.target.value)
              }
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="age">Age: </label>
            <input
              type="number"
              id="age"
              value={age}
              placeholder="Enter age in years"
              onChange={handleAgeChange}
            />
          </div>
          <button type="submit">Convert</button>
        </form>
        {/* This checks if ageInDays is more than zero, and if so displays the tag */}
        {ageInDays && (
          <h2>
            {name ? name : "Anonymous"} is {ageInDays} days old
          </h2>
        )}
      </div>
    </>
  );
};

export default Calculator;
