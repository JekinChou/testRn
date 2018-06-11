import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions
} from 'react-native';
const  {width,height} = Dimensions.get('window');

const contentWidth = width/3;
const imageWidth = contentWidth -10*2;
const imageHeight = imageWidth /0.697;
const styles = StyleSheet.create({
    root: {
        marginTop : 20,
        width:imageWidth,
        marginRight :15,
    },
    image :{
        width:imageWidth,
        height:imageHeight,
    },
    title:{
        marginTop:5,
        fontWeight:'bold',
        fontSize:20,
        textAlign:'center',
    },
    starsWrappers: {
        marginTop :10,
      flexDirection :'row',
    },
    stars: {
        width : 10,
        height : 10,
    },
});
//"35","45"
const renderStars = (stars) => {
    if (stars == '00') {
        return;
    }
    const total = 5;
    let full,half,empty;
    full = parseInt(stars[0]);
    if (stars[1]=='5'){
        full++;
        half = 0;
        empty = total - full;
    } else  {
        half = 1;
        empty = total - full - half;
    }
    const  result = [];
    let i;
    for (i = 0; i < full ; i++) {
        result.push(<Image
            key = {i}
            style = {styles.stars}
            source = {require('../img/star-full.png')}/>);
    }
    if (half){
        result.push(<Image
            key = {i}
            style = {styles.stars}
            source = {require('../img/star-empty.png')}/>);
    }
    let j;
    for (j = 0; j < empty ; j++) {
        result.push(<Image
            key = {j+i+1}
            style = {styles.stars}
            source = {require('../img/star-full.png')}/>);

}
            return (
        <View style={styles.starsWrappers}>
            {result}
        </View>

            );
}
//这是函数组件
const Item = (props)=> {

        const  {title,image,stars} = props;
        return <View style={styles.root}>
            <Image
                // source={require('../img/poster.jpg')}//本地图片读取方式
                source = {{url: image}}
                style={styles.image}
            />
            <Text numberOfLines={1}
                  style={styles.title}>
                {title}
            </Text>
            {renderStars(stars)}

        </View>;

}
export default Item
//这是一般组件,
// export default class Item extends React.Component {
//     render() {
//         const  {title,image} = this.props;
//         return <View style={styles.root}>
//             <Image
//                 // source={require('../img/poster.jpg')}//本地图片读取方式
//                 source = {{url: image}}
//                 style={styles.image}
//             />
//             <Text numberOfLines={1}
//                   style={styles.title}>
//                 {title}
//
//             </Text>
//         </View>;
//     }
// }



