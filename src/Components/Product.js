import React from "react";
import { AppFrame, ProductFrame, ProductImage, ProductImageWrapper, ProductInfoWrapper } from "./ProductStyle";

class Product extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            likes: 0,

          };
    }

    updateLikes = () => {


          this.setState((prevState, props) => {
            return {
              likes: prevState.likes + 1
            };
          });
      }
    
      // C'est l'endroit naturel pour définir l'objet d'état state basé sur les props initial.
      static getDerivedStateFromProps(props,state){
          console.log(props.product)
          return null;
      }
      //Le rendu du composant dans notre page html.
      componentDidMount(){
          console.log("Produit affiché sans erreur");
      }

      //cette methode et lancé lorsque une méthode est déclanché
      componentDidCatch(){
          console.error("un erreur se trouve au chargment du produit");
      }

    render(){
        return <AppFrame>
            <ProductFrame>
                <ProductImageWrapper>
                    <ProductImage src={this.props.product.img}></ProductImage>
                </ProductImageWrapper>
                <ProductInfoWrapper>
                    <div>{this.props.product.name}</div>
                    <div>{this.props.product.price}</div>
                    <div>Like :{this.state.likes}</div>
                    <button onClick={this.updateLikes}>like</button>
                </ProductInfoWrapper>
             </ProductFrame> 
            </AppFrame>
    }
}
export default Product;