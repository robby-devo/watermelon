import React from "react";
import styles from "./RangeDatePicker.module.scss";
import DatePickerComponent from "../datePicker/DatePicker";

interface IRangeDatePickerProps {
  startlabel?: string;
  endlabel?: string;
  startDate: Date;
  setStartDate: React.Dispatch<React.SetStateAction<Date>>;
  endDate: Date;
  setEndDate: React.Dispatch<React.SetStateAction<Date>>;
  handleStartDateChange: (date: Date | null) => void;
  handleEndDateChange: (date: Date | null) => void;
  errorMessage?: string;
  isInvalidDateRange?: boolean;
}

const RangeDatePicker = ({
  startlabel,
  endlabel,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  handleStartDateChange,
  handleEndDateChange,
  errorMessage,
  isInvalidDateRange,
}: IRangeDatePickerProps) => {
  const currentDate = new Date();
  startDate = startDate ?? currentDate;
  endDate = endDate ?? currentDate;

  return (
    <div className={styles.container}>
      <div className={styles.individualDateContainer}>
        {startlabel && (
          <p
            data-testid="startLabel"
            className={isInvalidDateRange ? styles.error : styles.label}
          >
            {startlabel} <sup>*</sup>
          </p>
        )}
        <DatePickerComponent
          data-testid="datePickerStart"
          date={startDate}
          setDate={setStartDate}
          handleDateChange={handleStartDateChange}
        />
        {isInvalidDateRange && (
          <p data-testid="errorMessageRange" className={styles.errorMessage}>
            {errorMessage}
          </p>
        )}
      </div>
      <div className={styles.individualDateContainer}>
        {endlabel && (
          <p
            data-testid="endLabel"
            className={isInvalidDateRange ? styles.error : styles.label}
          >
            {endlabel} <sup>*</sup>
          </p>
        )}
        <DatePickerComponent
          date={endDate}
          setDate={setEndDate}
          handleDateChange={handleEndDateChange}
        />
      </div>
      <div className={styles.seperator}></div>
    </div>
  );
};

export default RangeDatePicker;

// implementation of date range picker in the parent component

// const [selectedDate, setSelectedDate] = useState<any>();
// const [startChanged, setStartChanged] = useState(false);
// const [endChanged, setEndChanged] = useState(false);

// const handleDateChange = (date: Date | null) => {
//   if (date) {
//     setSelectedDate(date);
//   }
// };

// const [startDate, setStartDate] = useState<any>();
// const [endDate, setEndDate] = useState<any>();
// const handleStartDateChange = (selectedDate: Date | null) => {
//   if (selectedDate) {
//     const adjustedDate = new Date(selectedDate.toLocaleString());
//     setStartDate(adjustedDate);
//     setStartChanged(true);
//   }
// };
// const handleEndDateChange = (selectedDate: Date | null) => {
//   if (selectedDate) {
//     const adjustedDate = new Date(selectedDate.toLocaleString());
//     setEndDate(adjustedDate);
//     setEndChanged(true);
//   }
// };
// const isInvalidDateRange =
//   startChanged && endChanged && endDate.getTime() < startDate.getTime();
// console.log(isInvalidDateRange, "isInvalidDateRange");
