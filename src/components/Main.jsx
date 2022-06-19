import {Box,Text,Button, Image} from '@cmpsr/components';
import arrowV from '../assets/arrow.svg'
import DesignCatalog from './DesignCatalog'
import MarketingExpert from './MarketingExpert'
import StartupsBusiness from './StartupsBusiness'

const Main = () => {
  return (
    <Box>

      {/* first section */}

      <StartupsBusiness />

      {/* Second section */}

      <MarketingExpert />

      {/* Third section */}
      <DesignCatalog />

      {/* Forth section */}
      <Box
        m={{
          sm: '4% 2%',
          base: '4% 2%',
          md: '10% 5%',
          lg: '10% 10%',
          xl: '10% 10%',
          '2xl': '10% 10%',
        }}
        textAlign={{
          sm: 'center',
          base: 'center',
          md: 'center',
          lg: 'start',
          xl: 'start',
          '2xl': 'start',
        }}
      >
        <Box
          p='50px 60px'
          backgroundColor='primary-default'
          borderRadius='10px'
        >
          <Text
            mb='50px'
            color='accent-default'
            textStyle='text-header-3XL'
          >
            Ready to deploy more and better products?
          </Text>
          <Button
            p='12px 24px'
            _hover='none'
            _focus='none'
            _active='none'
            color='text-button-accent'
            borderRadius='99px'
            backgroundColor='accent-default'
          >
            Request for free demo
            <Image src={arrowV} />
          </Button>
        </Box>
      </Box>

    </Box>
  )
}

export default Main