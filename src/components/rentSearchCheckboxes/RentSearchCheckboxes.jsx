import './RentSearchCheckboxes.scss';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export const RentSearchCheckboxes = () => {
    return (
      <>
        <div className="rental__search-container">
            <FormGroup>
                <FormControlLabel
                    className="rental__search-checkbox"
                    control={<Checkbox className="checkbox" defaultChecked />}
                    label="Мебель"
                />
                <FormControlLabel
                    className="rental__search-checkbox"
                    control={<Checkbox className="checkbox" defaultChecked />}
                    label="Паркинг"
                />
                <FormControlLabel
                    className="rental__search-checkbox"
                    control={<Checkbox className="checkbox" defaultChecked />}
                    label="Интернет"
                />
            </FormGroup>
        </div>
      </>
    );
}