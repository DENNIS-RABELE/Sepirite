import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,ScrollView,TouchableOpacity } from 'react-native';
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function App(props) {

  const [loves, setLoves] = useState(0);

  function increaseLoves()
  {
    setLoves(loves+1)
  }

  const [love, setLove] = useState(0);

  function increaseLove()
  {
    setLove(love+1)
  }

  const [lovee, setLovee] = useState(0);

  function increaseLovee()
  {
    setLovee(lovee+1)
  }

  const [loveee, setLoveee] = useState(0);

  function increaseLoveee()
  {
    setLoveee(loveee+1)
  }

  const [loveeee, setLoveeee] = useState(0);

  function increaseLoveeee()
  {
    setLoveeee(loveeee+1)
  }


    
   const[unlove,setunlove]=useState(0);
   
   function decreaseLove()
    {
      setunlove(unlove-1)
    }

    const[unloveeee,setunloveeee]=useState(0);
   
  function decreaseLoveeee()
    {
      setunloveeee(unloveeee-1)
    }
  
    const[unloveee,setunloveee]=useState(0);
   
    function decreaseLoveee()
      {
        setunloveee(unloveee-1)
      }

      const[unlovee,setunlovee]=useState(0);
   
      function decreaseLovee()
        {
          setunlovee(unlovee-1)
        }
      
        const[unloves,setunloves]=useState(0);
   
        function decreaseLoves()
          {
            setunloves(unloves-1)
          }
        
    

  return (
 

 <ScrollView>
 <View style={styles.container}>

          <View style={styles.Main}> 
          <Text style={styles.LiMKO}> LIMKOKWING</Text>
          <Text style={styles.UNI}> UNIVERSITY</Text>
          <Text style={styles.CREATE}> OF CREATIVE TECHNOLOGY</Text>
       
 <View style={styles.class1}> 
        
          <Text>{props.text}</Text> 
          <Text style={styles.info}> FACULTY OF INFORMATION COMMUNICATION TECHNOLOGY- 

          <Text style={styles.coursee}>(SOFTWARE ENGINEERING)</Text></Text>
          
          <Image source={require('./information.jpg')} style={styles.infor} />
          <View style={styles.buttons}> 
          
          <TouchableOpacity style={styles.button} onPress={increaseLoves}> <AntDesign name="heart" size={24} color="black" />
          <Text>{loves}</Text> </TouchableOpacity>
          
          <TouchableOpacity style={styles.butt} onPress={decreaseLove}
          > <Ionicons name="heart-dislike" size={24} color="black" /> <Text> {unlove} </Text> </TouchableOpacity>
          </View>
          
          <View style={styles.text}>
          <Text style={styles.tex}> LOVE </Text><Text style={styles.tax}> UNLOVE </Text>   
          </View>

</View>

<View style={styles.class2}>
          
           <Text style={styles.arc}>FACULTY OF DESING AND ART-
          
           <Text style={styles.courser}>(ARCHITECTURE)</Text> 
           </Text>
    
           <Image source={require('./architecture.jpg')} style={styles.infor}/>
           <View style={styles.buttons}> <TouchableOpacity style={styles.butto} onPress={increaseLove}> 
           <AntDesign name="heart" size={24} color="black" /> <Text>{love}</Text> </TouchableOpacity>

           <TouchableOpacity style={styles.butt} onPress={decreaseLoves}>
           <Ionicons name="heart-dislike" size={24} color="black" /><Text>{unloves}</Text></TouchableOpacity>
          
            </View>
            <View style={styles.text}>
            <Text style={styles.tex}> LOVE </Text><Text style={styles.tax}> UNLOVE </Text>   
            </View>

</View>
        
        
<View style={styles.class3}>
          
           <Text style={styles.BUS}>FACULTY OF BUSINES MANAGEMENT AND GLOBALIZATION 
           <Text style={styles.cours}>(BUSINESS MANAGEMENT)</Text> 
           </Text> 
          
           <Image source={require('./business.jpg')} style={styles.infor} />
          
           <View style={styles.buttons}> 
           <TouchableOpacity style={styles.button} onPress={increaseLovee}>
           <AntDesign name="heart" size={24} color="black" /> <Text>{lovee}</Text></TouchableOpacity>
                 
           <TouchableOpacity style={styles.butt} onPress={decreaseLovee}> 
           <Ionicons name="heart-dislike" size={24} color="black" /> <Text> {unlovee} </Text></TouchableOpacity></View>
           <View style={styles.text}>
          
          <Text style={styles.tex}> LOVE </Text><Text style={styles.tax}> UNLOVE </Text>   
          </View>
      
</View>
        

<View style={styles.class4}>
          
                <Text style={styles.fash}>FACULTY OF DESING AND ART-</Text> 
                <Text style={styles.course}>(FASION APPAREL AND DESIGN)</Text> 
          
                <Image source={require('./fashion.jpg')} style={styles.infor} /> 
               
                <View style={styles.buttons}> <TouchableOpacity style={styles.button} onPress={increaseLoveee}>
                <AntDesign name="heart" size={24} color="black" /> <Text>{loveee}</Text> </TouchableOpacity>

                <TouchableOpacity style={styles.butt} onPress={decreaseLoveee}> 
                <Ionicons name="heart-dislike" size={24} color="black" /> <Text> {unloveee} </Text></TouchableOpacity></View>
          
                <View style={styles.text}>
                <Text style={styles.tex}> LOVE </Text><Text style={styles.tax}> UNLOVE </Text>   
                 </View>
      
</View>
        
  
<View style={styles.class5}> 
        
               <Text style={styles.TOUR}>FACULTY OF TOURISM AND HOSPITALITY-</Text>
               <Text style={styles.cour}>(TRAVEL AND TOURISM)</Text> 
        
               <Image source={require('./tourism.webp')} style={styles.infor} /> 
               
               <View style={styles.buttons}> <TouchableOpacity style={styles.button} onPress={increaseLoveeee}>
               <AntDesign name="heart" size={24} color="black" /> <Text> {loveeee} </Text></TouchableOpacity>
           
               <TouchableOpacity style={styles.butt} onPress={decreaseLoveeee}>
               <Ionicons name="heart-dislike" size={24} color="black" /><Text> {unloveeee} </Text> </TouchableOpacity></View>
         
              <View style={styles.text}>
               <Text style={styles.tex}> LOVE </Text><Text style={styles.tax}> UNLOVE </Text>   
              </View></View></View>
              <StatusBar style="auto" />
</View>
</ScrollView>
  );
  }

const styles = StyleSheet.create({
  
  container:
   {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },

  Main:
  {
    height:'158.1em',
    width:'50em',
    backgroundColor:'grey',
    borderWidth:'2em',
    borderColor:'lime'
  },
 
  LiMKO:
  {
    fontSize:'30px',
    fontWeight:'bold',
    textAlign:'center',
    color:'white',
    backgroundColor:'black',
    fontStyle:'italic',

  },

  UNI:
  {
    fontSize:'35px',
    fontWeight:'bold',
    textAlign:'center',
    color:'white',
    backgroundColor:'black',
    textDecorationLine:'underline',
    fontStyle:'italic', 
 },

 CREATE:
 {
    fontSize:'15px',
    fontWeight:'100',
    textAlign:'center',
    fontStyle:'italic',
    color:'white',
    backgroundColor:'black',
    height:'3em',
 },

 class1:
  {
    width:'40em',
    height:'29em',
    backgroundColor:'silver',
    marginTop:'0.5em',
    marginLeft:'3.3em',
    flexDirection:'column',
  },
  info:
  {
    fontWeight:'bold',
    fontSize:'25px',
    marginTop:'0.5em',
    marginLeft:'1em',
    textDecorationLine:'underline',
    textDecorationStyle:'dotted'
  },
 
  coursee:
  {
    fontWeight:'bold',
    fontSize:'25px',
    textDecorationLine:'underline',
    textDecorationStyle:'dotted',
    color:'blue',
  },

  infor:
  {
    height:'17em',
    width:'35em',
    marginLeft:'2.5em',
    marginTop:'1em'
  },
  
  class2:
  {
    width:'40em',
    height:'27em',
    backgroundColor:'silver',
    marginTop:'0.5em',
    marginLeft:'3.3em',
    flexDirection:'column',
  },

  courser:
  {
    fontWeight:'bold',
    fontSize:'25px',
    textDecorationLine:'underline',
    textDecorationStyle:'dotted',
    color:'blue',
  },

  arc:
  {
    fontWeight:'bold',
    fontSize:'25px',
    marginTop:'0.5em',
    marginLeft:'1.5em',
    textDecorationLine:'underline',
    textDecorationStyle:'dotted'
  },
  
  class3:
  {
    width:'40em',
    height:'29em',
    backgroundColor:'silver',
    marginTop:'0.5em',
    marginLeft:'3.3em',
    flexDirection:'column',
  },
  
  BUS:
  {
    fontWeight:'bold',
    fontSize:'25px',
    marginTop:'0.5em',
    marginLeft:'1.5em',
    textDecorationLine:'underline',
    textDecorationStyle:'dotted',
  },
  
  cours:
  {
    fontWeight:'bold',
    fontSize:'25px',
    marginTop:'1.5em',
    textDecorationLine:'underline',
    textDecorationStyle:'dotted',
    color:'blue',
  },

  class4:
  {
    width:'40em',
    height:'29em',
    backgroundColor:'silver',
    marginTop:'0.5em',
    marginLeft:'3.3em',
    flexDirection:'column',
  },

  fash:
  {
    fontWeight:'bold',
    fontSize:'25px',
    marginTop:'0.5em',
    marginLeft:'1.5em',
    textDecorationLine:'underline',
    textDecorationStyle:'dotted'
  },

  class5:
  {
    width:'40em',
    height:'29em',
    backgroundColor:'silver',
    marginTop:'0.5em',
    marginLeft:'3.3em',
    flexDirection:'column',
  },

  TOUR:
  {
    fontWeight:'bold',
    fontSize:'25px',
    marginTop:'0.5em',
    marginLeft:'1.5em',
    textDecorationLine:'underline',
    textDecorationStyle:'dotted'
  },
  
  course:
  {
    fontWeight:'bold',
    fontSize:'25px',
    marginTop:'0.5em',
    marginLeft:'1.5em',
    textDecorationLine:'underline',
    textDecorationStyle:'dotted',
    color:'blue',
  },
  
  cour:
  {
    fontWeight:'bold',
    fontSize:'25px',
    marginTop:'0.5em',
    marginLeft:'1.5em',
    textDecorationLine:'underline',
    textDecorationStyle:'dotted',
    color:'blue',
  },

  buttons:
{
  marginTop:'1em',
  flexDirection:'row',
  justifyContent:'space-between',
  },

  button:
  {
    marginLeft:'3em'
  },

  butto:
  {
    marginLeft:'3em'
  },
  
  butt:
  {
    marginRight:'3em'
  },

  text:
  {
    flexDirection:'row',
    justifyContent:'space-between',
  },
  tex:
  {
    fontWeight:'bold',
    fontSize:'15px',
    marginLeft:'2.5em',
  },

  tax:
  {
    fontWeight:'bold',
    fontSize:'15px',
    marginRight:'2em',
  }

});
