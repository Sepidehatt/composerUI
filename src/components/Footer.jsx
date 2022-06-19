import {Box,Text,Button,Link,Image} from '@cmpsr/components';
import arrowV from '../assets/arrow.png'
import Github from '../assets/Github.svg'
import Figma from '../assets/Figma.svg'
import logo from '../assets/ComposerLogo.svg'


const Footer = () => {
  return (
    <Box >
      {/* Main footer section */}
      
      <Box display="flex"
        flexDirection={{
          sm: 'column',
          base: 'column',
          md: 'column',
          lg: 'row',
          xl: 'row',
          '2xl': 'row',
        }}
        alignItems={{
          sm: "start",
          base: 'start',
          md: 'start',
          lg: 'center',
          xl: 'center',
          '2xl': 'center',
        }}
        justifyContent='space-around'
        
        m={{
          sm: '100px 10% 100px',
          base: '100px 10% 100px',
          md: '0 10% 100px',
          lg: '0 10% 100px',
          xl: '0 10% 100px',
          '2xl': '0 10% 100px',
        }}
        >
        <Box m='20px 0'>
          <Image src={Github} alt='Github logo' />
          <Text
            w={{
              sm: '90%',
              base: '90%',
              md: '55%',
              lg: '55%',
              xl: '55%',
              '2xl': '55%',
            }}
            m='25px 0'
            color='accent-default'
            textStyle='text-header-M'
          >
            Composer is open-sourced on GitHub. You're welcome to contribute!
          </Text>
          <Button 
          borderRadius='99px' 
          >
            Contribute on GitHub
            <Image 
            src={arrowV} 
            />
            </Button>
        </Box>
        <Box m='20px 0'>
          <Image 
          src={Figma} 
          alt='Figma logo' 
          />
          <Text
            w={{
              sm: '90%',
              base: '90%',
              md: '55%',
              lg: '55%',
              xl: '55%',
              '2xl': '55%',
            }}
            m='25px 0'
            color='accent-default'
            textStyle='text-header-M'
          >
            Composer is part of the Figma community. Visit us with the handle @impulsum
          </Text>
          <Button 
          borderRadius='99px' 
          >Contribute on Figma
          <Image 
          src={arrowV} 
          />
          </Button>
        </Box>
        <Box m='20px 0' >
          <Text
            color='accent-default'
            textStyle='text-header-M'
          >
            Keep in touch
          </Text>

          <Link>Share feedback on GitHub</Link>
          <Box>
            <Link m='15px 0'>Find us on Linkedin</Link>
          </Box>
          <Link>Meet the crew on Instagram</Link>

        </Box>
      </Box>

      {/* copyright section */}
      <Box display="flex"
      flexDirection={{
        sm: 'column',
        base: 'column',
        md: 'column',
        lg: 'row',
        xl: 'row',
        '2xl': 'row',
      }}
        alignItems="center"
        justifyContent="space-between"
        m='0 10%'
      >
        <Text
          color='text-secondary'
          textAlign={{
            sm: 'center',
            base: 'center',
            md: 'center',
            lg: 'start',
            xl: 'start',
            '2xl': 'start',
          }}
          textStyle='text-body-meta-regular'
          m='100px 0'
        >
          © 2022 Composer. Proudly powered by <Link>Impulsum Venture Colab</Link>. All Rights Reserved. <Link>Privacy Policy</Link></Text>
        <Image
        m={{
          sm: '0 10% 50px',
          base: '0 10% 50px',
          md: '0 10% 50px',
          lg: '0 10%',
          xl: '0 10%',
          '2xl': '0 10%',
        }}
         boxSize='60px' src={logo} alt='logo' />

      </Box>


    </Box>
  )
}

export default Footer