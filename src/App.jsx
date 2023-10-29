import { useEffect, useState } from "react";
import Tours from "./data/Tours";
import Title from "./data/Title";
import Loading from "./data/Loading";
const url = "https://course-api.com/react-tours-project";
function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [tours, setTours] = useState(false);
    const [isRefresh, setIsRefresh] = useState(false);
    const fetching = async () => {
        setIsLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setTours(data);
        setIsLoading(false);
    };

    useEffect(() => {
        fetching();
    }, []);
    const removeSingle = (id) => {
        setTours(
            tours.filter((item) => {
                return item.id != id;
            })
        );
    };
    if (isLoading) {
        return (
            <>
                <Title /> <Loading />
            </>
        );
    }
    if (tours.length == 0) {
        return (
            <div className="container">
                <h2 className="text-center mt-4">No Tour left</h2>
                <div className="underline"></div>
                <div className="force-center mt-2">
                    <button
                        className="btn btn-primary text-center mx-auto"
                        onClick={() => {
                            fetching();
                        }}
                    >
                        refresh
                    </button>
                </div>
            </div>
        );
    }
    return (
        <div className="container">
            <Title />
            <Tours tours={tours} remove={removeSingle} />
        </div>
    );
}

export default App;
