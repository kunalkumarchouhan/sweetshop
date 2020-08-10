import React, { useState, useEffect } from 'react';
import { Dialog, Box, CloseButton, Img, ItemInfo, Anchor,
  CartButton, Select, ItemName, ItemPrice, Input, Small, Alert
} from './styled';
import { allowedPieces, allowedWeight } from '../../pages/shop/items';

const DialogBox = ({ close, data: {item, photo, units} }) => {
  const [ unitName, setUnitName ] = useState(units[0].unit);
  const [ quantity, setQuantity ] = useState(1);
  const [ error, handleError ] = useState(false);
  const [ processing, handleProcessing] = useState(false);
  const [ addedToCart, setAddedToCart ] = useState(false);
  const [ cost, setCost ] = useState(0);

  useEffect(() => {
    switch (unitName) {
      case 'Kg':
        setQuantity(1);
        break;
      case 'Piece':
        setQuantity(5);
        break;
      default:
    }
  }, [unitName]);

  useEffect(() => {
    switch (unitName) {
      case 'Piece':
        if (quantity < allowedPieces.min) {
          handleError(`Please order at least ${allowedPieces.min} pieces.`);
        }
        else if ( quantity > allowedPieces.max) {
          handleError(`Please order max ${allowedPieces.max} pieces.`);
        }
        else {
          handleError(false);
        }
        break;
      default:
    }
  }, [quantity, unitName]);

  useEffect(() => {
    setCost(units.filter(({unit}) => unit === unitName)[0].cost * quantity);
  });

  const addToCart = () => {
    if (!error) {
      handleProcessing(true);
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push({
        name: item,
        unit: unitName,
        quantity,
        pricePerUnit: units.filter(({unit}) => unit === unitName)[0].cost
      });
      localStorage.setItem("cart", JSON.stringify(cart));
      handleProcessing(false);
      setAddedToCart(true);
    }
  }

  return (
    <Dialog>
      {addedToCart && <Alert>Added To Cart</Alert>}
      <Box>
        <CloseButton onClick={close}>&times;</CloseButton>
        <Img src={photo} alt={item} />
        <ItemInfo>
          <ItemName>{item}</ItemName>
          <ItemPrice>
            Price:&nbsp;
            {
              units.map(({unit, cost}, idx) => `Rs. ${cost}/${unit} ${idx === units.length-1 ? '' : '| ' }`)
            }
          </ItemPrice>
          <Select defaultValue={unitName} onChange={e => setUnitName(e.target.value)}>
            <option disabled value={0}>Select Unit</option>
            {
              units.map(({unit}, idx) => (
                <option value={unit} key={idx}>{unit}</option>
              ))
            }
          </Select>
          { error && <Small error>{error}</Small> }
          {
            (unitName !== 0) && (unitName === 'Kg')
              ? <Select value={quantity} onChange={e => setQuantity(e.target.value)}>
                  <option disabled value={0}>Select Quantity</option>
                  {
                    allowedWeight.map((weight, idx) => (
                      <option value={weight} key={idx}>{weight} {unitName}</option>
                    ))
                  }
                </Select>
              : <Input type="number"
                  min={allowedPieces.min} 
                  max={allowedPieces.max}
                  value={quantity}
                  onChange={e => setQuantity(e.target.value)}
                />
          }
          <Small>
            Cost: Rs. {cost} only.<br/>
          </Small>
          {
            addedToCart
              ? <Anchor to="/cart">CheckOut</Anchor>
              : <CartButton onClick={addToCart} disabled={processing}>
                  { processing ? 'Adding...' : 'Add to Cart' }
                </CartButton>
          }
        </ItemInfo>
      </Box>
      {
        addedToCart &&
        <Box>
          <CartButton block onClick={close}>Shop More</CartButton>
        </Box>
      }
    </Dialog>
  );
}

export default DialogBox;
