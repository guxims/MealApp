import { Pressable, View ,Text, StyleSheet, Platform} from "react-native";

function CategoryGridTile({title,color, onPress}) {
    return <View style={styles.gridItem}>
        <Pressable android_ripple={{color:'#ccc'}} style={({pressed})=>[styles.button, pressed?styles.buttonPressed:null]}
        onPress={onPress}
        >
        {/* style={styles.button} we replace it with a function which returns a style conditionally
        actually we can return an array of styles here because I always wanna have my default button style 
        but i wanna destructure this object which we get as a default here 
        for this func we can set as a value for this style prop and use the pressed property thats provided by react native
        to then add another style conditionally to this array of styles */} 
            <View style={[styles.innerContainer, {backgroundColor: color}]}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </Pressable>
    </View>
}
export default CategoryGridTile;

const styles= StyleSheet.create({
    gridItem:{
        flex:1,
        margin:16,
        height:150,
        borderRadius:8,
        elevation:4,
        //shadow-ios.. nuk duket nese nuk e vendosim nje backgroundColor:white p.sh
        shadowColor:'black',
        shadowOpacity: 0.25,
        shadowOffset:{width:0, height:2},
        shadowRadius:8,
        backgroundColor:'white',
        overflow: Platform.OS==='android'? 'hidden':'visible',
    },
    button: {
        flex:1,
    },
    buttonPressed:{
        opacity:0.5,
    },
    innerContainer:{
        flex:1,
        padding:16,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8,
    },
    title:{
        fontWeight:'bold',
        fontSize:18
    }
})