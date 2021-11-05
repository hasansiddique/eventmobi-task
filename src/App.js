import React, {useState} from "react";

import './App.css';
import request from './api'
import { debounce } from './utils'
import Spinner from "./components/Spinner";
import GistsList from "./components/GistsList";
import SearchInput from "./components/SearchInput";

function App() {
    const [userGists, setUserGists] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [isFetchingGists, setIsFetchingGists] = useState(false);

    const { listContainer } = App.styles;

    const getDataFromAPI = (username) => {
        setSearchValue(username);
        if (!username) {
            setUserGists([]);
            return;
        }

        setIsFetchingGists(true);
        const response = request.get(`/users/${username}/gists`);

        response
            .then((res) => {
                setIsFetchingGists(false);
                setUserGists(res.data);
            })
            .catch(() => {
                setUserGists([]);
                setIsFetchingGists(false);
            });
    }

    return (
        <div className="App">
            <h3>Type Username to get list fo Gists</h3>
            <SearchInput
                handleOnChange={debounce((val) => getDataFromAPI(val), 750)}
                recordsExist={userGists.length === true}
            />

            <div style={listContainer}>
                {isFetchingGists ? (
                    <Spinner data-testid="app-spinner" />
                ) : (
                    <GistsList
                        data-testid="app-gistslist"
                        searchValue={searchValue}
                        gists={userGists}
                    />
                )}
            </div>
        </div>
    );
}

App.styles = {
    listContainer: {
        maxWidth: 500,
        marginTop: 15,
        marginBottom: 50,
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
        border: '1px solid #e1e1e1',
    },
}


export default App;
