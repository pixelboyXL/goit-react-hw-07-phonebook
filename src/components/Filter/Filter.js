import { LabelFilter, InputFilter } from "components/Filter/Filter.styled";
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selector';
import { setFilter } from "redux/reducer";

export const Filter = () => {
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    return (
        <LabelFilter>Find contacts by name
            <InputFilter
                type="text"
                name="filter"
                title="The ability to filter the contact book"
                required
                value={filter}
                onChange={(event) => dispatch(setFilter(event.target.value))}
            />
        </LabelFilter>
    );
};