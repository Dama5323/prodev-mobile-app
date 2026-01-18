import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  searchGroup: {
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  searchControlGroup: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#E9E9E9",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  searchFormText: {
    fontSize: 14,
    color: "#7B7B7B",
  },
  searchControl: {
    fontSize: 16,
    paddingVertical: 5,
  },
  searchButton: {
    backgroundColor: "#34967C",
    width: 50,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  filterGroup: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 15,
    gap: 15,
  },
  filterContainer: {
    width: 80,
    height: 40,
    backgroundColor: "#F9F9F9",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
    gap: 5,
  },
  listingContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  paginationContainer: {
    paddingVertical: 20,
    alignItems: "center",
  },
  showMoreButton: {
    backgroundColor: "#34967C",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
  },
  showMoreButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});

export { styles };
