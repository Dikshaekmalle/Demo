import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList } from 'react-native';
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import categarieData from "../assests/data/categarieData";
import popularData from "../assests/data/popularData";
import color from '../assests/color/color';
import Image from 'react-native/Libraries/Image/Image';

Feather.loadFont();
MaterialCommunityIcon.loadFont()

const Home = () => {
    const renderCategoryItem = ({ item }) => {
        return (
            <View
                style={[styles.categarieItemWrapper,
                {
                    backgroundColor: item.selected ? color.primary : color.white,
                    marginLeft: item.id == 1 ? 10 : 0
                },
                ]}>
                <Image source={item.image} style={styles.categaryItemImage} />
                <Text style={styles.categaryItemTitle}>{item.title}</Text>
                <View
                    style={[
                        styles.categarySelectWrapper,
                        {
                            backgroundColor: item.selected ? color.white : color.secondary
                        }
                    ]}>
                    <Feather name="chevron-right"
                        size={8}
                        style={styles.categorySelectItom}
                        color={item.selected ? color.black : color.white}
                    />
                </View>
            </View>
        );
    };
    return (
        
        <View style={styles.container}>
            <SafeAreaView 
            contentInsetAdjustBehavior="automatic"
            showVerticalScrollIndicator={false}>
            {/*Header */}
            <SafeAreaView >
                <View style={styles.headerWrapper}>
                    <Image style={styles.profileImage}
                        source={require('../assests/images/profile.png')} />

                    <Feather name="menu" size={30} color={color.textDark} />
                </View>
            </SafeAreaView>
            <View style={styles.titlesWrapper}>
                <Text style={styles.titleSubtitle}>Food</Text>
                <Text style={styles.titletitle}>Delivery</Text>
            </View>
            {/* Search */}
            <View style={styles.serchWrapper}>
                <Feather name="search" size={16} color={color.textDark} />
                <View style={styles.search}>
                    <Text style={styles.searchText}>search</Text>
                </View>
            </View>
            {/* Categories */}
            <View style={styles.categarieWrapper}>
                <Text style={styles.categoriTitle}>Categories</Text>
                <View style={styles.categarieListWrapper}>
                    <FlatList
                        data={categarieData}
                        renderItem={renderCategoryItem}
                        keyExtractor={(item) => item.id}
                        horizontal={true}
                    />
                </View>
            </View>
            {/* Popular */}
            <View style={styles.popularWrapper}>
                <Text style={styles.popularTitle}>Popular</Text>
                {popularData.map((item) => (
                    <View
                     style={[
                        styles.popularCardWrapper,
                        {
                         marginTop:item.id==1? 10:20,
                        },
                        ]}>
                        <View>
                            <View>
                                <View style={styles.popularTopWrapper}>
                                   <MaterialCommunityIcon
                                    name="crown" 
                                    size={12}
                                    color={color.primary}
                                    />
                                    <Text style={styles.popularTopText}>top of the week</Text>
                                </View>
                                <View style={styles.popularTitleWrapper}>
                                 <Text style={styles.popularTitlesTitle}>{item.title}</Text>
                                <Text style={styles.popularTitlesWeight}>
                                    Weight{item.weight}
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.popularCardBottom}>
                                <View style={styles.addPizzaButton}>
                                    <Feather name="plus" size={10} color={color.textDark}/>   
                                </View>
                            <View style={styles.ratingWrapper}>
                                <MaterialCommunityIcon name="star" size={10} color={color.textDark}/>
                                <Text style={styles.rating}>{item.rating}</Text>

                            </View>
                            </View>
                        </View>
                         <View style={styles.popularCardRight}>
                            <Image source={item.image} style={styles.popularCardImage}/>
                         </View>

                    </View>
                ))}
            </View>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20,
        alignItems: 'center'

    },

    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 40
    },
    titlesWrapper: {
        marginTop: 30,
        paddingHorizontal: 20,
    },
    titleSubtitle: {
        fontFamily: 'Monseeat-Regular',
        fontSize: 20,
        color: color.textDark,
    },
    titletitle: {
        fontFamily: 'Monseeat-Regular',
        fontSize: 32,
        color: color.textDark,
        marginTop: 5,
    },
    serchWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 5
    },
    search: {
        flex: 1,
        marginLeft: 10,

        borderBottomColor: color,
        borderBottomWidth: 2,
    },
    searchText: {
        fontFamily: 'Montserrat-Semibold',
        fontSize: 14,
        marginBottom: 5,
        color: color.textLight
    },
    categarieWrapper: {
        marginTop: 30,
    },
    categoriTitle: {
        fontFamily: 'Montserrat-Bold'
    },
    categarieListWrapper: {
        paddingTop: 15,
        paddingBottom: 20
    },
    categarieItemWrapper: {
        backgroundColor: '#F5CA4B',
        marginRight: 20,
        borderRadius: 20,
        shadowColor:color.black,
        shadowOffset:{
            width:0,
            height:2,
        },
        shadowOpacity:0.05,
        shadowRadius:10,
        elevation:2,
    },
    categaryItemImage: {
        width: 60,
        height: 60,
        marginTop: 25,
        alignSelf: 'center',
        marginHorizontal: 20,
    },
    categaryItemTitle: {
        textAlign: 'center',
        fontFamily: 'Montserrat-semiBold',
        fontSize: 14,
        marginTop: 10
    },
    categarySelectWrapper: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: 26,
        height: 20,

    },
    categorySelectItom: {
        alignSelf: 'center'
    },
    popularWrapper: {
        paddingHorizontal:20,
        
    },
    popularTitle: {
        fontFamily:'Montserrat-Bold',
        fontSize:16,
    },
    popularCardWrapper:{
        backgroundColor:color.white,
        borderRadius:25,
        paddingTop:20,
        paddingLeft:20,
        flexDirection:'row',
        overflow:'hidden',
    },
    popularTopWrapper:{
        flexDirection:'row',
        alignItems:'center'
    },
    popularTopText:{
        marginLeft:10,
        fontFamily:'Montserrat-semiBold',
        fontSize:14
    },
    popularTitleWrapper:{
        marginTop:20,
    },
    popularTitlesTitle:{
        fontFamily:'Montserrat-semiBold',
        fontSize:14,
        color:color.textDark,
    },
    popularTitlesWeight:{
        fontFamily:'Montserrat-Medium',
        fontSize:12,
        color:color.textLight,
        marginTop:5,
    },
    popularCardBottom:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:10,
        marginLeft:20
    },
    addPizzaButton:{
        backgroundColor:color.primary,
        paddingHorizontal:40,
        paddingVertical:20,
        borderTopRightRadius:25,
        borderBottomLeftRadius:25

    },
    ratingWrapper:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:20,
    },
    rating:{
        fontFamily:'Montserrat-semiBold',
        fontSize:12,
        color:color.textDark
    },
    popularCardRight:{
        marginLeft:40,
    },
    popularCardImage:{
        width:210,
        height:125,
        resizeMode:'contain'
    }

});

export default Home;