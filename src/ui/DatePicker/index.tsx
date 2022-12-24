import { styled } from '@mui/material';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Dayjs } from 'dayjs';
import { forwardRef, useState } from 'react';

interface DatePickerProps {
  title: string;
}

const StyledDatePicker = styled(DatePicker)(() => ({
  width: '100%',
}));
// eslint-disable-next-line react/display-name
const CustomDatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  (props, ref) => {
    const [value, setValue] = useState<Dayjs | null>(null);

    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StyledDatePicker
          label={props.title}
          inputFormat="DD/MM/YYYY"
          views={['year', 'month', 'day']}
          value={value}
          maxDate={new Date()}
          onChange={(newValue: any) => {
            setValue(newValue);
          }}
          {...props}
          renderInput={(params) => (
            <TextField
              ref={ref}
              autoComplete="off"
              variant="outlined"
              {...params}
            />
          )}
        />
      </LocalizationProvider>
    );
  }
);
export { CustomDatePicker as DatePicker };
