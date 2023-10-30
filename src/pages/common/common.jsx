import React, {useState} from 'react';
import {
    MainContainer,
    Header,
    TextInput,
    Text,
    Input1,
    MyFunction,
    DecoList,
    Button,
    T,
    Back,
    Deco,
    Button1,
    Button2,
    Button3,
    Button4
} from './style';
import { Link } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CommonPage() {

    const [text, setText] = useState('');

    const resetInput = () => {
        setText('');
    };

    const [isClicked, setIsClicked] = useState(false);

    const handleButtonClick = () => {
        if (!isClicked) {
            setIsClicked(true);
    }
    };

    return (
        <MainContainer>
            <Header>
                <Link to="/main"><Back/></Link>
                <h2>텍스트 입력 일반 사용자</h2>
            </Header>
            <TextInput>
                <T/>
                <Text>텍스트</Text>
                <Input1 
                  placeholder="텍스트를 입력해주세요." 
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}/>
            </TextInput>
            <MyFunction>
                <div>
                    <Deco/>
                    <Text>텍스트 꾸밈 리스트</Text>
                </div>
                <DecoList>
                    <li><Button1 className={isClicked ? 'clicked' : ''} onClick={handleButtonClick}>효과1</Button1></li>
                    <li><Button2 className={isClicked ? 'clicked' : ''} onClick={handleButtonClick}>효과2</Button2></li>
                    <li><Button3 className={isClicked ? 'clicked' : ''} onClick={handleButtonClick}>효과3</Button3></li>
                    <li><Button4 className={isClicked ? 'clicked' : ''} onClick={handleButtonClick}>효과4</Button4></li>            
                </DecoList>
                <Button type="submit" onClick={resetInput}>제출</Button>
            </MyFunction>
        </MainContainer>
    );
}

export default CommonPage;

/* <List>글꼴
                        <select>
                            <option>1</option>
                            <option>2</option>
                        </select>
                    </List>
                    <List>색상
                        <select>
                            <option>1</option>
                            <option>2</option>
                        </select>
                    </List>
                    <List>크기
                        <select>
                            <option>1</option>
                            <option>2</option>
                        </select>
                    </List>
                    <List>효과
                        <select>
                            <option>1</option>
                            <option>2</option>
                        </select>
                    </List> */