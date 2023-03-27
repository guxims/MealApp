import { StyleSheet,View,FlatList } from "react-native";
import MealItem from "./MealItem";

function MealsList({items}) {
    function renderMealItem(itemData) {
        return (
          <MealItem
            id={itemData.item.id}
            title={itemData.item.title}
            imageUrl={itemData.item.imageUrl}
            affordability={itemData.item.affordability}
            complexity={itemData.item.complexity}
            duration={itemData.item.duration}
          />
        );
      }
    
      return (
        <View style={styles.container}>
          {/* <Text>Meals overview Screen - {catId}</Text> */}
          <FlatList
            data={items}
            keyExtractor={(item) => {
              item.id;
            }}
            renderItem={renderMealItem}
          />
        </View>
      );
}
export default MealsList;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
  });