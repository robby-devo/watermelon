import React from "react";
import styles from "./DatePicker.module.scss";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

interface IDatePickerProps {
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
  handleDateChange: (date: Date | null) => void;
  errorMessage?: string;
  label?: string;
}

const DatePickerComponent = ({
  date,
  setDate,
  handleDateChange,
  errorMessage,
  label,
}: IDatePickerProps) => {
  const currentDate = new Date();
  date = date ?? currentDate;
  const handleChange = (selectedDate: Date | null) => {
    if (selectedDate) {
      const adjustedDate = new Date(selectedDate.toLocaleString());
      setDate(adjustedDate);
      // console.log(adjustedDate, "adjustedDate");
    }
    handleDateChange(selectedDate);
  };

  return (
    <div className={styles.datePickerContainer}>
      {label && (
        <p className={date < currentDate ? styles.error : styles.label}>
          {label} <sup>*</sup>
        </p>
      )}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
         data-testid="datePicker"
          dayOfWeekFormatter={(day) => day}
          disablePast
          onChange={handleChange}
          showDaysOutsideCurrentMonth
        />
      </LocalizationProvider>
      <p
        data-testid="errorMessage"
        className={date < currentDate ? styles.errorMessage : styles.helperText}
      >
        {date < currentDate && errorMessage}
      </p>
    </div>
  );
};

export default DatePickerComponent;
