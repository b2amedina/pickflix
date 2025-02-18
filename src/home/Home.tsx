import { useEffect } from "react";
import { ActivityIndicator, Button, FlatList, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { fetchMovies } from "../respository/moveThunks";
import { movieRepositoryFactory, RepositoryType } from "../respository/movieRepository";
import { selectFetchMovieError, selectFetchMovieIsLoading, selectMovies, selectNextPage, selectTotalMovies } from "../respository/movieSelectors";
import { useAppDispatch as useDispatch } from "../store/hooks";

const movieRepository = movieRepositoryFactory(RepositoryType.TMBD);

const Home = () => {
    const isLoading = useSelector(selectFetchMovieIsLoading);
    const error = useSelector(selectFetchMovieError);
    const nextPage = useSelector(selectNextPage);
    const movies = useSelector(selectMovies);
    const totalMovies = useSelector(selectTotalMovies);
    const dispatch = useDispatch();

    useEffect(() => {
        loadMoreData();
    }, []);

    const loadMoreData = async () => {
        const allDataLoaded = totalMovies ? movies.length === totalMovies : false;
        if (isLoading || allDataLoaded) return;

        dispatch(fetchMovies({ page: nextPage }));
    }

    const renderFooter = () => {
        if (isLoading) {
            return (
                <ActivityIndicator />
            );
        }
    };

    const errorScreen = () => {
        return (
            <>
                <Text>Error</Text>
                <Button title="Retry" onPress={loadMoreData}/>
            </>
        )
    }

    const getScreen = () => {
        if (error) return errorScreen();

        return (<FlatList
            data={movies}
            renderItem={({ item, index }) => (
                <View style={styles.listItem}>
                    <Text>{index} : {item.title}</Text>
                </View>
            )}
            keyExtractor={(_, index) => index.toString()}
            ListFooterComponent={renderFooter}
            onEndReached={loadMoreData}
            onEndReachedThreshold={0.5}
        />)
    }

    return (
        <View style={styles.container}>
            {getScreen()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    list: {
        width: "100%",
        height: "100%",
    },
    listItem: {
        width: "100%",
        height: 40,
        padding: 8,
        alignItems: "flex-start",
    },
});

export default Home;