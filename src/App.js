import './App.css';
import React, {PureComponent} from "react";
import PriceCard from "./components/PriceCards/PriceCard";
// import {dataPrice} from "./dataBase/dataPrice"
import SettingsCard from "./components/Setting/SettingsCard";
import Footer from "./components/footer/Footer";
import AddNewPrice from "./components/AddNewPrice/AddNewPrice";


class App extends PureComponent {
	state = {
		prices: [],
		widthValue: 8,
		heightValue: 4,
		nameFontSize: 15,
		priceFontSize: 20
	};

	componentDidMount() {
		// this.setState({
		// 	prices: dataPrice.prices
		// });
	}

	dispatchDataFile = (dataFile) => {
		this.setState({
			prices: dataFile.prices
		});
	};

	onChangeWidth = (value) => {
		this.setState({
			widthValue: value
		});
	};
	onChangeHeight = (value) => {
		this.setState({
			heightValue: value
		});
	};
	onChangeNameFontSize = (value) => {
		this.setState({
			nameFontSize: value
		});
	};
	onChangePriceFontSize = (value) => {
		this.setState({
			priceFontSize: value
		});
	};

	onDeletedCard = (id) => {
		const { prices } = this.state;
		const newCardArr = prices.filter(el => el.id !== id);
		this.setState({
			prices: newCardArr
		});
	};
	onAddNewItem = (id) => {
		this.setState(({prices}) => {
			console.log("###: prices: ", prices);
			const idx = prices.findIndex(item => item.id === id);
			console.log("###: index: ", idx);
			let newPrices = [...prices];
			newPrices.splice(idx + 1, 0, {
				id: prices.length++,
				name: "FAKE",
				price: "FAKE",
				edit: false
			});
			console.log("###: newPrices: ", newPrices);
			return {
				prices: newPrices
			};
		});
	};

	onAddNewPrice = (name = "", price = "") => {
		this.setState(({prices}) => {
			let newPrices = [...prices];
			newPrices.push({
				id: +new Date(),
				name: name,
				price: price,
				edit: false
			});
			return {
				prices: newPrices
			};
		});
	};

	render() {
	return (
			<div className="App">
				<header className="App-header">
					<div className="App-header-wrap">
						<div className="App-header-img">
						</div>
						<h3>Генератор ценников для Тимохи</h3>
						<p>Ver: 1.2.1</p>
						<a href="#configurator">
							<div className="App-header-btn">Начать работу</div>
						</a>
					</div>
				</header>

				<section id="configurator" className="App-section-settings">
					<SettingsCard onChangeWidth={this.onChangeWidth}
												onChangeHeight={this.onChangeHeight}
												onChangeNameFontSize={this.onChangeNameFontSize}
												onChangePriceFontSize={this.onChangePriceFontSize}
												dispatchDataFile={this.dispatchDataFile}
					/>
				</section>
				<section className="App-section-price">
					<PriceCard data={this.state.prices}
										 width={this.state.widthValue}
										 height={this.state.heightValue}
										 nameFontSize={this.state.nameFontSize}
										 priceFontSize={this.state.priceFontSize}
										 onDeletedCard={this.onDeletedCard}
										 onAddNewItem={this.onAddNewItem}
					/>

				</section>

				<section className="App-section-addNewPrice">
					<AddNewPrice onAddNewPrice={this.onAddNewPrice} />

				</section>
				<Footer />
			</div>
	);
}
}

export default App;
