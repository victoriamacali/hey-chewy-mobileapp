import { StyleSheet } from 'react-native';



export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3153A4',
        alignItems: 'center',
        justifyContent: "space-between",
    },
    scontainer: {
        flexGrow: 1,
        
      

    },
    text: {
        color: '#3153A4',
        fontSize: 26,
        //position: 'relative',
        fontWeight: 'bold',
        fontFamily: 'Spartan_600SemiBold'
    },
    heyChewy2: {
        height: 185,
        width: 150,
        resizeMode: 'contain',

    },
    portrait: {
        height: 150, 
        width: 150, 
        resizeMode: 'contain',
        borderRadius: 100,
    },
    button: {
        width: 300,
        height: 73,
        borderRadius: 15,
        backgroundColor: 'white',
        marginBottom: 40,
        alignItems: "center",
        justifyContent: "center",
        
    },
    sbutton: {
        top: 60,
        width: 200,
        height: 200,
        justifyContent: 'center',
        borderRadius: 100,
       

    },

    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 24,
        marginHorizontal: 16
    },
    notesContainer: {
        backgroundColor: "#3153A4"
    }, 

    footerBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 1,
        marginHorizontal: 16
    },  
  });
  

  
//   <View style={styles.footerBar, {flex:1}}>
//   <Ionicons name="log-out" size={20} color="#fff" onPress={() => navigation.navigate('LoginPage')}><Text style={{fontFamily:'Spartan_300Light', fontSize: 15}}> Logout</Text></Ionicons>
// </View>