import React from "react";
import Navbar from "../Header/Navbar";
import * as Style from './Style'
import Select from 'react-select';
import { useNavigate } from "react-router-dom";
function Login() {
    let navigate = useNavigate();
    let users = {
        sarahedo: {
            id: 'sarahedo',
            name: 'Sarah Edo',
            avatarURL: 'https://i.pravatar.cc/300',
            answers: {
                "8xf0y6ziyjabvozdd253nd": 'optionOne',
                "6ni6ok3ym7mf1p33lnez": 'optionOne',
                "am8ehyc8byjqgar0jgpub9": 'optionTwo',
                "loxhs1bqm25b708cmbf3g": 'optionTwo'
            },
            questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
        },
        tylermcginnis: {
            id: 'tylermcginnis',
            name: 'Tyler McGinnis',
            avatarURL: 'https://i.pravatar.cc/302',
            answers: {
                "vthrdm985a262al8qx3do": 'optionOne',
                "xj352vofupe1dqz9emx13r": 'optionTwo',
            },
            questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
        },
        johndoe: {
            id: 'johndoe',
            name: 'John Doe',
            avatarURL: 'https://i.pravatar.cc/301',
            answers: {
                "xj352vofupe1dqz9emx13r": 'optionOne',
                "vthrdm985a262al8qx3do": 'optionTwo',
                "6ni6ok3ym7mf1p33lnez": 'optionOne'
            },
            questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
        }
    }

    function item(item1) {
        localStorage.setItem("user", JSON.stringify(item1))
        navigate("/");
    }
    return (
        <>
            <Navbar />
            <Style.MainContainer>
                {Object.keys(users).map((data) => {
                    return (
                        <>
                            <Style.Cards>
                                <Style.CardImage src={users[data].avatarURL} />
                                {users[data].name}
                                <Style.CardButton onClick={() => item(users[data])}>Login</Style.CardButton>
                            </Style.Cards>
                        </>
                    )
                })}
            </Style.MainContainer>
        </>
    )
}
export default Login;