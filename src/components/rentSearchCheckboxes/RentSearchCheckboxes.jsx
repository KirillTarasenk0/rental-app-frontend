import './RentSearchCheckboxes.scss';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export const RentSearchCheckboxes = ({handleFurnished, handleInternet, handleParking}) => {
    return (
      <>
        <div className="rental__search-container">
            <FormGroup>
                <FormControlLabel
                    className="rental__search-checkbox"
                    control={
                        <Checkbox
                            className="checkbox"
                            onChange={handleFurnished}
                        />
                    }
                    label="Мебель"
                />
                <FormControlLabel
                    className="rental__search-checkbox"
                    control={
                        <Checkbox
                            className="checkbox"
                            onChange={handleParking}
                        />
                }
                    label="Паркинг"
                />
                <FormControlLabel
                    className="rental__search-checkbox"
                    control={
                        <Checkbox
                            className="checkbox"
                            onChange={handleInternet}
                        />
                    }
                    label="Интернет"
                />
            </FormGroup>
        </div>
      </>
    );
}