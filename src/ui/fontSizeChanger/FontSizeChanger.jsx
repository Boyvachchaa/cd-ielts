import { useSelector, useDispatch } from 'react-redux';

import {setSizeOption} from '../../slice/fontSlice'

const FontSizeChanger = () => {
  const sizeOption = useSelector(state => state.font.sizeOption);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setSizeOption(e.target.value));
  };

  return (
    <div>
      <select value={sizeOption} onChange={handleChange}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>
  );
};

export default FontSizeChanger;
