import React, { useEffect } from "react";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchHeader from "./Search";
import Content from "./Content";
import { connect } from "react-redux";
import { Init_Data } from "../redux/action";
import { getClassList } from "../api";
import { Loading, ActivityIndicator } from "zarm";
import Footer from './Footer';

const Home = () => {
    return (
        <div className="home flex">
            <Header />
            <Content />
            <Footer/>
        </div>
    );
};

const SearchHome = () => {
    return (
        <div className="home">
            <SearchHeader />
            <Content />
        </div>
    );
};

interface IProps {
    initData: (data: any) => void;
}

const HomeRouter = ({ initData }: IProps) => {
    useEffect(() => {
        Loading.show({ content: <ActivityIndicator size="lg" /> });
        getClassList()
            .then((res) => {
                initData(res);
            })
            .catch(() => {
                initData(null);
            })
            .finally(() => {
                Loading.hide();
            });
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/eat-weekends" element={<Home />}></Route>
                <Route
                    path="/eat-weekends/search"
                    element={<SearchHome />}
                ></Route>
            </Routes>
        </BrowserRouter>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        initData: (payload) => {
            dispatch({
                type: Init_Data,
                payload,
            });
        },
    };
};

export default connect(null, mapDispatchToProps)(React.memo(HomeRouter));
