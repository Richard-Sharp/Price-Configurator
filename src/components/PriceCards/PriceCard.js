import React from "react";
import style from "./PriceCard.module.css"
import PriceTag from "./PriceTag/PriceTag";



const PriceCard = (props) => {

	return (
			<div className={style.main}>

				{props.data.length
						? <div className={style.wrap}>
							{props.data.map((el) => (
									<PriceTag key={el.id}
														name={el.name}
														price={el.price}
														width={props.width}
														height={props.height}
														nameFontSize={props.nameFontSize}
														priceFontSize={props.priceFontSize}
														onDeletedItem={() => {
															props.onDeletedCard(el.id)
														}}
														onAddNewItem={() => props.onAddNewItem(el.id)}
									/>
							))}
						</div>
						: <div className={style.data}> <p>Нет данных...</p></div>
				}
			</div>
	)
};

export default PriceCard;