import React from 'react'
import { Box, Image, Text } from "@chakra-ui/react"

const Product = ({ heading, name, description, images, price, sale_price }) => {
  return (
    
    
        <Box maxW="sm" borderWidth="1px" borderRadius="5px" overflow="hidden" margin="10px" bg="#3aaaad"  boxShadow="2xl">

          <Box color="white" bg="tomato" w="50px" pos="absolute" mt="4" pl="2">Hot</Box>
          
          <Image src={ images } alt="Product" align="center" w="sm" h="350px" />

          

      <Box p="10">
        <Box d="flex" alignItems="baseline">
          
          <Box
            color="gray.300"
            fontWeight="bold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            
          >
            { name }
          </Box>
        </Box>

        <Box
          mt="1"
          color="gray.200"
          fontWeight="bold"
          as="h3"
          lineHeight="tight"
          isTruncated
              fontSize="lg"
              _hover={{color:"#fbb72c",
  }}
        >
          {heading}
        </Box>

        <Box d="flex" mt="2" alignItems="center" color="gray.300">
          {description}
        </Box>

         <Box d="flex" mt="2" alignItems="center" color="#fbb72c;">
          <Text as="s" fontSize="xs">{price}</Text>
          <Box as="span" ml="2" color="#fbb72c;" fontSize="lg" fontWeight="700">
             {sale_price}
          </Box>
        </Box>
      </Box>


      </Box>
      
      
  )
}

export default Product