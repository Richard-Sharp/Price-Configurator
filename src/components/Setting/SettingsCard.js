import React, {useState} from "react";
import style from "./SettingsCard.module.css"


const SettingsCard = (props) => {
	let widthRef = React.createRef();
	let heightRef = React.createRef();
	let nameFontRef = React.createRef();
	let priceFontRef = React.createRef();



	const [editModeBtn, setEditModeBtn] = useState(true);
	const [resultDataFile, setResultDataFile] = useState([]);

	const onChangeValues = (ref, func, min, max) => {
		if (ref.current.value < min) {
			func(min);
		} else if (ref.current.value > max) {
			func(max);
		} else {
			func(ref.current.value);
		}
	};

	const onUploadFile = (e) => { // - загрузка файла с ПК (.txt)
		//Чтение информации из файла (.txt)
		let file = e.target.files[0];
		let reader = new FileReader();
		reader.readAsText(file); // - считывает данные как строку (utf-8)

		reader.onload = function() { // - load – нет ошибок, чтение окончено;
			let resultDataFileJSON = reader.result;
			setResultDataFile(JSON.parse(resultDataFileJSON)); // - парсит JSON в массив;
			console.log('###: Загрузка данных прошла успешно: ', resultDataFileJSON);

			setEditModeBtn(false);
		};
		//обработка ошибки чтения:
		reader.onerror = function() {
			console.log(reader.error);
			setEditModeBtn(true);
		};
	};

	const onDispatchDataFile = () => {
			if (resultDataFile !== null) {
			props.dispatchDataFile(resultDataFile);
			setEditModeBtn(true);
			console.log("###: Данные отправлены: ", resultDataFile);
		}
	};

	return (
			<div className={style.fileModule}>

				<div className={style.uploadFile}>
					<p>Для загрузки данных выберите файл в формате .JSON</p>
					<input type="file" id='photo'
								 onChange={(e) => {onUploadFile(e)}}/>
					<button onClick={onDispatchDataFile} disabled={editModeBtn}>Загрузить цены</button>
				</div>

			<div className={style.wrap}>
				<div className={style.width}>
					<p>Ширина, см:</p>
					<input onChange={() => {
						onChangeValues(widthRef, props.onChangeWidth, 3, 20)}}
								 ref={widthRef}
								 defaultValue={8}
								 type="number" name="cardWidth" min="3" max="20" step="0.5"/>
				</div>
				<div className={style.height}>
					<p>Высота, см: </p>
					<input onChange={() => {
						onChangeValues(heightRef, props.onChangeHeight, 1, 20)}}
								 ref={heightRef}
								 defaultValue={4}
								 type="number" name="cardHeighth" min="1" max="20" step="0.5"/>
				</div>
			</div>

				<div className={style.fontSizeWrap}>
					<div className={style.nameFont}>
						<p>Шрифт (наименование), px: </p>
						<input onChange={() => {
							onChangeValues(nameFontRef, props.onChangeNameFontSize, 2, 30)}}
									 ref={nameFontRef}
									 defaultValue={15}
									 type="number" name="nameFontize" min="2" max="30" step="1"/>
					</div>
					<div className={style.priceFont}>
						<p>Шрифт (цена), px: </p>
						<input onChange={() => {
							onChangeValues(priceFontRef, props.onChangePriceFontSize, 5, 40)}}
									 ref={priceFontRef}
									 defaultValue={20}
									 type="number" name="priceFontSize" min="5" max="40" step="1"/>
					</div>
				</div>
			</div>
	)
};

export default SettingsCard;