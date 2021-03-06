//	Redux
import { useSelector, useDispatch } from 'react-redux';

//Actions
import {
	getProps as listProps,
	getPropsByCat,
} from '../redux/actions/propActions';

import { updateCategory } from '../redux/actions/categoryActions';

const PropscreenNavigation = () => {
	const dispatch = useDispatch();
	const { cat } = useSelector(state => state.currentCategory);

	//	Handlers
	const searchByCategoryHandler = (p, q1, q2, q3, q4) => {
		dispatch(getPropsByCat(p, q1, q2, q3, q4));
	};

	const searchAllHandler = () => {
		dispatch(listProps());
	};

	const updateCurrentCategoryHandler = cat => {
		dispatch(updateCategory(cat));
	};

	return (
		<>
			<div className="propsscreen__links">
				<div className="propsscreen__linksone">
					<ul>
						<li
							// tabIndex="0"
							className={cat === 'all' ? 'selected' : ''}
							onClick={() => {
								searchAllHandler();
								updateCurrentCategoryHandler('all');
							}}
						>
							All
						</li>
						<li
							// tabIndex="0"
							className={cat === 'marbleAndStone' ? 'selected' : ''}
							onClick={() => {
								searchByCategoryHandler(1, 'ST', 'M');
								updateCurrentCategoryHandler('marbleAndStone');
							}}
						>
							Marble &amp; Stone
						</li>
						<li
							// tabIndex="0"
							className={cat === 'metalSurfaces' ? 'selected' : ''}
							onClick={() => {
								searchByCategoryHandler(1, 'MS');
								updateCurrentCategoryHandler('metalSurfaces');
							}}
						>
							Metal Surfaces
						</li>
						<li
							// tabIndex="0"
							className={cat === 'misc' ? 'selected' : ''}
							onClick={() => {
								searchByCategoryHandler(1, 'MM', 'MO', 'MW', 'MCT');
								updateCurrentCategoryHandler('misc');
							}}
						>
							Miscellaneous
						</li>
						<li
							// tabIndex="0"
							className={cat === 'paintedBackgrounds' ? 'selected' : ''}
							onClick={() => {
								searchByCategoryHandler(1, 'PB');
								updateCurrentCategoryHandler('paintedBackgrounds');
							}}
						>
							Painted Backgrounds
						</li>
					</ul>
				</div>
				<div className="propsscreen__linkstwo">
					<ul>
						<li
							// tabIndex="0"
							className={cat === 'paintedMetalTables' ? 'selected' : ''}
							onClick={() => {
								searchByCategoryHandler(1, 'PMT');
								updateCurrentCategoryHandler('paintedMetalTables');
							}}
						>
							Painted Metal Tables
						</li>
						<li
							// tabIndex="0"
							className={cat === 'paintedWoods' ? 'selected' : ''}
							onClick={() => {
								searchByCategoryHandler(1, 'PWS');
								updateCurrentCategoryHandler('paintedWoods');
							}}
						>
							Painted Woods
						</li>
						<li
							// tabIndex="0"
							className={cat === 'tables' ? 'selected' : ''}
							onClick={() => {
								searchByCategoryHandler(1, 'T');
								updateCurrentCategoryHandler('tables');
							}}
						>
							Tables
						</li>
						<li
							// tabIndex="0"
							className={cat === 'woodBoards' ? 'selected' : ''}
							onClick={() => {
								searchByCategoryHandler(1, 'BB', 'IPB');
								updateCurrentCategoryHandler('woodBoards');
							}}
						>
							Wood Boards
						</li>
						<li
							// tabIndex="0"
							className={cat === 'woodTableTops' ? 'selected' : ''}
							onClick={() => {
								searchByCategoryHandler(1, 'WTT');
								updateCurrentCategoryHandler('woodTableTops');
							}}
						>
							Wood Table Tops
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default PropscreenNavigation;
