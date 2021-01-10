import './App.css';
import React, {PureComponent} from "react";
import PriceCard from "./components/PriceCards/PriceCard";
// import {dataPrice} from "./dataBase/dataPrice"
import SettingsCard from "./components/Setting/SettingsCard";
import Footer from "./components/footer/Footer";


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
			 const newPrices = [...prices];
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

	render() {
	return (
			<div className="App">
				<header className="App-header">
					<h3>Генератор ценников для Тимохи</h3>
					<h6>Ver: 1.0.1</h6>

				</header>
				<section className="App-section-settings">
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
				<Footer />
			</div>
	);
}
}

export default App;
