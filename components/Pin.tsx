import { View, Image, Text, StyleSheet, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
const Pin = (props) => {

  const { image, title } = props.pin;
  const onLike = () => { };
  const [ratio, setRatio] = useState(1);
  useEffect(() => {
    if(image)
    Image.getSize(image, (width, height)=> setRatio(width/ height));
  }, [image]);	

  return (
    <View style={styles.pins}>
      <View>
        <Image
          source={{ uri: image, }}
          style={[styles.image, {aspectRatio: ratio}]}
        />
        <Pressable onPress={onLike} style={styles.heartBin}>
          <AntDesign name="hearto" size={16} color="black" />
        </Pressable>
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>

  );
};

const styles = StyleSheet.create({
  pins: {
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    color: 'white',
  },
  image: {
    width: "100%",
    borderRadius: 25,	
  },
  heartBin: {
    backgroundColor: '#D3CFD4',
    position: 'absolute',
    bottom: 10,
    right: 10,
    padding: 5,
    borderRadius:50
  },
});


export default Pin;
