import React, {useState} from "react";
import style from "./PriceTag.module.css"


const PriceTag = ({name, price, edit = false, width, height, onDeletedItem, onAddNewItem, priceFontSize,nameFontSize}) => {
	// const [br, setBr] = useState([]);
	const styles = {
		width: `${width}cm`,
		height: `${height}cm`
	};

	const nameFontStyles = {
		fontSize: `${nameFontSize}px`,
	};
	const priceFontStyles = {
		fontSize: `${priceFontSize}px`,
	};

	const [editMode, setEditMode] = useState(false);


	return (
			<>
				<div className={style.wrap} style={styles}>
					<div className={style.name} style={nameFontStyles} contentEditable={editMode}
							 onDoubleClick={() => setEditMode('')}
							 onBlur={() => setEditMode(false)}>
						{name}
					</div>
					<div className={style.priceWrap}>
						<div className={style.add}
								 onClick={onAddNewItem}
						> </div>
						<div className={style.price} style={priceFontStyles} contentEditable={editMode}
								 onDoubleClick={() => setEditMode('')}
								 onBlur={() => setEditMode(false)}>
							{`${price} BYN`}
						</div>

						<div className={style.delete}
								 onClick={onDeletedItem}
						> </div>
					</div>
				</div>
			</>

	)
};

export default PriceTag;