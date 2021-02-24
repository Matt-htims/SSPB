//	Redux
import { useSelector, useDispatch } from 'react-redux';

//Actions
import {
	getProps as listProps,
	getPropsByCat,
} from '../redux/actions/propActions';

import { updateCategory } from '../redux/actions/categoryActions';

const PropscreenMobileNavigation = () => {
	const dispatch = useDispatch();
	const { cat } = useSelector(state => state.currentCategory);

	//Update redux state from mobile dropdown function
	const mobileUpdate = cat => {
		if (cat === 'all') {
			searchAllHandler();
		} else {
			switch (cat) {
				case 'marbleAndStone':
					searchByCategoryHandler(1, 'ST', 'M');
					break;
				case 'metalSurfaces':
					searchByCategoryHandler(1, 'MS');
					break;
				case 'misc':
					searchByCategoryHandler(1, 'MM', 'MO', 'MW', 'MCT');
					break;
				case 'paintedBackgrounds':
					searchByCategoryHandler(1, 'PB');
					break;
				case 'paintedMetalTables':
					searchByCategoryHandler(1, 'PMT');
					break;
				case 'paintedWoods':
					searchByCategoryHandler(1, 'PWS');
					break;
				case 'tables':
					searchByCategoryHandler(1, 'T');
					break;
				case 'woodBoards':
					searchByCategoryHandler(1, 'BB', 'IPB');
					break;
				case 'woodTableTops':
					searchByCategoryHandler(1, 'WTT');
					break;
			}
		}
	};

	//	Handlers
	const searchByCategoryHandler = (p, q1, q2, q3, q4) => {
		dispatch(getPropsByCat(p, q1, q2, q3, q4));
	};

	const searchAllHandler = () => {
		dispatch(listProps());
	};

	return (
		<>
			<div className="propsscreen__mobile-links">
				<div className="select">
					<select
						onChange={e => {
							const dropdownCat = e.target.value;
							dispatch(updateCategory(dropdownCat));
							mobileUpdate(dropdownCat);
						}}
						value={cat}
						name="category"
						id="category-select"
					>
						<option value="all">All</option>
						<option value="marbleAndStone">Marble &amp; Stone</option>
						<option value="metalSurfaces">Metal Surfaces</option>
						<option value="misc">Miscellaneous</option>
						<option value="paintedBackgrounds">Painted Backgrounds</option>
						<option value="paintedMetalTables">Painted Metal Tables</option>
						<option value="paintedWoods">Painted Woods</option>
						<option value="tables">Tables</option>
						<option value="woodBoards">Wood Boards</option>
						<option value="woodTableTops">Wood Table Tops</option>
					</select>
					<span className="focus"></span>
				</div>
			</div>
		</>
	);
};

export default PropscreenMobileNavigation;
