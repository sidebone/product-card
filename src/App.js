import React, { useState, useEffect } from 'react'
import { ChakraProvider, Heading, SimpleGrid, Center, Box } from "@chakra-ui/react"
import Product from './Product'
import './App.css'


function App () {
  
  const [ data, setData ] = useState( [] );
 
  
  useEffect( () => {
  
    getData()
    
  }, [] )

 //using fetch with arrow function 
  const getData = async () => {
    const api = "https://sideboneproductapi.herokuapp.com/products"
    const result = await fetch( api )
    const getResult = await result.json()
    setData( getResult )
    console.log(getResult)
  }

// console.log(data)
  return (
    <ChakraProvider>
      <Center>
        <Heading m="6" color="#fbb72c" textTransform="uppercase" >Product <Box as="span" color="#3aaaad">Card</Box> </Heading>
      </Center>
      

      <SimpleGrid columns={ [ 2, null, 3 ] } spacing={ 10 }>
        
      {data.map( ( product ) => (
        <Product
          heading={ product.heading }
          name={ product.name }
          description={ product.description }
          images={ product.images }
          price={ product.price }
          
          sale_price={ product.sale_price }

        />
      ) ) }
      </SimpleGrid>
    </ChakraProvider>
  );
}

export default App;
