// import Product from './ProductData'
// import './App.css'
// import ProductData from './ProductData'
import classes from './App.module.css'
import ProductPreview from './ProductPreview/ProductPreview';
import ProductDetails from './ProductDetails/ProductDetails';
import TopBar from './TopBar/TopBar';
import React,{ Component } from 'react';
import ProductData from './Utility/ProductData';



class App extends Component {

  state={
    productData:ProductData,
    currentPreviewImagePos: 0,
    currentSelectedFeature: 0,
  }

  onColorOptionClick=(pos)=>{
    // const updatedPreviewImage=this.state.productData.colorOptions[pos].imageUrl
    this.setState({currentPreviewImagePos:pos});
  }

  onFeatureItemClick=(pos)=>{
      this.setState({currentSelectedFeature:pos})
  }

  render()
  {
    return (
      <div className="App">
          <TopBar/>        
        <div className={classes.MainContainer}>
  
          <div className={classes.ProductPreview}>
              <ProductPreview currentPreviewImage={this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl} currentSelectedFeature={this.state.currentSelectedFeature} />
          </div>
  
              <div className={classes.ProductData}>
                  <ProductDetails data={this.state.productData} onColorOptionClick={this.onColorOptionClick} currentPreviewImagePos={this.state.currentPreviewImagePos} onFeatureItemClick={this.onFeatureItemClick} currentSelectedFeature={this.state.currentSelectedFeature} />
              </div>
          </div>
        </div>
      
    );
  }

}

export default App
