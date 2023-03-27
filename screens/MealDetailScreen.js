import { Image, View, Text, StyleSheet, ScrollView } from "react-native";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";
import {  useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
// import { FavoritesContext } from "../store/context/favorites-context";
import { useSelector, useDispatch } from "react-redux";
import {addFavorite, removeFavorite} from '../store/redux/favorites';

const MealDetailScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;
  const favoriteMealIds = useSelector((state)=>state.favoriteMeals.ids);
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  // const favoriteMealsCtx = useContext(FavoritesContext);
  // const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);

  const mealIsFavorite = favoriteMealIds.includes(mealId);
  const dispatch = useDispatch();

  function changeFavoriteStatusHandler() {
    // console.log("pressed");
    if (mealIsFavorite) {
      // favoriteMealsCtx.removeFavorite(mealId);
      dispatch(removeFavorite({id:mealId}));
    } else {
      // favoriteMealsCtx.addFavorite(mealId);
      dispatch(addFavorite({id:mealId}));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? "star" : "star-outline"}
            color="white"
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);
  // return
  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        textStyle={styles.detailText}
      />
      {/* <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>Ingredients</Text>
      </View> */}
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          {/* {selectedMeal.ingredients.map((ingredient) => (
        <Text key={ingredient}> {ingredient}</Text>
      ))} */}
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
          {/* <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>Steps</Text>
      </View> */}
          {/* {selectedMeal.steps.map((step) => (
        <Text key={step}> {step}</Text>
      ))} */}
        </View>
      </View>
    </ScrollView>
  );
};
export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  rootContainer: {
    marginBottom: 32,
  },
  //   subtitle: {
  //     color: "#e2b497",
  //     fontSize: 18,
  //     fontWeight: "bold",
  //     textAlign: "center",
  //   },
  //   subtitleContainer:{
  //     borderBottomColor: "#e2b497",
  //     borderBottomWidth: 1,
  //     padding:8,
  //     marginHorizontal:24,
  //     marginVertical:4
  //   }
});
