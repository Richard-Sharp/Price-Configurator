import React from "react";
import style from "./AddNewPrice.module.css"


const AddNewPrice = (props) => {
	let nameRef = React.createRef();
	let priceRef = React.createRef();

	const onAddNewPriceItem = () => {
		console.log(nameRef.current.value);
		console.log(priceRef.current.value);
		props.onAddNewPrice(nameRef.current.value, priceRef.current.value);
	};

	return (
			<div className={style.main}>
				<div className={style.wrap}>
					<div className={style.name}>
						<p>Наименование товара:</p>
						<textarea ref={nameRef}
											name="cardname"/>
					</div>
					<div className={style.price}>
						<p>Цена товара, BYN:</p>
						<input ref={priceRef}
									 type="text" name="cardprice"/>
					</div>
				</div>

				<div className={style.btn}>
					<button className={style.btnNew} onClick={onAddNewPriceItem}>Добавить</button>
				</div>

			</div>
	)
};

export default AddNewPrice;